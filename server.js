const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;
const DATA_FILE = path.join(__dirname, 'posts.json');

const USERNAME = process.env.DIARY_USERNAME || 'd2c';
const DIARY_PASSWORD = process.env.DIARY_PASSWORD;
if (!DIARY_PASSWORD) {
    console.error('DIARY_PASSWORD environment variable is not set!');
    process.exit(1);
}
const PASSWORD_HASH = bcrypt.hashSync(DIARY_PASSWORD, 10);

app.use(express.json());

app.get('/me', (req, res) => {
    res.sendFile(path.join(__dirname, 'me.html'));
});

app.get('/music', (req, res) => {
    res.sendFile(path.join(__dirname, 'music.html'));
});

app.get('/diary', (req, res) => {
    res.sendFile(path.join(__dirname, 'diary.html'));
});

app.get('/diary/log', (req, res) => {
    res.sendFile(path.join(__dirname, 'diary-log.html'));
});

app.use(express.static(__dirname, {
    index: 'index.html',
    extensions: ['html']
}));

function loadPosts() {
    try {
        if (!fs.existsSync(DATA_FILE)) return [];
        const raw = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(raw);
    } catch { return []; }
}

function savePosts(posts) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2), 'utf-8');
}

function authMiddleware(req, res, next) {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'unauthorized' });
    }
    try {
        const decoded = jwt.verify(header.slice(7), JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        return res.status(401).json({ error: 'invalid token' });
    }
}

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username !== USERNAME || !bcrypt.compareSync(password, PASSWORD_HASH)) {
        return res.status(401).json({ error: 'invalid credentials' });
    }
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
});

app.get('/api/me', authMiddleware, (req, res) => {
    res.json({ username: req.user.username });
});

app.get('/api/counter', (req, res) => {
    const now = new Date();
    const msk = new Date(now.getTime() + (now.getTimezoneOffset() + 180) * 60000);
    const start = new Date(msk);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 1);
    const progress = (msk - start) / (end - start);
    const count = Math.floor(3 + progress * 997);
    res.json({ count });
});

app.get('/api/posts', (req, res) => {
    const posts = loadPosts();
    res.json({ posts });
});

app.post('/api/posts', authMiddleware, (req, res) => {
    const { text } = req.body;
    if (!text || typeof text !== 'string' || text.trim().length === 0) {
        return res.status(400).json({ error: 'text is required' });
    }
    const posts = loadPosts();
    const post = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        text: text.trim(),
        created_at: new Date().toISOString()
    };
    posts.unshift(post);
    savePosts(posts);
    res.json({ post });
});

app.delete('/api/posts/:id', authMiddleware, (req, res) => {
    let posts = loadPosts();
    const idx = posts.findIndex(p => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'post not found' });
    posts.splice(idx, 1);
    savePosts(posts);
    res.json({ ok: true });
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});

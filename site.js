(function() {
    const GIFS = [
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2E0Y3U4OTg5eWFtZTVmcHhyZm5zbDhmYm5odzl5dm04aWh1amQ1ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6ZsS9CYscAuuw7Is/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MTA0dXRsdm1naW56aHcwYjh3bGhlbGxpcHhyZTl2bXkxeWllenJwdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2vs8rSilWauHJUqM5l/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cW8wdXB4NDZzNzExaXlwd25yaTBjZnZ2djU4eDBzenZtcDh4YWtqeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LWH5axJkuS0ZdO0Upl/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NzY3Y2drYWd5Y3EzMGxrYXY1eWVwazR3am02Y3Jjejc1eTQyMWFjaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3og0Iw1jlHwfl9Q5MY/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eGNyN2s1YWJrOGNob213bnloc25oNHA2a25pbmw3M29wMmc2cnFleSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/adJkQdRCsyAVdGQdF6/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cW8wdXB4NDZzNzExaXlwd25yaTBjZnZ2djU4eDBzenZtcDh4YWtqeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LWH5axJkuS0ZdO0Upl/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cjRkdWh1bXViOGZ6cXU3djA5Zm8wdmNxYWl0YjU1bXlqcXpud2l6MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/du2blShdOu5pe/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3andvanVmZm9ldXZlOHVvamd6MXcyZWdvaHNmNHl6cWx6bzdrNzQwaCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/l46Cvwo9PphGJjico/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTFvbmw3dHUxZnQweW91c2d1Z3EyZDVhM2xpM285MmN0ZzIzYm9hYiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/smPCYHPfEfRfy/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M3BlZ2tuYXQ1N3Nsa2hmczd0cDdvOTg5aHZ1ejg1Mm93bWMwM2RsZyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/26n6OuU2HDUNQzFV6/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG14M3gxbTViZmoxMDhnanJxYzJtcHRibGxlbHk0dGJiaTFlZnlpNCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/l2JIhq7AR3J7Qq9Hy/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGJzMjlvM3NmNDN6NXNhdTB1aG9heWZ0MGpwMXo0ZXIzOGR0ZTJmMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VXluml3lugeIw/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWxoeHl2b3dyY3E5cm9sdjJ3b2xlczNtcXV3Mnp0NG5uYXVoemo3ayZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/M69bHillPDcpG/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWxoeHl2b3dyY3E5cm9sdjJ3b2xlczNtcXV3Mnp0NG5uYXVoemo3ayZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/3o7bucSgnyC9KUJbOw/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cHl1aWt1M2N0NjZqYzBid25kM3pscHJibmhjaWtseDF2dDl4Njd2cyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/jBy5Rdrw0nmFO/giphy.gif"
    ];

    if (document.getElementById('bg-container')) {
        const container = document.getElementById('bg-container');
        let currentIndex = 0;
        GIFS.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'bg-gif';
            if (index === 0) img.classList.add('active');
            container.appendChild(img);
        });
        const images = container.querySelectorAll('.bg-gif');
        setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 4000);
    }

    const TARGET = new Date('2027-01-01T00:00:00');
    let countEl = document.getElementById('countdown');
    function updateCountdown() {
        const diff = TARGET - new Date();
        if (diff <= 0) { if (countEl) countEl.textContent = '2027'; return; }
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        if (countEl) countEl.textContent = `${d}d ${h}h ${m}m ${s}s`;
    }
    if (countEl) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    let counterEl = document.getElementById('counter');
    async function fetchCounter() {
        if (!counterEl) return;
        try {
            const r = await fetch('/api/counter');
            const d = await r.json();
            counterEl.textContent = d.count;
        } catch { counterEl.textContent = '--'; }
    }
    if (counterEl) {
        fetchCounter();
        setInterval(fetchCounter, 30000);
    }

    function initPageScripts() {
        countEl = document.getElementById('countdown');
        if (countEl) updateCountdown();
        counterEl = document.getElementById('counter');
        if (counterEl) fetchCounter();
        const pageScript = document.getElementById('page-script');
        if (pageScript) {
            const script = document.createElement('script');
            script.textContent = pageScript.textContent;
            document.body.appendChild(script);
            document.body.removeChild(script);
        }
    }

    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;
        const href = link.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('//') || href.startsWith('#') || link.hasAttribute('target')) return;
        e.preventDefault();
        history.pushState(null, '', href);
        navigate(href);
    });

    async function navigate(url) {
        try {
            const r = await fetch(url);
            const html = await r.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const newContent = doc.getElementById('content');
            const oldContent = document.getElementById('content');
            if (newContent && oldContent) {
                oldContent.innerHTML = newContent.innerHTML;
            }
            document.title = doc.title;
            initPageScripts();
        } catch {}
    }

    window.addEventListener('popstate', function() {
        navigate(location.pathname);
    });
})();

(function() {
    const TARGET = new Date('2027-01-01T00:00:00');

    let countEl = document.getElementById('countdown');

    function updateCountdown() {
        const diff = TARGET - new Date();
        if (diff <= 0) { countEl.textContent = '2027'; return; }
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        countEl.textContent = `${d}d ${h}h ${m}m ${s}s`;
    }

    if (countEl) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    let counterEl = document.getElementById('counter');
    if (counterEl) {
        let count = 487 + Math.floor(Math.random() * 10);
        function updateCounter() {
            count += Math.floor(Math.random() * 2) + 1;
            counterEl.textContent = count;
        }
        updateCounter();
        setInterval(updateCounter, 2000 + Math.random() * 3000);
    }
})();

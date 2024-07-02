document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().slice(17, 25);
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

        document.getElementById('utc-time').textContent = utcTime;
        document.getElementById('day-of-week').textContent = dayOfWeek;
    }

    updateTime();
    setInterval(updateTime, 1000);
});

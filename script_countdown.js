const targetDate = new Date("May 26, 2026 00:00:00").getTime();

function getTimeParts(distance) {
    return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
}

function pad(num) {
    return String(num).padStart(2, '0');
}

const countdown = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const countdownDisplay = document.getElementById('countdownDisplay');
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    const now = new Date().getTime();
    const distance = targetDate - now;
    const timeParts = getTimeParts(distance);

    daysEl.textContent = pad(timeParts.days);
    hoursEl.textContent = pad(timeParts.hours);
    minutesEl.textContent = pad(timeParts.minutes);
    secondsEl.textContent = pad(timeParts.seconds);

    if (distance < 0) {
        clearInterval(countdown);
        countdownDisplay.textContent = "TODAY IS THE RELEASE DAY!";
    }
}
updateCountdown();


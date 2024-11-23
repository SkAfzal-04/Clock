function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const currentDay = now.getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Update the digital time
    document.getElementById('time').textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Highlight the current day
    for (let i = 0; i < 7; i++) {
        const dayElement = document.getElementById(`day${i}`);
        dayElement.style.color = i === currentDay ? 'white' : 'rgb(118, 120, 122)';
    }

    // Update the day display inside the analog clock
    document.getElementById('day-display').textContent = days[currentDay];

    // Analog clock hands
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    const hourRotation = (360 / 12) * (hours % 12) + (30 / 60) * minutes;
    const minuteRotation = (360 / 60) * minutes + (6 / 60) * seconds;
    const secondRotation = (360 / 60) * seconds;

    hourHand.style.transform = `translate(-50%, 0) rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `translate(-50%, 0) rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `translate(-50%, 0) rotate(${secondRotation}deg)`;
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Initial call to set the clock immediately
updateClock();

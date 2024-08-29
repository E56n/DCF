// Cuenta regresiva
function updateCountdown() {
    const countdownDate = new Date('2024-11-02T20:00:00-06:00'); // Fecha y hora en CDMX
    const now = new Date();
    const distance = countdownDate - now;

    if (distance < 0) {
        document.getElementById('timer').innerHTML = "¡La cuenta regresiva ha terminado!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Actualiza la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);

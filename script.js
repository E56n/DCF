document.addEventListener('DOMContentLoaded', () => {
    // Configura todos los carruseles en la página
    document.querySelectorAll('.carousel').forEach(setupCarousel);

    // Configura el reproductor de videos
    setupVideoPlayer();
});

// Configura el carrusel
function setupCarousel(carousel) {
    const items = carousel.querySelectorAll('img, video');
    let currentIndex = 0;

    function showItem(index) {
        items[currentIndex].classList.remove('active');

        // Pausa y reinicia el video actual si está en reproducción
        if (items[currentIndex].tagName.toLowerCase() === 'video') {
            console.log('Pausando y reiniciando video:', items[currentIndex]);
            items[currentIndex].pause(); // Pausa el video actual
            items[currentIndex].currentTime = 0; // Reinicia el video actual
        }

        currentIndex = index;

        // Reproduce el siguiente video si es un video
        if (items[currentIndex].tagName.toLowerCase() === 'video') {
            console.log('Reproduciendo video:', items[currentIndex]);
            items[currentIndex].play(); // Reproduce el siguiente video
        }

        items[currentIndex].classList.add('active');
    }

    function nextItem() {
        const nextIndex = (currentIndex + 1) % items.length;
        showItem(nextIndex);
    }

    function prevItem() {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(prevIndex);
    }

    // Navegación con botones
    carousel.querySelector('.prev').addEventListener('click', prevItem);
    carousel.querySelector('.next').addEventListener('click', nextItem);

    // Cambia la imagen o video cada 3 segundos
    const intervalId = setInterval(nextItem, 3000);

    // Detiene el carrusel al hacer clic en los botones
    carousel.querySelector('.prev').addEventListener('click', () => clearInterval(intervalId));
    carousel.querySelector('.next').addEventListener('click', () => clearInterval(intervalId));
}

// Configura el reproductor de videos
function setupVideoPlayer() {
    const videoPlayer = document.getElementById('video-player');
    const videoSources = [
        './src/volumenCuatro/1.mp4',
        './src/volumenCuatro/2.mp4',
        './src/volumenCuatro/3.mp4',
        './src/volumenCuatro/4.mp4',
        './src/volumenCuatro/5.mp4',
        './src/volumenCuatro/6.mp4',
        './src/volumenCuatro/7.mp4',
        './src/volumenCuatro/8.mp4',
        './src/volumenCuatro/9.mp4',
        './src/volumenCuatro/10.mp4',
        './src/volumenCuatro/11.mp4',
        './src/volumenCuatro/12.mp4',
        './src/volumenCuatro/13.mp4',
        './src/volumenCuatro/14.mp4',
        './src/volumenCuatro/15.mp4',
        './src/volumenCuatro/16.mp4',
        './src/volumenCuatro/17.mp4',
        './src/volumenCuatro/18.mp4',
        './src/volumenCuatro/19.mp4',
        './src/volumenCuatro/20.mp4',
        './src/volumenCuatro/21.mp4',
        './src/volumenCuatro/22.mp4',
        './src/volumenCuatro/23.mp4',
        './src/volumenCuatro/24.mp4',
        './src/volumenCuatro/25.mp4'
    ];

    let currentVideoIndex = 0;

    function playVideo(index) {
        videoPlayer.src = videoSources[index];
        videoPlayer.play();
    }

    function playNextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
        playVideo(currentVideoIndex);
    }

    function playPrevVideo() {
        currentVideoIndex = (currentVideoIndex - 1 + videoSources.length) % videoSources.length;
        playVideo(currentVideoIndex);
    }

    // Configura el evento `ended` para reproducir el siguiente video
    videoPlayer.addEventListener('ended', playNextVideo);

    // Configura los botones de navegación
    document.getElementById('next-video').addEventListener('click', playNextVideo);
    document.getElementById('prev-video').addEventListener('click', playPrevVideo);

    // Inicia la reproducción del primer video al cargar la página
    playVideo(currentVideoIndex);
}

// Cuenta regresiva
function updateCountdown() {
    const countdownDate = new Date('2024-11-02T20:00:00-06:00'); // Fecha y hora en CDMX
    const now = new Date();
    const distance = countdownDate - now;

    if (distance < 0) {
        document.getElementById('timer').innerHTML = "¡EL DIABLO HA LLEGADO!";
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

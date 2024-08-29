document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
    setupCarousels();
});

function updateCountdown() {
    const countdownDate = new Date('2024-11-02T20:00:00-06:00');
    const now = new Date();
    const distance = countdownDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = "<h2>¡SE ABRIRAN LAS PUERTAS DEL INFIERNO!</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `
        <div class="time-unit">
            <div class="time-value">${days} :</div>
            <div class="time-label">DÍAS</div>
        </div>
        <div class="time-unit">
            <div class="time-value">${hours} :</div>
            <div class="time-label">HORAS</div>
        </div>
        <div class="time-unit">
            <div class="time-value">${minutes} :</div>
            <div class="time-label">MINUTOS</div>
        </div>
        <div class="time-unit">
            <div class="time-value">${seconds}</div>
            <div class="time-label">SEGUNDOS</div>
        </div>
    `;
}

function setupCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');
        let currentIndex = 0; // Índice inicial

        // Mostrar la primera imagen
        images[currentIndex].classList.add('active');

        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        prevButton.addEventListener('click', () => navigateCarousel(carousel, 'prev', images));
        nextButton.addEventListener('click', () => navigateCarousel(carousel, 'next', images));

        // Cambio automático cada 3 segundos
        setInterval(() => {
            navigateCarousel(carousel, 'next', images);
        }, 8000); // 3000 milisegundos = 3 segundos
    });
}

function navigateCarousel(carousel, direction, images) {
    // Encontrar la imagen activa actual
    let currentIndex = Array.from(images).findIndex(image => image.classList.contains('active'));
    
    // Ocultar la imagen actual
    images[currentIndex].classList.remove('active');

    // Cambiar el índice según la dirección
    if (direction === 'prev') {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    } else if (direction === 'next') {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    }

    // Mostrar la nueva imagen
    images[currentIndex].classList.add('active');
}

// Llama a la función de configuración cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', setupCarousels);

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

// Llama a la función de configuración cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', setupVideoPlayer);

document.addEventListener('DOMContentLoaded', function() {
    const videos = [
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
    const videoElement = document.getElementById('carousel-video');
    const prevButton = document.querySelector('.carousel .prev');
    const nextButton = document.querySelector('.carousel .next');

    function showVideo(index) {
        videoElement.src = videos[index];
        videoElement.play();
    }

    function nextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        showVideo(currentVideoIndex);
    }

    function prevVideo() {
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        showVideo(currentVideoIndex);
    }

    // Navegación automática cada 3 segundos
    setInterval(nextVideo, 8000);

    // Configurar eventos para botones de navegación
    prevButton.addEventListener('click', prevVideo);
    nextButton.addEventListener('click', nextVideo);

    // Iniciar con el primer video
    showVideo(currentVideoIndex);
});

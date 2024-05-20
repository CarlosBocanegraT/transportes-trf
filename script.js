let currentIndex = 0;
const intervalTime = 3000; // Tiempo en milisegundos (3 segundos)

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function startCarousel() {
    setInterval(nextSlide, intervalTime);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    startCarousel();
});

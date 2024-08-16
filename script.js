let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const manualBtns = document.querySelectorAll('.manual-btn');

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;

    // Remove the active class from all buttons
    manualBtns.forEach(btn => btn.classList.remove('active'));

    // Add the active class to the current button
    manualBtns[currentIndex].classList.add('active');
}

function moveToSlide(index) {
    if (index >= 0 && index < totalSlides) {
        showSlide(index);
    }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Initialize the first button as active
manualBtns[currentIndex].classList.add('active');

// Automatic slide change every 5 seconds
setInterval(nextSlide, 5000);

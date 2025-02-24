let currentIndex = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.slider_head');
    const totalSlides = document.querySelectorAll('.slide_top').length;
    
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const newTransform = -currentIndex * 100 + 'vw';
    slider.style.transform = `translateX(${newTransform})`;
}

// Auto-slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);




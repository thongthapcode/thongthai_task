let currentIndex = 0;

function showSlide(index) {
    const slides = document.getElementById("banner-slide");
    const totalSlides = slides.children.length;
    
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Tự động chạy banner sau 3 giây
setInterval(nextSlide, 3000);

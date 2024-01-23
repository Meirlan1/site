const carousels = document.querySelectorAll(".slider");

carousels.forEach(carousel => {
    const carouselInner = carousel.querySelector(".slider-items");
    const carouselContent = Array.from(carouselInner.children);

    carouselContent.forEach(item => {
        const dublicatedItem = item.cloneNode(true);
        carouselInner.appendChild(dublicatedItem);
        carouselInner.style.animation = "move 100s linear infinite";
    });
});
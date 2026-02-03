document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".product-slider");
    const slides = Array.from(document.querySelectorAll(".product-slide"));
    const prevBtn = document.querySelector(".navigation-arrows img:first-child");
    const nextBtn = document.querySelector(".navigation-arrows img:last-child");

    const slideWidth = slides[0].offsetWidth + 16;
    const visibleSlides = Math.round(slider.offsetWidth / slideWidth);

    slides.slice(-visibleSlides).forEach(slide => {
        slider.prepend(slide.cloneNode(true));
    });

    slides.slice(0, visibleSlides).forEach(slide => {
        slider.append(slide.cloneNode(true));
    });

    slider.scrollLeft = slideWidth * visibleSlides;

    let isAnimating = false;

    function moveNext() {
        if (isAnimating) return;
        isAnimating = true;

        slider.scrollLeft += slideWidth;

        setTimeout(checkLoop, 350);
    }

    function movePrev() {
        if (isAnimating) return;
        isAnimating = true;

        slider.scrollLeft -= slideWidth;

        setTimeout(checkLoop, 350);
    }

    function checkLoop() {
        const maxScroll = slider.scrollWidth - slider.offsetWidth;
        const startPoint = slideWidth * visibleSlides;
        const endPoint = maxScroll - slideWidth * visibleSlides;

        slider.style.scrollBehavior = "auto";

        if (slider.scrollLeft <= 0) {
            slider.scrollLeft = endPoint;
        }

        if (slider.scrollLeft >= maxScroll) {
            slider.scrollLeft = startPoint;
        }

        slider.style.scrollBehavior = "smooth";
        isAnimating = false;
    }

    nextBtn.addEventListener("click", moveNext);
    prevBtn.addEventListener("click", movePrev);
});


//
document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".best-product-slider");
    const slides = Array.from(slider.children);
    const prevBtn = document.querySelector(".best-arrow-icon:first-child");
    const nextBtn = document.querySelector(".best-arrow-icon:last-child");

    const gap = 16;
    const slideWidth = slides[0].offsetWidth + gap;

    const clones = 5;

    slides.slice(-clones).forEach(slide => {
        slider.prepend(slide.cloneNode(true));
    });

    slides.slice(0, clones).forEach(slide => {
        slider.append(slide.cloneNode(true));
    });

    slider.scrollLeft = slideWidth * clones;

    let isMoving = false;

    function move(direction) {
        if (isMoving) return;
        isMoving = true;

        slider.scrollBy({
            left: direction * slideWidth,
            behavior: "smooth"
        });

        setTimeout(() => {
            const maxScroll = slider.scrollWidth - slider.clientWidth;

            if (slider.scrollLeft <= 0) {
                slider.scrollLeft = slideWidth * slides.length;
            }

            if (slider.scrollLeft >= maxScroll - slideWidth) {
                slider.scrollLeft = slideWidth * clones;
            }

            isMoving = false;
        }, 350);
    }

    nextBtn.addEventListener("click", () => move(1));
    prevBtn.addEventListener("click", () => move(-1));

});
const slider = document.getElementById('slider');
const cards = document.querySelectorAll('.client-testimonial-card');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);

slider.appendChild(firstClone);
slider.insertBefore(lastClone, cards[0]);

let scrollAmount = cards[0].offsetWidth + 48; // card width + gap
slider.scrollLeft = scrollAmount;

nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

slider.addEventListener('scroll', () => {

    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.style.scrollBehavior = 'auto';
        slider.scrollLeft = scrollAmount;
        slider.style.scrollBehavior = 'smooth';
    }

    if (slider.scrollLeft <= 0) {
        slider.style.scrollBehavior = 'auto';
        slider.scrollLeft = slider.scrollWidth - (2 * slider.clientWidth);
        slider.style.scrollBehavior = 'smooth';
    }
});

const slider = document.getElementById('slider');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const cards = Array.from(slider.children);
cards.forEach(card => {
    const clone = card.cloneNode(true);
    slider.appendChild(clone);
});

cards.reverse().forEach(card => {
    const clone = card.cloneNode(true);
    slider.insertBefore(clone, slider.firstChild);
});

const getScrollStep = () => {
    const firstCard = slider.querySelector('.client-testimonial-card');
    const style = window.getComputedStyle(slider);
    const gap = parseInt(style.columnGap) || 48; 
    return firstCard.offsetWidth + gap;
};

const initialMove = () => {
    const step = getScrollStep();
    slider.scrollLeft = step * cards.length;
};

window.addEventListener('load', initialMove);

nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
});

slider.addEventListener('scroll', () => {
    const step = getScrollStep();
    const totalRealCardsWidth = step * cards.length;

    if (slider.scrollLeft >= totalRealCardsWidth * 2) {
        slider.style.scrollBehavior = 'auto';
        slider.scrollLeft = totalRealCardsWidth;
        slider.style.scrollBehavior = 'smooth';
    }

    if (slider.scrollLeft <= 0) {
        slider.style.scrollBehavior = 'auto';
        slider.scrollLeft = totalRealCardsWidth;
        slider.style.scrollBehavior = 'smooth';
    }
});
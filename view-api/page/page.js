
var index = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        marketDot(index + 1);
        index++;
        current.nextElementSibling.classList.add('current');
    } else {
        index = 0;
        marketDot(0);
        slides[0].classList.add('current');
    }
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {

        if (index > 0) {
            marketDot(index - 1);
            index--;
        }

        current.previousElementSibling.classList.add('current');
    } else {
        marketDot(slides.length - 1);
        slides[slides.length - 1].classList.add('current');
    }
}

const marketDot = (index) => {
    var dotsMarket = document.querySelectorAll('.dot-current');
    for (i = 0; i < dotsMarket.length; i++) {
        dotsMarket[i].classList.remove('dot-current');
    }

    for (i = 0; i < dots.length; i++) {
        if (i == index) {
            dots[i].classList.add('dot-current');
        }

    }
}

next.addEventListener('click', e => { nextSlide() });
prev.addEventListener('click', e => { prevSlide() });

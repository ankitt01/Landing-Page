
const nav = document.querySelector('.nav')

const close = document.getElementById('close').addEventListener('click', () => {
    console.log('clicked')
    nav.style.transform = 'translateX(100%)'
});

const open = document.getElementById('open').addEventListener('click', () => {
    console.log('clicked')
    setTimeout(() => {
        nav.style.transform = 'translateX(0)'

    },250)
});

const links = document.querySelectorAll('.links a')
links.forEach((link) => {
    link.addEventListener('click' , () => {
        nav.style.transform = 'translateX(100%)';
    })
})

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


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

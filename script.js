
const nav = document.querySelector('.nav')

const close = document.getElementById('close').addEventListener('click', () => {
    console.log('clicked')
    nav.style.transform = 'translateX(100%)'
    nav.style.display = 'none'
});

const open = document.getElementById('open').addEventListener('click', () => {
    console.log('clicked')
    nav.style.display = 'block'
    setTimeout(() => {
        nav.style.transform = 'translateX(0)'

    },250)
});

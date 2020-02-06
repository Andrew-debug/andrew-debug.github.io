const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');
let body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    body.classList.toggle('active');
});


AOS.init();

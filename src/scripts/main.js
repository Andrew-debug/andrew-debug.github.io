const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');
let body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    body.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    const sideNav = document.getElementById('up-button');

    if(window.pageYOffset < 500){
        sideNav.style.visibility = 'hidden';
        sideNav.style.opacity = '0';

    } else {
        sideNav.style.visibility = 'visible';
        sideNav.style.opacity = '1';
    }
})


AOS.init();

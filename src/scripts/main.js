const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');
let body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    body.classList.toggle('active'); //burger thing
});

window.addEventListener('scroll', () => {
    const sideNav = document.getElementById('up-button');

    if(window.pageYOffset < 500){
        sideNav.style.visibility = 'hidden';
        sideNav.style.opacity = '0';

    } else {
        sideNav.style.visibility = 'visible';
        sideNav.style.opacity = '1'; //up-arrow fade
    }
});

let lastScrollTop = 0;
    navbar = document.getElementById('header');
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-70px';
    } else {
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
})


AOS.init(); //block appearance animation init

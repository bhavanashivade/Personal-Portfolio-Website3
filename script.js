var typed = new Typed(".input", {
    Strings: ["Web Designer.", "Web Developer.", "Photographer."],
    typeSpeed: 130;
    backSpeed: 80;
    loop: true
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onlick = () => {
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');

}
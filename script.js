ScrollReveal().reveal('.debut', {
    delay: 1000,
    duration: 600,
    origin: 'top',
    distance: '50px',
    // scale: 2,
    interval: 600,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.simple', {
    delay: 3000,
    duration: 600, 
    origin: 'top',
    distance: '50px',
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.btn', {
    delay: 4000,
    duration: 600, 
    origin: 'top',
    distance: '50px',
    scale: 5,
    interval: 600,
    easing: 'ease-in-out'
});

const menu = document.getElementById("menu");
const btnmenu = document.getElementById("btnmenu");

btnmenu.addEventListener("click", function(e) {
    menu.classList.toggle('hidden');
});


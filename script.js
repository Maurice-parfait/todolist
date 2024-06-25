gsap.to("#circle", { 
    duration: 1.5, 
    rotation: 360, 
    repeat: -1, 
    ease: "linear" 
});

const loader = document.getElementById("loader");
window.addEventListener("load", ()=> {
    loader.style.display = "none";
});

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

// affichage menu responsive

const menu = document.getElementById("menu");
const btnmenu = document.getElementById("btnmenu");
const closemenu = document.getElementById("closemenu");
const iconeclosemenu = document.getElementById("iconeclosemenu");

btnmenu.addEventListener("click", function(e) {
    e.preventDefault();
    menu.style.display = "block";
    
    btnmenu.style.display = "none";

    closemenu.style.display = "block";
    closemenu.classList.add('flex', ' justify-center', 'w-full');


});

iconeclosemenu.addEventListener('click', function(e) {
    menu.style.display = "none";

    closemenu.style.display = "none";

    btnmenu.style.display = "block";

});






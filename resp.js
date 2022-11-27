let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navlist = document.querySelector('.nav-list');
let rightnav = document.querySelector('.rightnav');

burger.addEventListener("click", function() {
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
});

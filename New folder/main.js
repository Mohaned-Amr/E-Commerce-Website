'use strict';
// Mobile navbar toggle 
const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelector('[data-nav-toggler]');

navTogglers.addEventListener('click', function () {
  navbar.classList.toggle('active')
})

// Header active on scroll
const header = document.querySelector('[data-header]');
window.addEventListener('scroll', function () {
  header.classList[this.scrollY > 50 ? "add":"remove"] ("active")
})
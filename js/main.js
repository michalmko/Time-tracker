const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('#footer-year');
const dropdownLink = document.querySelector('.nav__profile');
const dropdownMenu = document.querySelector('.dropdown');
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav__menu');

footerYear.textContent = currentYear;

const togleDropdown = () => {
	dropdownMenu.classList.toggle('dropdown--active');
}

const togleBurger = () => {
	burger.classList.toggle('burger--active');
	navMenu.classList.toggle('nav__menu--active');
}

dropdownLink.addEventListener('click', togleDropdown);
burger.addEventListener('click', togleBurger);
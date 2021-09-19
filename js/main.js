const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const menuCloseBtn = document.querySelector('.close-menu');
const menu_items = document.querySelectorAll('.nav__link');


menuBtn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
})

menuCloseBtn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
})

menu_items.forEach((item) => {
  item.onclick = () => {
    menu.classList.toggle('is-open');
    // console.log(item);
  };
})
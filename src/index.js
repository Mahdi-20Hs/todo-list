import './assets/styles/main.css';
import './assets/styles/home.css';
import { renderHome } from './modules/home';

const navList = document.querySelector('.nav-list');
const navListHeaders = document.querySelectorAll('.nav-list h3');


navList.addEventListener('mouseover', () => {
  navListHeaders.forEach((header) => {
    header.style.visibility = 'visible';
  })
})
navList.addEventListener('mouseout', () => {
  navListHeaders.forEach((header) => {
    header.style.visibility = 'hidden';
  })
})

renderHome()




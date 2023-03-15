const hamburger = document.getElementById('ham');
const menu = document.getElementById('menu');
const mainContent = document.getElementsByTagName('main')[0];

const menuToggle = () => {
  if (menu.classList.contains('menu-open')) {
    hamburger.src = 'assets/shared/mobile/menu.svg';
    menu.classList.remove('menu-open');
    document.body.style.overflow = 'visible';
    mainContent.classList.remove('overlay');
  } else {
    hamburger.src = 'assets/shared/mobile/close.svg';
    menu.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    mainContent.classList.add('overlay');
  }
};

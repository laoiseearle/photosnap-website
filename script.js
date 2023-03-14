const hamburger = document.getElementById('ham');
const menu = document.getElementById('menu');

const menuToggle = () => {
  if (menu.classList.contains('menu-open')) {
    hamburger.src = 'assets/shared/mobile/close.svg';
    menu.classList.remove('menu-open');
    document.body.style.overflow = 'visible';
  } else {
    hamburger.src = 'assets/shared/mobile/menu.svg';
    menu.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
  }
};

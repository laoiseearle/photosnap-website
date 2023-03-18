const hamburger = document.getElementById('ham');
const menu = document.getElementById('menu');
const mainContent = document.getElementsByTagName('main')[0];

const closeMenu = () => {
  hamburger.src = 'assets/shared/mobile/menu.svg';
  menu.classList.remove('menu-open');
  document.body.style.overflow = 'visible';
  mainContent.classList.remove('overlay');
};

const openMenu = () => {
  hamburger.src = 'assets/shared/mobile/close.svg';
  menu.classList.add('menu-open');
  document.body.style.overflow = 'hidden';
  mainContent.classList.add('overlay');
};

window.addEventListener('resize', e => {
  if (e.target.innerWidth >= 768) {
    closeMenu();
  }
});

const menuToggle = () => {
  if (menu.classList.contains('menu-open')) {
    closeMenu();
  } else {
    openMenu();
  }
};

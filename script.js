const hamburger = document.getElementById('ham');
const menu = document.getElementById('menu');
const mainContent = document.getElementsByTagName('main')[0];
const toggle = document.getElementById('toggle');
const textYearly = document.getElementById('textYearly');
const textMonthly = document.getElementById('textMonthly');
const pricing = document.querySelectorAll('.price');
const pricingPlans = document.querySelectorAll('.plan-info');

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

const switchPlan = () => {
  if (toggle.checked === true) {
    textYearly.style.fontWeight = 'bold';
    textMonthly.style.fontWeight = 'normal';

    pricing.forEach(price => {
      price.querySelector('p').innerText = 'per year';
    });

    pricing[0].querySelector('h2').innerText = '$190.00';
    pricing[1].querySelector('h2').innerText = '$390.00';
    pricing[2].querySelector('h2').innerText = '$990.00';
  } else {
    textMonthly.style.fontWeight = 'bold';
    textYearly.style.fontWeight = 'normal';

    pricing.forEach(price => {
      price.querySelector('p').innerText = 'per month';
    });

    pricing[0].querySelector('h2').innerText = '$19.00';
    pricing[1].querySelector('h2').innerText = '$39.00';
    pricing[2].querySelector('h2').innerText = '$99.00';
  }
};

const highlightPlan = id => {
  pricingPlans.forEach(plan => plan.classList.remove('plan-accent'));

  pricingPlans[id - 1].classList.add('plan-accent');
};

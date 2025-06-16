const navToggle = document.querySelector('.header__nav-toggle');
const navList = document.querySelector('.header__nav-list');
const logo = document.querySelector('.header__logo');
const sublistTitle = navList.querySelectorAll('.header__nav-item--dropdown');
const links = navList.querySelectorAll('.header__nav-link');

function addOverlay() {
  const overlayElement = document.querySelector('.overlay');

  if (!overlayElement) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const styles = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '50',
      backgroundColor: 'rgba(13, 29, 51, 0.4)',
    };

    Object.assign(overlay.style, styles);
    document.body.appendChild(overlay);
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.removeChild(overlayElement);
    document.body.style.overflowY = 'unset';
  }
}

function toggleNav() {
  navToggle.classList.toggle('header__nav-toggle--open');
  navList.classList.toggle('header__nav-list--open');
  logo.classList.toggle('header__logo--hidden');

  if (navList.classList.contains('header__nav-list--open')) {
    links.forEach((link) => link.addEventListener('click', toggleNav));
  } else {
    links.forEach((link) => link.removeEventListener('click', toggleNav));
  }

  addOverlay();
  sublistTitle.forEach((element) => element.classList.remove('header__nav-item--open'));
}

function toggleSublist(e) {
  const dropdownItem = e.target.closest('.header__nav-item--dropdown');
  if (dropdownItem) {
    dropdownItem.classList.toggle('header__nav-item--open');
  }
}

navToggle.addEventListener('click', toggleNav);
navList.addEventListener('click', toggleSublist);

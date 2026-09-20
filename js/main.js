/** Accessible mobile navigation. No framework, tracking, or network calls. */
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#navigation');

function setMenuOpen(open, restoreFocus = false) {
  if (!menu || !menuButton) return;
  menu.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  if (restoreFocus) menuButton.focus();
}

if (menu && menuButton) {
  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      setMenuOpen(false, true);
    }
  });

  document.addEventListener('click', (event) => {
    if (menu.classList.contains('is-open') &&
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  window.matchMedia('(min-width: 861px)').addEventListener('change', (event) => {
    if (event.matches) setMenuOpen(false);
  });
}

/** Café Blah portfolio concept — interaction only, no third-party dependencies. */
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

function setMenuOpen(isOpen, restoreFocus = false) {
  if (!menuButton || !nav) return;
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  nav.classList.toggle('is-open', isOpen);
  if (restoreFocus) menuButton.focus();
}

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenuOpen(false, true);
    }
  });

  document.addEventListener('click', (event) => {
    if (nav.classList.contains('is-open') &&
        !nav.contains(event.target) && !menuButton.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  window.matchMedia('(min-width: 801px)').addEventListener('change', (event) => {
    if (event.matches) setMenuOpen(false);
  });
}

// Keep the static pitch from presenting expired events as upcoming.
// Build an ISO-style UK-local date without relying on locale-dependent formatting.
const parts = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit'
}).formatToParts(new Date());
const part = (type) => parts.find((item) => item.type === type)?.value;
const today = [part('year'), part('month'), part('day')].join('-');
const eventRows = [...document.querySelectorAll('[data-event-end]')];
let upcomingCount = 0;

eventRows.forEach((row) => {
  const isPast = row.dataset.eventEnd < today;
  row.hidden = isPast;
  if (!isPast) upcomingCount += 1;
});

if (eventRows.length && upcomingCount === 0) {
  document.querySelector('#event-empty')?.removeAttribute('hidden');
}

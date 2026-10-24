const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('open', open);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('open')) {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }
});

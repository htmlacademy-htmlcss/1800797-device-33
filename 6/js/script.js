const link = document.querySelector('.navigation-catalog-link');
const menu = document.querySelector('.navigation-catalog');

if (link) {
  link.addEventListener('click', (item) => {
    item.preventDefault();
    if (!menu.classList.contains('navigation-catalog-open')) {
      menu.classList.add('navigation-catalog-open');
    } else {
      menu.classList.remove('navigation-catalog-open');
    }
  });
}

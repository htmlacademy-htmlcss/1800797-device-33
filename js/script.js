const link = document.querySelector('.navigation-catalog-link');
const menu = document.querySelector('.navigation-catalog');

const modalLink = document.querySelector('.contacts-btn');
const modal = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-close-button');

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

if (modalLink) {
  modalLink.addEventListener('click', (item) => {
    item.preventDefault();
    modal.classList.add('modal-container-open');
  });

  modalClose.addEventListener('click', (item) => {
    item.preventDefault();
    modal.classList.remove('modal-container-open');
  });

}

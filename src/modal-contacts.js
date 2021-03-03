(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-contacts-modal-open]'),
    closeModalBtn: document.querySelector('[data-contacts-modal-close]'),
    modal: document.querySelector('[data-contacts-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('contacts-modal-open');
    refs.modal.classList.toggle('is-contacts-hidden');
  }
})();

// -----для не отправки модалки 
    
// (() => {
//         document.querySelector('.js-speaker-form').addEventListener('submit', e => {
//         e.preventDefault();
        
//         new FormData(e.currentTarget).forEach((value, name) =>
//         console.log(`${name}: ${value}`),
//         );
//         });
// })();

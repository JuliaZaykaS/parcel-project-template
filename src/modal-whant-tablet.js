(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-tablet-modal-open]'),
    closeModalBtn: document.querySelector('[data-tablet-modal-close]'),
    modal: document.querySelector('[data-tablet-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-tablet-open');
    refs.modal.classList.toggle('is-tablet-hidden');
  }
})();
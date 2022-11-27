// 모달창
const modal = document.getElementById('#modal-wrap');
const modalOpen = document.querySelector('.btn-go');
const modalClose = document.querySelector('.btn-close');


modalOpen.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.add('active');
});

modalClose.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.remove('active');
});
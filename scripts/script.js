let modal = document.querySelector('.modal-container')
let closeButton = document.querySelector('.modal-close-button');
let searchButton = document.querySelector('.search-button');

searchButton.onclick = function () {
  modal.classList.add('modal-open');
}

closeButton.onclick = function () {
  modal.classList.remove('modal-open');
}

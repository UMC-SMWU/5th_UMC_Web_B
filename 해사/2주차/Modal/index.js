const modal = document.getElementById('modal-wrapper');
const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', () => (modal.style = 'display: flex;'));
close.addEventListener('click', () => (modal.style = 'display: none;'));

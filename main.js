const toggleBtn = document.querySelector('.toogleBtn')
const menu = document.querySelector('.navbar__list')
const icon = document.querySelector('.icon_item')

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});
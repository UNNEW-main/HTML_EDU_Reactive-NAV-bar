const toggleBtn = document.querySelector('.toogleBtn') /*toggleBtn에 클래스 .toogleBtn 정보 입력*/
const menu = document.querySelector('.navbar__list')
const icon = document.querySelector('.icon_item')

toggleBtn.addEventListener('click', () => { /*toggleBtn이 클릭되었을 때 일어나는 이벤트*/
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});
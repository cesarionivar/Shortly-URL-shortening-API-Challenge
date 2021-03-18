// Menu mobile
const btnMenu = document.querySelector('#hamburguer');
const menu = document.querySelector('.header__menu-mobile-items');
const menuItems = document.querySelectorAll('.header__menu-mobile-items a');
const body = document.querySelector('body');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();

        menu.classList.toggle('none');
        closeBtnOverflow();
    });
});


btnMenu.addEventListener('click', e => {
    menu.classList.toggle('none');
    // menu.classList.contains('none') ? body.style.overflow = 'auto' : body.style.overflow = 'hidden';
    closeBtnOverflow();
});

function closeBtnOverflow() {

    if(menu.classList.contains('none')) {
        body.style.overflow = 'auto';
        btnMenu.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        btnMenu.style.color = 'gray';
    } else {
        body.style.overflow = 'hidden';
        btnMenu.innerHTML = 'X';
    }

}

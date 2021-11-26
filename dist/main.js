let burger = document.querySelector('.hero__menu-btn')
let menu = document.querySelector('.hero__menu')

burger.addEventListener('click', showMenu)

function showMenu () {
   menu.classList.toggle('hidden')
    console.log('click')
}


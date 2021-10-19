menu = document.getElementById('menu')
closeMenu = document.getElementById('close')
mobile = document.getElementById('mobile')
nav = document.getElementsByClassName('nav')

const toggleMenu = () => {
    nav[0].classList.toggle('show')
}

menu.addEventListener('click', toggleMenu)
mobile.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)
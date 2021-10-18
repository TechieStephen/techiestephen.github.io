menu = document.getElementById('menu')
closeMenu = document.getElementById('close')
mobile = document.getElementById('mobile')
nav = document.getElementsByClassName('nav')

menu.addEventListener('click', toggleMenu)
mobile.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)

const toggleMenu = () => {
    nav[0].classList.toggle('show')
}
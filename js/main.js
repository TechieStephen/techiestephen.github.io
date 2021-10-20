menu = document.getElementById('menu')
closeMenu = document.getElementById('close')
mobile = document.getElementById('mobile')
nav = document.getElementsByClassName('nav')

const toggleMenu = () => {
    nav[0].classList.toggle('show')
    if(nav.classList.contains('show')){
        menu_bar.src = "images/icon-close.svg"
    }else{
        menu_bar.src = "images/icon-hamburger.svg"
    }
}

menu.addEventListener('click', toggleMenu)
mobile.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)
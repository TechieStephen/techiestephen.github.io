const menu = document.getElementById("menu")
const menu_bar = document.getElementById("menu-bar")

const nav = document.getElementById('nav-menu')
const mobile = document.getElementById('mobile')

const toggleMenu = () => {
    nav.classList.toggle('show')
    if(nav.classList.contains('show')){
        menu_bar.src = "../images/icon-close.svg"
    }else{
        menu_bar.src = "../images/icon-hamburger.svg"
    }
}

mobile.addEventListener('click', toggleMenu)
menu_bar.addEventListener('click', toggleMenu)
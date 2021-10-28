const menu = document.getElementById("menu")
const menu_bar = document.getElementById("menu-bar")
const menu_links = document.getElementsByClassName("menu-link")

const nav = document.getElementById('nav-menu')
const close = document.getElementById('close')

const toggleMenu = () => {
    nav.classList.toggle('show')
    if(nav.classList.contains('show')){
        menu_bar.src = "../images/icon-close.svg"
    }else{
        menu_bar.src = "../images/icon-hamburger.svg"
    }
}

close.addEventListener('click', toggleMenu)
menu_bar.addEventListener('click', toggleMenu)
// console.log(menu_links)

// menu_links[2].addEventListener("click", ()=>{
//     alert(1234)
//     toggleMenu()
// })
links = [...menu_links]
links.forEach(element => {
    element.addEventListener("click", toggleMenu)
});
// !=============== Getting my toggler icon =================================

const open = document.getElementsByClassName('open')[0];
const close = document.getElementsByClassName('close')[0];
const link = document.getElementsByClassName('nav-link')[0]
const logo = document.getElementsByClassName('logo')[0]
const nav = document.getElementsByTagName('nav')[0]

console.log(link)


open.addEventListener('click', () => {
    link.classList.toggle('active')
    open.style.display = 'none'
    close.classList.add('active')
    nav.style.backgroundColor = "#045c61";
    logo.style.alignSelf = 'flexStart'
})

close.addEventListener('click', () => {
    link.classList.remove('active')
    close.classList.toggle('active')
    open.style.display = 'flex'
    nav.style.backgroundColor = 'transparent'
})
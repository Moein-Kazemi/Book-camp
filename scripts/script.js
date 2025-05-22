const navBtn = document.querySelector('.nav__btn')
const mobileMenu = document.querySelector('.nav__menu')
const menuLink = document.querySelectorAll('.menu__link')

/////////////  Show and hide Nav menu in Mobile size //////////

navBtn.addEventListener('click' , () => {
    navBtn.classList.toggle('nav__btn--open')
    if(!navBtn.classList.contains('nav__btn--open')){
        mobileMenu.style.left = '-25rem'
    }
    else{
        mobileMenu.style.left = '0'
        
    }
})

/////////////// active selected menu //////////

menuLink.forEach(link => {

    link.addEventListener('click' , event =>{
       let activedLink = document.querySelector('.menu__link--active')
       activedLink.classList.remove('menu__link--active')
       event.target.classList.add('menu__link--active')
    })
})


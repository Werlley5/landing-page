function menuHamburger() {
    
    let menuMobile = document.querySelector('.mobile-cont')

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    }else {
        menuMobile.classList.add('open')
    }

};
const navButton = document.querySelector('.nav_button');
const navMenu = document.querySelector('.nav_container');

const contact = document.querySelector('.Bcontact');
const product = document.querySelector('.Bproduct');
const about = document.querySelector('.Babout');


navButton.addEventListener('click', ()=>{
    
    const navLogo = document.querySelector('.nav_logo');

    navMenu.classList.toggle('nav_container--active');

    if(navMenu.classList.contains('nav_container--active')){

        navLogo.setAttribute('src', './assets/img/logo.png');
        navButton.setAttribute('src', './assets/icons/close.png');

    }else{

        navLogo.setAttribute('src', './assets/img/logo.png');
        navButton.setAttribute('src', './assets/icons/menu.png');

    }

});

contact.addEventListener('click', ()=>{
    
    const navLogo = document.querySelector('.nav_logo');

    navMenu.classList.toggle('nav_container--active');

    if(navMenu.classList.contains('nav_container--active')){

        navLogo.setAttribute('src', './assets/img/logo.png');
        navButton.setAttribute('src', './assets/icons/close.png');

    }else{

        navLogo.setAttribute('src', './assets/img/logo.png');
        navButton.setAttribute('src', './assets/icons/menu.png');

    }

});

product.addEventListener('click', ()=>{
    
    const navLogo = document.querySelector('.nav_logo');

    navMenu.classList.toggle('nav_container--active');

    if(navMenu.classList.contains('nav_container--active')){

        navLogo.setAttribute('src', './assets/img/logo.png');
        navButton.setAttribute('src', './assets/icons/close.png');

    }else{

        navLogo.setAttribute('src', './assets/img/logo.png');
        navButton.setAttribute('src', './assets/icons/menu.png');

    }

});

about.addEventListener('click', ()=>{
    
    const navLogo = document.querySelector('.nav_logo');

    navMenu.classList.toggle('nav_container--active');

    if(navMenu.classList.contains('nav_container--active')){

        navLogo.setAttribute('src', './assets/img/logo.png');
        navButton.setAttribute('src', './assets/icons/close.png');

    }else{

        navLogo.setAttribute('src', './assets/img/logo.png');
        navButton.setAttribute('src', './assets/icons/menu.png');

    }

});

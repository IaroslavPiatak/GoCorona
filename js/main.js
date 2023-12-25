let burger_menu = document.querySelector('.header__burger-menu');
let menu = document.querySelector('.menu')
let body = document.querySelector('.body')

let video_cover = document.querySelector('.experts__video-cover');
let video = document.querySelector('.experts__video');

burger_menu.addEventListener('click', ()=> {
    body.classList.toggle('hidden');
    if(burger_menu.classList.contains('header__burger-menu_close'))
    {
        burger_menu.classList.remove('header__burger-menu_close')
        menu.style['left'] = '-100%';
    }
    else
    {
        burger_menu.classList.add('header__burger-menu_close')
        menu.style['left'] = '0';
    }
})

video_cover.addEventListener('click', ()=> {
    video_cover.style['display'] = "none";
    video.style['display'] = "flex";
})


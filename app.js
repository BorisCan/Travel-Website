const navİtem = document.getElementById('nav-item')
const open = document.getElementById('open')
const close = document.getElementById('close')

if(open){
    open.addEventListener('click' , ()=>{
        navİtem.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', ()=>{
        navİtem.classList.remove('active')
    })
}


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


let header = document.querySelector("menu_nav");
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    header.classList.add("sticky");
  }else {
    header.classList.remove("sticky");
  }
}
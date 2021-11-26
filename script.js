let bars = document.querySelector('.fa-bars')
let navbar = document.querySelector('.navbar')

bars.addEventListener('click', ()=>{
    bars.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

let img = document.querySelectorAll('.image-slider img').forEach(img =>{
    img.onclick=()=>{
        let source = img.getAttribute('src')
        document.querySelector('.main-img').src = source
    }
})


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 0
        },
        768: {
          slidesPerView: 2,
        }
    },
    loop: true,
    grabCursor: true,
});
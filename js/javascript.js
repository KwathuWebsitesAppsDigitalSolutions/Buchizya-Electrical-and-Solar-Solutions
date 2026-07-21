function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}

//swiper Home
var swiper = new Swiper('.home', {
     autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.home .swiper-button-next',
        prevEl: '.home .swiper-button-prev',
    },
});

//swiper Projects
var swiper = new Swiper('.project-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.project-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.project-slider .swiper-button-next',
        prevEl: '.project-slider .swiper-button-prev',
    },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        },
    });

        document.getElementById("readMoreBtn").addEventListener("click", function (e) {
        e.preventDefault();
        // Your code here
    });
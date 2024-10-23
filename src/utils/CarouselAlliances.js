import Swiper, { Navigation, Pagination } from 'swiper/modules';

export function initializeSwiper() {
    const swiperContainer = document.querySelector('.swiper-container');

    if (swiperContainer) {
        new Swiper(swiperContainer, {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            },
        });
    }
}

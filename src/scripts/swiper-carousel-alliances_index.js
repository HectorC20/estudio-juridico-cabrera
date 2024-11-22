import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Swiper from 'swiper';

export function initializeSwiperAssociate(containerId) {
    const swiperAssociateContainer = document.querySelector(containerId);

    if (swiperAssociateContainer) {
        new Swiper(swiperAssociateContainer, {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 0, // No pausas entre transiciones
                disableOnInteraction: false,
            },
            speed: 1800, // Velocidad rápida pero suave
            navigation: {
                nextEl: '#swiper-button-next-associate',
                prevEl: '#swiper-button-prev-associate',
            },
            pagination: {
                el: '#swiper-pagination-associate',
                clickable: true,
            },
            breakpoints: {
                300: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            },
        });
    }
}

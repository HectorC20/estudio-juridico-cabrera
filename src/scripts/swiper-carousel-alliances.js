import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Swiper from 'swiper';

// Inicializar Swiper para clientes
export function initializeSwiperClient(containerId) {
    const swiperClientContainer = document.querySelector(containerId);

    if (swiperClientContainer) {
        new Swiper(swiperClientContainer, {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '#swiper-button-next-client',
                prevEl: '#swiper-button-prev-client',
            },
            pagination: {
                el: '#swiper-pagination-client',
                clickable: true,
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
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

// Inicializar Swiper para asociados
export function initializeSwiperAssociate(containerId) {
    const swiperAssociateContainer = document.querySelector(containerId);

    if (swiperAssociateContainer) {
        new Swiper(swiperAssociateContainer, {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
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
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
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


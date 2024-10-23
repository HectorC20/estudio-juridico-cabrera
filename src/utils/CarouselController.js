import Swiper from 'swiper/bundle';
import splitting from 'splitting';

let swiperInstance;
let swiperInitialized = false; // Nuevo estado
let contentFullsizeEls = []; // Mover fuera para usarlo globalmente

export const initSwiper = () => {
    if (swiperInitialized) return;

    const heroEl = document.querySelector(".hero");
    const fullSizeWrapEl = heroEl.querySelector(".hero__fullsize");

    const contentEls = heroEl.querySelectorAll(".swiper .content");

    if (contentFullsizeEls.length === 0) {
        contentFullsizeEls = Array.from(contentEls, (el) => {
            const clone = el.cloneNode(true);
            splitting({target: clone, by: "words"});
            clone.classList.add("hero__content", "hero__content--hidden", "content--hero");
            clone.classList.remove("content--slide");
            return clone;
        });
        contentFullsizeEls.forEach((el) => fullSizeWrapEl.appendChild(el));
    }

    const state = {
        topContent: null,
        bottomContent: null,
    };

    function slideChange(swiper) {
        const contentIndex = swiper.realIndex;
        const content = contentFullsizeEls[contentIndex];

        if (!content) return;

        document.querySelectorAll('.content__title').forEach(title => {
            title.classList.remove('main-title-display');
        });

        const currentTitleElement = content.querySelector('.content__title');
        currentTitleElement.classList.add('main-title-display');

        if (state.bottomContent) {
            state.bottomContent.classList.remove("hero__content--bottom");
            state.bottomContent.classList.add("hero__content--hidden");
        }
        if (state.topContent) {
            state.topContent.classList.remove("hero__content--top");
            state.topContent.classList.add("hero__content--bottom");
        }

        state.bottomContent = state.topContent;
        state.topContent = content;

        const slideRect = swiper.slides[swiper.activeIndex].getBoundingClientRect();
        const parentRect = heroEl.getBoundingClientRect();
        content.style.transition = "none";
        content.style.left = slideRect.left - parentRect.left + "px";
        content.style.top = slideRect.top - parentRect.top + "px";
        content.style.width = slideRect.width + "px";
        content.style.height = slideRect.height + "px";
        content.style.borderRadius = "var(--border-radius, 0)";
        content.getBoundingClientRect();

        content.classList.remove("hero__content--hidden");
        content.classList.add("hero__content--top", "hero__content--grow");
        content.style.transition = "";

        content.style.left = "";
        content.style.top = "";
        content.style.width = "";
        content.style.height = "";
        content.style.borderRadius = "";

        const onShowTextEnd = (event) => {
            if (event.target !== event.currentTarget) {
                event.currentTarget.classList.remove("hero__content--show-text");
                event.currentTarget.removeEventListener("transitionend", onShowTextEnd);
            }
        };

        const onGrowEnd = (event) => {
            event.currentTarget.removeEventListener("transitionend", onGrowEnd);
            event.currentTarget.classList.remove("hero__content--grow");
            event.currentTarget.classList.add("hero__content--show-text");
            event.currentTarget.addEventListener("transitionend", onShowTextEnd);
        };

        content.addEventListener("transitionend", onGrowEnd, {once: true});
    }

    function swiperInit(swiper) {
        const contentIndex = swiper.realIndex;
        const content = contentFullsizeEls[contentIndex];

        if (content) {
            const initialContentTitle = content.querySelector('.content__title');
            if (initialContentTitle) {
                initialContentTitle.classList.add('main-title-display');
                state.topContent = content;
                content.classList.remove("hero__content--hidden");
                content.classList.add("hero__content--top");
            }
        }
    }

    if (!swiperInstance) {
        swiperInstance = new Swiper(".swiper", {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: true,
            speed: 1000,
            simulateTouch: false,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            on: {
                realIndexChange: slideChange,
                init: swiperInit
            }
        });
    }
    swiperInitialized = true;
};
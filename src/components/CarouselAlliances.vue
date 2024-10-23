<script lang="ts">
import { onMounted } from 'vue';
import { initSwiper } from '../utils/CarouselAlliances';

export default {
  setup() {
    // Inicializamos Swiper cuando el componente se monta
    onMounted(() => {
      initSwiper();
    });
  },
};
</script>

<template>

  <section class="section__cont__info">
    <div class="section__container">
      <h2 class="section__heading">CLIENTES</h2>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <!--Meter el componente de astro cuando esté dentro este componente de vue en el otro componente de astro-->
          <slot/>

        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>

        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>

</template>

<style scoped>
@import "../styles/sectionAlliances.css";
@import "../../node_modules/swiper/swiper-bundle.min.css";
</style>
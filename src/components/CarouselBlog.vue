<script setup lang="js">
import {onMounted} from 'vue';
import {initSwiper} from '../utils/CarouselController';
// Inicializamos Swiper cuando el componente se monta
onMounted(() => {
  initSwiper();
});
</script>

<template>
  <div >
    <div class="hero ">
      <div class="bg-hero"></div>
      <div class="hero__fullsize"></div>
      <div class="hero__swiper swiper">
        <div class=" swiper-wrapper ">
          <!-- Tus slides aquí -->
          <div class="swiper-slide">
            <div class="content content--slide">
              <img class="content__image"
                   src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728314313/treintaanios_xm6zw9.png"
                   alt="s">
              <div class="content__text ">
                <h1 class="content__subtitle">+30 Años
                  De Experiencia</h1>
                <h2 class="content__title main-title-display "></h2>
                <p class="content__desc">Contamos con Abogados altamente calificados, quienes resolverán sus consultas y
                  le ayudaran a resolver su problema.</p>
              </div>

            </div>
          </div>

          <div class="swiper-slide">
            <div class="content content--slide">
              <img class="content__image"
                   src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728534168/indecopi_ak7tof.png" alt="s">

              <div class="content__text">
                <h2 class="content__title">Pasos para presentar una queja ante Indecopi: todo lo que necesitas
                  saber</h2>
                <p class="content__desc">contenido 2</p>
              </div>

            </div>
          </div>
          <div class="swiper-slide">
            <div class="content content--slide">
              <img class="content__image"
                   src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728534169/proceso_administrativo_cvhhpz.png" alt="s">
              <div class="content__text">
                <h2 class="content__title">Guía completa sobre el procedimiento administrativo en Perú</h2>
                <p class="content__desc">contenido 3</p>
              </div>

            </div>
          </div>

          <div class="swiper-slide">
            <div class="content content--slide">
              <img class="content__image"
                   src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728534169/tutela_cv4ffz.png" alt="s">
              <div class="content__text">
                <h2 class="content__title">La tutela en el derecho peruano: concepto y principales características</h2>
                <p class="content__desc">contenido 4</p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content content--slide">
              <img class="content__image"
                   src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728534168/sistema_lblphl.png"
                   alt="s">
              <div class="content__text">
                <h2 class="content__title">El sistema judicial en Perú: retos y reformas en el proceso judicial</h2>
                <p class="content__desc">contenido 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section__notices__home">
        <div class="content__notices__home">
          <div class="px-8 py-6 text-center text-primaryLocal text-xl lg:text-2xl font-bold">LO DESTACADO</div>
          <div class=" grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Sección de Noticias -->
            <div class="space-y-2 text-center px-3 ">
              <h3 class="text-lg lg:text-xl font-bold text-primaryLocal">NOTICIA</h3>
              <p class="text-sm text-primaryLocal uppercase">
                El proceso de conciliación en Perú: una alternativa efectiva para resolver conflictos.
              </p>
              <a href="#" class="text-sm text-primaryLocal font-semibold hover:underline">
                Leer más
              </a>
            </div>
            <!-- Sección de Reconocimientos -->
            <div class="space-y-4 text-center px-3">
              <h3 class="text-xl font-bold text-primaryLocal">RECONOCIMIENTO</h3>
              <p class="text-sm text-primaryLocal uppercase">
                Premio a la Excelencia Jurídica 2023.
              </p>
              <a href="#" class="text-sm text-primaryLocal font-semibold hover:underline">
                Ver detalles
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
    />
  </div>
</template>

<style scoped>
@import "../styles/carouselBlog.css";
</style>
<script setup lang="js">
import { onMounted, ref, nextTick } from 'vue';
import { initSwiper } from '../utils/CarouselController';
import { API_BASE_URL } from '../consts';

const newsList = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/news/newsList`);
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

    const data = await response.json();
    newsList.value = data.slice(0, 4);
  } catch (error) {
    console.error("Error al obtener las noticias:", error);
  }

  await nextTick(); // Espera a que Vue termine de renderizar
  initSwiper();
});

</script>

<template>
  <div>
    <div class="hero">
      <div class="bg-hero"></div>
      <div class="hero__fullsize"></div>
      <div class="hero__swiper swiper">
        <div class="swiper-wrapper">

          <!-- Primer slide (fijo, no se modifica) -->
          <div class="swiper-slide">
            <div class="content content--slide">
              <img class="content__image"
                   src="https://res.cloudinary.com/dixzojb4s/image/upload/v1743458662/treintaanios_xm6zw9_jfw2og.webp"
                   alt="s">
              <div class="content__text">
                <h1 class="content__subtitle">+30 Años De Experiencia</h1>
                <h2 class="content__title main-title-display"></h2>
                <p class="content__desc">Contamos con Abogados altamente calificados, quienes resolverán sus consultas y
                  le ayudarán a resolver su problema.</p>
              </div>
            </div>
          </div>

          <!-- Slides dinámicos desde la API -->
          <div v-for="news in newsList" :key="news.newsName" class="swiper-slide">
            <div class="content content--slide">
              <img class="content__image" :src="news.heroImage || 'https://via.placeholder.com/400x200'" alt="Noticia">
              <div class="content__text">
                <h2 class="content__title">{{ news.title }}</h2>
                <p class="content__desc">
                  <a :href="`/noticias/${news.newsName}/`" class="text-primaryLocal font-semibold hover:underline">
                    Saber más
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Sección de Destacados -->
      <div class="section__notices__home">
        <div class="content__notices__home">
          <div class="px-8 py-6 text-center text-primaryLocal text-xl lg:text-2xl font-bold">LO DESTACADO</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Noticia destacada -->
            <div class="space-y-2 text-center px-3">
              <h3 class="text-lg lg:text-xl font-bold text-primaryLocal">NOTICIA</h3>
              <p class="text-sm text-primaryLocal uppercase">
                El proceso de conciliación en Perú
              </p>
              <a href="https://estudiojuridicocabrera.com/noticias/el-proceso-de-conciliacin-en-per-una-alternativa-efectiva-para-resolver-conflictos/" class="text-sm text-primaryLocal font-semibold hover:underline">
                Leer más
              </a>
            </div>
            <!-- Reconocimientos (no se modifica) -->
            <div class="space-y-4 text-center px-3">
              <h3 class="text-xl font-bold text-primaryLocal">RECONOCIMIENTO</h3>
              <p class="text-sm text-primaryLocal uppercase">
                + DE 4000 CASOS GESTIONADOS
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Estilos y Swiper -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
  </div>
</template>

<style scoped>
@import "../styles/carouselBlog.css";
</style>

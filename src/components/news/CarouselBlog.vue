<script setup lang="js">
import { onMounted, ref, nextTick } from 'vue';
import { initSwiper } from '@/utils/CarouselController';
import { NewsService } from '@/services/NewsService';
import { StatsService } from '@/services/StatsService';

const newsList = ref([]);
const highlightedNews = ref(null);
const homeStats = ref(null);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const [newsData, highlightedData, statsData] = await Promise.all([
      NewsService.getNewsList(),
      NewsService.getHighlighted(),
      StatsService.getHomeStats()
    ]);
    
    newsList.value = newsData.slice(0, 4);
    highlightedNews.value = highlightedData;
    homeStats.value = statsData;
  } catch (error) {
    console.error("Error al obtener datos:", error);
  } finally {
      isLoading.value = false;
  }

  await nextTick(); // Espera a que Vue termine de renderizar
  
  const hero = document.querySelector('.hero');
  if (hero && hero.offsetParent !== null) {
      initSwiper();
  } else {
      window.addEventListener('main-content-visible', () => {
          initSwiper();
      }, { once: true });
  }
});

</script>

<template>
  <div>
    <div class="hero">
      <div class="bg-hero"></div>
      <div class="hero__fullsize"></div>
      <div class="hero__swiper swiper">
        <div class="swiper-wrapper">

          <!-- Skeleton Loading -->
          <div v-if="isLoading" class="swiper-slide" v-for="i in 3" :key="'skeleton-' + i">
            <div class="content content--slide skeleton-slide">
              <div class="skeleton-image"></div>
              <div class="content__text skeleton-text-container">
                <div class="skeleton-title"></div>
                <div class="skeleton-desc"></div>
              </div>
            </div>
          </div>

          <!-- Contenido Real (se muestra cuando isLoading es false) -->
          <template v-else>
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
          </template>

        </div>
      </div>

      <!-- Sección de Destacados -->
      <div class="section__notices__home">
        <div class="content__notices__home">
          <div class="px-8 py-6 text-center text-primaryLocal text-xl lg:text-2xl font-bold">LO DESTACADO</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Noticia destacada -->
            <div class="space-y-2 text-center px-3" v-if="highlightedNews">
              <h3 class="text-lg lg:text-xl font-bold text-primaryLocal">NOTICIA</h3>
              <p class="text-sm text-primaryLocal uppercase">
                {{ highlightedNews.title }}
              </p>
              <a :href="`/noticias/${highlightedNews.newsName}/`" class="text-sm text-primaryLocal font-semibold hover:underline">
                Leer más
              </a>
            </div>
            <!-- Fallback visual si no hay destacada, o ocultar -->
            <div class="space-y-2 text-center px-3" v-else>
               <!-- Opcional: Mostrar esqueleto o mensaje, o simplemente nada -->
               <h3 class="text-lg lg:text-xl font-bold text-primaryLocal">NOTICIA</h3>
               <p class="text-sm text-primaryLocal uppercase">Cargando...</p>
            </div>

            <!-- Reconocimientos -->
            <div class="space-y-4 text-center px-3">
              <h3 class="text-xl font-bold text-primaryLocal">RECONOCIMIENTO</h3>
              <p class="text-sm text-primaryLocal uppercase">
                {{ homeStats ? homeStats.casesManaged : '+ DE 4000 CASOS GESTIONADOS' }}
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
@import "../../styles/carouselBlog.css";

/* Skeleton Styles */
.skeleton-slide {
  position: relative;
  background-color: #f0f0f0;
  overflow: hidden;
}

.skeleton-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-text-container {
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 20px;
}

.skeleton-title {
  height: 30px;
  width: 60%;
  background: rgba(255, 255, 255, 0.3);
  margin-bottom: 15px;
  border-radius: 4px;
  animation: shimmer 1.5s infinite;
}

.skeleton-desc {
  height: 20px;
  width: 40%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>

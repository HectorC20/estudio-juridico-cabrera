<template>
  <div class="pdf-container">
    <iframe
        :src="pdfPath"
        class="pdf-viewer"
        loading="lazy"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Usar onMounted para asegurar que el iframe se carga después de la renderización
const pdfPath = ref('');

onMounted(() => {
  pdfPath.value = '/brochure/brochure-corporativo.pdf';
});
</script>

<style scoped>
.pdf-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pdf-viewer {
  width: 100%;
  height: 100vh; /* Altura máxima */
  border: none;
}

/* Mejoras para pantallas pequeñas */
@media (max-width: 768px) {
  .pdf-viewer {
    height: 85vh;
  }
}

@media (max-width: 480px) {
  .pdf-viewer {
    height: 80vh;
  }
}
</style>

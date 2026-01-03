<script setup lang="ts">
import {ref, onMounted} from 'vue'

const showText = ref(true)


</script>


<template>
  <div class="mb-12 lg:mb-5 fixed bottom-4 right-4 flex flex-col md:flex-row md:items-end gap-2 z-20 text-center">
    <!-- Mensaje para pantallas medianas en adelante -->
    <div class="hidden md:block bg-white text-gray-800 px-3 py-2 rounded-lg shadow-md text-sm max-w-[160px]">
      Contáctese para una asesoría jurídica
    </div>

    <!-- Botón de WhatsApp con mensaje interno solo en móvil -->
    <a
        href="https://wa.link/4jh0gi"
        target="_blank"
        class="bg-[#278d46] flex flex-row  gap-2 text-white mb-8 lg:mb-4 p-1.5 rounded-full shadow-lg hover:bg-[#278d46] transition   items-center"
    >
      <img
          src="https://res.cloudinary.com/dixzojb4s/image/upload/v1743823009/whatsapp_qilsyl.svg"
          alt="WhatsApp"
          class="w-6 h-6"
      />
      <!-- Mensaje interno visible solo en móvil -->
      <span
          v-if="showText"
          class="block md:hidden text-xs animate-slide-in-out"
      >
  Asesoría jurídica
</span>
    </a>
  </div>
</template>

<style scoped>


</style>


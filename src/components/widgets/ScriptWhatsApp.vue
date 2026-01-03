<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showText = ref(true)
const isHovered = ref(false)

// Opcional: Ocultar el texto en móvil después de unos segundos para no tapar contenido
onMounted(() => {
  setTimeout(() => {
    // showText.value = false // Descomentar si se prefiere que se contraiga automáticamente
  }, 5000)
})
</script>

<template>
  <div class="fixed bottom-24 right-6 md:bottom-6 z-50 flex flex-col items-end gap-2 group">
    
    <!-- Tooltip / Mensaje (Visible en Desktop al hacer hover o siempre visible según preferencia) -->
    <!-- En móvil se oculta para ahorrar espacio, en desktop aparece como tooltip -->
    <div 
      class="hidden md:block transition-all duration-300 transform origin-bottom-right"
      :class="[isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none']"
    >
      <div class="bg-white text-gray-800 px-4 py-2 rounded-xl shadow-xl text-sm font-medium border border-gray-100 relative">
        ¿Necesitas asesoría legal? ¡Escríbenos!
        <!-- Triangulito del tooltip -->
        <div class="absolute -bottom-1 right-4 w-3 h-3 bg-white transform rotate-45 border-r border-b border-gray-100"></div>
      </div>
    </div>

    <!-- Botón Principal -->
    <a
      href="https://wa.link/pf0sdi"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 md:p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] active:scale-95"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      aria-label="Contactar por WhatsApp"
    >
      <!-- Icono WhatsApp -->
      <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          class="w-6 h-6 md:w-8 md:h-8"
      />

      <!-- Texto en Móvil (Pill shape) -->
      <!-- Se muestra siempre en móvil para llamar la acción -->
      <span class="block md:hidden text-sm font-semibold pr-1">
        Asesoría Jurídica
      </span>
    </a>
  </div>
</template>

<style scoped>
/* Animación de entrada sutil */
div {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

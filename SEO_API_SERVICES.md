# Especificación de Servicios API para Automatización SEO

Este documento detalla los servicios y endpoints recomendados para implementar en el backend, con el objetivo de centralizar y automatizar la estrategia SEO del sitio web "Estudio Jurídico Cabrera".

## 1. Gestión de Metadatos (`/seo/metadata`)

Este servicio permite controlar dinámicamente los títulos, descripciones e imágenes de Open Graph para cada página sin necesidad de redesplegar el frontend.

### Obtener Metadatos por Ruta
**Endpoint**: `GET /api/v1/seo/metadata`
**Query Params**: `?path=/noticias/mi-noticia`

**Respuesta Esperada**:
```json
{
  "title": "Título Optimizado para SEO",
  "description": "Meta descripción optimizada con keywords relevantes...",
  "keywords": ["abogado", "tumbes", "penal"],
  "ogImage": "https://...",
  "robots": "index, follow",
  "canonicalUrl": "https://estudiojuridicocabrera.com/noticias/mi-noticia"
}
```

### Actualizar Metadatos (Panel Admin)
**Endpoint**: `PUT /api/v1/seo/metadata`
**Body**:
```json
{
  "path": "/nosotros",
  "title": "Sobre Nosotros - Abogados Expertos",
  "description": "Nueva descripción...",
  "robots": "noindex" // Útil para ocultar páginas temporalmente
}
```

---

## 2. Generación de Schema.org Dinámico (`/seo/schema`)

Para inyectar datos estructurados específicos que pueden cambiar (ej. reseñas, nuevos servicios, FAQs).

**Endpoint**: `GET /api/v1/seo/schema`
**Query Params**: `?type=LegalService` o `?page=home`

**Respuesta Esperada**:
```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "120"
  },
  "priceRange": "$$"
}
```
*Nota: Esto permite actualizar el rating o precios desde el backend automáticamente.*

---

## 3. Gestión de Redirecciones (`/seo/redirects`)

Crucial para no perder tráfico cuando se cambian URLs o se eliminan noticias.

**Endpoint**: `GET /api/v1/seo/redirects`

**Respuesta Esperada**:
```json
[
  {
    "source": "/noticias/antigua-url",
    "destination": "/noticias/nueva-url-optimizada",
    "type": 301 // Permanente
  },
  {
    "source": "/servicio-descontinuado",
    "destination": "/",
    "type": 302 // Temporal
  }
]
```
*El frontend debe consultar esto al cargar o el servidor (middleware) debe manejarlo.*

---

## 4. Automatización de Indexación (Google Indexing API)

Este no es un endpoint para el frontend, sino un **servicio de fondo (Worker/Cron)** que tu backend debe ejecutar.

**Funcionalidad**:
Cada vez que se crea o actualiza una noticia o servicio en el CMS:
1. El backend detecta el cambio.
2. Envía automáticamente una petición a la **Google Indexing API**.
3. Google recibe la señal de "crawlear" esa URL inmediatamente.

**Endpoint Interno (Trigger)**: `POST /api/v1/seo/notify-update`
**Body**:
```json
{
  "url": "https://estudiojuridicocabrera.com/noticias/nueva-ley",
  "action": "URL_UPDATED" // o "URL_DELETED"
}
```

---

## 5. Auditoría de Enlaces Rotos (`/seo/health`)

Servicio para monitorear que todos los enlaces internos funcionen.

**Endpoint**: `GET /api/v1/seo/broken-links`
**Respuesta**:
```json
{
  "status": "warning",
  "brokenLinks": [
    {
      "foundOn": "/noticias/articulo-1",
      "linkTo": "/pagina-inexistente",
      "code": 404
    }
  ]
}
```

## Resumen de Prioridades

1. **Metadatos Dinámicos**: Alta prioridad. Permite a los editores cambiar títulos y descripciones para mejorar CTR sin tocar código.
2. **Indexing API**: Alta prioridad para sitios de noticias/blog. Acelera la aparición en Google.
3. **Redirecciones**: Media prioridad. Importante si planeas reestructurar contenidos.

# Guía de Implementación Backend: Servicios SEO

Este documento especifica los detalles técnicos (Base de Datos, Controladores y Lógica) necesarios para implementar los servicios de SEO solicitados.

## 1. Servicio de Metadatos (`SeoMetadataService`)

**Objetivo**: Permitir la gestión dinámica de títulos, descripciones y metadatos sociales para cualquier ruta del sitio.

### 🗄️ Esquema de Base de Datos (Sugerido)

Tabla: `seo_metadata`

| Columna | Tipo | Descripción |
|---|---|---|
| `id` | INT (PK) | Auto-incremental |
| `path` | VARCHAR(255) | Ruta de la página (ej. `/noticias`, `/home`). Unique Index. |
| `title` | VARCHAR(100) | Título de la página (Meta Title). |
| `description` | VARCHAR(200) | Meta Description. |
| `keywords` | TEXT | Palabras clave separadas por comas. |
| `og_image` | VARCHAR(255) | URL de la imagen para Open Graph (RRSS). |
| `robots` | VARCHAR(50) | Directiva robots (ej. `index, follow`). Default: `index, follow`. |
| `updated_at` | TIMESTAMP | Última actualización. |

### ⚙️ Lógica del Controlador (`MetadataController`)

**Endpoint**: `GET /api/v1/seo/metadata`

1.  **Input**: Recibe un parámetro `path` (query param).
2.  **Lógica**:
    *   Buscar en la tabla `seo_metadata` donde `path` coincida.
    *   **Fallback**: Si no existe una entrada específica para la ruta exacta, verificar si existe una regla por defecto o devolver 404 (el frontend usará sus defaults).
    *   *Opcional*: Implementar lógica de comodines (ej. `/noticias/*`) si se desea aplicar reglas generales.

**Respuesta JSON**:
```json
{
  "title": "...",
  "description": "...",
  "keywords": ["..."],
  "ogImage": "...",
  "robots": "..."
}
```

---

## 2. Servicio de Schema.org (`SeoSchemaService`)

**Objetivo**: Proveer datos estructurados JSON-LD actualizados dinámicamente.

### 🗄️ Esquema de Base de Datos (Sugerido)

Tabla: `seo_schema_config`

| Columna | Tipo | Descripción |
|---|---|---|
| `id` | INT (PK) | |
| `type` | VARCHAR(50) | Tipo de Schema (ej. `LegalService`, `Organization`). |
| `page_identifier` | VARCHAR(50) | Identificador opcional (ej. `home`, `contact`). |
| `json_content` | JSON/TEXT | El objeto JSON completo o parcial con los datos. |

### ⚙️ Lógica del Controlador (`SchemaController`)

**Endpoint**: `GET /api/v1/seo/schema`

1.  **Input**: `type` (requerido), `page` (opcional).
2.  **Lógica**:
    *   Buscar en `seo_schema_config`.
    *   Si el `json_content` contiene placeholders dinámicos (ej. `{{total_reviews}}`), el controlador debe reemplazarlos con datos reales de otras tablas (ej. contar registros en tabla `reviews`).

**Ejemplo de Lógica Dinámica**:
Si se pide `LegalService`, el backend podría consultar la tabla de reseñas para calcular el `aggregateRating` en tiempo real e inyectarlo en la respuesta.

---

## 3. Servicio de Redirecciones (`SeoRedirectService`)

**Objetivo**: Gestionar redirecciones 301/302 desde base de datos para evitar enlaces rotos.

### 🗄️ Esquema de Base de Datos (Sugerido)

Tabla: `seo_redirects`

| Columna | Tipo | Descripción |
|---|---|---|
| `id` | INT (PK) | |
| `source_path` | VARCHAR(255) | Ruta antigua (origen). Unique Index. |
| `target_path` | VARCHAR(255) | Ruta nueva (destino). |
| `status_code` | INT | 301 (Permanente) o 302 (Temporal). |
| `is_active` | BOOLEAN | Para activar/desactivar sin borrar. |

### ⚙️ Lógica del Controlador (`RedirectController`)

**Endpoint**: `GET /api/v1/seo/redirects`

1.  **Lógica**:
    *   Devolver todas las redirecciones donde `is_active = true`.
    *   Se recomienda cachear esta respuesta (Redis o memoria) ya que se consulta frecuentemente.

---

## Resumen de Endpoints a Implementar

| Método | Endpoint | Controlador |
|---|---|---|
| `GET` | `/api/v1/seo/metadata` | `MetadataController.getMetadata` |
| `PUT` | `/api/v1/seo/metadata` | `MetadataController.updateMetadata` (Admin) |
| `GET` | `/api/v1/seo/schema` | `SchemaController.getSchema` |
| `GET` | `/api/v1/seo/redirects` | `RedirectController.getAll` |
| `POST` | `/api/v1/seo/redirects` | `RedirectController.create` (Admin) |

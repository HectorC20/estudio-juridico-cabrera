# Documentación de API - Estudio Jurídico Cabrera

Esta API está construida con Astro y permite la gestión de contenidos (Noticias, Autores, Especialidades) y autenticación.

**Base URL**: `/api/v1`

## Autenticación
Los endpoints marcados con 🔒 requieren un token JWT en el header `Authorization: Bearer <token>`.

### 🔐 Auth
| Método | Endpoint | Descripción |
|---|---|---|
| `POST` | `/auth/login` | Iniciar sesión y obtener token JWT. |
| `POST` | `/auth/register` | Registrar un nuevo usuario (Uso interno). |

---

## Recursos

### ✍️ Autores (`/authors`)
| Método | Endpoint | Descripción | Auth |
|---|---|---|---|
| `GET` | `/authors` | Listar todos los autores. | 🔓 |
| `POST` | `/authors` | Crear un nuevo autor. | 🔒 |
| `GET` | `/authors/:id` | Obtener detalles de un autor por ID. | 🔓 |
| `PUT` | `/authors/:id` | Actualizar información de un autor. | 🔒 |
| `DELETE` | `/authors/:id` | Eliminar un autor. | 🔒 |
| `GET` | `/authors/:id/news` | Listar noticias escritas por un autor específico. | 🔓 |

### 📰 Noticias (`/news`)
| Método | Endpoint | Descripción | Auth |
|---|---|---|---|
| `GET` | `/news` | Listar noticias (soporta `?limit=N`). | 🔓 |
| `POST` | `/news` | Crear una nueva noticia. | 🔒 |
| `GET` | `/news/:slug` | Obtener una noticia por su slug. | 🔓 |
| `PUT` | `/news/:slug` | Actualizar una noticia existente. | 🔒 |
| `DELETE` | `/news/:slug` | Eliminar una noticia. | 🔒 |
| `GET` | `/news/categories` | Listar todas las categorías disponibles. | 🔓 |
| `GET` | `/news/categories/:category` | Listar noticias por categoría. | 🔓 |
| `GET` | `/news/tags` | Listar todos los tags disponibles. | 🔓 |
| `GET` | `/news/tags/:tag` | Listar noticias por tag. | 🔓 |
| `GET` | `/news/highlighted` | Obtener la noticia destacada para el home. | 🔓 |

### 📊 Estadísticas (`/stats`)
| Método | Endpoint | Descripción | Auth |
|---|---|---|---|
| `GET` | `/stats/home` | Obtener estadísticas generales para el home (ej. casos gestionados). | 🔓 |

### ⚖️ Especialidades (`/specialties`)
| Método | Endpoint | Descripción | Auth |
|---|---|---|---|
| `GET` | `/specialties` | Listar todas las especialidades. | 🔓 |
| `GET` | `/specialties/:slug` | Obtener detalles de una especialidad por slug. | 🔓 |

### 🏆 Casos de Éxito (`/success-cases`)
| Método | Endpoint | Descripción | Auth |
|---|---|---|---|
| `GET` | `/success-cases` | Listar casos de éxito destacados (home). | 🔓 |
| `GET` | `/success-cases/:slug` | Obtener detalles de un caso de éxito. | 🔓 |

---

## 📝 Detalles de Implementación (Nuevos Endpoints)

Estos endpoints son requeridos para la sección de Blog y Destacados del Home.

### 1. Noticia Destacada
**Endpoint**: `GET /api/v1/news/highlighted`

Debe devolver el objeto de la noticia que se desea resaltar en el home.

**Respuesta Exitosa (200 OK):**
```json
{
  "slug": "el-proceso-de-conciliacion-en-peru",
  "newsName": "el-proceso-de-conciliacion-en-peru",
  "title": "El proceso de conciliación en Perú",
  "heroImage": "https://url-a-la-imagen.com/imagen.jpg",
  "pubDate": "2024-03-20T10:00:00Z",
  "description": "Breve descripción de la noticia..."
}
```

### 2. Estadísticas del Home
**Endpoint**: `GET /api/v1/stats/home`

Debe devolver los contadores y textos estadísticos.

**Respuesta Exitosa (200 OK):**
```json
{
  "casesManaged": "+ DE 4000 CASOS GESTIONADOS"
}
```

### 3. Casos de Éxito (Home)
**Endpoint**: `GET /api/v1/success-cases`

Debe devolver una lista de los casos de éxito más relevantes para mostrar en la página principal.

### 4. Categorías de Noticias
**Endpoint**: `GET /api/v1/news/categories`

Debe devolver una lista de cadenas de texto (strings) con todas las categorías disponibles en el sistema.

**Respuesta Exitosa (200 OK):**
```json
[
  "Derecho Penal",
  "Derecho Civil",
  "Conciliaciones",
  "Noticias Legales",
  "Derecho Laboral"
]
```

**Endpoint**: `GET /api/v1/news/categories/:category`

Debe devolver una lista de objetos de noticias (`NewsSummary`) que pertenezcan a la categoría especificada.
El parámetro `:category` debe ser el nombre exacto de la categoría. Se recomienda enviarlo codificado (URL encoded) si contiene espacios o caracteres especiales.

**Parámetros:**
- `category` (path, string, requerido): El nombre de la categoría a filtrar (ej. "Derecho Penal" o "Derecho%20Penal").

**Respuesta Exitosa (200 OK):**
```json
[
  {
    "slug": "nueva-ley-de-conciliacion",
    "newsName": "nueva-ley-de-conciliacion",
    "title": "Nueva Ley de Conciliación en Perú",
    "heroImage": "https://url-imagen.com/img.jpg",
    "pubDate": "2024-03-25T12:00:00Z",
    "description": "Análisis de los cambios recientes...",
    "categories": ["Conciliaciones", "Noticias Legales"]
  },
  {
    "slug": "importancia-del-arbitraje",
    "newsName": "importancia-del-arbitraje",
    "title": "Importancia del Arbitraje",
    "heroImage": "https://url-imagen.com/arbitraje.jpg",
    "pubDate": "2024-03-20T10:00:00Z",
    "description": "Por qué elegir el arbitraje...",
    "categories": ["Conciliaciones"]
  }
]
```

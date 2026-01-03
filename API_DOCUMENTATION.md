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

### ⚖️ Especialidades (`/specialties`)
| Método | Endpoint | Descripción | Auth |
|---|---|---|---|
| `GET` | `/specialties` | Listar todas las especialidades. | 🔓 |
| `GET` | `/specialties/:slug` | Obtener detalles de una especialidad por slug. | 🔓 |

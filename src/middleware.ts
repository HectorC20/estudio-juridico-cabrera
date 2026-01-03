import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
    const url = new URL(context.request.url);
    const { pathname, search } = url;

    // Si la ruta ya tiene trailing slash, es la raíz, o parece ser un archivo (tiene punto), continuamos
    if (pathname === '/' || pathname.endsWith('/') || pathname.includes('.')) {
        return next();
    }

    // Redireccionar a la misma ruta con trailing slash, preservando los query params
    return context.redirect(`${pathname}/${search}`, 301);
});

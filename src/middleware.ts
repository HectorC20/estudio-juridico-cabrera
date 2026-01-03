import { defineMiddleware } from "astro:middleware";
import { SeoRedirectService } from "./services/SeoRedirectService";

export const onRequest = defineMiddleware(async (context, next) => {
  const currentPath = context.url.pathname;

  // Solo verificar redirecciones en rutas de página, ignorar assets
  if (!currentPath.startsWith("/_astro") && !currentPath.startsWith("/api") && !currentPath.includes(".")) {
    const redirect = await SeoRedirectService.checkRedirect(currentPath);
    
    if (redirect) {
      return context.redirect(redirect.destination, redirect.type);
    }
  }

  return next();
});

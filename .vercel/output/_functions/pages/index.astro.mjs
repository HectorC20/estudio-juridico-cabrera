/* empty css                                 */
import { a as createComponent, m as maybeRenderHead, d as renderTemplate, c as createAstro, e as addAttribute, h as renderHead, r as renderComponent, b as renderSlot, g as renderScript } from '../chunks/astro/server_DPPTnymn.mjs';
import { $ as $$Navbar, a as $$Footer, g as getCollection } from '../chunks/_astro_content_thsGtm6o.mjs';
/* empty css                                  */
/* empty css                                 */
/* empty css                                 */
import { $ as $$FormattedDate } from '../chunks/FormattedDate_CaLaONUg.mjs';
import { A as API_BASE_URL } from '../chunks/consts_aQvBWVUu.mjs';
export { renderers } from '../renderers.mjs';

const $$MainHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="section-header "> <div class="cont-add-header"> <div class="cont-header-container"> <a href="https://maps.app.goo.gl/gr8qfGxjSucATdyL8" class=" underline-on-hover text-primaryLocal flex items-center gap-2 animate-from-left" target="_blank"> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1730866426/maps_xmvxtv.svg" alt="icon-maps" class="icon"> <span class="hidden lg:block">Av. Fernando Belaunde Terry 3071, Tumbes 24002</span> </a> <ul class="contact-info flex items-center gap-4 animate-from-right"> <li class="flex items-center gap-2"> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1730866425/telefono_cfsdbv.svg" alt="icon-telefono" class="icon"> <a href="tel:965860535" class=" phone-number">965 860 535</a> <a href="tel:965860535" class="phone-number-new">T1</a> | <a href="tel:919198108" class="phone-number-new">T2</a> <a href="tel:919198108" class="phone-number">919 198 108</a> </li> <li> <ul class="social-icons flex gap-2"> <li><a href="https://www.facebook.com/estudiojuridicocabrerapuntocom" class="social-link"><img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/facebook_jsyy4v.svg" alt="icon-facebook" class="icon"></a></li> <li><a class="social-link"><img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/linkedin_zzh7cn.svg" alt="icon-linkedin" class="icon"></a></li> <li><a class="social-link"><img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1730866425/instagram_skwz3l.svg" alt="icon-instagram" class="icon"></a></li> <li><a class="social-link"><img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1730866426/youtube_tbess7.svg" alt="icon-youtube" class="icon"></a></li> </ul> </li> </ul> </div> </div> <div class="header-mobile-menu"> <div class="drawer"> <input id="header-drawer" type="checkbox" class="drawer-toggle"> <div class="drawer-content"> <!-- Page content here --> <label for="header-drawer"> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728507447/menu_f7euiu.svg" alt="Menu icon" class="header-logo"> </label> </div> <div class="drawer-side"> <label for="header-drawer" aria-label="Cerrar menú lateral" class="drawer-overlay"></label> <div class="h-3 w-[70%] bg-tertiaryLocal z-[1]"></div> <ul class="menu-drawer list-menu-mobile"> <li><a href="/" aria-label="Ir al inicio"><img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728397864/logo-horizontal-2-transparente-300x79_ymczkz.png" alt="Logo para telefono" class="header-logo-menu-drawer"></a></li> <!-- Sidebar content here --> <li><a href="/"><img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728398825/home_tf4fcc.svg" alt="Inicio" class="icon-menu-mobile"> INICIO</a></li> <li><a href="/nosotros"><img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728435593/nosotros_a07ra2.svg" alt="Nosotros icono para telefono" class="icon-menu-mobile">NOSOTROS</a></li> <li><a href="/especialidades"><img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728435592/especialidades_ii5mme.svg" alt="Especialidades" class="icon-menu-mobile">ESPECIALIDADES</a></li> <li><a href="/alianzas"><img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728440797/clientes_gs7lsg.svg" alt="Especialidades" class="icon-menu-mobile">ALIANZAS</a></li> <li><a href="/contactenos"><img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728435592/contactenos_lklald.svg" alt="Especialidades" class="icon-menu-mobile">CONTÁCTENOS</a></li> <li><a href="/brochure"><img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728435591/brochure_nur47r.svg" alt="Especialidades" class="icon-menu-mobile">BROCHURE</a></li> </ul> </div> </div> </div> <div class="header-container"> <a href="/" class="-mt-[10vh]"> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728397864/logo-horizontal-2-transparente-300x79_ymczkz.png" alt="logo" class="h-[12vh] 2xl:h-[10vh] pb-1.5 px-1.5  absolute "> <!-- Usa logoEx como fuente de la imagen --> </a> <nav class="section-nav"> <a href="/nosotros"> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728435593/nosotros_a07ra2.svg" alt="p" class="h-[5vh]"> <button type="button">NOSOTROS</button> </a> <a href="/especialidades"> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728435592/especialidades_ii5mme.svg" alt="p" class="h-[5vh]"> <button type="button">ESPECIALIDADES</button> </a> <a href="/alianzas"> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728440797/clientes_gs7lsg.svg" alt="p" class="h-[5vh]"> <button type="button">ALIANZAS</button> </a> <a href="/contactenos"> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728435592/contactenos_lklald.svg" alt="p" class="h-[5vh]"> <button type="button">CONTÁCTENOS</button> </a> <a href="/brochure"> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728435591/brochure_nur47r.svg" alt="p" class="h-[5vh]"> <button type="button">BROCHURE</button> </a> </nav> </div> </header>`;
}, "F:/estudio-juridico-cabrera/src/components/partials/MainHeader.astro", void 0);

const $$Astro$1 = createAstro("https://estudio-juridico-cabrera.vercel.app");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!--    Font externo--><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">${renderHead()}</head> <body class=""> ${renderComponent($$result, "MainHeader", $$MainHeader, {})} ${renderComponent($$result, "NavBar", $$Navbar, {})} <div class=" min-h-screen "> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "ScriptAnimation", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "F:/estudio-juridico-cabrera/src/components/ScriptAnimation.vue", "client:component-export": "default" })} </body></html>`;
}, "F:/estudio-juridico-cabrera/src/layouts/MainLayout.astro", void 0);

const $$SectionNosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-nosotros" data-astro-cid-4ikp45u7> <div class="container-nosotros" data-astro-cid-4ikp45u7> <!-- Imagen --> <a class="image-container-nosotros" href="/especialidades" data-astro-cid-4ikp45u7> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1731712518/bg-info-nosotros_hmoqs4.png" alt="Nosotros" loading="lazy" class="image-nosotros" data-astro-cid-4ikp45u7> </a> <!-- Contenido --> <div class="content-nosotros" data-astro-cid-4ikp45u7> <h1 class="title-nosotros" data-astro-cid-4ikp45u7>
Especialidades Legales que Marcan la Diferencia
</h1> <p class="description-nosotros" data-astro-cid-4ikp45u7>
¡Protegemos tus derechos con soluciones legales personalizadas y efectivas!
</p> <a href="/especialidades" class=" w-52 2xl:w-74 mx-auto lg:mx-0" data-astro-cid-4ikp45u7> <button class="btn bg-secondaryLocal text-primaryLocal text-xl hover:bg-tertiaryLocal 2xl:text-2xl ml-6" data-astro-cid-4ikp45u7>
Descubre cómo
</button> </a> </div> </div> </section>`;
}, "F:/estudio-juridico-cabrera/src/components/home/SectionNosotros.astro", void 0);

const $$Astro = createAstro("https://estudio-juridico-cabrera.vercel.app");
const $$CardAlliances = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardAlliances;
  const { src, alt, nombre, pubDate } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="section__card__alianzas" data-astro-cid-r3vuguvr> <img class="section__card__img__alianzas"${addAttribute(src, "src")}${addAttribute(alt, "alt")} data-astro-cid-r3vuguvr> </div>`;
}, "F:/estudio-juridico-cabrera/src/components/CardAlliances.astro", void 0);

const $$SectionAsociados = createComponent(async ($$result, $$props, $$slots) => {
  const postsAssociate = (await getCollection("asociados")).sort(
    (a, b) => {
      const aPubDate = a.data.pubDate ? a.data.pubDate.valueOf() : 0;
      const bPubDate = b.data.pubDate ? b.data.pubDate.valueOf() : 0;
      return bPubDate - aPubDate;
    }
  );
  return renderTemplate`${maybeRenderHead()}<div class="section__container" data-astro-cid-2dxoefwf> <h2 class="section__title__asociados " data-astro-cid-2dxoefwf>Alianzas Globales</h2> <div id="swiper-associate" class="swiper-container" data-astro-cid-2dxoefwf> <div class="swiper-wrapper" data-astro-cid-2dxoefwf> ${postsAssociate.map((post) => renderTemplate`<div class="swiper-slide" data-astro-cid-2dxoefwf> ${renderComponent($$result, "CardAlliances", $$CardAlliances, { "src": post.data.src || "https://res.cloudinary.com/dixzojb4s/image/upload/v1729437484/cliente3_sjbzeo.jpg", "alt": post.data.alt || "imagen del asociado", "pubDate": post.data.pubDate || /* @__PURE__ */ new Date(), "nombre": post.data.nombre || "Nombre desconocido", "data-astro-cid-2dxoefwf": true })} </div>`)} </div> </div> </div> ${renderScript($$result, "F:/estudio-juridico-cabrera/src/components/home/SectionAsociados.astro?astro&type=script&index=0&lang.ts")}`;
}, "F:/estudio-juridico-cabrera/src/components/home/SectionAsociados.astro", void 0);

const $$SectionLoMejor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-container" data-astro-cid-e266z5ly> <div class="container-base" data-astro-cid-e266z5ly> <div class="section-title-container" data-astro-cid-e266z5ly> <h2 class="section-title" data-astro-cid-e266z5ly>
Nuestros Servicios y Compromisos
</h2> </div> <div class="card-container" data-astro-cid-e266z5ly> <div class="card" data-astro-cid-e266z5ly> <div class="card-content" data-astro-cid-e266z5ly> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="card-icon" viewBox="0 0 24 24" data-astro-cid-e266z5ly> <path d="M22 11.08V12a10 10 0 11-5.93-9.14" data-astro-cid-e266z5ly></path> <path d="M22 4L12 14.01l-3-3" data-astro-cid-e266z5ly></path> </svg> <span class="card-title" data-astro-cid-e266z5ly>Asesoría Legal Personalizada</span> </div> </div> <div class="card" data-astro-cid-e266z5ly> <div class="card-content" data-astro-cid-e266z5ly> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="card-icon" viewBox="0 0 24 24" data-astro-cid-e266z5ly> <path d="M22 11.08V12a10 10 0 11-5.93-9.14" data-astro-cid-e266z5ly></path> <path d="M22 4L12 14.01l-3-3" data-astro-cid-e266z5ly></path> </svg> <span class="card-title" data-astro-cid-e266z5ly>Revisión y Redacción de Documentos</span> </div> </div> <div class="card" data-astro-cid-e266z5ly> <div class="card-content" data-astro-cid-e266z5ly> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="card-icon" viewBox="0 0 24 24" data-astro-cid-e266z5ly> <path d="M22 11.08V12a10 10 0 11-5.93-9.14" data-astro-cid-e266z5ly></path> <path d="M22 4L12 14.01l-3-3" data-astro-cid-e266z5ly></path> </svg> <span class="card-title" data-astro-cid-e266z5ly>Gestión de Trámites Legales</span> </div> </div> <div class="card" data-astro-cid-e266z5ly> <div class="card-content" data-astro-cid-e266z5ly> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="card-icon" viewBox="0 0 24 24" data-astro-cid-e266z5ly> <path d="M22 11.08V12a10 10 0 11-5.93-9.14" data-astro-cid-e266z5ly></path> <path d="M22 4L12 14.01l-3-3" data-astro-cid-e266z5ly></path> </svg> <span class="card-title" data-astro-cid-e266z5ly>Representación ante Autoridades</span> </div> </div> <div class="card" data-astro-cid-e266z5ly> <div class="card-content" data-astro-cid-e266z5ly> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="card-icon" viewBox="0 0 24 24" data-astro-cid-e266z5ly> <path d="M22 11.08V12a10 10 0 11-5.93-9.14" data-astro-cid-e266z5ly></path> <path d="M22 4L12 14.01l-3-3" data-astro-cid-e266z5ly></path> </svg> <span class="card-title" data-astro-cid-e266z5ly>Consultas y Seguimiento Constante</span> </div> </div> <div class="card" data-astro-cid-e266z5ly> <div class="card-content" data-astro-cid-e266z5ly> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="card-icon" viewBox="0 0 24 24" data-astro-cid-e266z5ly> <path d="M22 11.08V12a10 10 0 11-5.93-9.14" data-astro-cid-e266z5ly></path> <path d="M22 4L12 14.01l-3-3" data-astro-cid-e266z5ly></path> </svg> <span class="card-title" data-astro-cid-e266z5ly>Resolución Ágil de Contingencias</span> </div> </div> </div> </div> </section>`;
}, "F:/estudio-juridico-cabrera/src/components/home/SectionLoMejor.astro", void 0);

const $$Loading = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`loading-screen ${"" }`, "class")} data-astro-cid-vyo2hgjc> <div class="content-wrapper" data-astro-cid-vyo2hgjc> <div class="image-container relative" data-astro-cid-vyo2hgjc> <!-- Imagen para teléfonos --> <img class="content__image sm:hidden" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1734062401/fondo_para_telefonos_b77hfx.jpg" alt="Logo 30 años para teléfonos" data-astro-cid-vyo2hgjc> <!-- Imagen para pantallas grandes --> <img class="content__image hidden sm:block" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1734061232/FONDO_DE_PANTALLA_urhcoa.jpg" alt="Logo 30 años para laptops y tablets" data-astro-cid-vyo2hgjc> <!-- Capa de animación del borde --> <div class="absolute inset-0 rounded-xl border-4 border-transparent animate-border-loading" data-astro-cid-vyo2hgjc></div> </div> </div> </div> `;
}, "F:/estudio-juridico-cabrera/src/components/loader/Loading.astro", void 0);

const $$SectionNoticesHome = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch(`${API_BASE_URL}/news/newsLat`);
  const latestNews = await response.json();
  return renderTemplate`${maybeRenderHead()}<section class="my-12" data-astro-cid-5d7lf4uy> <div class="part__noticias__home" data-astro-cid-5d7lf4uy> <h3 class="title__notices__home" data-astro-cid-5d7lf4uy> Novedades</h3> <a href="/noticias" class=" btn__notices__home" data-astro-cid-5d7lf4uy><button data-astro-cid-5d7lf4uy> Ver más</button></a> </div> <ul data-astro-cid-5d7lf4uy> ${latestNews.map((news) => renderTemplate`<li class="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105" data-astro-cid-5d7lf4uy> <a${addAttribute(`/noticias/${news.newsName}/`, "href")} class="block " data-astro-cid-5d7lf4uy> <img${addAttribute(news.heroImage, "src")} alt="" class="w-full h-48 object-cover" data-astro-cid-5d7lf4uy> <div class="text-overlay " data-astro-cid-5d7lf4uy> <h4 class="title text-lg 2xl:text-xl font-semibold text-secondaryLocal" data-astro-cid-5d7lf4uy>${news.title}</h4> <p class="date 2xl:text-xl text-secondaryLocal" data-astro-cid-5d7lf4uy> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": new Date(news.pubDate), "data-astro-cid-5d7lf4uy": true })} </p> <div class="more__des" data-astro-cid-5d7lf4uy>Leer Más</div> <div class="h-1 w-full bg-tertiaryLocal absolute bottom-0 left-0 rounded-b-md " data-astro-cid-5d7lf4uy></div> </div> </a> </li>`)} </ul> </section>`;
}, "F:/estudio-juridico-cabrera/src/components/home/SectionNoticesHome.astro", void 0);

const $$SectionLogros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section__logros" data-astro-cid-ug7ci6ku> <div class="logros__container" data-astro-cid-ug7ci6ku> <ul class="logros__lista" data-astro-cid-ug7ci6ku> <li class="logros__item" data-astro-cid-ug7ci6ku> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1732331613/clientes_vpfaik.svg" alt="clientes" data-astro-cid-ug7ci6ku> <div class="logros__text" data-astro-cid-ug7ci6ku> <span data-astro-cid-ug7ci6ku>+3000</span> <span data-astro-cid-ug7ci6ku>Clientes</span> </div> </li> <li class="logros__item" data-astro-cid-ug7ci6ku> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1732331627/casos_gkd2pr.svg" alt="casos" data-astro-cid-ug7ci6ku> <div class="logros__text" data-astro-cid-ug7ci6ku> <span data-astro-cid-ug7ci6ku>+4000</span> <span data-astro-cid-ug7ci6ku>Casos</span> </div> </li> <li class="logros__item" data-astro-cid-ug7ci6ku> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1732331626/desde_pxz98u.svg" alt="desde" data-astro-cid-ug7ci6ku> <div class="logros__text" data-astro-cid-ug7ci6ku> <span data-astro-cid-ug7ci6ku>+30</span> <span data-astro-cid-ug7ci6ku>Años de Experiencia</span> </div> </li> <li class="logros__item" data-astro-cid-ug7ci6ku> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1732331626/certificados_qiwith.svg" alt="certificados" data-astro-cid-ug7ci6ku> <div class="logros__text" data-astro-cid-ug7ci6ku> <span data-astro-cid-ug7ci6ku>+200</span> <span data-astro-cid-ug7ci6ku>Certificados</span> </div> </li> </ul> </div> </section>`;
}, "F:/estudio-juridico-cabrera/src/components/home/SectionLogros.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> ${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "ABOGADOS EN TUMBES | ESTUDIO JURIDICO CABRERA", "description": "abogados", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "LoadingScreen", $$Loading, { "data-astro-cid-j7pv25f6": true })}${maybeRenderHead()}<div id="main-content" class="hidden" data-astro-cid-j7pv25f6>${renderComponent($$result2, "CarouselBlog", null, { "client:only": "vue", "client:component-hydration": "only", "data-astro-cid-j7pv25f6": true, "client:component-path": "F:/estudio-juridico-cabrera/src/components/CarouselBlog.vue", "client:component-export": "default" })}${renderComponent($$result2, "SectionLogros", $$SectionLogros, { "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "SectionNosotros", $$SectionNosotros, { "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "SectionAsociados", $$SectionAsociados, { "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "SectionLoMejor", $$SectionLoMejor, { "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "SectionNoticesHome", $$SectionNoticesHome, { "data-astro-cid-j7pv25f6": true })}</div>${renderScript($$result2, "F:/estudio-juridico-cabrera/src/pages/index.astro?astro&type=script&index=0&lang.ts")}` })}</html>`;
}, "F:/estudio-juridico-cabrera/src/pages/index.astro", void 0);

const $$file = "F:/estudio-juridico-cabrera/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

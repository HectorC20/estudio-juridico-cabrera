/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate, r as renderComponent, g as renderScript } from '../chunks/astro/server_DPPTnymn.mjs';
import { $ as $$Layout } from '../chunks/Layout_BMCzS7fv.mjs';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_DBs57xFC.mjs';
import { $ as $$SectionPages } from '../chunks/SectionPages_aB0vEsnn.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://estudio-juridico-cabrera.vercel.app");
const $$CardClient = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardClient;
  const { src, alt, nombre, pubDate } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="section__card"> <img class="section__card__img"${addAttribute(src, "src")}${addAttribute(alt, "alt")}> <div class="section__card__content"> <h3 class="section__card__title">${nombre}</h3> <p class="section__card__desc hidden">${pubDate.toLocaleDateString()}</p> </div> </div>`;
}, "F:/estudio-juridico-cabrera/src/components/CardClient.astro", void 0);

const $$SectionAlliances = createComponent(async ($$result, $$props, $$slots) => {
  const postsClient = (await getCollection("alianzas")).sort(
    (a, b) => {
      const aPubDate = a.data.pubDate ? a.data.pubDate.valueOf() : 0;
      const bPubDate = b.data.pubDate ? b.data.pubDate.valueOf() : 0;
      return bPubDate - aPubDate;
    }
  );
  const postsAssociate = (await getCollection("asociados")).sort(
    (a, b) => {
      const aPubDate = a.data.pubDate ? a.data.pubDate.valueOf() : 0;
      const bPubDate = b.data.pubDate ? b.data.pubDate.valueOf() : 0;
      return bPubDate - aPubDate;
    }
  );
  return renderTemplate`${renderComponent($$result, "SectionPages", $$SectionPages, { "title": "ALIANZAS", "description": "Clientes destacados y asociados globales que fortalecen nuestro compromiso con la excelencia legal." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="section__container"> <h2 class="section__heading">CLIENTES</h2> <!-- Swiper para clientes --> <div id="swiper-client" class="swiper-container"> <div class="swiper-wrapper"> ${postsClient.map((post) => renderTemplate`<div class="swiper-slide"> ${renderComponent($$result2, "CardClient", $$CardClient, { "src": post.data.src || "https://res.cloudinary.com/dixzojb4s/image/upload/v1729437484/cliente3_sjbzeo.jpg", "alt": post.data.alt || "imagen del cliente", "nombre": post.data.nombre || "Nombre desconocido", "pubDate": post.data.pubDate || /* @__PURE__ */ new Date() })} </div>`)} </div> <div id="swiper-button-next-client" class="swiper-button-next"></div> <div id="swiper-button-prev-client" class="swiper-button-prev"></div> <div id="swiper-pagination-client" class="swiper-pagination"></div> </div> <h2 class="section__heading pt-8">ASOCIADOS GLOBALES</h2> <!-- Swiper para asociados --> <div id="swiper-associate" class="swiper-container"> <div class="swiper-wrapper"> ${postsAssociate.map((post) => renderTemplate`<div class="swiper-slide"> ${renderComponent($$result2, "CardClient", $$CardClient, { "src": post.data.src || "https://res.cloudinary.com/dixzojb4s/image/upload/v1729437484/cliente3_sjbzeo.jpg", "alt": post.data.alt || "imagen del cliente", "nombre": post.data.nombre || "Nombre desconocido", "pubDate": post.data.pubDate || /* @__PURE__ */ new Date() })} </div>`)} </div> <div id="swiper-button-next-associate" class="swiper-button-next"></div> <div id="swiper-button-prev-associate" class="swiper-button-prev"></div> <div id="swiper-pagination-associate" class="swiper-pagination"></div> </div> </div> ${renderScript($$result2, "F:/estudio-juridico-cabrera/src/components/home/SectionAlliances.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "F:/estudio-juridico-cabrera/src/components/home/SectionAlliances.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ALIANZAS | ESTUDIO JUR\xCDDICO CABRERA", "description": " este es una descripcion de clientes" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionAlliances", $$SectionAlliances, {})} ` })}`;
}, "F:/estudio-juridico-cabrera/src/pages/alianzas/index.astro", void 0);

const $$file = "F:/estudio-juridico-cabrera/src/pages/alianzas/index.astro";
const $$url = "/alianzas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

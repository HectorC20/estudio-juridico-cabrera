/* empty css                                 */
import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DPPTnymn.mjs';
import { $ as $$Layout } from '../chunks/Layout_BX7Iv-m3.mjs';
import { $ as $$SectionPages } from '../chunks/SectionPages_aB0vEsnn.mjs';
import { g as getCollection } from '../chunks/_astro_content_thsGtm6o.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const postsClient = (await getCollection("especialidades")).sort(
    (a, b) => a.data.title.localeCompare(b.data.title, "es")
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ESPECIALIDADES | ESTUDIO JUR\xCDDICO CABRERA", "description": "descripcion de especialidades" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionPages", $$SectionPages, { "title": "ESPECIALIDADES", "description": "Ofrecemos una amplia gama de servicios legales especializados para satisfacer las necesidades de nuestros clientes." }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="py-12"> <div class="container mx-auto px-6"> <!-- Grid de especialidades --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Iteración sobre cada especialidad --> ${postsClient.map((post) => renderTemplate`<div class="bg-secondaryLocal shadow-md rounded-lg p-6"> <img${addAttribute(post.data.src, "src")}${addAttribute(post.data.alt, "alt")} class="w-full h-40 object-cover rounded-md mb-4"> <h3 class="text-2xl font-semibold text-primaryLocal mb-2">${post.data.title}</h3> <p class="text-primaryLocal mb-4"> ${post.data.description} </p> <a${addAttribute(`/especialidades/${post.slug}`, "href")} class="text-primaryLocal font-bold hover:underline">Leer más &rarr;</a> </div>`)} </div> </div> </section> ` })} ` })}`;
}, "F:/estudio-juridico-cabrera/src/pages/especialidades/index.astro", void 0);

const $$file = "F:/estudio-juridico-cabrera/src/pages/especialidades/index.astro";
const $$url = "/especialidades";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

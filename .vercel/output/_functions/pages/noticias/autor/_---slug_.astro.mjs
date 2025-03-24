/* empty css                                       */
import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../chunks/astro/server_DPPTnymn.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_BMCzS7fv.mjs';
import { $ as $$SectionPages } from '../../../chunks/SectionPages_aB0vEsnn.mjs';
import { A as API_BASE_URL } from '../../../chunks/consts_aQvBWVUu.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://estudio-juridico-cabrera.vercel.app");
async function getStaticPaths() {
  const apiUrl = `${API_BASE_URL}/author/list`;
  const response = await fetch(apiUrl);
  const authors = await response.json();
  return authors.map((author) => ({
    params: { slug: author.id },
    props: author
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const authorId = slug;
  const authorApiUrl = `${API_BASE_URL}/author/author?id=${authorId}`;
  const newsApiUrl = `${API_BASE_URL}/author/newsByAuthor?id=${authorId}`;
  const [authorResponse, newsResponse] = await Promise.all([
    fetch(authorApiUrl),
    fetch(newsApiUrl)
  ]);
  const author = await authorResponse.json();
  const newsList = await newsResponse.json();
  if (author.error) {
    return new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  }
  function formatName(name, lastname) {
    return `${name} ${lastname}`.replace(/([A-ZÁÉÍÓÚÜ])([A-ZÁÉÍÓÚÜ]+)/g, "$1$2").replace(/\s+/g, " ").trim();
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AUTOR - Noticias", "description": "Conoce m\xE1s sobre nuestros autores y sus publicaciones.", "data-astro-cid-f5ood4or": true }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "SectionPages", $$SectionPages, { "title": "AUTOR", "description": "Ofrecemos una amplia gama de servicios legales especializados para satisfacer las necesidades de nuestros clientes.", "data-astro-cid-f5ood4or": true }, { "default": async ($$result3) => renderTemplate`${maybeRenderHead()}<main class="container mx-auto px-4 py-8" data-astro-cid-f5ood4or><section class="bg-white shadow-lg rounded-lg p-6 md:flex md:items-center md:gap-6" data-astro-cid-f5ood4or><img class="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-200"${addAttribute(author.data.profileImage, "src")}${addAttribute(`Foto de ${author.data.name}`, "alt")} data-astro-cid-f5ood4or><div class="mt-4 md:mt-0 text-center md:text-left" data-astro-cid-f5ood4or><h1 class="text-2xl font-bold text-gray-800" data-astro-cid-f5ood4or>${formatName(author.data.name, author.data.lastname)}</h1><p class="mt-2 text-gray-600" data-astro-cid-f5ood4or>${author.data.description || "Este autor no tiene descripci\xF3n."}</p><div class="text-gray-600 flex flex-col" data-astro-cid-f5ood4or>
Redes:
<div class="flex flex-wrap icons__publ gap-3" data-astro-cid-f5ood4or>${author.data.facebook && renderTemplate`<a${addAttribute(author.data.facebook, "href")} target="_blank" data-astro-cid-f5ood4or><img alt="facebook" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/facebook_jsyy4v.svg" data-astro-cid-f5ood4or></a>`}${author.data.instagram && renderTemplate`<a${addAttribute(author.data.instagram, "href")} target="_blank" data-astro-cid-f5ood4or><img alt="instagram" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946785/twitter_j5muqs.svg" data-astro-cid-f5ood4or></a>`}${author.data.linkedin && renderTemplate`<a${addAttribute(author.data.linkedin, "href")} target="_blank" data-astro-cid-f5ood4or><img alt="linkedin" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/linkedin_zzh7cn.svg" data-astro-cid-f5ood4or></a>`}</div></div></div></section><section class="mt-8" data-astro-cid-f5ood4or><h2 class="text-xl font-semibold text-gray-800" data-astro-cid-f5ood4or>Noticias escritas por ${author.data.name}:</h2><ul class="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3" data-astro-cid-f5ood4or>${newsList.map((news) => renderTemplate`<li class="bg-white shadow-md rounded-lg overflow-hidden" data-astro-cid-f5ood4or><a${addAttribute(`/noticias/${news.slug}`, "href")} class="block hover:opacity-90" data-astro-cid-f5ood4or><img class="w-full h-48 object-cover"${addAttribute(news.heroImage, "src")} alt="Imagen de la noticia" data-astro-cid-f5ood4or><div class="p-4 bg-secondaryLocal text-primaryLocal" data-astro-cid-f5ood4or><h3 class="text-lg font-semibold" data-astro-cid-f5ood4or>${news.title}</h3></div></a></li>`)}</ul></section></main>` })}` })}`;
}, "F:/estudio-juridico-cabrera/src/pages/noticias/autor/[...slug].astro", void 0);

const $$file = "F:/estudio-juridico-cabrera/src/pages/noticias/autor/[...slug].astro";
const $$url = "/noticias/autor/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

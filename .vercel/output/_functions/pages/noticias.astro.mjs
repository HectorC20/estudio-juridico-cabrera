/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate, r as renderComponent } from '../chunks/astro/server_DPPTnymn.mjs';
import { $ as $$Layout } from '../chunks/Layout_BX7Iv-m3.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_CaLaONUg.mjs';
/* empty css                                 */
import { A as API_BASE_URL } from '../chunks/consts_aQvBWVUu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://estudio-juridico-cabrera.vercel.app");
const $$SearchNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchNotice;
  const currentURL = Astro2.url.href;
  return renderTemplate`${maybeRenderHead()}<div class="cont__publ" data-astro-cid-sq6h6cj2> <div class="icons__publ" data-astro-cid-sq6h6cj2> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`, "href")} target="_blank" data-astro-cid-sq6h6cj2> <img alt="facebook" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/facebook_jsyy4v.svg" data-astro-cid-sq6h6cj2> </a> <a${addAttribute(`https://twitter.com/intent/tweet?url=${currentURL}&text=Check%20out%20this%20page`, "href")} target="_blank" data-astro-cid-sq6h6cj2> <img alt="twitter" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946785/twitter_j5muqs.svg" data-astro-cid-sq6h6cj2> </a> <a${addAttribute(`https://api.whatsapp.com/send?text=${currentURL}`, "href")} target="_blank" data-astro-cid-sq6h6cj2> <img alt="whatsapp" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946785/whatsapp_ssklfl.svg" data-astro-cid-sq6h6cj2> </a> <a${addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`, "href")} target="_blank" data-astro-cid-sq6h6cj2> <img alt="linkedin" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/linkedin_zzh7cn.svg" data-astro-cid-sq6h6cj2> </a> <a${addAttribute(`https://pinterest.com/pin/create/button/?url=${currentURL}&media=URL_DE_LA_IMAGEN&description=Descripci\xF3n%20de%20tu%20p\xE1gina`, "href")} target="_blank" data-astro-cid-sq6h6cj2> <img alt="pinterest" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/pinterest_vl2gtg.svg" data-astro-cid-sq6h6cj2> </a> </div> <div class="form-control" data-astro-cid-sq6h6cj2> <input type="text" placeholder="Buscar " class="input input-bordered w-[75vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] xl:w-[25vw] mx-2 my-2 lg:my-0 " data-astro-cid-sq6h6cj2> </div> </div>`;
}, "F:/estudio-juridico-cabrera/src/components/SearchNotice.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const apiUrl = `${API_BASE_URL}/news/newsList`;
  let newsList = [];
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    newsList = await response.json();
  } catch (error) {
    console.error("Error al obtener las noticias:", error);
    newsList = [];
  }
  const sortedNews = newsList.sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "NOTICIAS | ESTUDIO JURIDICO CABRERA", "description": "Las noticias de ESTUDIO JUR\xCDDICO CABRERA", "data-astro-cid-memwiw23": true }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-memwiw23><section data-astro-cid-memwiw23><div class="hero-image" data-astro-cid-memwiw23><div class="hero-cont" data-astro-cid-memwiw23><h1 data-astro-cid-memwiw23>NOTICIAS</h1><h2 data-astro-cid-memwiw23>Infórmate sobre las últimas novedades legales y actualizaciones del Estudio Jurídico Cabrera.
                        Accede a análisis de cambios normativos, resoluciones clave y consejos prácticos de nuestros
                        expertos.</h2></div><img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1729025386/noticias_sa4pep.jpg" alt="Noticias de ESTUDIO " class="" data-astro-cid-memwiw23>${renderComponent($$result2, "SearchNotice", $$SearchNotice, { "data-astro-cid-memwiw23": true })}</div><div class="flex flex-col" data-astro-cid-memwiw23><ul data-astro-cid-memwiw23>${sortedNews.map((post) => renderTemplate`<li class="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105" data-astro-cid-memwiw23><a${addAttribute(`/noticias/${post.newsName}/`, "href")} class="block" data-astro-cid-memwiw23><img${addAttribute(post.heroImage || "https://via.placeholder.com/400x200", "src")} alt="" class="w-full h-48 object-cover" data-astro-cid-memwiw23><div class="text-overlay" data-astro-cid-memwiw23><h4 class="title text-lg 2xl:text-xl font-semibold text-secondaryLocal" data-astro-cid-memwiw23>${post.title}</h4><p class="date 2xl:text-xl text-secondaryLocal" data-astro-cid-memwiw23>${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": new Date(post.pubDate), "data-astro-cid-memwiw23": true })}</p><div class="more__des" data-astro-cid-memwiw23>Leer Más</div><div class="h-1 w-full bg-tertiaryLocal absolute bottom-0 left-0 rounded-b-md" data-astro-cid-memwiw23></div></div></a></li>`)}</ul></div></section></main>` })}`;
}, "F:/estudio-juridico-cabrera/src/pages/noticias/index.astro", void 0);

const $$file = "F:/estudio-juridico-cabrera/src/pages/noticias/index.astro";
const $$url = "/noticias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                 */
import { c as createAstro, a as createComponent, d as renderTemplate, e as addAttribute, m as maybeRenderHead, r as renderComponent } from '../chunks/astro/server_uab8IH_Z.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrMvixnz.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_BGJ35KNd.mjs';
import { A as API_BASE_URL } from '../chunks/consts_aQvBWVUu.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro = createAstro("https://estudio-juridico-cabrera.vercel.app");
const $$SearchNotice = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchNotice;
  const apiUrl = `${API_BASE_URL}/news/newsByTitle`;
  const currentURL = Astro2.url.href;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="cont__publ"', ' data-astro-cid-sq6h6cj2> <div class="icons__publ" data-astro-cid-sq6h6cj2> <a', ' target="_blank" data-astro-cid-sq6h6cj2> <img alt="facebook" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/facebook_jsyy4v.svg" data-astro-cid-sq6h6cj2> </a> <a', ' target="_blank" data-astro-cid-sq6h6cj2> <img alt="twitter" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946785/twitter_j5muqs.svg" data-astro-cid-sq6h6cj2> </a> <a', ' target="_blank" data-astro-cid-sq6h6cj2> <img alt="whatsapp" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946785/whatsapp_ssklfl.svg" data-astro-cid-sq6h6cj2> </a> <a', ' target="_blank" data-astro-cid-sq6h6cj2> <img alt="linkedin" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/linkedin_zzh7cn.svg" data-astro-cid-sq6h6cj2> </a> <a', ` target="_blank" data-astro-cid-sq6h6cj2> <img alt="pinterest" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/pinterest_vl2gtg.svg" data-astro-cid-sq6h6cj2> </a> </div> <div class="form-control" data-astro-cid-sq6h6cj2> <input id="searchInput" type="text" placeholder="Buscar Noticia" class="input text-secondaryLocal input-bordered w-[75vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] xl:w-[25vw] mx-2 my-2 lg:my-0 " data-astro-cid-sq6h6cj2> </div> </div> <script type="module">
    const searchInput = document.getElementById('searchInput');
    const apiUrl = document.querySelector('.cont__publ').dataset.apiUrl;

    searchInput.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const query = searchInput.value.trim();

            if (query.length > 2) {
                try {
                    const response = await fetch(\`\${apiUrl}?title=\${query}\`);
                    const result = await response.json();

                    document.dispatchEvent(new CustomEvent('newsSearchResults', { detail: result }));
                } catch (error) {
                    console.error('Error fetching search results:', error);
                }
            } else {
                document.dispatchEvent(new CustomEvent('newsSearchResults', { detail: [] }));
            }
        }
    });
<\/script>`], ["", '<div class="cont__publ"', ' data-astro-cid-sq6h6cj2> <div class="icons__publ" data-astro-cid-sq6h6cj2> <a', ' target="_blank" data-astro-cid-sq6h6cj2> <img alt="facebook" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/facebook_jsyy4v.svg" data-astro-cid-sq6h6cj2> </a> <a', ' target="_blank" data-astro-cid-sq6h6cj2> <img alt="twitter" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946785/twitter_j5muqs.svg" data-astro-cid-sq6h6cj2> </a> <a', ' target="_blank" data-astro-cid-sq6h6cj2> <img alt="whatsapp" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946785/whatsapp_ssklfl.svg" data-astro-cid-sq6h6cj2> </a> <a', ' target="_blank" data-astro-cid-sq6h6cj2> <img alt="linkedin" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/linkedin_zzh7cn.svg" data-astro-cid-sq6h6cj2> </a> <a', ` target="_blank" data-astro-cid-sq6h6cj2> <img alt="pinterest" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/pinterest_vl2gtg.svg" data-astro-cid-sq6h6cj2> </a> </div> <div class="form-control" data-astro-cid-sq6h6cj2> <input id="searchInput" type="text" placeholder="Buscar Noticia" class="input text-secondaryLocal input-bordered w-[75vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] xl:w-[25vw] mx-2 my-2 lg:my-0 " data-astro-cid-sq6h6cj2> </div> </div> <script type="module">
    const searchInput = document.getElementById('searchInput');
    const apiUrl = document.querySelector('.cont__publ').dataset.apiUrl;

    searchInput.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const query = searchInput.value.trim();

            if (query.length > 2) {
                try {
                    const response = await fetch(\\\`\\\${apiUrl}?title=\\\${query}\\\`);
                    const result = await response.json();

                    document.dispatchEvent(new CustomEvent('newsSearchResults', { detail: result }));
                } catch (error) {
                    console.error('Error fetching search results:', error);
                }
            } else {
                document.dispatchEvent(new CustomEvent('newsSearchResults', { detail: [] }));
            }
        }
    });
<\/script>`])), maybeRenderHead(), addAttribute(apiUrl, "data-api-url"), addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`, "href"), addAttribute(`https://twitter.com/intent/tweet?url=${currentURL}&text=Check%20out%20this%20page`, "href"), addAttribute(`https://api.whatsapp.com/send?text=${currentURL}`, "href"), addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`, "href"), addAttribute(`https://pinterest.com/pin/create/button/?url=${currentURL}&media=URL_DE_LA_IMAGEN&description=Descripci\xF3n%20de%20tu%20p\xE1gina`, "href"));
}, "F:/estudio-juridico-cabrera/src/components/SearchNotice.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
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
  return renderTemplate(_a || (_a = __template([`<script type="module">
    document.addEventListener('newsSearchResults', (event) => {
        const detail = event.detail;
        const newsList = document.getElementById('newsList');

        if (detail.length > 0) {
            newsList.innerHTML = ''; // Limpiar solo el contenido sin reemplazar la estructura ni los estilos

            detail.forEach((post) => {
                const listItem = document.createElement('li');
                listItem.className = "rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 min-h-[22em]";

                listItem.innerHTML = \`
                    <a href="/noticias/\${post.newsName}/" class="block">
                        <img src="\${post.heroImage || 'https://via.placeholder.com/400x200'}" alt="" class="w-full min-h-[12em] object-cover"/>
                        <div class="text-overlay">
                            <h4 class="title text-lg 2xl:text-xl font-semibold text-secondaryLocal">\${post.title}</h4>
                            <p class="date 2xl:text-xl text-secondaryLocal">\${new Date(post.pubDate).toLocaleDateString()}</p>
                            <div class="more__des">Leer M\xE1s</div>
                            <div class="h-1 w-full bg-tertiaryLocal absolute bottom-0 left-0 rounded-b-md"></div>
                        </div>
                    </a>
                \`;

                newsList.appendChild(listItem);
            });
        }
    });
<\/script> `, ""], [`<script type="module">
    document.addEventListener('newsSearchResults', (event) => {
        const detail = event.detail;
        const newsList = document.getElementById('newsList');

        if (detail.length > 0) {
            newsList.innerHTML = ''; // Limpiar solo el contenido sin reemplazar la estructura ni los estilos

            detail.forEach((post) => {
                const listItem = document.createElement('li');
                listItem.className = "rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 min-h-[22em]";

                listItem.innerHTML = \\\`
                    <a href="/noticias/\\\${post.newsName}/" class="block">
                        <img src="\\\${post.heroImage || 'https://via.placeholder.com/400x200'}" alt="" class="w-full min-h-[12em] object-cover"/>
                        <div class="text-overlay">
                            <h4 class="title text-lg 2xl:text-xl font-semibold text-secondaryLocal">\\\${post.title}</h4>
                            <p class="date 2xl:text-xl text-secondaryLocal">\\\${new Date(post.pubDate).toLocaleDateString()}</p>
                            <div class="more__des">Leer M\xE1s</div>
                            <div class="h-1 w-full bg-tertiaryLocal absolute bottom-0 left-0 rounded-b-md"></div>
                        </div>
                    </a>
                \\\`;

                newsList.appendChild(listItem);
            });
        }
    });
<\/script> `, ""])), renderComponent($$result, "Layout", $$Layout, { "title": "NOTICIAS | ESTUDIO JURIDICO CABRERA", "description": "Las noticias de ESTUDIO JUR\xCDDICO CABRERA" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="notice"> <section> <div class="hero-image"> <div class="hero-cont"> <h1>NOTICIAS</h1> <h2>Infórmate sobre las últimas novedades legales y actualizaciones del Estudio Jurídico Cabrera.
                        Accede a análisis de cambios normativos, resoluciones clave y consejos prácticos de nuestros
                        expertos.</h2> </div> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1729025386/noticias_sa4pep.jpg" alt="Noticias de ESTUDIO " class=""> ${renderComponent($$result2, "SearchNotice", $$SearchNotice, {})} </div> <div class="flex flex-col "> <ul id="newsList"> ${sortedNews.map((post) => renderTemplate`<li class="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 min-h-[22em]"> <a${addAttribute(`/noticias/${post.newsName}/`, "href")} class="block"> <img${addAttribute(post.heroImage || "https://via.placeholder.com/400x200", "src")} alt="" class="w-full min-h-[12em] object-cover"> <div class="text-overlay"> <h4 class="title text-lg 2xl:text-xl font-semibold text-secondaryLocal">${post.title}</h4> <p class="date 2xl:text-xl text-secondaryLocal"> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": new Date(post.pubDate) })} </p> <div class="more__des">Leer Más</div> <div class="h-1 w-full bg-tertiaryLocal absolute bottom-0 left-0 rounded-b-md"></div> </div> </a> </li>`)} </ul> </div> </section> </main> ` }));
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

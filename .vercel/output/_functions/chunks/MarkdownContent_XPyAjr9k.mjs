import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate, u as unescapeHTML } from './astro/server_DPPTnymn.mjs';
import { A as API_BASE_URL } from './consts_aQvBWVUu.mjs';
/* empty css                          */
import { g as getCollection } from './_astro_content_BkI9uxyV.mjs';
import { marked } from 'marked';

const $$Astro$1 = createAstro("https://estudio-juridico-cabrera.vercel.app");
const $$NewsTape = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NewsTape;
  const { slugActual } = Astro2.props;
  const apiUrl = `${API_BASE_URL}/news/newsLat`;
  const response = await fetch(apiUrl);
  const latestNews = await response.json();
  const normalizeSlug = (slug) => decodeURIComponent(slug).toLowerCase().trim();
  const uniquePosts = latestNews.filter((post) => normalizeSlug(post.newsName) !== normalizeSlug(slugActual)).slice(0, 4);
  return renderTemplate`${maybeRenderHead()}<div class="section__NewsTape" data-astro-cid-vakefwdn> <h4 data-astro-cid-vakefwdn>DESCUBRE MÁS NOTICIAS</h4> <ul class="list__News" data-astro-cid-vakefwdn> ${uniquePosts.map((post) => renderTemplate`<li data-astro-cid-vakefwdn> <a${addAttribute(`/noticias/${post.newsName}/`, "href")} data-astro-cid-vakefwdn> <img${addAttribute(post.heroImage || "/ruta/a/imagen/por/defecto.jpg", "src")}${addAttribute(post.title, "alt")} class="w-[240px] h-[140px] sm:w-[260px] sm:h-[160px] lg:w-[180px] lg:h-[115px] xl:w-[190px] xl:h-[120px] 2xl:w-full 2xl:h-[160px] rounded-xl shadow-secondaryLocal !important items-center mx-auto" data-astro-cid-vakefwdn> <h5 data-astro-cid-vakefwdn> ${post.title.length > 80 ? post.title.slice(0, 80) + "..." : post.title} </h5> </a> </li>`)} </ul> </div>`;
}, "F:/estudio-juridico-cabrera/src/components/NewsTape.astro", void 0);

const $$SpecialtiesTape = createComponent(async ($$result, $$props, $$slots) => {
  const postsClient = await getCollection("especialidades");
  const getRandomPosts = (posts, count) => {
    return [...posts].sort(() => 0.5 - Math.random()).slice(0, count);
  };
  const randomPosts = getRandomPosts(postsClient, 4);
  return renderTemplate`${maybeRenderHead()}<h2 class="especialidad-title-p" data-astro-cid-l3txvxaj>ESPECIALIDADES</h2> <div class="especialidades-grid" data-astro-cid-l3txvxaj> ${randomPosts.map((post) => renderTemplate`<a${addAttribute(`/especialidades/${post.slug}`, "href")} class="especialidad-card" data-astro-cid-l3txvxaj> <div data-astro-cid-l3txvxaj> <img${addAttribute(post.data.src, "src")}${addAttribute(post.data.alt, "alt")} class="especialidad-image" data-astro-cid-l3txvxaj> <h3 class="especialidad-title" data-astro-cid-l3txvxaj>${post.data.title}</h3> </div> </a>`)} </div>`;
}, "F:/estudio-juridico-cabrera/src/components/SpecialtiesTape.astro", void 0);

const $$Astro = createAstro("https://estudio-juridico-cabrera.vercel.app");
const $$MarkdownContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownContent;
  const { content } = Astro2.props;
  const htmlContent = marked(content);
  return renderTemplate`${maybeRenderHead()}<div>${unescapeHTML(htmlContent)}</div>`;
}, "F:/estudio-juridico-cabrera/src/components/MarkdownContent.astro", void 0);

export { $$NewsTape as $, $$SpecialtiesTape as a, $$MarkdownContent as b };

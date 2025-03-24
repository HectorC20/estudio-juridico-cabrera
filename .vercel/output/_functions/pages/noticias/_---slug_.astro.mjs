/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderSlot } from '../../chunks/astro/server_DPPTnymn.mjs';
/* empty css                                     */
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_CaLaONUg.mjs';
import { $ as $$Layout } from '../../chunks/Layout_uHwCwsJz.mjs';
import { $ as $$NewsTape, a as $$SpecialtiesTape, b as $$MarkdownContent } from '../../chunks/MarkdownContent_XPyAjr9k.mjs';
import { A as API_BASE_URL } from '../../chunks/consts_aQvBWVUu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://estudio-juridico-cabrera.vercel.app");
const $$NoticiasPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NoticiasPost;
  const { title, description, pubDate, updatedDate, heroImage, readingTime, categories, tags, author } = Astro2.props;
  const currentURL = Astro2.url.href;
  const slugActual = Astro2.url.pathname.split("/").filter(Boolean).pop();
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="py-[2rem] xl:py-[4rem]"><article><div class="hero-image">${heroImage && renderTemplate`<img${addAttribute(heroImage, "src")} alt="">`}<h1 class="notice__title">${title}</h1><div class="cont__publ">${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": new Date(pubDate) })}<div class="icons__publ"><a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`, "href")} target="_blank"><img alt="facebook" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/facebook_jsyy4v.svg"></a><a${addAttribute(`https://twitter.com/intent/tweet?url=${currentURL}&text=Check%20out%20this%20page`, "href")} target="_blank"><img alt="twitter" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946785/twitter_j5muqs.svg"></a><a${addAttribute(`https://api.whatsapp.com/send?text=${currentURL}`, "href")} target="_blank"><img alt="whatsapp" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946785/whatsapp_ssklfl.svg"></a><a${addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`, "href")} target="_blank"><img alt="linkedin" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/linkedin_zzh7cn.svg"></a><a${addAttribute(`https://pinterest.com/pin/create/button/?url=${currentURL}&media=URL_DE_LA_IMAGEN&description=Descripci\xF3n%20de%20tu%20p\xE1gina`, "href")} target="_blank"><img alt="pinterest" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/pinterest_vl2gtg.svg"></a></div></div></div><div class="flex flex-col lg:flex-row gap-6"><div class="prose"><div class="author-info"><a${addAttribute(`/noticias/autor/${author.id}`, "href")}><img${addAttribute(author.profileImage, "src")}${addAttribute(`Foto de perfil de ${author.name} ${author.lastname}`, "alt")} class="profile__user__news"><p>${author.name}${author.lastname}</p></a></div><div class="flex flex-row justify-between"><div class="text-primaryLocal font-semibold bg-secondaryLocal w-auto pt-2 px-2 rounded-t-xl ">Categorías ${categories}</div><div class="text-primaryLocal font-semibold bg-secondaryLocal w-36 pt-2 px-2 rounded-t-xl ">
Lectura - ${readingTime} min
</div></div><div class="title"><div class="date">${updatedDate && renderTemplate`<div class="last-updated-on">
Last updated on
${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": updatedDate })}</div>`}</div><hr></div>${renderSlot($$result2, $$slots["default"])}</div>${renderComponent($$result2, "NewsTape", $$NewsTape, { "slugActual": slugActual })}</div><div class="ml-[9vw] text-fifthLocal font-semibold  w-auto pt-2 px-2 rounded-t-xl ">Etiquetas: ${tags}</div></article>${renderComponent($$result2, "SpecialtiesTape", $$SpecialtiesTape, {})}</main>` })}</html>`;
}, "F:/estudio-juridico-cabrera/src/layouts/NoticiasPost.astro", void 0);

const $$Astro = createAstro("https://estudio-juridico-cabrera.vercel.app");
async function getStaticPaths() {
  const apiUrl = `${API_BASE_URL}/news/newsList`;
  const response = await fetch(apiUrl);
  const newsList = await response.json();
  return newsList.map((post) => ({
    params: { slug: post.newsName },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const postApiUrl = `${API_BASE_URL}/news/newsSlug?slug=${slug}`;
  const postResponse = await fetch(postApiUrl);
  const post = await postResponse.json();
  if (post.error) {
    return new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  }
  const { data, content } = post;
  const id_author = data.id_author;
  let authorData = {
    name: "Autor Desconocido",
    lastname: " ?? ??",
    profileImage: "https://via.placeholder.com/50"
  };
  if (id_author) {
    const authorApiUrl = `${API_BASE_URL}/author/author?id=${id_author}`;
    try {
      const authorResponse = await fetch(authorApiUrl);
      if (authorResponse.ok) {
        const authorResponseData = await authorResponse.json();
        authorData = authorResponseData.data;
      } else {
        console.log(" Error al obtener datos del autor:", authorResponse.status);
      }
    } catch (error) {
      console.error("Error en la API del autor:", error);
    }
  } else {
    console.error(" id_author es undefined, no se pudo buscar el autor.");
  }
  const postWithAuthor = {
    ...data,
    author: authorData
  };
  return renderTemplate`${renderComponent($$result, "NoticiasPost", $$NoticiasPost, { ...postWithAuthor }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "MarkdownContent", $$MarkdownContent, { "content": content })} ` })}`;
}, "F:/estudio-juridico-cabrera/src/pages/noticias/[...slug].astro", void 0);

const $$file = "F:/estudio-juridico-cabrera/src/pages/noticias/[...slug].astro";
const $$url = "/noticias/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

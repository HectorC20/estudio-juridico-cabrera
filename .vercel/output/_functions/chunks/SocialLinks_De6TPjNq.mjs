import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate } from './astro/server_DPPTnymn.mjs';
/* empty css                         */

const $$Astro = createAstro("https://estudio-juridico-cabrera.vercel.app");
const $$SocialLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialLinks;
  const currentURL = Astro2.url.href;
  return renderTemplate`${maybeRenderHead()}<div class="cont__publ" data-astro-cid-zamss57n> <div class="icons__publ" data-astro-cid-zamss57n> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`, "href")} target="_blank" data-astro-cid-zamss57n> <img alt="facebook" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/facebook_jsyy4v.svg" data-astro-cid-zamss57n> </a> <a${addAttribute(`https://twitter.com/intent/tweet?url=${currentURL}&text=Check%20out%20this%20page`, "href")} target="_blank" data-astro-cid-zamss57n> <img alt="twitter" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946785/twitter_j5muqs.svg" data-astro-cid-zamss57n> </a> <a${addAttribute(`https://api.whatsapp.com/send?text=${currentURL}`, "href")} target="_blank" data-astro-cid-zamss57n> <img alt="whatsapp" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946785/whatsapp_ssklfl.svg" data-astro-cid-zamss57n> </a> <a${addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`, "href")} target="_blank" data-astro-cid-zamss57n> <img alt="linkedin" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/linkedin_zzh7cn.svg" data-astro-cid-zamss57n> </a> <a${addAttribute(`https://pinterest.com/pin/create/button/?url=${currentURL}&media=URL_DE_LA_IMAGEN&description=Descripci\xF3n%20de%20tu%20p\xE1gina`, "href")} target="_blank" data-astro-cid-zamss57n> <img alt="pinterest" src="https://res.cloudinary.com/dixzojb4s/image/upload/v1728946784/pinterest_vl2gtg.svg" data-astro-cid-zamss57n> </a> </div> </div>`;
}, "F:/estudio-juridico-cabrera/src/components/SocialLinks.astro", void 0);

export { $$SocialLinks as $ };

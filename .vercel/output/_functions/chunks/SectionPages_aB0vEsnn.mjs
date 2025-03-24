import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderSlot, d as renderTemplate } from './astro/server_DPPTnymn.mjs';
import { $ as $$SocialLinks } from './SocialLinks_De6TPjNq.mjs';
/* empty css                         */

const $$Astro = createAstro("https://estudio-juridico-cabrera.vercel.app");
const $$SectionPages = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionPages;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section__cont__info" data-astro-cid-nxqqxldu> <div class=" section__part__alliances" data-astro-cid-nxqqxldu> <h1 class="text-3xl text-center" data-astro-cid-nxqqxldu>${title} </h1> <h3 class="text-center text-lg px-2" data-astro-cid-nxqqxldu>${description}</h3> ${renderComponent($$result, "SocialLinks", $$SocialLinks, { "data-astro-cid-nxqqxldu": true })} </div> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "F:/estudio-juridico-cabrera/src/components/SectionPages.astro", void 0);

export { $$SectionPages as $ };

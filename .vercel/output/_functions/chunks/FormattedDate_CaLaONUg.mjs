import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate } from './astro/server_DPPTnymn.mjs';

const $$Astro = createAstro("https://estudio-juridico-cabrera.vercel.app");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  const safeDate = date ? new Date(date) : null;
  return renderTemplate`${safeDate ? renderTemplate`${maybeRenderHead()}<time${addAttribute(safeDate.toISOString(), "datetime")}>${safeDate.toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" })}</time>` : renderTemplate`<span>Fecha no disponible</span>`}`;
}, "F:/estudio-juridico-cabrera/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };

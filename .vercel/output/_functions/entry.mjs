import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_D3gEnsjk.mjs';
import { manifest } from './manifest_BhBr7GVu.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/alianzas.astro.mjs');
const _page2 = () => import('./pages/contactenos.astro.mjs');
const _page3 = () => import('./pages/especialidades.astro.mjs');
const _page4 = () => import('./pages/especialidades/_---slug_.astro.mjs');
const _page5 = () => import('./pages/nosotros.astro.mjs');
const _page6 = () => import('./pages/noticias/autor/_---slug_.astro.mjs');
const _page7 = () => import('./pages/noticias.astro.mjs');
const _page8 = () => import('./pages/noticias/_---slug_.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.5.4_jiti@1.21.7_rollup@4.37.0_typescript@5.8.2_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/alianzas/index.astro", _page1],
    ["src/pages/contactenos/index.astro", _page2],
    ["src/pages/especialidades/index.astro", _page3],
    ["src/pages/especialidades/[...slug].astro", _page4],
    ["src/pages/nosotros/index.astro", _page5],
    ["src/pages/noticias/autor/[...slug].astro", _page6],
    ["src/pages/noticias/index.astro", _page7],
    ["src/pages/noticias/[...slug].astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c4f7027e-fbc3-4eae-9e83-400242eebd3c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

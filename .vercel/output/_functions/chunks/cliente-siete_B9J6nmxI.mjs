import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DPPTnymn.mjs';

const frontmatter = {
  "id": 7,
  "src": "https://res.cloudinary.com/dixzojb4s/image/upload/v1733780029/Dominio_Publico_S.R.L_fka2jx.png",
  "alt": "Dominio Público S.R.L",
  "nombre": "Dominio Público S.R.L",
  "pubDate": "Octubre 21 2024"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/alianzas/cliente-siete.mdx";
const file = "F:/estudio-juridico-cabrera/src/content/alianzas/cliente-siete.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "F:/estudio-juridico-cabrera/src/content/alianzas/cliente-siete.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

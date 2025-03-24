import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DPPTnymn.mjs';

const frontmatter = {
  "id": 8,
  "src": "https://res.cloudinary.com/dixzojb4s/image/upload/v1733780030/municipalidad_de_tumbes_bq04ts.png",
  "alt": "Municipalidad de Tumbes",
  "nombre": "MUNICIPALIDAD DE TUMBES",
  "pubDate": "Octubre 22 2024"
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

const url = "src/content/alianzas/cliente-ocho.mdx";
const file = "F:/estudio-juridico-cabrera/src/content/alianzas/cliente-ocho.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "F:/estudio-juridico-cabrera/src/content/alianzas/cliente-ocho.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

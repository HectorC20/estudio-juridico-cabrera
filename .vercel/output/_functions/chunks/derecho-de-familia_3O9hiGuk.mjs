import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DPPTnymn.mjs';

const frontmatter = {
  "id": 2,
  "title": "Derecho de Familia",
  "src": "https://res.cloudinary.com/dixzojb4s/image/upload/v1742786957/Derecho_de_Familia_r5dy8q.jpg",
  "alt": "Imagen de derecho de familia",
  "description": "Asesoría legal en matrimonio, divorcio, tenencia, adopción y otros temas familiares.",
  "pubDate": "10-14-2024"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "derecho-de-familia",
    "text": "Derecho de Familia"
  }, {
    "depth": 3,
    "slug": "qué-temas-abarca",
    "text": "¿Qué temas abarca?"
  }, {
    "depth": 3,
    "slug": "representación-en-procesos-familiares",
    "text": "Representación en Procesos Familiares"
  }, {
    "depth": 3,
    "slug": "servicios-que-ofrecemos",
    "text": "Servicios que ofrecemos"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "derecho-de-familia",
      children: "Derecho de Familia"
    }), "\n", createVNode(_components.p, {
      children: ["El ", createVNode(_components.strong, {
        children: "Derecho de Familia"
      }), " regula las relaciones jurídicas entre los miembros de una familia, protegiendo los derechos y deberes de cada integrante y garantizando el bienestar de menores y personas vulnerables."]
    }), "\n", createVNode(_components.h3, {
      id: "qué-temas-abarca",
      children: "¿Qué temas abarca?"
    }), "\n", createVNode(_components.p, {
      children: "Esta área incluye, entre otros:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Matrimonio y uniones de hecho"
          }), "\r\nAsesoramiento sobre regímenes patrimoniales, acuerdos prenupciales y reconocimiento de uniones de hecho."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Divorcio y separación"
          }), "\r\nRepresentación en procesos de disolución matrimonial, liquidación de bienes, pensión de alimentos y acuerdos de custodia."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Tenencia y régimen de visitas"
          }), "\r\nDeterminación de la custodia de los hijos, acuerdos de visitas y garantías para el cumplimiento de los derechos de los menores."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Pensión de alimentos"
          }), "\r\nAsesoría y representación en la fijación, modificación o ejecución de pensiones alimenticias."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Adopción y filiación"
          }), "\r\nTrámites legales para el reconocimiento de la paternidad/maternidad y procesos de adopción en cumplimiento de la legislación vigente."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Violencia familiar"
          }), "\r\nProtección y defensa de víctimas de violencia intrafamiliar, solicitud de medidas de protección y asesoría en procesos judiciales."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "representación-en-procesos-familiares",
      children: "Representación en Procesos Familiares"
    }), "\n", createVNode(_components.p, {
      children: ["Además de la asesoría preventiva, el ", createVNode(_components.strong, {
        children: "Derecho de Familia"
      }), " abarca la representación legal en procesos judiciales relacionados con el ámbito familiar, buscando siempre soluciones que resguarden los derechos y el bienestar de las personas involucradas."]
    }), "\n", createVNode(_components.h3, {
      id: "servicios-que-ofrecemos",
      children: "Servicios que ofrecemos"
    }), "\n", createVNode(_components.p, {
      children: "En esta área, ofrecemos:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Asesoramiento integral"
        }), ": Orientación legal en situaciones familiares para prevenir conflictos y garantizar la seguridad jurídica."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Representación en procedimientos"
        }), ": Defensa en procesos de divorcio, tenencia, pensiones y otros litigios familiares."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Mediación y conciliación"
        }), ": Búsqueda de soluciones consensuadas para evitar procesos judiciales prolongados y costosos."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Nuestra especialización en ", createVNode(_components.strong, {
        children: "Derecho de Familia"
      }), " permite acompañar a nuestros clientes en cada etapa de su situación legal, asegurando la protección de sus derechos y los de su familia."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/especialidades/derecho-de-familia.mdx";
const file = "F:/estudio-juridico-cabrera/src/content/especialidades/derecho-de-familia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "F:/estudio-juridico-cabrera/src/content/especialidades/derecho-de-familia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

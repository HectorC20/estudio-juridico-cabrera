/* empty css                                 */
import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DPPTnymn.mjs';
import { $ as $$Layout } from '../chunks/Layout_BMCzS7fv.mjs';
/* empty css                                 */
import { $ as $$SocialLinks } from '../chunks/SocialLinks_De6TPjNq.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CONT\xC1CTENOS | ESTUDIO JUR\xCDDICO CABRERA", "description": "este es una descripcion de contactenos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section__contact-us "> <div class="container mx-auto p-4 flex flex-wrap gap-5 text-white justify-center xl:justify-start"> <div class="w-[250px] object-cover"> <img src="https://res.cloudinary.com/dixzojb4s/image/upload/v1729079228/contactanos_m3r8fa.png" alt="contact-us"> </div> <div class="w-full sm:w-auto"> <h1 class="text-2xl">Información de contacto</h1> <ul class="font-['Assistant'] pl-3 mt-2 text-xl break-words"> <li class="my-2"><a href="tel:+51965860535">Número telefónico: +51 965 860 535</a> | <a href="tel:+51965860535">+51 919 198 108</a> </li> <li class="my-2"><a href="https://wa.link/5iwy3c" target="_blank" class="underline break-all">Whatsapp:
                        Link de
                        whatsapp</a> </li> <li class="my-2">Correo: <a href="mailto:contacto@estudiojuridicocabrera.com" class="break-all">contacto@estudiojuridicocabrera.com</a> </li> </ul> </div> </div> ${renderComponent($$result2, "SocialLinks", $$SocialLinks, {})} </section> <section class="text-gray-600 body-font relative"> <div class="absolute inset-0 bg-gray-300"> <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509714.0586323496!2d-80.95597255000003!3d-3.5549476999999867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90338de0a2fb0db5%3A0xb6fca0ebd0caf788!2sEstudio%20Jur%C3%ADdico%20Cabrera%20%7C%20Abogados%20en%20Tumbes!5e0!3m2!1ses!2spe!4v1729079731462!5m2!1ses!2spe" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> </div> <div class="container px-5 py-80 mx-auto flex"></div> </section> ` })}`;
}, "F:/estudio-juridico-cabrera/src/pages/contactenos/index.astro", void 0);

const $$file = "F:/estudio-juridico-cabrera/src/pages/contactenos/index.astro";
const $$url = "/contactenos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

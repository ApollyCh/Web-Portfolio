import { c as create_ssr_component, e as escape } from './ssr-bcb86966.js';
import { b as base } from './paths-9c394dd7.js';

const css = {
  code: ".first_part.svelte-1izujcd{box-shadow:0 4px 4px #ffdfdf;position:fixed;margin-top:-20px;padding-top:20px;padding-bottom:20px;z-index:999;width:100%;background-color:#ffeed9}nav.svelte-1izujcd{display:flex;flex-direction:row;margin-left:100px}.navigation.svelte-1izujcd{color:#403930;font-family:'Work Sans', sans-serif;border:0;background-color:#ffeed9;text-decoration:none;margin-right:50px}.navigation.svelte-1izujcd:hover{text-shadow:0 6px 6px #fcc5c5;cursor:pointer;z-index:100}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<meta name="author" content="Apollinaria Chernikova"> <div class="first_part svelte-1izujcd"><nav class="svelte-1izujcd"><a href="${escape(base, true) + "/"}" class="navigation svelte-1izujcd">Home</a> <a href="${escape(base, true) + "/Work"}" class="navigation svelte-1izujcd">Tech</a> <a href="${escape(base, true) + "/About"}" class="navigation svelte-1izujcd">About</a> <a href="${escape(base, true) + "/Contact"}" class="navigation svelte-1izujcd">Contact</a></nav></div> ${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-d5a3d4c8.js.map

import { c as create_ssr_component, d as add_attribute } from './ssr-bcb86966.js';

const iconSrc = "/Web-Portfolio/_app/immutable/assets/icon.74feb772.png";
const css = {
  code: "#h.svelte-3rtw08{width:179px;height:60px;background-color:#ffddbf;border-radius:10px;text-align:center;position:relative;top:130px}h1.svelte-3rtw08{position:absolute}#hello.svelte-3rtw08{font-family:'Work Sans', sans-serif;position:relative;top:14px;margin-right:auto;margin-left:auto;font-size:20px}h1.svelte-3rtw08{font-family:'Eczar', serif;color:#403930;position:absolute;font-size:64px}h1#n1.svelte-3rtw08{top:150px}h1#n2.svelte-3rtw08{top:220px}h1#n3.svelte-3rtw08{top:290px}#but1.svelte-3rtw08{width:270px;height:84px;border-radius:16px;background-color:#4e5e80;border:0;font-family:'Work Sans', sans-serif;font-size:24px;color:white;position:absolute;top:450px}#but2.svelte-3rtw08{width:270px;height:84px;border-radius:16px;background-color:white;outline:none;font-family:'Work Sans', sans-serif;font-size:24px;color:#4e5e80;position:absolute;top:450px;left:300px}img#first.svelte-3rtw08{position:absolute;top:100px;left:750px;width:424px;height:524px}.meeting.svelte-3rtw08{position:relative;left:100px;width:800px}button.svelte-3rtw08:hover{cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<title data-svelte-h="svelte-185cp7q">Home Page</title> <meta name="description" content="Hi! Im Apollinaria. Nice to meet you. This is my Portfolio WebSite"> <div class="meeting svelte-3rtw08"><div id="h" class="svelte-3rtw08" data-svelte-h="svelte-a5z8vl"><p id="hello" class="svelte-3rtw08">👋 Hello all</p></div> <div class="aboutMe" data-svelte-h="svelte-1l4pw8s"><h1 id="n1" class="svelte-3rtw08">I&#39;m Apollinaria,</h1> <h1 id="n2" class="svelte-3rtw08">A Software Programmer</h1> <h1 id="n3" class="svelte-3rtw08">and Problem Solver</h1></div> <button id="but1" class="svelte-3rtw08" data-svelte-h="svelte-1frsyvv">View My Tech Skills</button> <button id="but2" class="svelte-3rtw08" data-svelte-h="svelte-1me1gv1">Contact Me</button> <img id="first"${add_attribute("src", iconSrc, 0)} alt="icon" class="svelte-3rtw08"> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-834f427a.js.map

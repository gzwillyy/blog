/* global NexT, CONFIG */
document.addEventListener("page:loaded",(()=>{CONFIG.enableMath&&NexT.utils.getScript(CONFIG.katex.copy_tex_js).catch((()=>{}))}));
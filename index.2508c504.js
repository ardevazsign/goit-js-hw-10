function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_oYNZbZUY343YUDps7hkIEteceiOwIkZjLwWrELgfpT5N5AZuQdHjzIzYBXs6jUQi&breed_ids=${e}`).then((e=>{if(e.ok)return e.json();throw new Error(e.status)}))}const s=document.querySelector(".breed-select"),t=document.querySelector(".cat-info"),i=document.querySelector(".loader"),n=document.querySelector(".error");function d(){n.classList.remove("is-hidden"),s.classList.add("is-hidden")}n.classList.add("is-hidden"),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_oYNZbZUY343YUDps7hkIEteceiOwIkZjLwWrELgfpT5N5AZuQdHjzIzYBXs6jUQi").then((e=>{if(e.ok)return e.json();throw new Error(e.status)})).then((e=>{i.classList.replace("loader","is-hidden");let t=e.map((({name:e,id:s})=>`<option value=${s}>${e}</option>`));s.insertAdjacentHTML("beforeend",t),s.classList.remove("is-hidden")})).catch(d),s.addEventListener("change",(n=>{i.classList.replace("is-hidden","loader"),t.classList.add("is-hidden"),e(n.target.value).then((e=>{const{url:n,breeds:d}=e[0],{name:r,description:a,temperament:c}=d[0];t.innerHTML=`\n    <img src='${n}' alt='{name}' width="400"/>\n    <div class='box'>\n        <h2>${r}</h2>\n        <p>${a}</p>\n        <p>${c}</p>\n    </div>\n    `,t.classList.remove("is-hidden"),s.classList.remove("is-hidden"),i.classList.add("is-hidden")})).catch(d)}));
//# sourceMappingURL=index.2508c504.js.map

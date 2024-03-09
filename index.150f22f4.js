!function(){let e="https://api.thecatapi.com/v1",s="live_oYNZbZUY343YUDps7hkIEteceiOwIkZjLwWrELgfpT5N5AZuQdHjzIzYBXs6jUQi",t=document.querySelector(".breed-select"),i=document.querySelector(".cat-info"),d=document.querySelector(".loader"),r=document.querySelector(".error");function a(){r.classList.remove("is-hidden"),t.classList.add("is-hidden")}r.classList.add("is-hidden"),fetch(`${e}/breeds?api_key=${s}`).then(e=>{if(e.ok)return e.json();throw Error(e.status)}).then(e=>{d.classList.replace("loader","is-hidden");let s=e.map(({name:e,id:s})=>`<option value=${s}>${e}</option>`);t.insertAdjacentHTML("beforeend",s),t.classList.remove("is-hidden")}).catch(a),t.addEventListener("change",r=>{var n;d.classList.replace("is-hidden","loader"),i.classList.add("is-hidden"),(n=r.target.value,fetch(`${e}/images/search?api_key=${s}&breed_ids=${n}`).then(e=>{if(e.ok)return e.json();throw Error(e.status)})).then(e=>{let{url:s,breeds:r}=e[0],{name:a,description:n,temperament:c}=r[0];i.innerHTML=`
    <img src='${s}' alt='{name}' width="800"/>
    <div class='box'>
        <h2>${a}</h2>
        <p>${n}</p>
        <p>${c}</p>
    </div>
    `,i.classList.remove("is-hidden"),t.classList.remove("is-hidden"),d.classList.add("is-hidden")}).catch(a)})}();
//# sourceMappingURL=index.150f22f4.js.map

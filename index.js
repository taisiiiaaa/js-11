import{a as l,S as d,i as n}from"./assets/vendor-CFFvTae-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function m(o){return l.get("https://pixabay.com/api/",{params:{key:void 0,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data).catch(e=>console.log(e))}const c=document.querySelector("#loader"),u=document.querySelector(".gallery"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",scrollZoom:!1,animationSpeed:250});function g(o){console.log(o);const e=o.map(i=>`<li class="gallery-item">
        <a class="gallery-link" href="${i.largeImageURL}">
          <img
            class="gallery-image"
            src="${i.webformatURL}"
            alt="${i.tags}"
          />
          <div class='metrics'>
            <div class='metric'>
              <img src="../img/ic-like.svg" alt="Like icon" width="18" height="18">
              <p>${i.likes}</p>
            </div>
            <div class='metric'>
              <img src="../img/ic-views.svg" alt="Views icon" width="20" height="20">
              <p>${i.views}</p>
            </div>
            <div class='metric'>
              <img src="../img/ic-comment.svg" alt="Comments icon" width="20" height="20">
              <p>${i.comments}</p>
            </div>
            <div class='metric'>
              <img src="../img/ic-download.svg" alt="Downloads icon" width="20" height="20">
              <p>${i.downloads}</p>
            </div>
          </div>
        </a>
      </li>`).join("");u.innerHTML=e,h.refresh()}function f(){c.classList.add("loader")}function p(){c.classList.remove("loader")}async function y(o){f();try{const e=await m(o);if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"light",position:"topRight"});return}g(e.hits)}catch(e){console.error(e)}finally{p()}}const v=document.querySelector(".form"),L=document.querySelector('input[name="search-text"]');v.addEventListener("submit",w);function w(o){o.preventDefault();const e=L.value.trim();if(!e){n.error({message:"Please enter a search query",theme:"light",position:"topRight"});return}y(e)}
//# sourceMappingURL=index.js.map

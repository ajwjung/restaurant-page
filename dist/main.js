(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&display=swap);"]),o.push([e.id,':root {\n    --main-bg-clr: rgb(12, 22, 53);\n    --img-bg-clr: rgb(68, 0, 20);\n    --font-clr: rgb(226, 175, 64);\n    --h1-font-size: 3.5rem;\n    --h2-font-size: 2rem;\n    --quote-font-size: 1.5rem;\n    --small-font-size: 1.2rem;\n    --header-margin: 2rem 0;\n    --full-width: 100vw;\n    --text-alignment: center;\n}\n\n* {\n    color: var(--font-clr);\n    font-family: "Cormorant Garamond", serif;\n    letter-spacing: 0.1rem;;\n}\n\nbody {\n    min-height: 100vh;\n    width: 100vw;\n    margin: 0 auto;\n    background: var(--main-bg-clr);\n    overflow-x: hidden;\n}\n\nh1,\nh2,\nheader,\nfooter,\n.alfredo,\n.remy,\n.ego,\n.menu-item > p,\n.contact-info > p {\n    text-align: var(--text-alignment);\n}\n\nh1,\nh2 {\n    margin: var(--header-margin);\n}\n\nh1 {\n    font-size: var(--h1-font-size);\n}\n\nh2 {\n    font-size: var(--h2-font-size);\n}\n\nh3 {\n    font-size: var(--quote-font-size);\n}\n\np {\n    font-size: var(--small-font-size);\n}\n\nhr {\n    border-width: 0;\n    background: var(--font-clr);\n}\n\n.header-line,\n.footer-line {\n    width: 85%;\n    height: 2px;\n}\n\n.divider {\n    width: 40%;\n    height: 1px;\n}\n\n/* Main Page */\n\nheader,\nnav,\nfooter,\n.chefs,\n.reviews {\n    width: var(--full-width);\n}\n\nheader {\n    height: 30vh;\n    margin-top: auto;\n}\n\nmain {\n    min-height: 50vh\n}\n\nnav {\n    height: 30%;\n    margin: 1% 0;\n    gap: 4rem;\n}\n\nfooter {\n    height: 15vh;\n}\n\n.footer-container {\n    height: 85%\n}\n\n.chefs,\n.reviews {\n    margin: 5% 0;\n}\n\nheader,\nnav,\n.dividers,\n.chefs-info,\n.reviews,\n.reviews-container,\n.menu-item,\n.contact-info,\n.footer-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.btn-container,\n.btn-container:hover {\n    height: 50px;\n    width: 150px;\n    box-sizing: border-box;\n}\n\n.btn-container:hover {\n    border-bottom: 2px solid var(--font-clr);\n}\n\n#home-tab,\n#menu-tab,\n#contact-tab {\n    height: 50px;\n    width: 150px;\n    background: transparent;\n    border: 0;\n    border-radius: 10px;\n    font-size: var(--small-font-size);\n    text-transform: uppercase;\n    font-weight: 600;\n}\n\n.reviews-container,\n.chefs-info {\n    gap: 10%;\n    margin: var(--header-margin);\n}\n\nheader,\n.reviews,\n.menu-item,\n.contact-info {\n    flex-direction: column;\n}\n\n.alfredo-container,\n.remy-container,\n.ego-container {\n    height: 150px;\n    width: 150px;\n    background-color: var(--img-bg-clr);\n    border-radius: 50%;\n\n    overflow: hidden;\n}\n\n.reviews-container {\n    width: 50%;\n}\n\n#ego-img {\n    height: 250px;\n    transform: translateX(-18%);\n}\n\n#ego-review {\n    font-style: italic;\n    font-size: var(--quote-font-size);\n}\n\n#alfredo-img {\n    height: 350px;\n    transform: translateX(-22%) translateY(-5%);\n}\n\n#remy-img {\n    height: 250px;\n    transform: translateX(-40%) translateY(5%);\n}\n\n/* Menu & Contact Pages */\n.starters,\n.entrees,\n.desserts,\n.contact-info {\n    height: 100%;\n    width: var(--full-width);\n    margin: 4rem 0;\n}\n\n.menu-item > p,\n.contact-info > p {\n    width: 70%;\n}',""]);const c=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var h=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==h)n[h].references++,n[h].updater(u);else{var m=a(u,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}o.push(p)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=t(i[o]);n[c].references--}for(var d=r(e,a),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=()=>document.createElement("header"),n=()=>document.createElement("nav"),r=()=>document.createElement("main"),a=e=>{const n=document.createElement("section");return n.classList.add(e),n},i=()=>{const e=document.createElement("footer"),n=o.createLine("footer-line"),t=o.createDiv("footer-container"),r=o.createPara("Copyright © 2022 Amy Jung");return t.appendChild(r),e.appendChild(n),e.appendChild(t),e},o={createH1:e=>{const n=document.createElement("h1");return n.textContent=e,n},createH2:e=>{const n=document.createElement("h2");return n.textContent=e,n},createH3:e=>{const n=document.createElement("h3");return n.textContent=e,n},createDiv:e=>{const n=document.createElement("div");return n.classList.add(e),n},createImage:e=>{const n=document.createElement("img");return n.src=e,n},createPara:e=>{const n=document.createElement("p");return n.textContent=e,n},createSpan:e=>{const n=document.createElement("span");return n.textContent=e,n},createLine:e=>{const n=document.createElement("hr");return n.classList.add(e),n},createBtn:(e,n)=>{const t=document.createElement("button");return t.setAttribute("type","button"),t.textContent=e,t.setAttribute("id",n),t}},c=()=>{const e=n("tabs"),t=(()=>{const e=o.createDiv("btn-container"),n=o.createBtn("Home","home-tab");return e.appendChild(n),e})(),r=(()=>{const e=o.createDiv("btn-container"),n=o.createBtn("Menu","menu-tab");return e.appendChild(n),e})(),a=(()=>{const e=o.createDiv("btn-container"),n=o.createBtn("Contact Us","contact-tab");return e.appendChild(n),e})();return e.appendChild(t),e.appendChild(r),e.appendChild(a),e},d=t.p+"imgs/alfredo-linguini.3a888a199125446d8da222ecebf680fc.png",s=t.p+"imgs/remy.f5ec938723c6aae074af884855eb5218.png",l=t.p+"imgs/anton-ego.9a0c441e07cfd678b9cb294f8d0da7d9.png",p=(e,n,t,r,a)=>{const i=o.createDiv(e),c=o.createDiv(n),d=o.createImage(t);d.setAttribute("id",r);const s=o.createPara(a);return c.appendChild(d),i.appendChild(c),i.appendChild(s),i},h=()=>{const n=e(),t=c(),r=o.createLine("header-line"),a=o.createH1("Gusteau's");return n.appendChild(t),n.appendChild(r),n.appendChild(a),n},u=()=>{const e=a("chefs"),n=o.createH2("Meet the Chefs"),t=o.createDiv("chefs-info"),r=p("alfredo","alfredo-container",d,"alfredo-img","Alfredo Linguini"),i=p("remy","remy-container",s,"remy-img","Remy");return t.appendChild(r),t.appendChild(i),e.appendChild(n),e.appendChild(t),e},m=()=>{const e=a("reviews"),n=o.createH2("What the Critics Say"),t=o.createDiv("reviews-container"),r=p("ego","ego-container",l,"ego-img","Anton Ego"),i=o.createSpan("\"I experienced something new: an extraordinary meal from a singularly unexpected source. [...] It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau's who is, in this critic's opinion, nothing less than the finest chef in France. I will be returning to Gusteau's soon, hungry for more.\"");return i.setAttribute("id","ego-review"),e.appendChild(n),t.appendChild(i),t.appendChild(r),e.appendChild(t),e},f=()=>{const e=document.querySelector("#content"),n=h(),t=r(),a=o.createLine("divider"),c=m(),d=o.createLine("divider"),s=u(),l=i();t.appendChild(a),t.appendChild(c),t.appendChild(d),t.appendChild(s),e.appendChild(n),e.appendChild(t),e.appendChild(l)},g=(()=>{const n=(e,n)=>{const t=o.createDiv("menu-item"),r=o.createH3(e),a=o.createPara(n);return t.appendChild(r),t.appendChild(a),t};return{createMenuHeader:()=>{const n=e(),t=c(),r=o.createLine("header-line"),a=o.createH1("Gusteau's Menu");return n.appendChild(t),n.appendChild(r),n.appendChild(a),n},createMenuMain:()=>{const e=r(),t=(()=>{const e=a("starters"),t=o.createH2("Starters"),r=n("Caesar Salad with Salmon","Pan-fried salmon served on a salad of romaine lettuce tossed with an olive oil dressing, grated cheese, and topped with croutons."),i=n("Pheasant Consommé","A clear soup made from pheasant meat.");return e.appendChild(t),e.appendChild(r),e.appendChild(i),e})(),i=(()=>{const e=a("entrees"),t=o.createH2("Entrées"),r=n("Sole Meunière","A sole filet that is lightly breaded in plain flour and pan-fried in butter, then lightly flavored with lemon and parsley."),i=n("Sous-vide Salmon Roulade","A nice salmon filet rolled with lemon and herbs into a roulade, cooked sous-vide."),c=n("Seared Scallops with Beurre Blanc","Fresh scallops seared in seasoned butter and olive oil, with a dash of Beurre Blanc."),d=n("Filet Mignon","An 8 oz. filet mignon served with a side of sweet potatoes, pan-seared onions and mushrooms.");return e.appendChild(t),e.appendChild(r),e.appendChild(i),e.appendChild(c),e.appendChild(d),e})(),c=(()=>{const e=a("desserts"),t=o.createH2("Desserts"),r=n("Gusteau's Souffle","A baked egg-based dessert that's crispy on the outside and soft and fluffy on the inside."),i=n("Mille-Feulle","A delicate pastry composed of multiple layers of buttery pastry, filled with rich custard pastry cream and topped with glossy royal icing. "),c=n("French Bundt Cake","A classic vanilla Bundt cake topped with powdered sugar. Simple but delicious!");return e.appendChild(t),e.appendChild(r),e.appendChild(i),e.appendChild(c),e})();return e.appendChild(t),e.appendChild(i),e.appendChild(c),e}}})(),v=()=>{const e=document.querySelector("#content"),n=g.createMenuHeader(),t=o.createLine("divider"),r=g.createMenuMain(),a=i();e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(a)},C=()=>{const n=e(),t=c(),r=o.createLine("header-line"),a=o.createH1("Contact Us");return n.appendChild(t),n.appendChild(r),n.appendChild(a),n},b=()=>{const e=r(),n=o.createDiv("contact-info"),t=o.createH3("We look forward to serving you."),a=o.createPara("If you have any questions or would like to book a reservation, please reach out to us."),i=o.createPara("111-111-1111"),c=o.createPara("info@gusteaus.com");return n.appendChild(t),n.appendChild(a),n.appendChild(i),n.appendChild(c),e.append(n),e},y=()=>{const e=document.querySelector("#content"),n=C(),t=o.createLine("divider"),r=b(),a=i();e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(a)};var w=t(379),x=t.n(w),S=t(795),E=t.n(S),M=t(569),A=t.n(M),z=t(565),H=t.n(z),L=t(216),k=t.n(L),P=t(589),D=t.n(P),I=t(426),T={};T.styleTagTransform=D(),T.setAttributes=H(),T.insert=A().bind(null,"head"),T.domAPI=E(),T.insertStyleElement=k(),x()(I.Z,T),I.Z&&I.Z.locals&&I.Z.locals,(()=>{const e=document.querySelector("#content");f();const n=()=>{const e=document.querySelector("#content");for(;e.firstChild;)e.removeChild(e.lastChild)};e.addEventListener("click",(function(e){(e=>{switch(e){case"home-tab":n(),f();break;case"menu-tab":n(),v();break;case"contact-tab":n(),y()}})(e.target.id)}))})()})()})();
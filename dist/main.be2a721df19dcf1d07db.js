!function(t){function e(e){for(var r,i,c=e[0],u=e[1],s=e[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);f.length;)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={0:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(t){return i.p+""+({}[t]||t)+".be2a721df19dcf1d07db.js"}(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;a.push([121,1]),n()}({121:function(t,e,n){n(122),t.exports=n(311)},309:function(t,e,n){n.e(2).then(n.t.bind(null,312,7)).then((function(t){console.log("Lodash",t.random(0,42,!0))}))},310:function(t,e,n){},311:function(t,e,n){"use strict";n.r(e);n(308);function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.string=e.string.replace(/['"«»]/g,"").split(";").filter(Boolean).map((function(t){return{city:t.split(",")[0].trim(),state:t.split(",")[1].trim(),latitude:+t.split(",")[2],longitude:+t.split(",")[3],distance:0}}))}var e,n,a;return e=t,(n=[{key:"citiesInState",value:function(t){var e=[];return this.string.filter((function(n){return n.state===t&&e.push(n.city)})),e}},{key:"closestCity",value:function(t,e){this.string.forEach((function(n){var r,o,a=n.latitude,i=n.longitude;r=a>=0&&t<0?Math.round(100*Math.abs(a+Math.abs(t)))/100:Math.round(100*Math.abs(a-t))/100,o=i>=0&&e<0?Math.round(100*Math.abs(i+Math.abs(e)))/100:Math.round(100*Math.abs(i-e))/100,n.distance=Math.round(100*(r+o))/100}));var n=this.string.reduce((function(t,e){return t.distance<e.distance?t:e})).city;return"The most closest city to entered coordinates is ".concat(n)}},{key:"northernmost",get:function(){var t=this.string.reduce((function(t,e){return t.latitude>e.latitude?t:e})).city||"Undefined by the moment";return"The northernmost city is ".concat(t,".")}},{key:"southernmost",get:function(){var t=this.string.reduce((function(t,e){return t.latitude<e.latitude?t:e})).city||"Undefined by the moment";return"The southernmost city is ".concat(t,".")}},{key:"easternmost",get:function(){var t=this.string.reduce((function(t,e){return t.longitude>e.longitude?t:e})).city||"Undefined by the moment";return"The easternmost city is ".concat(t,".")}},{key:"westernmost",get:function(){var t=this.string.reduce((function(t,e){return t.longitude<e.longitude?t:e})).city||"Undefined by the moment";return"The westernmost city is ".concat(t,".")}},{key:"states",get:function(){var t=[];return this.string.forEach((function(e){return t.push(e.state)})),t=r(new Set(t)).join(" ")}},{key:"cities_array",get:function(){var t=[];return this.string.forEach((function(e){return t.push(e.city)})),t}},{key:"states_array",get:function(){var t=[];return this.string.forEach((function(e){return t.push(e.state)})),t}},{key:"latitude_array",get:function(){var t=[];return this.string.forEach((function(e){return t.push(e.latitude)})),t}},{key:"longitude_array",get:function(){var t=[];return this.string.forEach((function(e){return t.push(e.longitude)})),t}}])&&o(e.prototype,n),a&&o(e,a),t}();function i(t,e,n,r,o){var a=document.createElement("tr"),i=document.createElement("td"),c=document.createElement("td"),u=document.createElement("td"),s=document.createElement("td");a.classList.add("section-latest__table-row"),i.textContent="".concat(t),c.textContent="".concat(e),u.textContent="".concat(n),s.textContent="".concat(r),a.append(i),a.append(c),a.append(u),a.append(s),o.append(a)}function c(t,e){var n=document.createElement("li"),r=document.createElement("p");n.classList.add("section-points__list-item"),r.textContent=t,n.append(r),e.append(n)}n(309),n(310);document.addEventListener("DOMContentLoaded",(function(){var t='"Nashville, TN", 36.17, -86.78; "New York, NY", 40.71, -74.00; "Atlanta, GA", 33.75, -84.39; "Denver, CO", 39.74, -104.98; "Seattle, WA", 47.61, -122.33; "Los Angeles, CA", 34.05, -118.24; "Memphis, TN", 35.15, -90.05;';console.log(t);var e=new a({string:t});console.log(e.string),console.log(e.states),console.log(e.cities_array),console.log(e.citiesInState("TN")),console.log(e.citiesInState("CA"));for(var n=e.cities_array,r=e.states_array,o=e.latitude_array,u=e.longitude_array,s=document.querySelector(".section-table__body--latest"),l=document.querySelector(".section-table__body--list"),d=n.length-4;d<n.length;d++)i(n[d],r[d],o[d],u[d],s);for(var f=0;f<n.length;f++)i(n[f],r[f],o[f],u[f],l);var h,p,y,g,m,v,b,_=document.querySelector(".info__text--updated-date");h=_,p=new Date,y=p.getFullYear(),g=p.getMonth(),m=p.getDate(),v=p.getHours(),b=p.getMinutes(),g=["January","February","March","April","May","June","July","August","September","October","November","December"][g],b<10&&(b="0".concat(b)),h.textContent="".concat(g," ").concat(m,", ").concat(y," ").concat(v,":").concat(b);for(var w=document.querySelector(".section-points__list"),E=[e.northernmost,e.easternmost,e.southernmost,e.westernmost],M=0;M<E.length;M++)c(E[M],w);var S=document.querySelectorAll(".btn--toggler"),k=document.querySelectorAll(".banner");S.forEach((function(t){t.addEventListener("click",(function(){var e=t.getAttribute("data-banner");k.forEach((function(t){var n=t.getAttribute("data-banner");e==n?t.classList.add("active"):t.classList.remove("active")}))}))}))}))}});
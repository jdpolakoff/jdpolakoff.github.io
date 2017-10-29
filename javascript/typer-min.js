!function(e,n){"object"==typeof exports?module.exports=n():"function"==typeof define&&define.amd?define(function(){return n()}):e.typer=n()}(this,function(){"use strict";function e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function n(n,t){function r(e){return{}.toString.call(e).slice(8,-1)}function i(e){var n=r(e);if("html"!==n.slice(0,4).toLowerCase()&&"String"!==n)throw"You need to provide a string selector, such as '.some-class', or an html element.";return n}function o(e){var n=r(e);if(void 0===e)return E.speedSet?t:70;if("Number"===n&&!isNaN(e))return e;if("Object"===n){var i=e.hasOwnProperty("min"),o=e.hasOwnProperty("max"),c=e.hasOwnProperty("speed");if(c&&!isNaN(e.speed))return e.speed;if(i&&o&&e.min<e.max)return e;if(!Object.keys(e).length&&E.speedSet)return t;if(!i&&!o&&!c)return t}throw Error("You have provided an invalid value for speed.")}function c(){["typer","cursor-block","cursor-soft","cursor-hard","no-cursor"].forEach(function(e){E.newDiv.classList.remove(e)})}function u(e,n){return Math.floor(Math.random()*(n-e+1)+e)}function a(e,n){E.style=document.createElement("style"),E.style.appendChild(document.createTextNode("")),document.head.appendChild(E.style);var t=document.styleSheets[document.styleSheets.length-1];"insertRule"in t?t.insertRule(e+"{"+n+"}",0):t.addRule(e,n)}function s(n,t,i){function c(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments[1],a=i.container,s=!c&&("String"===r(a)?document.querySelector(a).textContent:a.textContent);return t={},e(t,n,c||s),e(t,"speed",o(i)),e(t,"html",!1!==i.html),e(t,"element",u?i.element:null),t}var u="line"===n,a="continue"===n;if(t||i)if("Object"===r(t))(u||a&&t.container)&&E.push(c(t));else if(isNaN(i))E.push(c(i,t));else{var s;E.push((s={},e(s,n,t),e(s,"speed",o(i)),e(s,"html",!0),s))}else u&&E.push({line:1})}function l(){if(E.item>=0||(E.item=0),E.item===E.length)return L.removeEventListener("killTyper",E.kill);E.ks||(E.ks=!0,L.addEventListener("killTyper",E.kill)),E.cursor||(E.cursor="cursor-soft"),E.type=setInterval(function(){var e=E[E.item];e.line?d(e):e.continue?f(e):e.pause?p(e):e.emit?m(e):e.listen?y(e):e.back?N(e):e.empty?w():e.run?g(e):e.end&&b()},0)}function d(e){clearInterval(E.type),E.newDiv&&(c(),E.newDiv.classList.add("white-space"),E.newDiv.innerHTML||(E.newDiv.innerHTML=" "));var t=document.createElement(e.element||"div");if(t.setAttribute("data-typer-child",E.dataNum),t.className=E.cursor,t.classList.add("typer"),t.classList.add("white-space"),n.appendChild(t),E.newDiv=t,1===e.line)return E.item++,l();h(e)}function f(e){clearInterval(E.type),h(e)}function v(e,n,t){var i="Object"===r(e)?u(e.min,e.max):e;E.iterator=setTimeout(function(){return n(t)},i)}function h(e){function n(e,t){var r=[];e=Array.from(e);for(var i=0;i<e.length;i++){var o=e[i],c=o.nodeName;"#text"===c?r.push({parent:t,content:o.textContent}):o.childNodes.length?function(){var e=document.createElement(c);Array.from(o.attributes).forEach(function(n){e.setAttribute(n.name,n.value)}),r.push({parent:t,newNode:e}),r=r.concat(n(o.childNodes,e))}():E.voids.includes(c)&&r.push({parent:t,voidNode:o})}return r}function t(){return clearInterval(E.iterator),E.item++,l()}var i=e.line||e.continue,o=document.createElement("div");if(Array.isArray(i))return function(n){function r(){var u=i[c++];o.textContent=u,E.newDiv.innerHTML+=n?u:o.innerHTML,c===i.length?t():v(e.speed,r)}var c=0;v(e.speed,r)}(e.html);o.innerHTML=i,e.html?function(){function r(){if(!a)return t();a.content?(a.parent.innerHTML+=a.content[u++],u===a.content.length&&(u=0,a=i[c++])):(a.parent.appendChild(a.voidNode||a.newNode),a=i[c++]),v(e.speed,r)}var i=n(o.childNodes,E.newDiv),c=0,u=0,a=i[c++];v(e.speed,r)}():function(){function n(){if(c===i.length)return t();var u=i[c];"String"!==r(i)&&(o.textContent=u,u=o.innerHTML),E.newDiv.innerHTML+=u,c++,v(e.speed,n)}var c=0;v(e.speed,n)}()}function p(e){clearInterval(E.type),E.pause=setTimeout(function(){E.item++,l()},e.pause)}function m(e){clearInterval(E.type),e.el.dispatchEvent(new Event(e.emit)),E.item++,l()}function y(e){clearInterval(E.type),e.el.addEventListener(e.listen,function n(t){e.el.removeEventListener(t.type,n),E.killed||(E.item++,l())})}function N(e){function n(e){var n=0,t=r(e||E.newDiv).reverse();return function(){var r=t[0];E.voids.includes(r.nodeName)?(r.remove(),t.shift()):(r.textContent=r.textContent.slice(0,-1),r.length||t.shift()),e||++n===c&&(clearInterval(E.goBack),i(E.newDiv),E.item++,l())}}function r(e){var n=[],t=Array.from(e.childNodes);return t.length?(t.forEach(function(e){e.childNodes.length?n=n.concat(r(e)):n.push(e)}),n):n}function i(e){Array.from(e.childNodes).forEach(function(e){E.voids.includes(e.nodeName)||(e.childNodes.length&&i(e),"#text"===e.nodeName||e.innerHTML.length||e.remove(),"#text"!==e.nodeName||e.length||e.remove())})}function o(e){var n=0;return Array.from(e.childNodes).forEach(function(e){E.voids.includes(e.nodeName)&&n++,e.childNodes.length&&(n+=o(e))}),n}var c=e.back,u=e.speed;if(clearInterval(E.type),!E.newDiv||!E.newDiv.textContent)return E.item++,l();var a=o(E.newDiv),s=E.newDiv.textContent.length;if("empty"===c){if(!u||u>=s)E.newDiv.innerHTML="";else{var d=E.newDiv.cloneNode(!0),f=n(d);u<0&&(u+=s);for(var v=0;v<u;v++)f();i(d),E.newDiv.innerHTML=d.innerHTML}return E.item++,l()}c>s+a&&(c="all"),"all"===c&&(c=s+a),c<0&&(c=s+a- -1*c),E.goBack=setInterval(n(),u||t)}function w(){n.innerHTML="",d({line:1})}function g(e){var t=e.run;clearInterval(E.type),t(n),E.item++,l()}function b(){clearInterval(E.type),E.cb()}var E=[],L=document.body;"String"===i(n)&&(n=document.querySelector(n)),t=o(t),E.speedSet=!0,E.voids=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"],E.classNames=["typer","cursor-block","cursor-soft","cursor-hard","no-cursor"],E.dataNum=Date.now(),n.setAttribute("data-typer",E.dataNum);var k={cursor:function(e){if(E.cursorRan)return console.warn('You can only call ".cursor" once.'),this;if(E.cursorRan=!0,void 0===e&&(e=!0),!1===e)return E.cursor="no-cursor",this;var n=e,t=n.color,r=n.blink,i=n.block,o=[],c='[data-typer="'+E.dataNum+'"]';return t&&a(c+" .typer::after","background-color:"+t),o.push("cursor-"+("hard"===r?"hard":"soft")),!0===i&&o.push("cursor-block"),E.cursor=o.join(" "),this},line:function(e,n){return s("line",e,n),E.typing||(E.typing=!0,l()),this},continue:function(e,n){return s("continue",e,n),this},pause:function(e){return E.push({pause:+e||500}),this},emit:function(e,n){return n?"String"===i(n)&&(n=document.querySelector(n)):n=L,E.push({emit:e,el:n}),this},listen:function(e,n){return n?"String"===i(n)&&(n=document.querySelector(n)):n=L,E.push({listen:e,el:n}),this},back:function(e,n){return E.push({back:e,speed:n}),this},empty:function(){return E.push({empty:!0}),this},run:function(e){return E.push({run:e}),this},end:function(e,t){function r(){return console.warn('WARNING: you tried to call a method after ".end" has already been called.'),i}E.push({end:!0}),E.cb=function(){E.style&&E.style.remove(),c(),E.newDiv.classList.add("white-space"),E.newDiv="",e instanceof Function?e(n):t instanceof Function&&t(n),!0!==e&&!0!==t||L.dispatchEvent(new Event("typerFinished"))};var i={cursor:r,line:r,continue:r,pause:r,emit:r,listen:r,back:r,empty:r,run:r,end:r};return i}};return E.kill=function(e){if(L.removeEventListener(e.type,E.kill),E.killed=!0,clearInterval(E.iterator),clearInterval(E.goBack),clearTimeout(E.pause),E.item===E.length)return console.log("This typer has completed. Listeners removed.");var n=E[E.item];n&&n.listen&&document.querySelector(n.el).dispatchEvent(new Event(n.listen))},k}return n});

!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var i=o("hKHmD"),a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f.default(e,t,r[t])}))}return e};var u,f=(u=o("hKHmD"))&&u.__esModule?u:{default:u};var l,c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var d,s,v="Expected a function",m=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,g=/^0o[0-7]+$/i,y=parseInt,O="object"==typeof t&&t&&t.Object===Object&&t,j="object"==typeof self&&self&&self.Object===Object&&self,S=O||j||Function("return this")(),w=Object.prototype.toString,h=Math.max,x=Math.min,_=function(){return S.Date.now()};function T(e,t,r){var n,o,i,a,u,f,l=0,c=!1,d=!1,s=!0;if("function"!=typeof e)throw new TypeError(v);function m(t){var r=n,i=o;return n=o=void 0,l=t,a=e.apply(i,r)}function p(e){return l=e,u=setTimeout(g,t),c?m(e):a}function b(e){var r=e-f;return void 0===f||r>=t||r<0||d&&e-l>=i}function g(){var e=_();if(b(e))return y(e);u=setTimeout(g,function(e){var r=t-(e-f);return d?x(r,i-(e-l)):r}(e))}function y(e){return u=void 0,s&&n?m(e):(n=o=void 0,a)}function O(){var e=_(),r=b(e);if(n=arguments,o=this,f=e,r){if(void 0===u)return p(f);if(d)return u=setTimeout(g,t),m(f)}return void 0===u&&(u=setTimeout(g,t)),a}return t=k(t)||0,N(r)&&(c=!!r.leading,i=(d="maxWait"in r)?h(k(r.maxWait)||0,t):i,s="trailing"in r?!!r.trailing:s),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,n=f=o=u=void 0},O.flush=function(){return void 0===u?a:y(_())},O}function N(t){var r=void 0===t?"undefined":e(c)(t);return!!t&&("object"==r||"function"==r)}function k(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(c)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==w.call(t)}(t))return NaN;if(N(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=N(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(m,"");var n=b.test(t);return n||g.test(t)?y(t.slice(2),n?2:8):p.test(t)?NaN:+t}l=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(v);return N(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),T(e,t,{leading:n,maxWait:t,trailing:o})};var D=document.querySelector(".feedback-form");D.addEventListener("input",e(l)((function(t){var r=JSON.parse(localStorage.getItem("feedback-form-state")),n=event.target;localStorage.setItem("feedback-form-state",JSON.stringify(e(a)({},r,e(i)({},n.getAttribute("name"),n.value))))}),500)),document.querySelector(".feedback-form input").value=null===(d=JSON.parse(localStorage.getItem("feedback-form-state")))||void 0===d?void 0:d.email,document.querySelector(".feedback-form textarea").value=null===(s=JSON.parse(localStorage.getItem("feedback-form-state")))||void 0===s?void 0:s.message,D.addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(e.target);console.log(t.get("email")),console.log(t.get("message")),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.ae4c639e.js.map

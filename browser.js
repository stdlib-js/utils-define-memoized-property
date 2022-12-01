// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).defineMemoizedProperty=r()}(this,(function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var i=r()?function(e){var r,i,u,l,f;if(null==e)return t.call(e);i=e[o],f=o,r=null!=(l=e)&&n.call(l,f);try{e[o]=void 0}catch(r){return t.call(e)}return u=t.call(e),r?e[o]=i:delete e[o],u}:function(e){return t.call(e)};var u=Array.isArray?Array.isArray:function(e){return"[object Array]"===i(e)};function l(e){return"object"==typeof e&&null!==e&&!u(e)}var f=/./,a="function"==typeof Object.defineProperty?Object.defineProperty:null;var c,p=Object.defineProperty,y=Object.prototype,b=y.toString,s=y.__defineGetter__,d=y.__defineSetter__,v=y.__lookupGetter__,w=y.__lookupSetter__;c=function(){try{return a({},"x",{}),!0}catch(e){return!1}}()?p:function(e,r,t){var n,o,i,u;if("object"!=typeof e||null===e||"[object Array]"===b.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===b.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(v.call(e,r)||w.call(e,r)?(n=e.__proto__,e.__proto__=y,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&s&&s.call(e,r,t.get),u&&d&&d.call(e,r,t.set),e};var m=c;function g(e,r,t){m(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function j(e){return"boolean"==typeof e}var _=Boolean.prototype.toString;var h=r();function S(e){return"object"==typeof e&&(e instanceof Boolean||(h?function(e){try{return _.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===i(e)))}function E(e){return j(e)||S(e)}function T(){return new Function("return this;")()}g(E,"isPrimitive",j),g(E,"isObject",S);var O="object"==typeof self?self:null,A="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof B?B:null;var C=function(e){if(arguments.length){if(!j(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return T()}if(O)return O;if(A)return A;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),x=C.document&&C.document.childNodes,k=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;function L(e){return null!==e&&"object"==typeof e}function M(e){var r,t,n,o;if(("Object"===(t=i(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=G.exec(n.toString()))return r[1]}return L(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}g(V,"REGEXP",G),g(L,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!u(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(L));var F="function"==typeof f||"object"==typeof k||"function"==typeof x?function(e){return M(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?M(e).toLowerCase():r};function I(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function(e,r,t){if(!l(e))throw new TypeError(I("0jC3X",e));if(!l(t))throw new TypeError(I("0jCBk",t));if(n=t.value,"function"!==F(n))throw new TypeError(I("0jCBl",t.value));var n;function o(n){t.value=n,m(e,r,t)}t={configurable:void 0!==t.configurable&&t.configurable,enumerable:void 0!==t.enumerable&&t.enumerable,writable:void 0!==t.writable&&t.writable,value:t.value},m(e,r,{configurable:!0,enumerable:t.enumerable,get:function(){var r=t.value.call(e);return o(r),r},set:t.writable?o:void 0})}}));
//# sourceMappingURL=browser.js.map

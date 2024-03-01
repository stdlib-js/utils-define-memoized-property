// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol:void 0,o="function"==typeof i?i.toStringTag:"";var a=r()?function(e){var r,i,a,c,l;if(null==e)return t.call(e);i=e[o],l=o,r=null!=(c=e)&&n.call(c,l);try{e[o]=void 0}catch(r){return t.call(e)}return a=t.call(e),r?e[o]=i:delete e[o],a}:function(e){return t.call(e)};var c=Array.isArray?Array.isArray:function(e){return"[object Array]"===a(e)};function l(e){return"object"==typeof e&&null!==e&&!c(e)}var u=/./,s="function"==typeof Object.defineProperty?Object.defineProperty:null;var f=Object.defineProperty;function p(e){return"number"==typeof e}function g(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function d(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+g(i):g(i)+e,n&&(e="-"+e)),e}var b=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function y(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!p(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=d(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=d(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===h.call(e.specifier)?h.call(t):b.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var v=Math.abs,w=String.prototype.toLowerCase,m=String.prototype.toUpperCase,_=String.prototype.replace,j=/e\+(\d)$/,E=/e-(\d)$/,S=/^(\d+)$/,x=/^(\d+)e/,k=/\.0$/,T=/\.0*e/,A=/(\..*[^0])0*e/;function V(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!p(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":v(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=_.call(t,A,"$1e"),t=_.call(t,T,"e"),t=_.call(t,k,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=_.call(t,j,"e+0$1"),t=_.call(t,E,"e-0$1"),e.alternate&&(t=_.call(t,S,"$1."),t=_.call(t,x,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===m.call(e.specifier)?m.call(t):w.call(t)}function O(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var C=String.fromCharCode,F=isNaN,I=Array.isArray;function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function B(e){var r,t,n,i,o,a,c,l,u,s,f,p,g;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,F(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,F(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=y(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!F(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=F(o)?String(n.arg):C(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,f=n.width,p=n.padRight,g=void 0,(g=f-s.length)<0?s:s=p?s+O(g):O(g)+s)),a+=n.arg||"",c+=1}return a}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function L(e){var r,t,n,i;for(t=[],i=0,n=P.exec(e);n;)(r=e.slice(i,P.lastIndex-n[0].length)).length&&t.push(r),t.push(R(n)),i=P.lastIndex,n=P.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function G(e){var r,t;if("string"!=typeof e)throw new TypeError(G("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[L(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return B.apply(null,r)}var Z,U=Object.prototype,W=U.toString,M=U.__defineGetter__,N=U.__defineSetter__,X=U.__lookupGetter__,z=U.__lookupSetter__;Z=function(){try{return s({},"x",{}),!0}catch(e){return!1}}()?f:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===W.call(e))throw new TypeError(G("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(G("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(e,r)||z.call(e,r)?(n=e.__proto__,e.__proto__=U,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(e,r,t.get),a&&N&&N.call(e,r,t.set),e};var q=Z;function D(e,r,t){q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(e){return"boolean"==typeof e}var J=Boolean,K=Boolean.prototype.toString;var Q=r();function Y(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===a(e)))}function ee(e){return H(e)||Y(e)}D(ee,"isPrimitive",H),D(ee,"isObject",Y);var re="object"==typeof self?self:null,te="object"==typeof window?window:null,ne="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ie="object"==typeof ne?ne:null,oe="object"==typeof globalThis?globalThis:null;var ae=function(e){if(arguments.length){if(!H(e))throw new TypeError(G("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(oe)return oe;if(re)return re;if(te)return te;if(ie)return ie;throw new Error("unexpected error. Unable to resolve global object.")}(),ce=ae.document&&ae.document.childNodes,le=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;function fe(e){return null!==e&&"object"==typeof e}function pe(e){var r,t,n,i;if(("Object"===(t=a(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=se.exec(n.toString()))return r[1]}return fe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}D(ue,"REGEXP",se),D(fe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(G("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!c(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(fe));var ge="function"==typeof u||"object"==typeof le||"function"==typeof ce?function(e){return pe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?pe(e).toLowerCase():r};function de(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function be(e,r,t){if(!l(e))throw new TypeError(de("1Sh3L",e));if(!l(t))throw new TypeError(de("1ShB0",t));if(n=t.value,"function"!==ge(n))throw new TypeError(de("1ShB1",t.value));var n;function i(n){t.value=n,q(e,r,t)}t={configurable:void 0!==t.configurable&&t.configurable,enumerable:void 0!==t.enumerable&&t.enumerable,writable:void 0!==t.writable&&t.writable,value:t.value},q(e,r,{configurable:!0,enumerable:t.enumerable,get:function(){var r=t.value.call(e);return i(r),r},set:t.writable?i:void 0})}export{be as default};
//# sourceMappingURL=mod.js.map

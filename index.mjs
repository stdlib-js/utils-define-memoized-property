// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function s(s,n,l){if(!e(s))throw new TypeError(i("0jC3X",s));if(!e(l))throw new TypeError(i("0jCBk",l));if(!r(l.value))throw new TypeError(i("0jCBl",l.value));function o(e){l.value=e,t(s,n,l)}l={configurable:void 0!==l.configurable&&l.configurable,enumerable:void 0!==l.enumerable&&l.enumerable,writable:void 0!==l.writable&&l.writable,value:l.value},t(s,n,{configurable:!0,enumerable:l.enumerable,get:function(){var e=l.value.call(s);return o(e),e},set:l.writable?o:void 0})}export{s as default};
//# sourceMappingURL=index.mjs.map

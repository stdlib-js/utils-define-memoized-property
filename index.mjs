// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.4-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function s(s,n,o){if(!e(s))throw new TypeError(i("1Sh3L",s));if(!e(o))throw new TypeError(i("1ShB0",o));if(!r(o.value))throw new TypeError(i("1ShB1",o.value));function l(e){o.value=e,t(s,n,o)}o={configurable:void 0!==o.configurable&&o.configurable,enumerable:void 0!==o.enumerable&&o.enumerable,writable:void 0!==o.writable&&o.writable,value:o.value},t(s,n,{configurable:!0,enumerable:o.enumerable,get:function(){var e=o.value.call(s);return l(e),e},set:o.writable?l:void 0})}export{s as default};
//# sourceMappingURL=index.mjs.map

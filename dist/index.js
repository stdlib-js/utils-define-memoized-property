"use strict";var m=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=m(function(y,o){
var n=require('@stdlib/assert-is-object/dist'),b=require('@stdlib/assert-is-function/dist'),l=require('@stdlib/utils-define-property/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function p(a,r,e){if(!n(a))throw new TypeError(i('1Sh3L',a));if(!n(e))throw new TypeError(i('1ShB0',e));if(!b(e.value))throw new TypeError(i('1ShB1',e.value));e={configurable:e.configurable===void 0?!1:e.configurable,enumerable:e.enumerable===void 0?!1:e.enumerable,writable:e.writable===void 0?!1:e.writable,value:e.value},l(a,r,{configurable:!0,enumerable:e.enumerable,get:f,set:e.writable?u:void 0});function f(){var t=e.value.call(a);return u(t),t}function u(t){e.value=t,l(a,r,e)}}o.exports=p
});var g=v();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

"use strict";var m=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var v=m(function(y,o){
var n=require('@stdlib/assert-is-object/dist'),b=require('@stdlib/assert-is-function/dist'),l=require('@stdlib/utils-define-property/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function p(r,a,e){if(!n(r))throw new TypeError(i('1Sh3L',r));if(!n(e))throw new TypeError(i('1ShB0',e));if(!b(e.value))throw new TypeError(i('1ShB1',e.value));e={configurable:e.configurable===void 0?!1:e.configurable,enumerable:e.enumerable===void 0?!1:e.enumerable,writable:e.writable===void 0?!1:e.writable,value:e.value},l(r,a,{configurable:!0,enumerable:e.enumerable,get:f,set:e.writable?u:void 0});function f(){var t=e.value.call(r);return u(t),t}function u(t){e.value=t,l(r,a,e)}}o.exports=p
});var g=v();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=u(function(G,l){
var R=require("path").resolve,W=require('@stdlib/fs-read-wasm/dist').sync,A=W(R(__dirname,"..","src","main.wasm"));l.exports=A
});var v=u(function(H,m){
var O=require('@stdlib/assert-is-wasm-memory/dist'),y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=require('@stdlib/utils-inherit/dist'),q=require('@stdlib/wasm-module-wrapper/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),j=d();function t(e){if(!(this instanceof t))return new t(e);if(!O(e))throw new TypeError(g('26pH0',e));return q.call(this,j,e,{env:{memory:e}}),this}S(t,q);y(t.prototype,"main",function(r,a,i){return this._instance.exports.c_isamax(r,a,i)});y(t.prototype,"ndarray",function(r,a,i,o){return this._instance.exports.c_isamax_ndarray(r,a,i,o)});m.exports=t
});var x=u(function(I,h){
var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=require('@stdlib/utils-inherit/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),E=require('@stdlib/wasm-memory/dist'),T=require('@stdlib/wasm-base-arrays2ptrs/dist'),V=require('@stdlib/wasm-base-strided2object/dist'),c=v();function s(){return this instanceof s?(c.call(this,new E({initial:0})),this):new s}z(s,c);f(s.prototype,"main",function(r,a,i){return this.ndarray(r,a,i,B(r,i))});f(s.prototype,"ndarray",function(r,a,i,o){var p,n;return p=T(this,[V(r,a,i,o)]),n=p[0],c.prototype.ndarray.call(this,r,n.ptr,n.stride,n.offset)});h.exports=s
});var _=u(function(J,M){
var k=x(),w=new k;w.initializeSync();M.exports=w
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=_(),D=v();C(b,"Module",D);module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

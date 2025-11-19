"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=u(function(G,d){
var b=require("path").resolve,R=require('@stdlib/fs-read-wasm/dist').sync,W=R(b(__dirname,"..","src","main.wasm"));d.exports=W
});var v=u(function(H,f){
var A=require('@stdlib/assert-is-wasm-memory/dist'),q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),g=y();function t(e){if(!(this instanceof t))return new t(e);if(!A(e))throw new TypeError(S('26pH0',e));return m.call(this,g,e,{env:{memory:e}}),this}O(t,m);q(t.prototype,"main",function(r,a,i){return this._instance.exports.c_isamax(r,a,i)});q(t.prototype,"ndarray",function(r,a,i,o){return this._instance.exports.c_isamax_ndarray(r,a,i,o)});f.exports=t
});var w=u(function(I,x){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),z=require('@stdlib/strided-base-stride2offset/dist'),B=require('@stdlib/wasm-memory/dist'),E=require('@stdlib/wasm-base-arrays2ptrs/dist'),T=require('@stdlib/wasm-base-strided2object/dist'),c=v();function s(){return this instanceof s?(c.call(this,new B({initial:0})),this):new s}j(s,c);h(s.prototype,"main",function(r,a,i){return this.ndarray(r,a,i,z(r,i))});h(s.prototype,"ndarray",function(r,a,i,o){var p,n;return p=E(this,[T(r,a,i,o)]),n=p[0],c.prototype.ndarray.call(this,r,n.ptr,n.stride,n.offset)});x.exports=s
});var _=u(function(J,M){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=w(),C=v(),l=new k;l.initializeSync();V(l,"Module",C.bind(null));M.exports=l
});var D=_();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

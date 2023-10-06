"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=a(function(h,i){
var x=require('@stdlib/stats-base-snanstdevpn/dist');function f(e,r,n,s){return x(e,r,n,s)}i.exports=f
});var d=a(function(k,v){
var j=require('@stdlib/stats-base-snanstdevpn/dist').ndarray;function m(e,r,n,s,y){return j(e,r,n,s,y)}v.exports=m
});var p=a(function(w,o){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=u(),R=d();l(q,"ndarray",R);o.exports=q
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=p(),t,c=E(_(__dirname,"./native.js"));O(c)?t=b:t=c;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

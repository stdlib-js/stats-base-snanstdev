// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).snanstdev=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,d=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);o=r.arg}switch(r.specifier){case"e":case"E":t=o.toExponential(r.precision);break;case"f":case"F":t=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((e=r.precision)>0&&(e-=1),t=o.toExponential(e)):t=o.toPrecision(r.precision),r.alternate||(t=d.call(t,m,"$1e"),t=d.call(t,w,"e"),t=d.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=d.call(t,g,"e+0$1"),t=d.call(t,y,"e-0$1"),r.alternate&&(t=d.call(t,h,"$1."),t=d.call(t,b,"$1.e")),o>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var S=String.fromCharCode,A=isNaN,x=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,o,a,c,l,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(f(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,A(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),c+=n.arg||"",l+=1}return c}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,o;for(t=[],o=0,n=F.exec(r);n;)(e=r.slice(o,F.lastIndex-n[0].length)).length&&t.push(e),t.push(N(n)),o=F.lastIndex,n=F.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function I(r){return"string"==typeof r}function V(r){var e,t,n;if(!I(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return O.apply(null,t)}var P,$=Object.prototype,C=$.toString,R=$.__defineGetter__,q=$.__defineSetter__,B=$.__lookupGetter__,M=$.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(B.call(r,e)||M.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&R&&R.call(r,e,t.get),a&&q&&q.call(r,e,t.set),r};var L=P;function G(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=Object,W=/./;function U(r){return"boolean"==typeof r}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return X&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;var Y,H="function"==typeof Symbol?Symbol:void 0,K="function"==typeof H?H.toStringTag:"";Y=z()?function(r){var e,t,n,o,i;if(null==r)return D.call(r);t=r[K],i=K,e=null!=(o=r)&&J.call(o,i);try{r[K]=void 0}catch(e){return D.call(r)}return n=D.call(r),e?r[K]=t:delete r[K],n}:function(r){return D.call(r)};var Q=Y,rr=Boolean,er=Boolean.prototype.toString;var tr=z();function nr(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function or(r){return U(r)||nr(r)}function ir(){return new Function("return this;")()}G(or,"isPrimitive",U),G(or,"isObject",nr);var ar="object"==typeof self?self:null,cr="object"==typeof window?window:null,ur="object"==typeof global?global:null,fr="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!U(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ir()}if(fr)return fr;if(ar)return ar;if(cr)return cr;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),sr=lr.document&&lr.document.childNodes,pr=Int8Array;function dr(){return/^\s*function\s*([^(]*)/i}var gr,yr=/^\s*function\s*([^(]*)/i;G(dr,"REGEXP",yr),gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)};var hr=gr;function br(r){return null!==r&&"object"==typeof r}var vr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!hr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(br);function wr(r){var e,t,n,o;if(("Object"===(t=Q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(br,"isObjectLikeArray",vr);var mr="function"==typeof W||"object"==typeof pr||"function"==typeof sr?function(r){return wr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?wr(r).toLowerCase():e};var jr,_r,Er=Object.getPrototypeOf;_r=Object.getPrototypeOf,jr="function"===mr(_r)?Er:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Sr=jr;function Ar(r){return null==r?null:(r=Z(r),Sr(r))}function xr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===Q(r))return!0;r=Ar(r)}return!1}function kr(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return xr(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var Or="function"==typeof Math.fround?Math.fround:null,Fr="function"==typeof Float32Array;var Nr=Number.POSITIVE_INFINITY,Tr="function"==typeof Float32Array?Float32Array:null;var Ir,Vr="function"==typeof Float32Array?Float32Array:void 0;Ir=function(){var r,e;if("function"!=typeof Tr)return!1;try{r=function(r){return Fr&&r instanceof Float32Array||"[object Float32Array]"===Q(r)}(e=new Tr([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Nr}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};var Pr=new Ir(1);var $r="function"==typeof Or?Or:function(r){return Pr[0]=r,Pr[0]},Cr=Math.floor;function Rr(r,e,t,n,o){var i,a,c,u,f,l,s,p,d,g,y,h,b,v;if(i=o,r<8){for(y=0,h=0,v=0;v<r;v++)(b=t[i])==b&&(y=$r(y+b),h+=1),i+=n;return e[0]=$r(e[0]+y),e[1]+=h,e}if(r<=128){for(a=0,c=0,u=0,f=0,l=0,s=0,p=0,d=0,h=0,g=r%8,v=0;v<r-g;v+=8)(b=t[i])==b&&(a=$r(a+b),h+=1),(b=t[i+=n])==b&&(c=$r(c+b),h+=1),(b=t[i+=n])==b&&(u=$r(u+b),h+=1),(b=t[i+=n])==b&&(f=$r(f+b),h+=1),(b=t[i+=n])==b&&(l=$r(l+b),h+=1),(b=t[i+=n])==b&&(s=$r(s+b),h+=1),(b=t[i+=n])==b&&(p=$r(p+b),h+=1),(b=t[i+=n])==b&&(d=$r(d+b),h+=1),i+=n;for(y=$r($r($r(a+c)+$r(u+f))+$r($r(l+s)+$r(p+d)));v<r;v++)(b=t[i])==b&&(y=$r(y+b),h+=1),i+=n;return e[0]=$r(e[0]+y),e[1]+=h,e}return h=Cr(r/2),$r(Rr(h-=h%8,e,t,n,i)+Rr(r-h,e,t,n,i+h*n))}var qr=[0,0];function Br(r,e,t,n){var o,i,a,c,u,f,l,s,p;if(r<=0)return NaN;if(1===r||0===n)return(l=t[0])==l&&r-e>0?0:NaN;if(i=n<0?(1-r)*n:0,qr[0]=0,qr[1]=0,Rr(r,qr,t,n,i),(c=(s=qr[1])-e)<=0)return NaN;for(o=$r(qr[0]/s),a=0,u=0,p=0;p<r;p++)(l=t[i])==l&&(f=$r(l-o),a=$r(a+$r(f*f)),u=$r(u+f),s+=1),i+=n;return $r($r(a/c)-$r($r(u/s)*$r(u/c)))}var Mr=[0,0];G(Br,"ndarray",(function(r,e,t,n,o){var i,a,c,u,f,l,s,p,d;if(r<=0)return NaN;if(1===r||0===n)return(s=t[o])==s&&r-e>0?0:NaN;if(a=o,Mr[0]=0,Mr[1]=0,Rr(r,Mr,t,n,a),(u=(p=Mr[1])-e)<=0)return NaN;for(i=$r(Mr[0]/p),c=0,f=0,d=0;d<r;d++)(s=t[a])==s&&(l=$r(s-i),c=$r(c+$r(l*l)),f=$r(f+l),p+=1),a+=n;return $r($r(c/u)-$r($r(f/p)*$r(f/u)))}));var Lr,Gr=kr((0,r.join)(__dirname,"./native.js")),Zr=Lr=xr(Gr)?Br:Gr;const{ndarray:Wr}=Lr;var Ur=Math.sqrt;function Xr(r,e,t,n){return $r(Ur(Zr(r,e,t,n)))}G(Xr,"ndarray",(function(r,e,t,n,o){return $r(Ur(Wr(r,e,t,n,o)))}));var zr,Dr=kr((0,r.join)(__dirname,"./native.js")),Jr=zr=xr(Dr)?Xr:Dr;const{ndarray:Yr}=zr;function Hr(r,e,t,n){return Jr(r,e,t,n)}return G(Hr,"ndarray",(function(r,e,t,n,o){return Yr(r,e,t,n,o)})),Hr}));
//# sourceMappingURL=index.js.map

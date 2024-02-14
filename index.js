// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).snanstdev=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function E(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),r.alternate&&(t=g.call(t,y,"$1."),t=g.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):l.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var x=String.fromCharCode,S=isNaN,k=Array.isArray;function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,i,o,c,f,l,p;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(s(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),c+=n.arg||"",f+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function O(r){var e,t;if(!V(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[N(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return A.apply(null,e)}var $,C=Object.prototype,R=C.toString,P=C.__defineGetter__,M=C.__defineSetter__,Z=C.__lookupGetter__,L=C.__lookupSetter__;$=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&M&&M.call(r,e,t.set),r};var W=$;function q(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=Object,G=/./;function U(r){return"boolean"==typeof r}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var z=X();var Y=X();var D=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;var H,K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";H=Y&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return D.call(r);t=r[Q],a=Q,e=null!=(i=r)&&J.call(i,a);try{r[Q]=void 0}catch(e){return D.call(r)}return n=D.call(r),e?r[Q]=t:delete r[Q],n}:function(r){return D.call(r)};var rr=H,er=Boolean,tr=Boolean.prototype.toString;var nr=z&&"symbol"==typeof Symbol.toStringTag;function ir(r){return"object"==typeof r&&(r instanceof er||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===rr(r)))}function ar(r){return U(r)||ir(r)}function or(r){return"number"==typeof r}function cr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ur(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+cr(i):cr(i)+r,n&&(r="-"+r)),r}q(ar,"isPrimitive",U),q(ar,"isObject",ir);var sr=String.prototype.toLowerCase,fr=String.prototype.toUpperCase;function lr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!or(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ur(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ur(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===fr.call(r.specifier)?fr.call(t):sr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function pr(r){return"string"==typeof r}var gr=Math.abs,dr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase,yr=String.prototype.replace,vr=/e\+(\d)$/,br=/e-(\d)$/,wr=/^(\d+)$/,mr=/^(\d+)e/,Er=/\.0$/,jr=/\.0*e/,_r=/(\..*[^0])0*e/;function xr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!or(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":gr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=yr.call(t,_r,"$1e"),t=yr.call(t,jr,"e"),t=yr.call(t,Er,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=yr.call(t,vr,"e+0$1"),t=yr.call(t,br,"e-0$1"),r.alternate&&(t=yr.call(t,wr,"$1."),t=yr.call(t,mr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===hr.call(r.specifier)?hr.call(t):dr.call(t)}function Sr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function kr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Sr(n):Sr(n)+r}var Fr=String.fromCharCode,Ar=isNaN,Tr=Array.isArray;function Ir(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Nr(r){var e,t,n,i,a,o,c,u,s;if(!Tr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(pr(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=Ir(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ar(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ar(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=lr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Ar(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ar(a)?String(n.arg):Fr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=xr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ur(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=kr(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Vr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Or(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $r(r){var e,t,n,i;for(t=[],i=0,n=Vr.exec(r);n;)(e=r.slice(i,Vr.lastIndex-n[0].length)).length&&t.push(e),t.push(Or(n)),i=Vr.lastIndex,n=Vr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Cr(r){return"string"==typeof r}function Rr(r){var e,t;if(!Cr(r))throw new TypeError(Rr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[$r(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Nr.apply(null,e)}function Pr(){return new Function("return this;")()}var Mr="object"==typeof self?self:null,Zr="object"==typeof window?window:null,Lr="object"==typeof global?global:null,Wr="object"==typeof globalThis?globalThis:null;var qr=function(r){if(arguments.length){if(!U(r))throw new TypeError(Rr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Pr()}if(Wr)return Wr;if(Mr)return Mr;if(Zr)return Zr;if(Lr)return Lr;throw new Error("unexpected error. Unable to resolve global object.")}(),Br=qr.document&&qr.document.childNodes,Gr=Int8Array;function Ur(){return/^\s*function\s*([^(]*)/i}var Xr,zr=/^\s*function\s*([^(]*)/i;q(Ur,"REGEXP",zr),Xr=Array.isArray?Array.isArray:function(r){return"[object Array]"===rr(r)};var Yr=Xr;function Dr(r){return null!==r&&"object"==typeof r}var Jr=function(r){if("function"!=typeof r)throw new TypeError(Rr("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Dr);function Hr(r){var e,t,n,i;if(("Object"===(t=rr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=zr.exec(n.toString()))return e[1]}return Dr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}q(Dr,"isObjectLikeArray",Jr);var Kr="function"==typeof G||"object"==typeof Gr||"function"==typeof Br?function(r){return Hr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Hr(r).toLowerCase():e};var Qr,re,ee=Object.getPrototypeOf;re=Object.getPrototypeOf,Qr="function"===Kr(re)?ee:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var te=Qr;function ne(r){return null==r?null:(r=B(r),te(r))}function ie(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===rr(r))return!0;r=ne(r)}return!1}function ae(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return ie(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var oe="function"==typeof Math.fround?Math.fround:null,ce="function"==typeof Float32Array;var ue=Number.POSITIVE_INFINITY,se="function"==typeof Float32Array?Float32Array:null;var fe,le="function"==typeof Float32Array?Float32Array:void 0;fe=function(){var r,e;if("function"!=typeof se)return!1;try{r=function(r){return ce&&r instanceof Float32Array||"[object Float32Array]"===rr(r)}(e=new se([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===ue}catch(e){r=!1}return r}()?le:function(){throw new Error("not implemented")};var pe=new fe(1);var ge="function"==typeof oe?oe:function(r){return pe[0]=r,pe[0]},de="function"==typeof Math.fround?Math.fround:null,he="function"==typeof Float32Array;var ye=Number.POSITIVE_INFINITY,ve="function"==typeof Float32Array?Float32Array:null;var be,we="function"==typeof Float32Array?Float32Array:void 0;be=function(){var r,e;if("function"!=typeof ve)return!1;try{r=function(r){return he&&r instanceof Float32Array||"[object Float32Array]"===rr(r)}(e=new ve([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===ye}catch(e){r=!1}return r}()?we:function(){throw new Error("not implemented")};var me=new be(1);var Ee="function"==typeof de?de:function(r){return me[0]=r,me[0]},je=Math.floor;function _e(r,e,t,n,i){var a,o,c,u,s,f,l,p,g,d,h,y,v,b;if(a=i,r<8){for(h=0,y=0,b=0;b<r;b++)(v=t[a])==v&&(h=Ee(h+v),y+=1),a+=n;return e[0]=Ee(e[0]+h),e[1]+=y,e}if(r<=128){for(o=0,c=0,u=0,s=0,f=0,l=0,p=0,g=0,y=0,d=r%8,b=0;b<r-d;b+=8)(v=t[a])==v&&(o=Ee(o+v),y+=1),(v=t[a+=n])==v&&(c=Ee(c+v),y+=1),(v=t[a+=n])==v&&(u=Ee(u+v),y+=1),(v=t[a+=n])==v&&(s=Ee(s+v),y+=1),(v=t[a+=n])==v&&(f=Ee(f+v),y+=1),(v=t[a+=n])==v&&(l=Ee(l+v),y+=1),(v=t[a+=n])==v&&(p=Ee(p+v),y+=1),(v=t[a+=n])==v&&(g=Ee(g+v),y+=1),a+=n;for(h=Ee(Ee(Ee(o+c)+Ee(u+s))+Ee(Ee(f+l)+Ee(p+g)));b<r;b++)(v=t[a])==v&&(h=Ee(h+v),y+=1),a+=n;return e[0]=Ee(e[0]+h),e[1]+=y,e}return y=je(r/2),Ee(_e(y-=y%8,e,t,n,a)+_e(r-y,e,t,n,a+y*n))}var xe=[0,0];function Se(r,e,t,n){var i,a,o,c,u,s,f,l,p;if(r<=0)return NaN;if(1===r||0===n)return(f=t[0])==f&&r-e>0?0:NaN;if(a=n<0?(1-r)*n:0,xe[0]=0,xe[1]=0,_e(r,xe,t,n,a),(c=(l=xe[1])-e)<=0)return NaN;for(i=Ee(xe[0]/l),o=0,u=0,p=0;p<r;p++)(f=t[a])==f&&(s=Ee(f-i),o=Ee(o+Ee(s*s)),u=Ee(u+s),l+=1),a+=n;return Ee(Ee(o/c)-Ee(Ee(u/l)*Ee(u/c)))}var ke=[0,0];q(Se,"ndarray",(function(r,e,t,n,i){var a,o,c,u,s,f,l,p,g;if(r<=0)return NaN;if(1===r||0===n)return(l=t[i])==l&&r-e>0?0:NaN;if(o=i,ke[0]=0,ke[1]=0,_e(r,ke,t,n,o),(u=(p=ke[1])-e)<=0)return NaN;for(a=Ee(ke[0]/p),c=0,s=0,g=0;g<r;g++)(l=t[o])==l&&(f=Ee(l-a),c=Ee(c+Ee(f*f)),s=Ee(s+f),p+=1),o+=n;return Ee(Ee(c/u)-Ee(Ee(s/p)*Ee(s/u)))}));var Fe,Ae=ae((0,r.join)(__dirname,"./native.js")),Te=Fe=ie(Ae)?Se:Ae;const{ndarray:Ie}=Fe;var Ne=Math.sqrt;function Ve(r,e,t,n){return ge(Ne(Te(r,e,t,n)))}q(Ve,"ndarray",(function(r,e,t,n,i){return ge(Ne(Ie(r,e,t,n,i)))}));var Oe,$e=ae((0,r.join)(__dirname,"./native.js")),Ce=Oe=ie($e)?Ve:$e;const{ndarray:Re}=Oe;function Pe(r,e,t,n){return Ce(r,e,t,n)}return q(Pe,"ndarray",(function(r,e,t,n,i){return Re(r,e,t,n,i)})),Pe}));
//# sourceMappingURL=index.js.map

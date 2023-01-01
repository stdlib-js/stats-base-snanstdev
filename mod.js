// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),s="get"in n,p="set"in n,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}function p(r,t){for(var n=0,e=r.length-1;e>=0;e--){var o=r[e];"."===o?r.splice(e,1):".."===o?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}var y=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,b=function(r){return y.exec(r).slice(1)};function v(){for(var r="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var e=n>=0?arguments[n]:"/";if("string"!=typeof e)throw new TypeError("Arguments to path.resolve must be strings");e&&(r=e+"/"+r,t="/"===e.charAt(0))}return(t?"/":"")+(r=p(A(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function d(r){var t=g(r),n="/"===E(r,-1);return(r=p(A(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function g(r){return"/"===r.charAt(0)}function h(){var r=Array.prototype.slice.call(arguments,0);return d(A(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function j(r,t){function n(r){for(var t=0;t<r.length&&""===r[t];t++);for(var n=r.length-1;n>=0&&""===r[n];n--);return t>n?[]:r.slice(t,n-t+1)}r=v(r).substr(1),t=v(t).substr(1);for(var e=n(r.split("/")),o=n(t.split("/")),u=Math.min(e.length,o.length),i=u,a=0;a<u;a++)if(e[a]!==o[a]){i=a;break}var f=[];for(a=i;a<e.length;a++)f.push("..");return(f=f.concat(o.slice(i))).join("/")}function m(r){var t=b(r),n=t[0],e=t[1];return n||e?(e&&(e=e.substr(0,e.length-1)),n+e):"."}function w(r,t){var n=b(r)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n}function _(r){return b(r)[3]}var O={extname:_,basename:w,dirname:m,sep:"/",delimiter:":",relative:j,join:h,isAbsolute:g,normalize:d,resolve:v};function A(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}var E="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)},N=s(Object.freeze({__proto__:null,resolve:v,normalize:d,isAbsolute:g,join:h,relative:j,sep:"/",delimiter:":",dirname:m,basename:w,extname:_,default:O}));var S=/./;function P(r){return"boolean"==typeof r}var F="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function T(){return F&&"symbol"==typeof Symbol.toStringTag}var k=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var x,B="function"==typeof Symbol?Symbol.toStringTag:"";x=T()?function(r){var t,n,e,o,u;if(null==r)return k.call(r);n=r[B],u=B,t=null!=(o=r)&&M.call(o,u);try{r[B]=void 0}catch(t){return k.call(r)}return e=k.call(r),t?r[B]=n:delete r[B],e}:function(r){return k.call(r)};var I=x,q=Boolean.prototype.toString;var V=T();function C(r){return"object"==typeof r&&(r instanceof Boolean||(V?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===I(r)))}function z(r){return P(r)||C(r)}function G(){return new Function("return this;")()}l(z,"isPrimitive",P),l(z,"isObject",C);var L="object"==typeof self?self:null,R="object"==typeof window?window:null,D="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof D?D:null;var U=function(r){if(arguments.length){if(!P(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return G()}if(L)return L;if(R)return R;if(J)return J;throw new Error("unexpected error. Unable to resolve global object.")}(),X=U.document&&U.document.childNodes,Y=Int8Array;function $(){return/^\s*function\s*([^(]*)/i}var H,K=/^\s*function\s*([^(]*)/i;l($,"REGEXP",K),H=Array.isArray?Array.isArray:function(r){return"[object Array]"===I(r)};var Q=H;function W(r){return null!==r&&"object"==typeof r}var Z=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!Q(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(W);function rr(r){var t,n,e,o;if(("Object"===(n=I(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=K.exec(e.toString()))return t[1]}return W(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(W,"isObjectLikeArray",Z);var tr="function"==typeof S||"object"==typeof Y||"function"==typeof X?function(r){return rr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?rr(r).toLowerCase():t};var nr,er,or=Object.getPrototypeOf;er=Object.getPrototypeOf,nr="function"===tr(er)?or:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===I(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ur=nr;function ir(r){return null==r?null:(r=Object(r),ur(r))}function ar(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===I(r))return!0;r=ir(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var fr="function"==typeof Math.fround?Math.fround:null,cr="function"==typeof Float32Array;var lr=Number.POSITIVE_INFINITY,sr="function"==typeof Float32Array?Float32Array:null;var pr,yr="function"==typeof Float32Array?Float32Array:void 0;pr=function(){var r,t;if("function"!=typeof sr)return!1;try{r=function(r){return cr&&r instanceof Float32Array||"[object Float32Array]"===I(r)}(t=new sr([1,3.14,-3.14,5e40]))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===lr}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var br=new pr(1);var vr="function"==typeof fr?fr:function(r){return br[0]=r,br[0]},dr=Math.floor;function gr(r,t,n,e,o){var u,i,a,f,c,l,s,p,y,b,v,d,g,h;if(u=o,r<8){for(v=0,d=0,h=0;h<r;h++)(g=n[u])==g&&(v=vr(v+g),d+=1),u+=e;return t[0]=vr(t[0]+v),t[1]+=d,t}if(r<=128){for(i=0,a=0,f=0,c=0,l=0,s=0,p=0,y=0,d=0,b=r%8,h=0;h<r-b;h+=8)(g=n[u])==g&&(i=vr(i+g),d+=1),(g=n[u+=e])==g&&(a=vr(a+g),d+=1),(g=n[u+=e])==g&&(f=vr(f+g),d+=1),(g=n[u+=e])==g&&(c=vr(c+g),d+=1),(g=n[u+=e])==g&&(l=vr(l+g),d+=1),(g=n[u+=e])==g&&(s=vr(s+g),d+=1),(g=n[u+=e])==g&&(p=vr(p+g),d+=1),(g=n[u+=e])==g&&(y=vr(y+g),d+=1),u+=e;for(v=vr(vr(vr(i+a)+vr(f+c))+vr(vr(l+s)+vr(p+y)));h<r;h++)(g=n[u])==g&&(v=vr(v+g),d+=1),u+=e;return t[0]=vr(t[0]+v),t[1]+=d,t}return d=dr(r/2),vr(gr(d-=d%8,t,n,e,u)+gr(r-d,t,n,e,u+d*e))}var hr=[0,0];function jr(r,t,n,e){var o,u,i,a,f,c,l,s,p;if(r<=0)return NaN;if(1===r||0===e)return(l=n[0])==l&&r-t>0?0:NaN;if(u=e<0?(1-r)*e:0,hr[0]=0,hr[1]=0,gr(r,hr,n,e,u),(a=(s=hr[1])-t)<=0)return NaN;for(o=vr(hr[0]/s),i=0,f=0,p=0;p<r;p++)(l=n[u])==l&&(c=vr(l-o),i=vr(i+vr(c*c)),f=vr(f+c),s+=1),u+=e;return vr(vr(i/a)-vr(vr(f/s)*vr(f/a)))}var mr=[0,0];l(jr,"ndarray",(function(r,t,n,e,o){var u,i,a,f,c,l,s,p,y;if(r<=0)return NaN;if(1===r||0===e)return(s=n[o])==s&&r-t>0?0:NaN;if(i=o,mr[0]=0,mr[1]=0,gr(r,mr,n,e,i),(f=(p=mr[1])-t)<=0)return NaN;for(u=vr(mr[0]/p),a=0,c=0,y=0;y<r;y++)(s=n[i])==s&&(l=vr(s-u),a=vr(a+vr(l*l)),c=vr(c+l),p+=1),i+=e;return vr(vr(a/f)-vr(vr(c/p)*vr(c/f)))}));var wr,_r=ar((0,N.join)("/home/runner/work/stats-base-snanstdev/stats-base-snanstdev/node_modules/@stdlib/stats-base-snanvariancepn/lib","./native.js")),Or=wr=_r instanceof Error?jr:_r;const{ndarray:Ar}=wr;var Er=Math.sqrt;function Nr(r,t,n,e){return vr(Er(Or(r,t,n,e)))}l(Nr,"ndarray",(function(r,t,n,e,o){return vr(Er(Ar(r,t,n,e,o)))}));var Sr,Pr=ar((0,N.join)("/home/runner/work/stats-base-snanstdev/stats-base-snanstdev/node_modules/@stdlib/stats-base-snanstdevpn/lib","./native.js")),Fr=Sr=Pr instanceof Error?Nr:Pr;const{ndarray:Tr}=Sr;function kr(r,t,n,e){return Fr(r,t,n,e)}function Mr(r,t,n,e,o){return Tr(r,t,n,e,o)}l(kr,"ndarray",Mr);export{kr as default,Mr as ndarray};
//# sourceMappingURL=mod.js.map
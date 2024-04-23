import{B as P,V as R,T as z,n as N,a4 as H,a3 as K,q,u as x}from"./BnYvrlzK.js";const S=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function V(r,i){if(typeof r!="string")throw new TypeError("argument str must be a string");const n={},t=(i||{}).decode||X;let o=0;for(;o<r.length;){const s=r.indexOf("=",o);if(s===-1)break;let a=r.indexOf(";",o);if(a===-1)a=r.length;else if(a<s){o=r.lastIndexOf(";",s-1)+1;continue}const c=r.slice(o,s).trim();if(n[c]===void 0){let u=r.slice(s+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[c]=W(u,t)}o=a+1}return n}function T(r,i,n){const e=n||{},t=e.encode||Y;if(typeof t!="function")throw new TypeError("option encode is invalid");if(!S.test(r))throw new TypeError("argument name is invalid");const o=t(i);if(o&&!S.test(o))throw new TypeError("argument val is invalid");let s=r+"="+o;if(e.maxAge!==void 0&&e.maxAge!==null){const a=e.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(a)}if(e.domain){if(!S.test(e.domain))throw new TypeError("option domain is invalid");s+="; Domain="+e.domain}if(e.path){if(!S.test(e.path))throw new TypeError("option path is invalid");s+="; Path="+e.path}if(e.expires){if(!J(e.expires)||Number.isNaN(e.expires.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(s+="; HttpOnly"),e.secure&&(s+="; Secure"),e.priority)switch(typeof e.priority=="string"?e.priority.toLowerCase():e.priority){case"low":{s+="; Priority=Low";break}case"medium":{s+="; Priority=Medium";break}case"high":{s+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:{s+="; SameSite=Strict";break}case"lax":{s+="; SameSite=Lax";break}case"strict":{s+="; SameSite=Strict";break}case"none":{s+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return e.partitioned&&(s+="; Partitioned"),s}function J(r){return Object.prototype.toString.call(r)==="[object Date]"||r instanceof Date}function W(r,i){try{return i(r)}catch{return r}}function X(r){return r.includes("%")?decodeURIComponent(r):r}function Y(r){return encodeURIComponent(r)}const C=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function B(r,i){i?i={...C,...i}:i=C;const n=D(i);return n.dispatch(r),n.toString()}const $=Object.freeze(["prototype","__proto__","constructor"]);function D(r){let i="",n=new Map;const e=t=>{i+=t};return{toString(){return i},getContext(){return n},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const o=Object.prototype.toString.call(t);let s="";const a=o.length;a<10?s="unknown:["+o+"]":s=o.slice(8,a-1),s=s.toLowerCase();let c=null;if((c=n.get(t))===void 0)n.set(t,n.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(s!=="object"&&s!=="function"&&s!=="asyncfunction")this[s]?this[s](t):r.ignoreUnknown||this.unkown(t,s);else{let u=Object.keys(t);r.unorderedObjects&&(u=u.sort());let f=[];r.respectType!==!1&&!A(t)&&(f=$),r.excludeKeys&&(u=u.filter(l=>!r.excludeKeys(l)),f=f.filter(l=>!r.excludeKeys(l))),e("object:"+(u.length+f.length)+":");const h=l=>{this.dispatch(l),e(":"),r.excludeValues||this.dispatch(t[l]),e(",")};for(const l of u)h(l);for(const l of f)h(l)}},array(t,o){if(o=o===void 0?r.unorderedArrays!==!1:o,e("array:"+t.length+":"),!o||t.length<=1){for(const c of t)this.dispatch(c);return}const s=new Map,a=t.map(c=>{const u=D(r);u.dispatch(c);for(const[f,h]of u.getContext())s.set(f,h);return u.toString()});return n=s,a.sort(),this.array(a,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,o){if(e(o),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),A(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const o=[...t];return this.array(o,r.unorderedSets!==!1)},set(t){e("set:");const o=[...t];return this.array(o,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const I="[native code] }",G=I.length;function A(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-G)===I}class d{constructor(i,n){i=this.words=i||[],this.sigBytes=n===void 0?i.length*4:n}toString(i){return(i||Q).stringify(this)}concat(i){if(this.clamp(),this.sigBytes%4)for(let n=0;n<i.sigBytes;n++){const e=i.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=e<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<i.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=i.words[n>>>2];return this.sigBytes+=i.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new d([...this.words])}}const Q={stringify(r){const i=[];for(let n=0;n<r.sigBytes;n++){const e=r.words[n>>>2]>>>24-n%4*8&255;i.push((e>>>4).toString(16),(e&15).toString(16))}return i.join("")}},Z={stringify(r){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,o=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,s=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,a=t<<16|o<<8|s;for(let c=0;c<4&&e*8+c*6<r.sigBytes*8;c++)n.push(i.charAt(a>>>6*(3-c)&63))}return n.join("")}},ee={parse(r){const i=r.length,n=[];for(let e=0;e<i;e++)n[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new d(n,i)}},te={parse(r){return ee.parse(unescape(encodeURIComponent(r)))}};class re{constructor(){this._data=new d,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new d,this._nDataBytes=0}_append(i){typeof i=="string"&&(i=te.parse(i)),this._data.concat(i),this._nDataBytes+=i.sigBytes}_doProcessBlock(i,n){}_process(i){let n,e=this._data.sigBytes/(this.blockSize*4);i?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,o=Math.min(t*4,this._data.sigBytes);if(t){for(let s=0;s<t;s+=this.blockSize)this._doProcessBlock(this._data.words,s);n=this._data.words.splice(0,t),this._data.sigBytes-=o}return new d(n,o)}}class ne extends re{update(i){return this._append(i),this._process(),this}finalize(i){i&&this._append(i)}}const E=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ie=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],y=[];class se extends ne{constructor(){super(...arguments),this._hash=new d([...E])}reset(){super.reset(),this._hash=new d([...E])}_doProcessBlock(i,n){const e=this._hash.words;let t=e[0],o=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7];for(let l=0;l<64;l++){if(l<16)y[l]=i[n+l]|0;else{const w=y[l-15],L=(w<<25|w>>>7)^(w<<14|w>>>18)^w>>>3,m=y[l-2],F=(m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10;y[l]=L+y[l-7]+F+y[l-16]}const g=c&u^~c&f,v=t&o^t&s^o&s,b=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),M=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),_=h+M+g+ie[l]+y[l],U=b+v;h=f,f=u,u=c,c=a+_|0,a=s,s=o,o=t,t=_+U|0}e[0]=e[0]+t|0,e[1]=e[1]+o|0,e[2]=e[2]+s|0,e[3]=e[3]+a|0,e[4]=e[4]+c|0,e[5]=e[5]+u|0,e[6]=e[6]+f|0,e[7]=e[7]+h|0}finalize(i){super.finalize(i);const n=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(e+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function oe(r){return new se().finalize(r).toString(Z)}function de(r,i={}){const n=typeof r=="string"?r:B(r,i);return oe(n).slice(0,10)}function ae(r,i,n={}){return r===i||B(r,n)===B(i,n)}function p(r){if(typeof r!="object")return r;var i,n,e=Object.prototype.toString.call(r);if(e==="[object Object]"){if(r.constructor!==Object&&typeof r.constructor=="function"){n=new r.constructor;for(i in r)r.hasOwnProperty(i)&&n[i]!==r[i]&&(n[i]=p(r[i]))}else{n={};for(i in r)i==="__proto__"?Object.defineProperty(n,i,{value:p(r[i]),configurable:!0,enumerable:!0,writable:!0}):n[i]=p(r[i])}return n}if(e==="[object Array]"){for(i=r.length,n=Array(i);i--;)n[i]=p(r[i]);return n}return e==="[object Set]"?(n=new Set,r.forEach(function(t){n.add(p(t))}),n):e==="[object Map]"?(n=new Map,r.forEach(function(t,o){n.set(p(o),p(t))}),n):e==="[object Date]"?new Date(+r):e==="[object RegExp]"?(n=new RegExp(r.source,r.flags),n.lastIndex=r.lastIndex,n):e==="[object DataView]"?new r.constructor(p(r.buffer)):e==="[object ArrayBuffer]"?r.slice(0):e.slice(-6)==="Array]"?new r.constructor(r):r}const ce={path:"/",watch:!0,decode:r=>K(decodeURIComponent(r)),encode:r=>encodeURIComponent(typeof r=="string"?r:JSON.stringify(r))},ue=void 0;function k(r,i){var c;const n={...ce,...i},e=O(n)||{};let t;n.maxAge!==void 0?t=n.maxAge*1e3:n.expires&&(t=n.expires.getTime()-Date.now());const o=t!==void 0&&t<=0,s=p(o?void 0:e[r]??((c=n.default)==null?void 0:c.call(n))),a=t&&!o?he(s,t,n.watch&&n.watch!=="shallow"):P(s);{let u=null;try{!ue&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${r}`))}catch{}const f=()=>{n.readonly||ae(a.value,e[r])||(fe(r,a.value,n),e[r]=p(a.value),u==null||u.postMessage({value:n.encode(a.value)}))},h=g=>{var b;const v=g.refresh?(b=O(n))==null?void 0:b[r]:n.decode(g.value);l=!0,e[r]=a.value=v,q(()=>{l=!1})};let l=!1;R()&&z(()=>{l=!0,f(),u==null||u.close()}),u&&(u.onmessage=({data:g})=>h(g)),n.watch?N(a,()=>{l||f()},{deep:n.watch!=="shallow"}):f()}return a}function O(r={}){return V(document.cookie,r)}function le(r,i,n={}){return i==null?T(r,i,{...n,maxAge:-1}):T(r,i,n)}function fe(r,i,n={}){document.cookie=le(r,i,n)}const j=2147483647;function he(r,i,n){let e,t,o=0;const s=n?P(r):{value:r};return R()&&z(()=>{t==null||t(),clearTimeout(e)}),H((a,c)=>{n&&(t=N(s,c));function u(){clearTimeout(e);const f=i-o,h=f<j?f:j;e=setTimeout(()=>{if(o+=h,o<i)return u();s.value=void 0,c()},h)}return{get(){return a(),s.value},set(f){u(),s.value=f,c()}}})}const ye=()=>({isEnabled:()=>{const e=x().query;return Object.prototype.hasOwnProperty.call(e,"preview")&&!e.preview?!1:!!(e.preview||k("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>k("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:e=>{k("previewToken").value=e,x().query.preview=e||"",e?sessionStorage.setItem("previewToken",e):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{de as h,ye as u};

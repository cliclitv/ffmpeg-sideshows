import{r as A,o as N,c as D,F as ae,a as me,b as k,t as K,d as ve,w as we,v as ye,e as oe}from"./index-928a409a.js";const be="https://cliclitv.github.io/ffmpeg-sideshows/delete-858524c4.png";const _e={class:"file"},Fe=["src"],Le=["onClick"],Ee={class:"file-li",title:"上传(PNG)图片"},$e=k("p",{class:"file-li-text"},"上传(PNG)图片",-1),ke={class:"file-li",title:"上传背景音乐"},je={class:"file-li-text"},Se={__name:"UploadFile",emits:["change"],setup(o,{emit:c}){const s=A([]),n=A({}),f=u=>{let y=u.target.files;l(y,0)},l=(u,y)=>{let d=new FileReader;d.readAsDataURL(u[y]),d.onload=j=>{s.value.push(Object.assign(j,{raw:u[y]})),++y<u.length&&l(u,y),c("change",{imgs:s.value,videoBg:n.value})}},g=u=>{n.value=u.target.files[0],c("change",{imgs:s.value,videoBg:n.value})},p=u=>{s.value.splice(u,1),c("change",{imgs:s.value,videoBg:n.value})};return(u,y)=>(N(),D("ul",_e,[(N(!0),D(ae,null,me(s.value,(d,j)=>(N(),D("li",{class:"file-li",key:j},[k("img",{class:"file-li-main",src:d.target.result,alt:""},null,8,Fe),k("img",{class:"file-li-delete",src:be,alt:"",onClick:U=>p(j),title:"删除图片"},null,8,Le)]))),128)),k("li",Ee,[$e,k("input",{class:"file-li-file",type:"file",accept:"image/png",multiple:"",onChange:f},null,32)]),k("li",ke,[k("p",je,K(n.value.name?n.value.name:"上传背景音乐"),1),k("input",{class:"file-li-file",type:"file",accept:"audio/*",onChange:g},null,32)])]))}};var Pe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ce(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Oe={exports:{}};(function(o){var c=function(s){var n=Object.prototype,f=n.hasOwnProperty,l,g=typeof Symbol=="function"?Symbol:{},p=g.iterator||"@@iterator",u=g.asyncIterator||"@@asyncIterator",y=g.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch{d=function(e,r,a){return e[r]=a}}function j(t,e,r,a){var i=e&&e.prototype instanceof M?e:M,w=Object.create(i.prototype),F=new Y(a||[]);return w._invoke=he(t,r,F),w}s.wrap=j;function U(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(a){return{type:"throw",arg:a}}}var b="suspendedStart",S="suspendedYield",O="executing",m="completed",$={};function M(){}function h(){}function v(){}var _={};d(_,p,function(){return this});var T=Object.getPrototypeOf,P=T&&T(T(z([])));P&&P!==n&&f.call(P,p)&&(_=P);var R=v.prototype=M.prototype=Object.create(_);h.prototype=v,d(R,"constructor",v),d(v,"constructor",h),h.displayName=d(v,y,"GeneratorFunction");function ee(t){["next","throw","return"].forEach(function(e){d(t,e,function(r){return this._invoke(e,r)})})}s.isGeneratorFunction=function(t){var e=typeof t=="function"&&t.constructor;return e?e===h||(e.displayName||e.name)==="GeneratorFunction":!1},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,d(t,y,"GeneratorFunction")),t.prototype=Object.create(R),t},s.awrap=function(t){return{__await:t}};function V(t,e){function r(w,F,L,C){var E=U(t[w],t,F);if(E.type==="throw")C(E.arg);else{var H=E.arg,I=H.value;return I&&typeof I=="object"&&f.call(I,"__await")?e.resolve(I.__await).then(function(B){r("next",B,L,C)},function(B){r("throw",B,L,C)}):e.resolve(I).then(function(B){H.value=B,L(H)},function(B){return r("throw",B,L,C)})}}var a;function i(w,F){function L(){return new e(function(C,E){r(w,F,C,E)})}return a=a?a.then(L,L):L()}this._invoke=i}ee(V.prototype),d(V.prototype,u,function(){return this}),s.AsyncIterator=V,s.async=function(t,e,r,a,i){i===void 0&&(i=Promise);var w=new V(j(t,e,r,a),i);return s.isGeneratorFunction(e)?w:w.next().then(function(F){return F.done?F.value:w.next()})};function he(t,e,r){var a=b;return function(w,F){if(a===O)throw new Error("Generator is already running");if(a===m){if(w==="throw")throw F;return re()}for(r.method=w,r.arg=F;;){var L=r.delegate;if(L){var C=te(L,r);if(C){if(C===$)continue;return C}}if(r.method==="next")r.sent=r._sent=r.arg;else if(r.method==="throw"){if(a===b)throw a=m,r.arg;r.dispatchException(r.arg)}else r.method==="return"&&r.abrupt("return",r.arg);a=O;var E=U(t,e,r);if(E.type==="normal"){if(a=r.done?m:S,E.arg===$)continue;return{value:E.arg,done:r.done}}else E.type==="throw"&&(a=m,r.method="throw",r.arg=E.arg)}}}function te(t,e){var r=t.iterator[e.method];if(r===l){if(e.delegate=null,e.method==="throw"){if(t.iterator.return&&(e.method="return",e.arg=l,te(t,e),e.method==="throw"))return $;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return $}var a=U(r,t.iterator,e.arg);if(a.type==="throw")return e.method="throw",e.arg=a.arg,e.delegate=null,$;var i=a.arg;if(!i)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,$;if(i.done)e[t.resultName]=i.value,e.next=t.nextLoc,e.method!=="return"&&(e.method="next",e.arg=l);else return i;return e.delegate=null,$}ee(R),d(R,y,"Generator"),d(R,p,function(){return this}),d(R,"toString",function(){return"[object Generator]"});function ge(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Y(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(ge,this),this.reset(!0)}s.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function a(){for(;e.length;){var i=e.pop();if(i in t)return a.value=i,a.done=!1,a}return a.done=!0,a}};function z(t){if(t){var e=t[p];if(e)return e.call(t);if(typeof t.next=="function")return t;if(!isNaN(t.length)){var r=-1,a=function i(){for(;++r<t.length;)if(f.call(t,r))return i.value=t[r],i.done=!1,i;return i.value=l,i.done=!0,i};return a.next=a}}return{next:re}}s.values=z;function re(){return{value:l,done:!0}}return Y.prototype={constructor:Y,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(q),!t)for(var e in this)e.charAt(0)==="t"&&f.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=l)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(C,E){return w.type="throw",w.arg=t,e.next=C,E&&(e.method="next",e.arg=l),!!E}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],w=i.completion;if(i.tryLoc==="root")return r("end");if(i.tryLoc<=this.prev){var F=f.call(i,"catchLoc"),L=f.call(i,"finallyLoc");if(F&&L){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(F){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else if(L){if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&f.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&(t==="break"||t==="continue")&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var w=i?i.completion:{};return w.type=t,w.arg=e,i?(this.method="next",this.next=i.finallyLoc,$):this.complete(w)},complete:function(t,e){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&e&&(this.next=e),$},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),$}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if(a.type==="throw"){var i=a.arg;q(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:z(t),resultName:e,nextLoc:r},this.method==="next"&&(this.arg=l),$}},s}(o.exports);try{regeneratorRuntime=c}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}})(Oe);var Te={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}};let Q=!1,le=()=>{};const Ue=o=>{Q=o},Re=o=>{le=o},Ae=(o,c)=>{le({type:o,message:c}),Q&&console.log(`[${o}] ${c}`)};var ce={logging:Q,setLogging:Ue,setCustomLogger:Re,log:Ae};let x=0,J=0;const ne=o=>{const[c,s,n]=o.split(":");return parseFloat(c)*60*60+parseFloat(s)*60+parseFloat(n)};var Be=(o,c)=>{if(typeof o=="string")if(o.startsWith("  Duration")){const s=o.split(", ")[0].split(": ")[1],n=ne(s);c({duration:n,ratio:J}),(x===0||x>n)&&(x=n)}else if(o.startsWith("frame")||o.startsWith("size")){const s=o.split("time=")[1].split(" ")[0],n=ne(s);J=n/x,c({ratio:J,time:n})}else o.startsWith("video:")&&(c({ratio:1}),x=0)},Ge=(o,c)=>{const s=o._malloc(c.length*Uint32Array.BYTES_PER_ELEMENT);return c.forEach((n,f)=>{const l=o._malloc(n.length+1);o.writeAsciiToMemory(n,l),o.setValue(s+Uint32Array.BYTES_PER_ELEMENT*f,l,"i32")}),[c.length,s]},fe={exports:{}};(function(o,c){(function(s,n){o.exports=n()})(Pe,function(){function s(){var n=arguments.length;if(n===0)throw new Error("resolveUrl requires at least one argument; got none.");var f=document.createElement("base");if(f.href=arguments[0],n===1)return f.href;var l=document.getElementsByTagName("head")[0];l.insertBefore(f,l.firstChild);for(var g=document.createElement("a"),p,u=1;u<n;u++)g.href=arguments[u],p=g.href,f.href=p;return l.removeChild(f),p}return s})})(fe);var ue=fe.exports;const Ne="@ffmpeg/ffmpeg",De="0.10.1",Me="FFmpeg WebAssembly version",Ie="src/index.js",xe="src/index.d.ts",We={example:"examples"},Ve={start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js",prepublishOnly:"npm run build",lint:"eslint src",wait:"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},qe={"./src/node/index.js":"./src/browser/index.js"},Ye={type:"git",url:"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},ze=["ffmpeg","WebAssembly","video"],He="Jerome Wu <jeromewus@gmail.com>",Je="MIT",Xe={url:"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},Ze={node:">=12.16.1"},Ke="https://github.com/ffmpegwasm/ffmpeg.wasm#readme",Qe={"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},et={"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.10.0","@types/emscripten":"^1.39.4","babel-loader":"^8.1.0",chai:"^4.2.0",cors:"^2.8.5",eslint:"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1",express:"^4.17.1",mocha:"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0",webpack:"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"},pe={name:Ne,version:De,description:Me,main:Ie,types:xe,directories:We,scripts:Ve,browser:qe,repository:Ye,keywords:ze,author:He,license:Je,bugs:Xe,engines:Ze,homepage:Ke,dependencies:Qe,devDependencies:et},{devDependencies:tt}=pe;var rt={corePath:`https://unpkg.com/@ffmpeg/core@${tt["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`};const ot=ue,{log:W}=ce,X=async(o,c)=>{W("info",`fetch ${o}`);const s=await(await fetch(o)).arrayBuffer();W("info",`${o} file size = ${s.byteLength} bytes`);const n=new Blob([s],{type:c}),f=URL.createObjectURL(n);return W("info",`${o} blob URL = ${f}`),f};var nt=async({corePath:o})=>{if(typeof o!="string")throw Error("corePath should be a string!");const c=ot(o),s=await X(c,"application/javascript"),n=await X(c.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),f=await X(c.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise(l=>{const g=document.createElement("script"),p=()=>{g.removeEventListener("load",p),W("info","ffmpeg-core.js script loaded"),l({createFFmpegCore,corePath:s,wasmPath:n,workerPath:f})};g.src=s,g.type="text/javascript",g.addEventListener("load",p),document.getElementsByTagName("head")[0].appendChild(g)}):(W("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:s,wasmPath:n,workerPath:f}))};const it=ue,st=o=>new Promise((c,s)=>{const n=new FileReader;n.onload=()=>{c(n.result)},n.onerror=({target:{error:{code:f}}})=>{s(Error(`File could not be read! Code=${f}`))},n.readAsArrayBuffer(o)});var at=async o=>{let c=o;return typeof o>"u"?new Uint8Array:(typeof o=="string"?/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(o)?c=atob(o.split(",")[1]).split("").map(s=>s.charCodeAt(0)):c=await(await fetch(it(o))).arrayBuffer():(o instanceof File||o instanceof Blob)&&(c=await st(o)),new Uint8Array(c))};const lt=rt,ct=nt,ft=at;var de={defaultOptions:lt,getCreateFFmpegCore:ct,fetchFile:ft};const{defaultArgs:ut,baseOptions:pt}=Te,{setLogging:ie,setCustomLogger:se,log:G}=ce,dt=Be,ht=Ge,{defaultOptions:gt,getCreateFFmpegCore:mt}=de,{version:vt}=pe,Z=Error("ffmpeg.wasm is not ready, make sure you have completed load().");var wt=(o={})=>{const{log:c,logger:s,progress:n,...f}={...pt,...gt,...o};let l=null,g=null,p=null,u=!1,y=n;const d=h=>{h==="FFMPEG_END"&&p!==null&&(p(),p=null,u=!1)},j=({type:h,message:v})=>{G(h,v),dt(v,y),d(v)},U=async()=>{if(G("info","load ffmpeg-core"),l===null){G("info","loading ffmpeg-core");const{createFFmpegCore:h,corePath:v,workerPath:_,wasmPath:T}=await mt(f);l=await h({mainScriptUrlOrBlob:v,printErr:P=>j({type:"fferr",message:P}),print:P=>j({type:"ffout",message:P}),locateFile:(P,R)=>{if(typeof window<"u"){if(typeof T<"u"&&P.endsWith("ffmpeg-core.wasm"))return T;if(typeof _<"u"&&P.endsWith("ffmpeg-core.worker.js"))return _}return R+P}}),g=l.cwrap("proxy_main","number",["number","number"]),G("info","ffmpeg-core loaded")}else throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.")},b=()=>l!==null,S=(...h)=>{if(G("info",`run ffmpeg command: ${h.join(" ")}`),l===null)throw Z;if(u)throw Error("ffmpeg.wasm can only run one command at a time");return u=!0,new Promise(v=>{const _=[...ut,...h].filter(T=>T.length!==0);p=v,g(...ht(l,_))})},O=(h,...v)=>{if(G("info",`run FS.${h} ${v.map(_=>typeof _=="string"?_:`<${_.length} bytes binary file>`).join(" ")}`),l===null)throw Z;{let _=null;try{_=l.FS[h](...v)}catch{throw Error(h==="readdir"?`ffmpeg.FS('readdir', '${v[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`:h==="readFile"?`ffmpeg.FS('readFile', '${v[0]}') error. Check if the path exists`:"Oops, something went wrong in FS operation.")}return _}},m=()=>{if(l===null)throw Z;u=!1,l.exit(1),l=null,g=null,p=null},$=h=>{y=h},M=h=>{se(h)};return ie(c),se(s),G("info",`use ffmpeg.wasm v${vt}`),{setProgress:$,setLogger:M,setLogging:ie,load:U,isLoaded:b,run:S,exit:m,FS:O}};const yt=wt,{fetchFile:bt}=de;var _t={createFFmpeg:yt,fetchFile:bt};const Ft=Ce(_t);const Lt={class:"container"},Et={class:"form"},$t=["disabled"],kt={key:0,class:"text"},jt=["src"],Pt={__name:"index",setup(o){const{createFFmpeg:c,fetchFile:s}=Ft,n=c({log:!1}),f=A([]),l=A({}),g=b=>{f.value=b.imgs,l.value=b.videoBg},p=A(""),u=A(""),y=A(!0),d=A(""),j=async()=>{n.isLoaded()||await n.load();for(let m in f.value)n.FS("writeFile",`${m}.png`,await s(f.value[m].raw));n.setProgress(({ratio:m})=>{y.value=m==1}),n.setLogger(m=>{u.value=m.message});const b=d.value.toString()||"1",S=(f.value.length*b).toString();if(l.value.name){const m=encodeURI(l.value.name);n.FS("writeFile",m,await s(l.value)),await n.run("-r",b,"-f","image2","-i","%d.png","-i",m,"-t",S,"video.mp4")}else await n.run("-r",b,"-f","image2","-i","%d.png","-t",S,"video.mp4");const O=n.FS("readFile","video.mp4");p.value=URL.createObjectURL(new Blob([O.buffer],{type:"video/mp4"}))},U=()=>{const b=new XMLHttpRequest;b.open("GET",p.value),b.responseType="blob",b.onload=S=>{if(S.target.status==200){const O=window.URL.createObjectURL(S.currentTarget.response),m=document.createElement("a");m.href=O,m.setAttribute("download",`${new Date().getTime()}.mp4`),m.click()}},b.send()};return(b,S)=>(N(),D("div",Lt,[ve(Se,{onChange:g}),k("div",Et,[k("button",{onClick:j,class:"form-btn",disabled:!(f.value.length>0)},K(f.value.length>0?"合成视频":"☝️请上传(PNG)图片"),9,$t),we(k("input",{class:"form-input","onUpdate:modelValue":S[0]||(S[0]=O=>d.value=O),type:"number",placeholder:"设置帧数(默认1)"},null,512),[[ye,d.value]])]),u.value?(N(),D("p",kt,K(y.value?"合成视频完成":u.value),1)):oe("",!0),p.value?(N(),D(ae,{key:1},[k("video",{class:"main",src:p.value,controls:""},null,8,jt),k("button",{class:"download",onClick:U},"下载视频")],64)):oe("",!0)]))}};export{Pt as default};

var ka=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var U=(n,e,t)=>(ka(n,e,"read from private field"),t?t.call(n):e.get(n)),Te=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},ge=(n,e,t,r)=>(ka(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t);var Ze=(n,e,t)=>(ka(n,e,"access private method"),t);import{r as Yt,x as wg}from"./components-B4muXIau.js";var Sl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Tg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},gd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,_=(i&3)<<4|c>>4;let v=(c&15)<<2|h>>6,b=h&63;u||(b=64,a||(v=64)),r.push(t[f],t[_],t[v],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(md(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Tg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||_==null)throw new Ig;const v=i<<2|c>>4;if(r.push(v),h!==64){const b=c<<4&240|h>>2;if(r.push(b),_!==64){const C=h<<6&192|_;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ig extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eg=function(n){const e=md(n);return gd.encodeByteArray(e,!0)},eo=function(n){return Eg(n).replace(/\./g,"")},_d=function(n){try{return gd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=()=>Ag().__FIREBASE_DEFAULTS__,Rg=()=>{if(typeof process>"u"||typeof Sl>"u")return;const n=Sl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_d(n[1]);return e&&JSON.parse(e)},ko=()=>{try{return bg()||Rg()||Sg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yd=n=>{var e,t;return(t=(e=ko())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},vd=n=>{const e=yd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},wd=()=>{var n;return(n=ko())===null||n===void 0?void 0:n.config},Td=n=>{var e;return(e=ko())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[eo(JSON.stringify(t)),eo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Cg(){var n;const e=(n=ko())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ed(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Og(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ng(){return!Cg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ad(){try{return typeof indexedDB=="object"}catch{return!1}}function bd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function xg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="FirebaseError";class st extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Vg,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yn.prototype.create)}}class Yn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Mg(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new st(s,c,r)}}function Mg(n,e){return n.replace(Lg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Lg=/\{\$([^}]+)}/g;function Fg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Es(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Pl(i)&&Pl(a)){if(!Es(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Pl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function us(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ug(n,e){const t=new jg(n,e);return t.subscribe.bind(t)}class jg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Bg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ca),s.error===void 0&&(s.error=Ca),s.complete===void 0&&(s.complete=Ca);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ca(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=1e3,qg=2,zg=4*60*60*1e3,Hg=.5;function kl(n,e=$g,t=qg){const r=e*Math.pow(t,n),s=Math.round(Hg*r*(Math.random()-.5)*2);return Math.min(zg,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n){return n&&n._delegate?n._delegate:n}let Mt=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Pg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kg(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wg(n){return n===Pn?void 0:n}function Kg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const Zg={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Yg=te.INFO,Xg={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Jg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Xg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Co{constructor(e){this.name=e,this._logLevel=Yg,this._logHandler=Jg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const e_=(n,e)=>e.some(t=>n instanceof t);let Cl,Dl;function t_(){return Cl||(Cl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n_(){return Dl||(Dl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rd=new WeakMap,Ga=new WeakMap,Sd=new WeakMap,Da=new WeakMap,bc=new WeakMap;function r_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(ln(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Rd.set(t,n)}).catch(()=>{}),bc.set(e,n),e}function s_(n){if(Ga.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ga.set(n,e)}let Wa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ga.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Sd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ln(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function i_(n){Wa=n(Wa)}function o_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Oa(this),e,...t);return Sd.set(r,e.sort?e.sort():[e]),ln(r)}:n_().includes(n)?function(...e){return n.apply(Oa(this),e),ln(Rd.get(this))}:function(...e){return ln(n.apply(Oa(this),e))}}function a_(n){return typeof n=="function"?o_(n):(n instanceof IDBTransaction&&s_(n),e_(n,t_())?new Proxy(n,Wa):n)}function ln(n){if(n instanceof IDBRequest)return r_(n);if(Da.has(n))return Da.get(n);const e=a_(n);return e!==n&&(Da.set(n,e),bc.set(e,n)),e}const Oa=n=>bc.get(n);function Pd(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=ln(a);return r&&a.addEventListener("upgradeneeded",u=>{r(ln(a.result),u.oldVersion,u.newVersion,ln(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const c_=["get","getKey","getAll","getAllKeys","count"],u_=["put","add","delete","clear"],Na=new Map;function Ol(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Na.get(e))return Na.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=u_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||c_.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return Na.set(e,i),i}i_(n=>({...n,get:(e,t,r)=>Ol(e,t)||n.get(e,t,r),has:(e,t)=>!!Ol(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(h_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function h_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ka="@firebase/app",Nl="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Co("@firebase/app"),d_="@firebase/app-compat",f_="@firebase/analytics-compat",p_="@firebase/analytics",m_="@firebase/app-check-compat",g_="@firebase/app-check",__="@firebase/auth",y_="@firebase/auth-compat",v_="@firebase/database",w_="@firebase/database-compat",T_="@firebase/functions",I_="@firebase/functions-compat",E_="@firebase/installations",A_="@firebase/installations-compat",b_="@firebase/messaging",R_="@firebase/messaging-compat",S_="@firebase/performance",P_="@firebase/performance-compat",k_="@firebase/remote-config",C_="@firebase/remote-config-compat",D_="@firebase/storage",O_="@firebase/storage-compat",N_="@firebase/firestore",x_="@firebase/vertexai-preview",V_="@firebase/firestore-compat",M_="firebase",L_="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="[DEFAULT]",F_={[Ka]:"fire-core",[d_]:"fire-core-compat",[p_]:"fire-analytics",[f_]:"fire-analytics-compat",[g_]:"fire-app-check",[m_]:"fire-app-check-compat",[__]:"fire-auth",[y_]:"fire-auth-compat",[v_]:"fire-rtdb",[w_]:"fire-rtdb-compat",[T_]:"fire-fn",[I_]:"fire-fn-compat",[E_]:"fire-iid",[A_]:"fire-iid-compat",[b_]:"fire-fcm",[R_]:"fire-fcm-compat",[S_]:"fire-perf",[P_]:"fire-perf-compat",[k_]:"fire-rc",[C_]:"fire-rc-compat",[D_]:"fire-gcs",[O_]:"fire-gcs-compat",[N_]:"fire-fst",[V_]:"fire-fst-compat",[x_]:"fire-vertex","fire-js":"fire-js",[M_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new Map,U_=new Map,Za=new Map;function xl(n,e){try{n.container.addComponent(e)}catch(t){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ut(n){const e=n.name;if(Za.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;Za.set(e,n);for(const t of to.values())xl(t,n);for(const t of U_.values())xl(t,n);return!0}function wn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function mt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hn=new Yn("app","Firebase",j_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=L_;function kd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qa,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw hn.create("bad-app-name",{appName:String(s)});if(t||(t=wd()),!t)throw hn.create("no-options");const i=to.get(s);if(i){if(Es(t,i.options)&&Es(r,i.config))return i;throw hn.create("duplicate-app",{appName:s})}const a=new Qg(s);for(const u of Za.values())a.addComponent(u);const c=new B_(t,r,a);return to.set(s,c),c}function Do(n=Qa){const e=to.get(n);if(!e&&n===Qa&&wd())return kd();if(!e)throw hn.create("no-app",{appName:n});return e}function et(n,e,t){var r;let s=(r=F_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(c.join(" "));return}ut(new Mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="firebase-heartbeat-database",q_=1,As="firebase-heartbeat-store";let xa=null;function Cd(){return xa||(xa=Pd($_,q_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(As)}catch(t){console.warn(t)}}}}).catch(n=>{throw hn.create("idb-open",{originalErrorMessage:n.message})})),xa}async function z_(n){try{const t=(await Cd()).transaction(As),r=await t.objectStore(As).get(Dd(n));return await t.done,r}catch(e){if(e instanceof st)Fn.warn(e.message);else{const t=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(t.message)}}}async function Vl(n,e){try{const r=(await Cd()).transaction(As,"readwrite");await r.objectStore(As).put(e,Dd(n)),await r.done}catch(t){if(t instanceof st)Fn.warn(t.message);else{const r=hn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Fn.warn(r.message)}}}function Dd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=1024,G_=30*24*60*60*1e3;class W_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Q_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ml();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=G_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ml(),{heartbeatsToSend:r,unsentEntries:s}=K_(this._heartbeatsCache.heartbeats),i=eo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ml(){return new Date().toISOString().substring(0,10)}function K_(n,e=H_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ll(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ll(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Q_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ad()?bd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await z_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ll(n){return eo(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(n){ut(new Mt("platform-logger",e=>new l_(e),"PRIVATE")),ut(new Mt("heartbeat",e=>new W_(e),"PRIVATE")),et(Ka,Nl,n),et(Ka,Nl,"esm2017"),et("fire-js","")}Z_("");function Rc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Od(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Y_=Od,Nd=new Yn("auth","Firebase",Od());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new Co("@firebase/auth");function X_(n,...e){no.logLevel<=te.WARN&&no.warn(`Auth (${Xn}): ${n}`,...e)}function qi(n,...e){no.logLevel<=te.ERROR&&no.error(`Auth (${Xn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n,...e){throw Sc(n,...e)}function gt(n,...e){return Sc(n,...e)}function xd(n,e,t){const r=Object.assign(Object.assign({},Y_()),{[e]:t});return new Yn("auth","Firebase",r).create(e,{appName:n.name})}function Vt(n){return xd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Nd.create(n,...e)}function W(n,e,...t){if(!n)throw Sc(e,...t)}function Ot(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qi(e),new Error(e)}function Lt(n,e){n||Ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function J_(){return Fl()==="http:"||Fl()==="https:"}function Fl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(J_()||Ed()||"connection"in navigator)?navigator.onLine:!0}function ty(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.shortDelay=e,this.longDelay=t,Lt(t>e,"Short delay should be less than long delay!"),this.isMobile=kg()||Dg()}get(){return ey()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n,e){Lt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=new ei(3e4,6e4);function Tn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function In(n,e,t,r,s={}){return Md(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Js(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),Vd.fetch()(Ld(n,n.config.apiHost,t,c),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},i))})}async function Md(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ny),e);try{const s=new iy(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw xi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw xi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw xi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw xi(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw xd(n,f,h);lt(n,f)}}catch(s){if(s instanceof st)throw s;lt(n,"network-request-failed",{message:String(s)})}}async function ti(n,e,t,r,s={}){const i=await In(n,e,t,r,s);return"mfaPendingCredential"in i&&lt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Ld(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Pc(n.config,s):`${n.config.apiScheme}://${s}`}function sy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),ry.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=gt(n,e,r);return s.customData._tokenResponse=t,s}function Ul(n){return n!==void 0&&n.enterprise!==void 0}class oy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return sy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ay(n,e){return In(n,"GET","/v2/recaptchaConfig",Tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(n,e){return In(n,"POST","/v1/accounts:delete",e)}async function Fd(n,e){return In(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uy(n,e=!1){const t=le(n),r=await t.getIdToken(e),s=kc(r);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ms(Va(s.auth_time)),issuedAtTime:ms(Va(s.iat)),expirationTime:ms(Va(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Va(n){return Number(n)*1e3}function kc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return qi("JWT malformed, contained fewer than 3 sections"),null;try{const s=_d(t);return s?JSON.parse(s):(qi("Failed to decode base64 JWT payload"),null)}catch(s){return qi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jl(n){const e=kc(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof st&&ly(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ly({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ms(this.lastLoginAt),this.creationTime=ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(n){var e;const t=n.auth,r=await n.getIdToken(),s=await bs(n,Fd(t,{idToken:r}));W(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ud(i.providerUserInfo):[],c=fy(n.providerData,a),u=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=u?h:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Xa(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,_)}async function dy(n){const e=le(n);await ro(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fy(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ud(n){return n.map(e=>{var{providerId:t}=e,r=Rc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(n,e){const t=await Md(n,{},async()=>{const r=Js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Ld(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Vd.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function my(n,e){return In(n,"POST","/v2/accounts:revokeToken",Tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=jl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await py(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new _r;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _r,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Nt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Rc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await bs(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uy(this,e)}reload(){return dy(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ro(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(Vt(this.auth));const e=await this.getIdToken();return await bs(this,cy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,h,f;const _=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,L=(h=t.createdAt)!==null&&h!==void 0?h:void 0,$=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:Y,isAnonymous:de,providerData:ae,stsTokenManager:T}=t;W(q&&T,e,"internal-error");const m=_r.fromJSON(this.name,T);W(typeof q=="string",e,"internal-error"),Gt(_,e.name),Gt(v,e.name),W(typeof Y=="boolean",e,"internal-error"),W(typeof de=="boolean",e,"internal-error"),Gt(b,e.name),Gt(C,e.name),Gt(x,e.name),Gt(P,e.name),Gt(L,e.name),Gt($,e.name);const g=new Nt({uid:q,auth:e,email:v,emailVerified:Y,displayName:_,isAnonymous:de,photoURL:C,phoneNumber:b,tenantId:x,stsTokenManager:m,createdAt:L,lastLoginAt:$});return ae&&Array.isArray(ae)&&(g.providerData=ae.map(w=>Object.assign({},w))),P&&(g._redirectEventId=P),g}static async _fromIdTokenResponse(e,t,r=!1){const s=new _r;s.updateFromServerResponse(t);const i=new Nt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ro(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ud(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new _r;c.updateFromIdToken(r);const u=new Nt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new Map;function xt(n){Lt(n instanceof Function,"Expected a class definition");let e=Bl.get(n);return e?(Lt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Bl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jd.type="NONE";const $l=jd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n,e,t){return`firebase:${n}:${e}:${t}`}class yr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=zi(this.userKey,s.apiKey,i),this.fullPersistenceKey=zi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new yr(xt($l),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||xt($l);const a=zi(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){const _=Nt._fromJSON(e,f);h!==i&&(c=_),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new yr(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new yr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hd(e))return"Blackberry";if(Gd(e))return"Webos";if(Cc(e))return"Safari";if((e.includes("chrome/")||$d(e))&&!e.includes("edge/"))return"Chrome";if(zd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bd(n=Ce()){return/firefox\//i.test(n)}function Cc(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $d(n=Ce()){return/crios\//i.test(n)}function qd(n=Ce()){return/iemobile/i.test(n)}function zd(n=Ce()){return/android/i.test(n)}function Hd(n=Ce()){return/blackberry/i.test(n)}function Gd(n=Ce()){return/webos/i.test(n)}function Oo(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gy(n=Ce()){var e;return Oo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _y(){return Og()&&document.documentMode===10}function Wd(n=Ce()){return Oo(n)||zd(n)||Gd(n)||Hd(n)||/windows phone/i.test(n)||qd(n)}function yy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n,e=[]){let t;switch(n){case"Browser":t=ql(Ce());break;case"Worker":t=`${ql(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(n,e={}){return In(n,"GET","/v2/passwordPolicy",Tn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=6;class Iy{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Ty,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zl(this),this.idTokenSubscription=new zl(this),this.beforeStateQueue=new vy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await yr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Fd(this,{idToken:e}),r=await Nt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(mt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ro(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ty()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(Vt(this));const t=e?le(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wy(this),t=new Iy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await my(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xt(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await yr.create(this,[xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&X_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Jn(n){return le(n)}class zl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ug(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ay(n){No=n}function Qd(n){return No.loadJS(n)}function by(){return No.recaptchaEnterpriseScript}function Ry(){return No.gapiScript}function Sy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Py="recaptcha-enterprise",ky="NO_RECAPTCHA";class Cy{constructor(e){this.type=Py,this.auth=Jn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{ay(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new oy(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Ul(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(ky)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Ul(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=by();u.length!==0&&(u+=c),Qd(u).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function Hl(n,e,t,r=!1){const s=new Cy(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Gl(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Hl(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Hl(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(n,e){const t=wn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Es(i,e??{}))return s;lt(s,"already-initialized")}return t.initialize({options:e})}function Oy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(xt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ny(n,e,t){const r=Jn(n);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zd(e),{host:a,port:c}=xy(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Vy()}function Zd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function xy(n){const e=Zd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Wl(a)}}}function Wl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Vy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,t){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}async function My(n,e){return In(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly(n,e){return ti(n,"POST","/v1/accounts:signInWithPassword",Tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(n,e){return ti(n,"POST","/v1/accounts:signInWithEmailLink",Tn(n,e))}async function Uy(n,e){return ti(n,"POST","/v1/accounts:signInWithEmailLink",Tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Dc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Rs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Rs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gl(e,t,"signInWithPassword",Ly);case"emailLink":return Fy(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gl(e,r,"signUpPassword",My);case"emailLink":return Uy(e,{idToken:t,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(n,e){return ti(n,"POST","/v1/accounts:signInWithIdp",Tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="http://localhost";class Un extends Dc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):lt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Rc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Un(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return vr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,vr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vr(e,t)}buildRequest(){const e={requestUri:jy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Js(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $y(n){const e=cs(us(n)).link,t=e?cs(us(e)).deep_link_id:null,r=cs(us(n)).deep_link_id;return(r?cs(us(r)).link:null)||r||t||e||n}class Oc{constructor(e){var t,r,s,i,a,c;const u=cs(us(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,_=By((s=u.mode)!==null&&s!==void 0?s:null);W(h&&f&&_,"argument-error"),this.apiKey=h,this.operation=_,this.code=f,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=$y(e);try{return new Oc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.providerId=Lr.PROVIDER_ID}static credential(e,t){return Rs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Oc.parseLink(t);return W(r,"argument-error"),Rs._fromEmailAndCode(e,r.code,r.tenantId)}}Lr.PROVIDER_ID="password";Lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Yd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends ni{constructor(){super("facebook.com")}static credential(e){return Un._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Un._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Jt.credential(t,r)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends ni{constructor(){super("github.com")}static credential(e){return Un._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends ni{constructor(){super("twitter.com")}static credential(e,t){return Un._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return tn.credential(t,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Nt._fromIdTokenResponse(e,r,s),a=Kl(r);return new jn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Kl(r);return new jn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Kl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends st{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,so.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new so(e,t,r,s)}}function Xd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?so._fromErrorAndOperation(n,i,e,r):i})}async function qy(n,e,t=!1){const r=await bs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return jn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zy(n,e,t=!1){const{auth:r}=n;if(mt(r.app))return Promise.reject(Vt(r));const s="reauthenticate";try{const i=await bs(n,Xd(r,s,e,n),t);W(i.idToken,r,"internal-error");const a=kc(i.idToken);W(a,r,"internal-error");const{sub:c}=a;return W(n.uid===c,r,"user-mismatch"),jn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jd(n,e,t=!1){if(mt(n.app))return Promise.reject(Vt(n));const r="signIn",s=await Xd(n,r,e),i=await jn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Hy(n,e){return Jd(Jn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(n,e){return ti(n,"POST","/v1/accounts:signInWithCustomToken",Tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(n,e){if(mt(n.app))return Promise.reject(Vt(n));const t=Jn(n),r=await Gy(t,{token:e,returnSecureToken:!0}),s=await jn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(n){const e=Jn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function I0(n,e,t){return mt(n.app)?Promise.reject(Vt(n)):Hy(le(n),Lr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Wy(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(n,e){return le(n).setPersistence(e)}function Ky(n,e,t,r){return le(n).onIdTokenChanged(e,t,r)}function Qy(n,e,t){return le(n).beforeAuthStateChanged(e,t)}function A0(n,e,t,r){return le(n).onAuthStateChanged(e,t,r)}function b0(n){return le(n).signOut()}const io="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(io,"1"),this.storage.removeItem(io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(){const n=Ce();return Cc(n)||Oo(n)}const Yy=1e3,Xy=10;class tf extends ef{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Zy()&&yy(),this.fallbackToPolling=Wd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);_y()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Xy):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Yy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tf.type="LOCAL";const Jy=tf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends ef{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nf.type="SESSION";const rf=nf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await ev(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=Nc("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(_){const v=_;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(v.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function nv(n){_t().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function rv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function iv(){return sf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="firebaseLocalStorageDb",ov=1,oo="firebaseLocalStorage",af="fbase_key";class ri{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vo(n,e){return n.transaction([oo],e?"readwrite":"readonly").objectStore(oo)}function av(){const n=indexedDB.deleteDatabase(of);return new ri(n).toPromise()}function Ja(){const n=indexedDB.open(of,ov);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(oo,{keyPath:af})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(oo)?e(r):(r.close(),await av(),e(await Ja()))})})}async function Ql(n,e,t){const r=Vo(n,!0).put({[af]:e,value:t});return new ri(r).toPromise()}async function cv(n,e){const t=Vo(n,!1).get(e),r=await new ri(t).toPromise();return r===void 0?null:r.value}function Zl(n,e){const t=Vo(n,!0).delete(e);return new ri(t).toPromise()}const uv=800,lv=3;class cf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ja(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>lv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xo._getInstance(iv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await rv(),!this.activeServiceWorker)return;this.sender=new tv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ja();return await Ql(e,io,"1"),await Zl(e,io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ql(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>cv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Vo(s,!1).getAll();return new ri(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cf.type="LOCAL";const hv=cf;new ei(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(n,e){return e?xt(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends Dc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fv(n){return Jd(n.auth,new xc(n),n.bypassAuthState)}function pv(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),zy(t,new xc(n),n.bypassAuthState)}async function mv(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),qy(t,new xc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fv;case"linkViaPopup":case"linkViaRedirect":return mv;case"reauthViaPopup":case"reauthViaRedirect":return pv;default:lt(this.auth,"internal-error")}}resolve(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new ei(2e3,1e4);class pr extends uf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const e=Nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gv.get())};e()}}pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="pendingRedirect",Hi=new Map;class yv extends uf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Hi.get(this.auth._key());if(!e){try{const r=await vv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Hi.set(this.auth._key(),e)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vv(n,e){const t=Iv(e),r=Tv(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function wv(n,e){Hi.set(n._key(),e)}function Tv(n){return xt(n._redirectPersistence)}function Iv(n){return zi(_v,n.config.apiKey,n.name)}async function Ev(n,e,t=!1){if(mt(n.app))return Promise.reject(Vt(n));const r=Jn(n),s=dv(r,e),a=await new yv(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=10*60*1e3;class bv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Rv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!lf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(gt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Av&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yl(e))}saveEventToCache(e){this.cachedEventUids.add(Yl(e)),this.lastProcessedEventTime=Date.now()}}function Yl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function lf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Rv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sv(n,e={}){return In(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kv=/^https?/;async function Cv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Sv(n);for(const t of e)try{if(Dv(t))return}catch{}lt(n,"unauthorized-domain")}function Dv(n){const e=Ya(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!kv.test(t))return!1;if(Pv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=new ei(3e4,6e4);function Xl(){const n=_t().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Nv(n){return new Promise((e,t)=>{var r,s,i;function a(){Xl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xl(),t(gt(n,"network-request-failed"))},timeout:Ov.get()})}if(!((s=(r=_t().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_t().gapi)===null||i===void 0)&&i.load)a();else{const c=Sy("iframefcb");return _t()[c]=()=>{gapi.load?a():t(gt(n,"network-request-failed"))},Qd(`${Ry()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Gi=null,e})}let Gi=null;function xv(n){return Gi=Gi||Nv(n),Gi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=new ei(5e3,15e3),Mv="__/auth/iframe",Lv="emulator/auth/iframe",Fv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jv(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Pc(e,Lv):`https://${n.config.authDomain}/${Mv}`,r={apiKey:e.apiKey,appName:n.name,v:Xn},s=Uv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Js(r).slice(1)}`}async function Bv(n){const e=await xv(n),t=_t().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:jv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=gt(n,"network-request-failed"),c=_t().setTimeout(()=>{i(a)},Vv.get());function u(){_t().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qv=500,zv=600,Hv="_blank",Gv="http://localhost";class Jl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wv(n,e,t,r=qv,s=zv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},$v),{width:r.toString(),height:s.toString(),top:i,left:a}),h=Ce().toLowerCase();t&&(c=$d(h)?Hv:t),Bd(h)&&(e=e||Gv,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[b,C])=>`${v}${b}=${C},`,"");if(gy(h)&&c!=="_self")return Kv(e||"",c),new Jl(null);const _=window.open(e||"",c,f);W(_,n,"popup-blocked");try{_.focus()}catch{}return new Jl(_)}function Kv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="__/auth/handler",Zv="emulator/auth/handler",Yv=encodeURIComponent("fac");async function eh(n,e,t,r,s,i){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Xn,eventId:s};if(e instanceof Yd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Fg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,_]of Object.entries({}))a[f]=_}if(e instanceof ni){const f=e.getScopes().filter(_=>_!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),h=u?`#${Yv}=${encodeURIComponent(u)}`:"";return`${Xv(n)}?${Js(c).slice(1)}${h}`}function Xv({config:n}){return n.emulator?Pc(n,Zv):`https://${n.authDomain}/${Qv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="webStorageSupport";class Jv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rf,this._completeRedirectFn=Ev,this._overrideRedirectResult=wv}async _openPopup(e,t,r,s){var i;Lt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await eh(e,t,r,Ya(),s);return Wv(e,a,Nc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await eh(e,t,r,Ya(),s);return nv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Lt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Bv(e),r=new bv(e);return t.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ma,{type:Ma},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ma];a!==void 0&&t(!!a),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Cv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wd()||Cc()||Oo()}}const ew=Jv;var th="@firebase/auth",nh="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rw(n){ut(new Mt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kd(n)},h=new Ey(r,s,i,u);return Oy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ut(new Mt("auth-internal",e=>{const t=Jn(e.getProvider("auth").getImmediate());return(r=>new tw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(th,nh,nw(n)),et(th,nh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=5*60,iw=Td("authIdTokenMaxAge")||sw;let rh=null;const ow=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>iw)return;const s=t==null?void 0:t.token;rh!==s&&(rh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function aw(n=Do()){const e=wn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Dy(n,{popupRedirectResolver:ew,persistence:[hv,Jy,rf]}),r=Td("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=ow(i.toString());Qy(t,a,()=>a(t.currentUser)),Ky(t,c=>a(c))}}const s=yd("auth");return s&&Ny(t,`http://${s}`),t}function cw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Ay({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=gt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",cw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rw("Browser");var Vc=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Mo=typeof window>"u"||"Deno"in globalThis;function R0(){}function S0(n,e){return typeof n=="function"?n(e):n}function uw(n){return typeof n=="number"&&n>=0&&n!==1/0}function P0(n,e){return Math.max(n+(e||0)-Date.now(),0)}function k0(n,e){const{type:t="all",exact:r,fetchStatus:s,predicate:i,queryKey:a,stale:c}=n;if(a){if(r){if(e.queryHash!==lw(a,e.options))return!1}else if(!Mc(e.queryKey,a))return!1}if(t!=="all"){const u=e.isActive();if(t==="active"&&!u||t==="inactive"&&u)return!1}return!(typeof c=="boolean"&&e.isStale()!==c||s&&s!==e.state.fetchStatus||i&&!i(e))}function C0(n,e){const{exact:t,status:r,predicate:s,mutationKey:i}=n;if(i){if(!e.options.mutationKey)return!1;if(t){if(Ss(e.options.mutationKey)!==Ss(i))return!1}else if(!Mc(e.options.mutationKey,i))return!1}return!(r&&e.state.status!==r||s&&!s(e))}function lw(n,e){return((e==null?void 0:e.queryKeyHashFn)||Ss)(n)}function Ss(n){return JSON.stringify(n,(e,t)=>ec(t)?Object.keys(t).sort().reduce((r,s)=>(r[s]=t[s],r),{}):t)}function Mc(n,e){return n===e?!0:typeof n!=typeof e?!1:n&&e&&typeof n=="object"&&typeof e=="object"?!Object.keys(e).some(t=>!Mc(n[t],e[t])):!1}function hf(n,e){if(n===e)return n;const t=sh(n)&&sh(e);if(t||ec(n)&&ec(e)){const r=t?n:Object.keys(n),s=r.length,i=t?e:Object.keys(e),a=i.length,c=t?[]:{};let u=0;for(let h=0;h<a;h++){const f=t?h:i[h];(!t&&r.includes(f)||t)&&n[f]===void 0&&e[f]===void 0?(c[f]=void 0,u++):(c[f]=hf(n[f],e[f]),c[f]===n[f]&&n[f]!==void 0&&u++)}return s===a&&u===s?n:c}return e}function hw(n,e){if(!e||Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(n[t]!==e[t])return!1;return!0}function sh(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function ec(n){if(!ih(n))return!1;const e=n.constructor;if(e===void 0)return!0;const t=e.prototype;return!(!ih(t)||!t.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function ih(n){return Object.prototype.toString.call(n)==="[object Object]"}function dw(n){return new Promise(e=>{setTimeout(e,n)})}function D0(n,e,t){return typeof t.structuralSharing=="function"?t.structuralSharing(n,e):t.structuralSharing!==!1?hf(n,e):e}function O0(n,e,t=0){const r=[...n,e];return t&&r.length>t?r.slice(1):r}function N0(n,e,t=0){const r=[e,...n];return t&&r.length>t?r.slice(0,-1):r}var fw=Symbol(),x0=(n,e)=>!n.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!n.queryFn||n.queryFn===fw?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn,On,sn,Er,ld,pw=(ld=class extends Vc{constructor(){super();Te(this,On,void 0);Te(this,sn,void 0);Te(this,Er,void 0);ge(this,Er,e=>{if(!Mo&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}})}onSubscribe(){U(this,sn)||this.setEventListener(U(this,Er))}onUnsubscribe(){var e;this.hasListeners()||((e=U(this,sn))==null||e.call(this),ge(this,sn,void 0))}setEventListener(e){var t;ge(this,Er,e),(t=U(this,sn))==null||t.call(this),ge(this,sn,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){U(this,On)!==e&&(ge(this,On,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){var e;return typeof U(this,On)=="boolean"?U(this,On):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},On=new WeakMap,sn=new WeakMap,Er=new WeakMap,ld),mw=new pw,Ar,on,br,hd,gw=(hd=class extends Vc{constructor(){super();Te(this,Ar,!0);Te(this,on,void 0);Te(this,br,void 0);ge(this,br,e=>{if(!Mo&&window.addEventListener){const t=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}}})}onSubscribe(){U(this,on)||this.setEventListener(U(this,br))}onUnsubscribe(){var e;this.hasListeners()||((e=U(this,on))==null||e.call(this),ge(this,on,void 0))}setEventListener(e){var t;ge(this,br,e),(t=U(this,on))==null||t.call(this),ge(this,on,e(this.setOnline.bind(this)))}setOnline(e){U(this,Ar)!==e&&(ge(this,Ar,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return U(this,Ar)}},Ar=new WeakMap,on=new WeakMap,br=new WeakMap,hd),df=new gw;function _w(n){return Math.min(1e3*2**n,3e4)}function yw(n){return(n??"online")==="online"?df.isOnline():!0}var ff=class{constructor(n){this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent}};function V0(n){return n instanceof ff}function vw(n){let e=!1,t=0,r=!1,s,i,a;const c=new Promise((L,$)=>{i=L,a=$}),u=L=>{var $;r||(C(new ff(L)),($=n.abort)==null||$.call(n))},h=()=>{e=!0},f=()=>{e=!1},_=()=>mw.isFocused()&&(n.networkMode==="always"||df.isOnline())&&n.canRun(),v=()=>yw(n.networkMode)&&n.canRun(),b=L=>{var $;r||(r=!0,($=n.onSuccess)==null||$.call(n,L),s==null||s(),i(L))},C=L=>{var $;r||(r=!0,($=n.onError)==null||$.call(n,L),s==null||s(),a(L))},x=()=>new Promise(L=>{var $;s=q=>{(r||_())&&L(q)},($=n.onPause)==null||$.call(n)}).then(()=>{var L;s=void 0,r||(L=n.onContinue)==null||L.call(n)}),P=()=>{if(r)return;let L;const $=t===0?n.initialPromise:void 0;try{L=$??n.fn()}catch(q){L=Promise.reject(q)}Promise.resolve(L).then(b).catch(q=>{var m;if(r)return;const Y=n.retry??(Mo?0:3),de=n.retryDelay??_w,ae=typeof de=="function"?de(t,q):de,T=Y===!0||typeof Y=="number"&&t<Y||typeof Y=="function"&&Y(t,q);if(e||!T){C(q);return}t++,(m=n.onFail)==null||m.call(n,t,q),dw(ae).then(()=>_()?void 0:x()).then(()=>{e?C(q):P()})})};return{promise:c,cancel:u,continue:()=>(s==null||s(),c),cancelRetry:h,continueRetry:f,canStart:v,start:()=>(v()?P():x().then(P),c)}}function ww(){let n=[],e=0,t=v=>{v()},r=v=>{v()},s=v=>setTimeout(v,0);const i=v=>{s=v},a=v=>{let b;e++;try{b=v()}finally{e--,e||h()}return b},c=v=>{e?n.push(v):s(()=>{t(v)})},u=v=>(...b)=>{c(()=>{v(...b)})},h=()=>{const v=n;n=[],v.length&&s(()=>{r(()=>{v.forEach(b=>{t(b)})})})};return{batch:a,batchCalls:u,schedule:c,setNotifyFunction:v=>{t=v},setBatchNotifyFunction:v=>{r=v},setScheduler:i}}var Lc=ww(),Nn,dd,Tw=(dd=class{constructor(){Te(this,Nn,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),uw(this.gcTime)&&ge(this,Nn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(Mo?1/0:5*60*1e3))}clearGcTimeout(){U(this,Nn)&&(clearTimeout(U(this,Nn)),ge(this,Nn,void 0))}},Nn=new WeakMap,dd),ft,$e,xn,pt,Qt,fd,M0=(fd=class extends Tw{constructor(t){super();Te(this,pt);Te(this,ft,void 0);Te(this,$e,void 0);Te(this,xn,void 0);this.mutationId=t.mutationId,ge(this,$e,t.mutationCache),ge(this,ft,[]),this.state=t.state||pf(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){U(this,ft).includes(t)||(U(this,ft).push(t),this.clearGcTimeout(),U(this,$e).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){ge(this,ft,U(this,ft).filter(r=>r!==t)),this.scheduleGc(),U(this,$e).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){U(this,ft).length||(this.state.status==="pending"?this.scheduleGc():U(this,$e).remove(this))}continue(){var t;return((t=U(this,xn))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var i,a,c,u,h,f,_,v,b,C,x,P,L,$,q,Y,de,ae,T,m;ge(this,xn,vw({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(g,w)=>{Ze(this,pt,Qt).call(this,{type:"failed",failureCount:g,error:w})},onPause:()=>{Ze(this,pt,Qt).call(this,{type:"pause"})},onContinue:()=>{Ze(this,pt,Qt).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>U(this,$e).canRun(this)}));const r=this.state.status==="pending",s=!U(this,xn).canStart();try{if(!r){Ze(this,pt,Qt).call(this,{type:"pending",variables:t,isPaused:s}),await((a=(i=U(this,$e).config).onMutate)==null?void 0:a.call(i,t,this));const w=await((u=(c=this.options).onMutate)==null?void 0:u.call(c,t));w!==this.state.context&&Ze(this,pt,Qt).call(this,{type:"pending",context:w,variables:t,isPaused:s})}const g=await U(this,xn).start();return await((f=(h=U(this,$e).config).onSuccess)==null?void 0:f.call(h,g,t,this.state.context,this)),await((v=(_=this.options).onSuccess)==null?void 0:v.call(_,g,t,this.state.context)),await((C=(b=U(this,$e).config).onSettled)==null?void 0:C.call(b,g,null,this.state.variables,this.state.context,this)),await((P=(x=this.options).onSettled)==null?void 0:P.call(x,g,null,t,this.state.context)),Ze(this,pt,Qt).call(this,{type:"success",data:g}),g}catch(g){try{throw await(($=(L=U(this,$e).config).onError)==null?void 0:$.call(L,g,t,this.state.context,this)),await((Y=(q=this.options).onError)==null?void 0:Y.call(q,g,t,this.state.context)),await((ae=(de=U(this,$e).config).onSettled)==null?void 0:ae.call(de,void 0,g,this.state.variables,this.state.context,this)),await((m=(T=this.options).onSettled)==null?void 0:m.call(T,void 0,g,t,this.state.context)),g}finally{Ze(this,pt,Qt).call(this,{type:"error",error:g})}}finally{U(this,$e).runNext(this)}}},ft=new WeakMap,$e=new WeakMap,xn=new WeakMap,pt=new WeakSet,Qt=function(t){const r=s=>{switch(t.type){case"failed":return{...s,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...s,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=r(this.state),Lc.batch(()=>{U(this,ft).forEach(s=>{s.onMutationUpdate(t)}),U(this,$e).notify({mutation:this,type:"updated",action:t})})},fd);function pf(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var an,cn,We,Ct,Rr,Wi,Xs,tc,pd,Iw=(pd=class extends Vc{constructor(e,t){super();Te(this,Rr);Te(this,Xs);Te(this,an,void 0);Te(this,cn,void 0);Te(this,We,void 0);Te(this,Ct,void 0);ge(this,an,e),this.setOptions(t),this.bindMethods(),Ze(this,Rr,Wi).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var r;const t=this.options;this.options=U(this,an).defaultMutationOptions(e),hw(this.options,t)||U(this,an).getMutationCache().notify({type:"observerOptionsUpdated",mutation:U(this,We),observer:this}),t!=null&&t.mutationKey&&this.options.mutationKey&&Ss(t.mutationKey)!==Ss(this.options.mutationKey)?this.reset():((r=U(this,We))==null?void 0:r.state.status)==="pending"&&U(this,We).setOptions(this.options)}onUnsubscribe(){var e;this.hasListeners()||(e=U(this,We))==null||e.removeObserver(this)}onMutationUpdate(e){Ze(this,Rr,Wi).call(this),Ze(this,Xs,tc).call(this,e)}getCurrentResult(){return U(this,cn)}reset(){var e;(e=U(this,We))==null||e.removeObserver(this),ge(this,We,void 0),Ze(this,Rr,Wi).call(this),Ze(this,Xs,tc).call(this)}mutate(e,t){var r;return ge(this,Ct,t),(r=U(this,We))==null||r.removeObserver(this),ge(this,We,U(this,an).getMutationCache().build(U(this,an),this.options)),U(this,We).addObserver(this),U(this,We).execute(e)}},an=new WeakMap,cn=new WeakMap,We=new WeakMap,Ct=new WeakMap,Rr=new WeakSet,Wi=function(){var t;const e=((t=U(this,We))==null?void 0:t.state)??pf();ge(this,cn,{...e,isPending:e.status==="pending",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset})},Xs=new WeakSet,tc=function(e){Lc.batch(()=>{var t,r,s,i,a,c,u,h;if(U(this,Ct)&&this.hasListeners()){const f=U(this,cn).variables,_=U(this,cn).context;(e==null?void 0:e.type)==="success"?((r=(t=U(this,Ct)).onSuccess)==null||r.call(t,e.data,f,_),(i=(s=U(this,Ct)).onSettled)==null||i.call(s,e.data,null,f,_)):(e==null?void 0:e.type)==="error"&&((c=(a=U(this,Ct)).onError)==null||c.call(a,e.error,f,_),(h=(u=U(this,Ct)).onSettled)==null||h.call(u,void 0,e.error,f,_))}this.listeners.forEach(f=>{f(U(this,cn))})})},pd),mf=Yt.createContext(void 0),Ew=n=>{const e=Yt.useContext(mf);if(n)return n;if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},F0=({client:n,children:e})=>(Yt.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),wg.jsx(mf.Provider,{value:n,children:e}));function Aw(n,e){return typeof n=="function"?n(...e):!!n}function bw(){}function U0(n,e){const t=Ew(e),[r]=Yt.useState(()=>new Iw(t,n));Yt.useEffect(()=>{r.setOptions(n)},[r,n]);const s=Yt.useSyncExternalStore(Yt.useCallback(a=>r.subscribe(Lc.batchCalls(a)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),i=Yt.useCallback((a,c)=>{r.mutate(a,c).catch(bw)},[r]);if(s.error&&Aw(r.options.throwOnError,[s.error]))throw s.error;return{...s,mutate:i,mutateAsync:s.mutate}}let oh=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};const gf="@firebase/installations",Fc="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=1e4,yf=`w:${Fc}`,vf="FIS_v2",Rw="https://firebaseinstallations.googleapis.com/v1",Sw=60*60*1e3,Pw="installations",kw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Bn=new Yn(Pw,kw,Cw);function wf(n){return n instanceof st&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf({projectId:n}){return`${Rw}/projects/${n}/installations`}function If(n){return{token:n.token,requestStatus:2,expiresIn:Ow(n.expiresIn),creationTime:Date.now()}}async function Ef(n,e){const r=(await e.json()).error;return Bn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Af({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Dw(n,{refreshToken:e}){const t=Af(n);return t.append("Authorization",Nw(e)),t}async function bf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Ow(n){return Number(n.replace("s","000"))}function Nw(n){return`${vf} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Tf(n),s=Af(n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:t,authVersion:vf,appId:n.appId,sdkVersion:yf},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await bf(()=>fetch(r,c));if(u.ok){const h=await u.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:If(h.authToken)}}else throw await Ef("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=/^[cdef][\w-]{21}$/,nc="";function Lw(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Fw(n);return Mw.test(t)?t:nc}catch{return nc}}function Fw(n){return Vw(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=new Map;function Pf(n,e){const t=Lo(n);kf(t,e),Uw(t,e)}function kf(n,e){const t=Sf.get(n);if(t)for(const r of t)r(e)}function Uw(n,e){const t=jw();t&&t.postMessage({key:n,fid:e}),Bw()}let Cn=null;function jw(){return!Cn&&"BroadcastChannel"in self&&(Cn=new BroadcastChannel("[Firebase] FID Change"),Cn.onmessage=n=>{kf(n.data.key,n.data.fid)}),Cn}function Bw(){Sf.size===0&&Cn&&(Cn.close(),Cn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="firebase-installations-database",qw=1,$n="firebase-installations-store";let La=null;function Uc(){return La||(La=Pd($w,qw,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore($n)}}})),La}async function ao(n,e){const t=Lo(n),s=(await Uc()).transaction($n,"readwrite"),i=s.objectStore($n),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&Pf(n,e.fid),e}async function Cf(n){const e=Lo(n),r=(await Uc()).transaction($n,"readwrite");await r.objectStore($n).delete(e),await r.done}async function Fo(n,e){const t=Lo(n),s=(await Uc()).transaction($n,"readwrite"),i=s.objectStore($n),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!a||a.fid!==c.fid)&&Pf(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jc(n){let e;const t=await Fo(n.appConfig,r=>{const s=zw(r),i=Hw(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===nc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function zw(n){const e=n||{fid:Lw(),registrationStatus:0};return Df(e)}function Hw(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Bn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Gw(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ww(n)}:{installationEntry:e}}async function Gw(n,e){try{const t=await xw(n,e);return ao(n.appConfig,t)}catch(t){throw wf(t)&&t.customData.serverCode===409?await Cf(n.appConfig):await ao(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Ww(n){let e=await ah(n.appConfig);for(;e.registrationStatus===1;)await Rf(100),e=await ah(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await jc(n);return r||t}return e}function ah(n){return Fo(n,e=>{if(!e)throw Bn.create("installation-not-found");return Df(e)})}function Df(n){return Kw(n)?{fid:n.fid,registrationStatus:0}:n}function Kw(n){return n.registrationStatus===1&&n.registrationTime+_f<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw({appConfig:n,heartbeatServiceProvider:e},t){const r=Zw(n,t),s=Dw(n,t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:yf,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await bf(()=>fetch(r,c));if(u.ok){const h=await u.json();return If(h)}else throw await Ef("Generate Auth Token",u)}function Zw(n,{fid:e}){return`${Tf(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bc(n,e=!1){let t;const r=await Fo(n.appConfig,i=>{if(!Of(i))throw Bn.create("not-registered");const a=i.authToken;if(!e&&Jw(a))return i;if(a.requestStatus===1)return t=Yw(n,e),i;{if(!navigator.onLine)throw Bn.create("app-offline");const c=tT(i);return t=Xw(n,c),c}});return t?await t:r.authToken}async function Yw(n,e){let t=await ch(n.appConfig);for(;t.authToken.requestStatus===1;)await Rf(100),t=await ch(n.appConfig);const r=t.authToken;return r.requestStatus===0?Bc(n,e):r}function ch(n){return Fo(n,e=>{if(!Of(e))throw Bn.create("not-registered");const t=e.authToken;return nT(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Xw(n,e){try{const t=await Qw(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await ao(n.appConfig,r),t}catch(t){if(wf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Cf(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ao(n.appConfig,r)}throw t}}function Of(n){return n!==void 0&&n.registrationStatus===2}function Jw(n){return n.requestStatus===2&&!eT(n)}function eT(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Sw}function tT(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function nT(n){return n.requestStatus===1&&n.requestTime+_f<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(n){const e=n,{installationEntry:t,registrationPromise:r}=await jc(e);return r?r.catch(console.error):Bc(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(n,e=!1){const t=n;return await iT(t),(await Bc(t,e)).token}async function iT(n){const{registrationPromise:e}=await jc(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(n){if(!n||!n.options)throw Fa("App Configuration");if(!n.name)throw Fa("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Fa(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Fa(n){return Bn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="installations",aT="installations-internal",cT=n=>{const e=n.getProvider("app").getImmediate(),t=oT(e),r=wn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},uT=n=>{const e=n.getProvider("app").getImmediate(),t=wn(e,Nf).getImmediate();return{getId:()=>rT(t),getToken:s=>sT(t,s)}};function lT(){ut(new oh(Nf,cT,"PUBLIC")),ut(new oh(aT,uT,"PRIVATE"))}lT();et(gf,Fc);et(gf,Fc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="analytics",hT="firebase_id",dT="origin",fT=60*1e3,pT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$c="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=new Co("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},tt=new Yn("analytics","Analytics",mT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(n){if(!n.startsWith($c)){const e=tt.create("invalid-gtag-resource",{gtagURL:n});return Ke.warn(e.message),""}return n}function xf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function _T(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function yT(n,e){const t=_T("firebase-js-sdk-policy",{createScriptURL:gT}),r=document.createElement("script"),s=`${$c}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function vT(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function wT(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const u=(await xf(t)).find(h=>h.measurementId===s);u&&await e[u.appId]}}catch(c){Ke.error(c)}n("config",s,i)}async function TT(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await xf(t);for(const u of a){const h=c.find(_=>_.measurementId===u),f=h&&e[h.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Ke.error(i)}}function IT(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[c,u]=a;await TT(n,e,t,c,u)}else if(i==="config"){const[c,u]=a;await wT(n,e,t,r,c,u)}else if(i==="consent"){const[c,u]=a;n("consent",c,u)}else if(i==="get"){const[c,u,h]=a;n("get",c,u,h)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){Ke.error(c)}}return s}function ET(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=IT(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function AT(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes($c)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=30,RT=1e3;class ST{constructor(e={},t=RT){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Vf=new ST;function PT(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function kT(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:PT(r)},i=pT.replace("{app-id}",t),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw tt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function CT(n,e=Vf,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw tt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw tt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new NT;return setTimeout(async()=>{c.abort()},fT),Mf({appId:r,apiKey:s,measurementId:i},a,c,e)}async function Mf(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Vf){var i;const{appId:a,measurementId:c}=n;try{await DT(r,e)}catch(u){if(c)return Ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw u}try{const u=await kT(n);return s.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!OT(h)){if(s.deleteThrottleMetadata(a),c)return Ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw u}const f=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?kl(t,s.intervalMillis,bT):kl(t,s.intervalMillis),_={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return s.setThrottleMetadata(a,_),Ke.debug(`Calling attemptFetch again in ${f} millis`),Mf(n,_,r,s)}}function DT(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function OT(n){if(!(n instanceof st)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class NT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function xT(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});n("event",t,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VT(){if(Ad())try{await bd()}catch(n){return Ke.warn(tt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ke.warn(tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function MT(n,e,t,r,s,i,a){var c;const u=CT(n);u.then(b=>{t[b.measurementId]=b.appId,n.options.measurementId&&b.measurementId!==n.options.measurementId&&Ke.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>Ke.error(b)),e.push(u);const h=VT().then(b=>{if(b)return r.getId()}),[f,_]=await Promise.all([u,h]);AT(i)||yT(i,f.measurementId),s("js",new Date);const v=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return v[dT]="firebase",v.update=!0,_!=null&&(v[hT]=_),s("config",f.measurementId,v),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e){this.app=e}_delete(){return delete gs[this.app.options.appId],Promise.resolve()}}let gs={},uh=[];const lh={};let Ua="dataLayer",FT="gtag",hh,Lf,dh=!1;function UT(){const n=[];if(Ed()&&n.push("This is a browser extension environment."),xg()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=tt.create("invalid-analytics-context",{errorInfo:e});Ke.warn(t.message)}}function jT(n,e,t){UT();const r=n.options.appId;if(!r)throw tt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tt.create("no-api-key");if(gs[r]!=null)throw tt.create("already-exists",{id:r});if(!dh){vT(Ua);const{wrappedGtag:i,gtagCore:a}=ET(gs,uh,lh,Ua,FT);Lf=i,hh=a,dh=!0}return gs[r]=MT(n,uh,lh,e,hh,Ua,t),new LT(n)}function BT(n=Do()){n=le(n);const e=wn(n,co);return e.isInitialized()?e.getImmediate():$T(n)}function $T(n,e={}){const t=wn(n,co);if(t.isInitialized()){const s=t.getImmediate();if(Es(e,t.getOptions()))return s;throw tt.create("already-initialized")}return t.initialize({options:e})}function qT(n,e,t,r){n=le(n),xT(Lf,gs[n.app.options.appId],e,t,r).catch(s=>Ke.error(s))}const fh="@firebase/analytics",ph="0.10.4";function zT(){ut(new Mt(co,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return jT(r,s,t)},"PUBLIC")),ut(new Mt("analytics-internal",n,"PRIVATE")),et(fh,ph),et(fh,ph,"esm2017");function n(e){try{const t=e.getProvider(co).getImmediate();return{logEvent:(r,s,i)=>qT(t,r,s,i)}}catch(t){throw tt.create("interop-component-reg-failed",{reason:t})}}}zT();var mh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vn,Ff;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function g(){}g.prototype=m.prototype,T.D=m.prototype,T.prototype=new g,T.prototype.constructor=T,T.C=function(w,I,A){for(var y=Array(arguments.length-2),At=2;At<arguments.length;At++)y[At-2]=arguments[At];return m.prototype[I].apply(w,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,g){g||(g=0);var w=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)w[I]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(I=0;16>I;++I)w[I]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=T.g[0],g=T.g[1],I=T.g[2];var A=T.g[3],y=m+(A^g&(I^A))+w[0]+3614090360&4294967295;m=g+(y<<7&4294967295|y>>>25),y=A+(I^m&(g^I))+w[1]+3905402710&4294967295,A=m+(y<<12&4294967295|y>>>20),y=I+(g^A&(m^g))+w[2]+606105819&4294967295,I=A+(y<<17&4294967295|y>>>15),y=g+(m^I&(A^m))+w[3]+3250441966&4294967295,g=I+(y<<22&4294967295|y>>>10),y=m+(A^g&(I^A))+w[4]+4118548399&4294967295,m=g+(y<<7&4294967295|y>>>25),y=A+(I^m&(g^I))+w[5]+1200080426&4294967295,A=m+(y<<12&4294967295|y>>>20),y=I+(g^A&(m^g))+w[6]+2821735955&4294967295,I=A+(y<<17&4294967295|y>>>15),y=g+(m^I&(A^m))+w[7]+4249261313&4294967295,g=I+(y<<22&4294967295|y>>>10),y=m+(A^g&(I^A))+w[8]+1770035416&4294967295,m=g+(y<<7&4294967295|y>>>25),y=A+(I^m&(g^I))+w[9]+2336552879&4294967295,A=m+(y<<12&4294967295|y>>>20),y=I+(g^A&(m^g))+w[10]+4294925233&4294967295,I=A+(y<<17&4294967295|y>>>15),y=g+(m^I&(A^m))+w[11]+2304563134&4294967295,g=I+(y<<22&4294967295|y>>>10),y=m+(A^g&(I^A))+w[12]+1804603682&4294967295,m=g+(y<<7&4294967295|y>>>25),y=A+(I^m&(g^I))+w[13]+4254626195&4294967295,A=m+(y<<12&4294967295|y>>>20),y=I+(g^A&(m^g))+w[14]+2792965006&4294967295,I=A+(y<<17&4294967295|y>>>15),y=g+(m^I&(A^m))+w[15]+1236535329&4294967295,g=I+(y<<22&4294967295|y>>>10),y=m+(I^A&(g^I))+w[1]+4129170786&4294967295,m=g+(y<<5&4294967295|y>>>27),y=A+(g^I&(m^g))+w[6]+3225465664&4294967295,A=m+(y<<9&4294967295|y>>>23),y=I+(m^g&(A^m))+w[11]+643717713&4294967295,I=A+(y<<14&4294967295|y>>>18),y=g+(A^m&(I^A))+w[0]+3921069994&4294967295,g=I+(y<<20&4294967295|y>>>12),y=m+(I^A&(g^I))+w[5]+3593408605&4294967295,m=g+(y<<5&4294967295|y>>>27),y=A+(g^I&(m^g))+w[10]+38016083&4294967295,A=m+(y<<9&4294967295|y>>>23),y=I+(m^g&(A^m))+w[15]+3634488961&4294967295,I=A+(y<<14&4294967295|y>>>18),y=g+(A^m&(I^A))+w[4]+3889429448&4294967295,g=I+(y<<20&4294967295|y>>>12),y=m+(I^A&(g^I))+w[9]+568446438&4294967295,m=g+(y<<5&4294967295|y>>>27),y=A+(g^I&(m^g))+w[14]+3275163606&4294967295,A=m+(y<<9&4294967295|y>>>23),y=I+(m^g&(A^m))+w[3]+4107603335&4294967295,I=A+(y<<14&4294967295|y>>>18),y=g+(A^m&(I^A))+w[8]+1163531501&4294967295,g=I+(y<<20&4294967295|y>>>12),y=m+(I^A&(g^I))+w[13]+2850285829&4294967295,m=g+(y<<5&4294967295|y>>>27),y=A+(g^I&(m^g))+w[2]+4243563512&4294967295,A=m+(y<<9&4294967295|y>>>23),y=I+(m^g&(A^m))+w[7]+1735328473&4294967295,I=A+(y<<14&4294967295|y>>>18),y=g+(A^m&(I^A))+w[12]+2368359562&4294967295,g=I+(y<<20&4294967295|y>>>12),y=m+(g^I^A)+w[5]+4294588738&4294967295,m=g+(y<<4&4294967295|y>>>28),y=A+(m^g^I)+w[8]+2272392833&4294967295,A=m+(y<<11&4294967295|y>>>21),y=I+(A^m^g)+w[11]+1839030562&4294967295,I=A+(y<<16&4294967295|y>>>16),y=g+(I^A^m)+w[14]+4259657740&4294967295,g=I+(y<<23&4294967295|y>>>9),y=m+(g^I^A)+w[1]+2763975236&4294967295,m=g+(y<<4&4294967295|y>>>28),y=A+(m^g^I)+w[4]+1272893353&4294967295,A=m+(y<<11&4294967295|y>>>21),y=I+(A^m^g)+w[7]+4139469664&4294967295,I=A+(y<<16&4294967295|y>>>16),y=g+(I^A^m)+w[10]+3200236656&4294967295,g=I+(y<<23&4294967295|y>>>9),y=m+(g^I^A)+w[13]+681279174&4294967295,m=g+(y<<4&4294967295|y>>>28),y=A+(m^g^I)+w[0]+3936430074&4294967295,A=m+(y<<11&4294967295|y>>>21),y=I+(A^m^g)+w[3]+3572445317&4294967295,I=A+(y<<16&4294967295|y>>>16),y=g+(I^A^m)+w[6]+76029189&4294967295,g=I+(y<<23&4294967295|y>>>9),y=m+(g^I^A)+w[9]+3654602809&4294967295,m=g+(y<<4&4294967295|y>>>28),y=A+(m^g^I)+w[12]+3873151461&4294967295,A=m+(y<<11&4294967295|y>>>21),y=I+(A^m^g)+w[15]+530742520&4294967295,I=A+(y<<16&4294967295|y>>>16),y=g+(I^A^m)+w[2]+3299628645&4294967295,g=I+(y<<23&4294967295|y>>>9),y=m+(I^(g|~A))+w[0]+4096336452&4294967295,m=g+(y<<6&4294967295|y>>>26),y=A+(g^(m|~I))+w[7]+1126891415&4294967295,A=m+(y<<10&4294967295|y>>>22),y=I+(m^(A|~g))+w[14]+2878612391&4294967295,I=A+(y<<15&4294967295|y>>>17),y=g+(A^(I|~m))+w[5]+4237533241&4294967295,g=I+(y<<21&4294967295|y>>>11),y=m+(I^(g|~A))+w[12]+1700485571&4294967295,m=g+(y<<6&4294967295|y>>>26),y=A+(g^(m|~I))+w[3]+2399980690&4294967295,A=m+(y<<10&4294967295|y>>>22),y=I+(m^(A|~g))+w[10]+4293915773&4294967295,I=A+(y<<15&4294967295|y>>>17),y=g+(A^(I|~m))+w[1]+2240044497&4294967295,g=I+(y<<21&4294967295|y>>>11),y=m+(I^(g|~A))+w[8]+1873313359&4294967295,m=g+(y<<6&4294967295|y>>>26),y=A+(g^(m|~I))+w[15]+4264355552&4294967295,A=m+(y<<10&4294967295|y>>>22),y=I+(m^(A|~g))+w[6]+2734768916&4294967295,I=A+(y<<15&4294967295|y>>>17),y=g+(A^(I|~m))+w[13]+1309151649&4294967295,g=I+(y<<21&4294967295|y>>>11),y=m+(I^(g|~A))+w[4]+4149444226&4294967295,m=g+(y<<6&4294967295|y>>>26),y=A+(g^(m|~I))+w[11]+3174756917&4294967295,A=m+(y<<10&4294967295|y>>>22),y=I+(m^(A|~g))+w[2]+718787259&4294967295,I=A+(y<<15&4294967295|y>>>17),y=g+(A^(I|~m))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var g=m-this.blockSize,w=this.B,I=this.h,A=0;A<m;){if(I==0)for(;A<=g;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<m;)if(w[I++]=T.charCodeAt(A++),I==this.blockSize){s(this,w),I=0;break}}else for(;A<m;)if(w[I++]=T[A++],I==this.blockSize){s(this,w),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var g=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=g&255,g/=256;for(this.u(T),T=Array(16),m=g=0;4>m;++m)for(var w=0;32>w;w+=8)T[g++]=this.g[m]>>>w&255;return T};function i(T,m){var g=c;return Object.prototype.hasOwnProperty.call(g,T)?g[T]:g[T]=m(T)}function a(T,m){this.h=m;for(var g=[],w=!0,I=T.length-1;0<=I;I--){var A=T[I]|0;w&&A==m||(g[I]=A,w=!1)}this.g=g}var c={};function u(T){return-128<=T&&128>T?i(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return _;if(0>T)return P(h(-T));for(var m=[],g=1,w=0;T>=g;w++)m[w]=T/g|0,g*=4294967296;return new a(m,0)}function f(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return P(f(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=h(Math.pow(m,8)),w=_,I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I),y=parseInt(T.substring(I,I+A),m);8>A?(A=h(Math.pow(m,A)),w=w.j(A).add(h(y))):(w=w.j(g),w=w.add(h(y)))}return w}var _=u(0),v=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(x(this))return-P(this).m();for(var T=0,m=1,g=0;g<this.g.length;g++){var w=this.i(g);T+=(0<=w?w:4294967296+w)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(x(this))return"-"+P(this).toString(T);for(var m=h(Math.pow(T,6)),g=this,w="";;){var I=Y(g,m).g;g=L(g,I.j(m));var A=((0<g.g.length?g.g[0]:g.h)>>>0).toString(T);if(g=I,C(g))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function x(T){return T.h==-1}n.l=function(T){return T=L(this,T),x(T)?-1:C(T)?0:1};function P(T){for(var m=T.g.length,g=[],w=0;w<m;w++)g[w]=~T.g[w];return new a(g,~T.h).add(v)}n.abs=function(){return x(this)?P(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],w=0,I=0;I<=m;I++){var A=w+(this.i(I)&65535)+(T.i(I)&65535),y=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);w=y>>>16,A&=65535,y&=65535,g[I]=y<<16|A}return new a(g,g[g.length-1]&-2147483648?-1:0)};function L(T,m){return T.add(P(m))}n.j=function(T){if(C(this)||C(T))return _;if(x(this))return x(T)?P(this).j(P(T)):P(P(this).j(T));if(x(T))return P(this.j(P(T)));if(0>this.l(b)&&0>T.l(b))return h(this.m()*T.m());for(var m=this.g.length+T.g.length,g=[],w=0;w<2*m;w++)g[w]=0;for(w=0;w<this.g.length;w++)for(var I=0;I<T.g.length;I++){var A=this.i(w)>>>16,y=this.i(w)&65535,At=T.i(I)>>>16,Br=T.i(I)&65535;g[2*w+2*I]+=y*Br,$(g,2*w+2*I),g[2*w+2*I+1]+=A*Br,$(g,2*w+2*I+1),g[2*w+2*I+1]+=y*At,$(g,2*w+2*I+1),g[2*w+2*I+2]+=A*At,$(g,2*w+2*I+2)}for(w=0;w<m;w++)g[w]=g[2*w+1]<<16|g[2*w];for(w=m;w<2*m;w++)g[w]=0;return new a(g,0)};function $(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function q(T,m){this.g=T,this.h=m}function Y(T,m){if(C(m))throw Error("division by zero");if(C(T))return new q(_,_);if(x(T))return m=Y(P(T),m),new q(P(m.g),P(m.h));if(x(m))return m=Y(T,P(m)),new q(P(m.g),m.h);if(30<T.g.length){if(x(T)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var g=v,w=m;0>=w.l(T);)g=de(g),w=de(w);var I=ae(g,1),A=ae(w,1);for(w=ae(w,2),g=ae(g,2);!C(w);){var y=A.add(w);0>=y.l(T)&&(I=I.add(g),A=y),w=ae(w,1),g=ae(g,1)}return m=L(T,I.j(m)),new q(I,m)}for(I=_;0<=T.l(m);){for(g=Math.max(1,Math.floor(T.m()/m.m())),w=Math.ceil(Math.log(g)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=h(g),y=A.j(m);x(y)||0<y.l(T);)g-=w,A=h(g),y=A.j(m);C(A)&&(A=v),I=I.add(A),T=L(T,y)}return new q(I,T)}n.A=function(T){return Y(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],w=0;w<m;w++)g[w]=this.i(w)&T.i(w);return new a(g,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],w=0;w<m;w++)g[w]=this.i(w)|T.i(w);return new a(g,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],w=0;w<m;w++)g[w]=this.i(w)^T.i(w);return new a(g,this.h^T.h)};function de(T){for(var m=T.g.length+1,g=[],w=0;w<m;w++)g[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(g,T.h)}function ae(T,m){var g=m>>5;m%=32;for(var w=T.g.length-g,I=[],A=0;A<w;A++)I[A]=0<m?T.i(A+g)>>>m|T.i(A+g+1)<<32-m:T.i(A+g);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ff=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Vn=a}).apply(typeof mh<"u"?mh:typeof self<"u"?self:typeof window<"u"?window:{});var Vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Uf,jf,ls,Bf,Ki,rc,$f,qf,zf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vi=="object"&&Vi];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var E=o[p];if(!(E in d))break e;d=d[E]}o=o[o.length-1],p=d[o],l=l(p),l!=p&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,p=!1,E={next:function(){if(!p&&d<o.length){var R=d++;return{value:l(R,o[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function _(o,l,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,p),o.apply(l,E)}}return function(){return o.apply(l,arguments)}}function v(o,l,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:_,v.apply(null,arguments)}function b(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function C(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,E,R){for(var O=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)O[ue-2]=arguments[ue];return l.prototype[E].apply(p,O)}}function x(o){const l=o.length;if(0<l){const d=Array(l);for(let p=0;p<l;p++)d[p]=o[p];return d}return[]}function P(o,l){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const E=o.length||0,R=p.length||0;o.length=E+R;for(let O=0;O<R;O++)o[E+O]=p[O]}else o.push(p)}}class L{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function $(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function Y(o){return Y[" "](o),o}Y[" "]=function(){};var de=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ae(o,l,d){for(const p in o)l.call(d,o[p],p,o)}function T(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function m(o){const l={};for(const d in o)l[d]=o[d];return l}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,l){let d,p;for(let E=1;E<arguments.length;E++){p=arguments[E];for(d in p)o[d]=p[d];for(let R=0;R<g.length;R++)d=g[R],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function A(o){c.setTimeout(()=>{throw o},0)}function y(){var o=ia;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class At{constructor(){this.h=this.g=null}add(l,d){const p=Br.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Br=new L(()=>new Um,o=>o.reset());class Um{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let $r,qr=!1,ia=new At,Su=()=>{const o=c.Promise.resolve(void 0);$r=()=>{o.then(jm)}};var jm=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){A(d)}var l=Br;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}qr=!1};function $t(){this.s=this.s,this.C=this.C}$t.prototype.s=!1,$t.prototype.ma=function(){this.s||(this.s=!0,this.N())},$t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function De(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var Bm=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o}();function zr(o,l){if(De.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(de){e:{try{Y(l.nodeName);var E=!0;break e}catch{}E=!1}E||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:$m[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&zr.aa.h.call(this)}}C(zr,De);var $m={2:"touch",3:"pen",4:"mouse"};zr.prototype.h=function(){zr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var gi="closure_listenable_"+(1e6*Math.random()|0),qm=0;function zm(o,l,d,p,E){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=E,this.key=++qm,this.da=this.fa=!1}function _i(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function yi(o){this.src=o,this.g={},this.h=0}yi.prototype.add=function(o,l,d,p,E){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var O=aa(o,l,p,E);return-1<O?(l=o[O],d||(l.fa=!1)):(l=new zm(l,this.src,R,!!p,E),l.fa=d,o.push(l)),l};function oa(o,l){var d=l.type;if(d in o.g){var p=o.g[d],E=Array.prototype.indexOf.call(p,l,void 0),R;(R=0<=E)&&Array.prototype.splice.call(p,E,1),R&&(_i(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function aa(o,l,d,p){for(var E=0;E<o.length;++E){var R=o[E];if(!R.da&&R.listener==l&&R.capture==!!d&&R.ha==p)return E}return-1}var ca="closure_lm_"+(1e6*Math.random()|0),ua={};function Pu(o,l,d,p,E){if(Array.isArray(l)){for(var R=0;R<l.length;R++)Pu(o,l[R],d,p,E);return null}return d=Du(d),o&&o[gi]?o.K(l,d,h(p)?!!p.capture:!!p,E):Hm(o,l,d,!1,p,E)}function Hm(o,l,d,p,E,R){if(!l)throw Error("Invalid event type");var O=h(E)?!!E.capture:!!E,ue=ha(o);if(ue||(o[ca]=ue=new yi(o)),d=ue.add(l,d,p,O,R),d.proxy)return d;if(p=Gm(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Bm||(E=O),E===void 0&&(E=!1),o.addEventListener(l.toString(),p,E);else if(o.attachEvent)o.attachEvent(Cu(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Gm(){function o(d){return l.call(o.src,o.listener,d)}const l=Wm;return o}function ku(o,l,d,p,E){if(Array.isArray(l))for(var R=0;R<l.length;R++)ku(o,l[R],d,p,E);else p=h(p)?!!p.capture:!!p,d=Du(d),o&&o[gi]?(o=o.i,l=String(l).toString(),l in o.g&&(R=o.g[l],d=aa(R,d,p,E),-1<d&&(_i(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete o.g[l],o.h--)))):o&&(o=ha(o))&&(l=o.g[l.toString()],o=-1,l&&(o=aa(l,d,p,E)),(d=-1<o?l[o]:null)&&la(d))}function la(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[gi])oa(l.i,o);else{var d=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(d,p,o.capture):l.detachEvent?l.detachEvent(Cu(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=ha(l))?(oa(d,o),d.h==0&&(d.src=null,l[ca]=null)):_i(o)}}}function Cu(o){return o in ua?ua[o]:ua[o]="on"+o}function Wm(o,l){if(o.da)o=!0;else{l=new zr(l,this);var d=o.listener,p=o.ha||o.src;o.fa&&la(o),o=d.call(p,l)}return o}function ha(o){return o=o[ca],o instanceof yi?o:null}var da="__closure_events_fn_"+(1e9*Math.random()>>>0);function Du(o){return typeof o=="function"?o:(o[da]||(o[da]=function(l){return o.handleEvent(l)}),o[da])}function Oe(){$t.call(this),this.i=new yi(this),this.M=this,this.F=null}C(Oe,$t),Oe.prototype[gi]=!0,Oe.prototype.removeEventListener=function(o,l,d,p){ku(this,o,l,d,p)};function Ue(o,l){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new De(l,o);else if(l instanceof De)l.target=l.target||o;else{var E=l;l=new De(p,o),w(l,E)}if(E=!0,d)for(var R=d.length-1;0<=R;R--){var O=l.g=d[R];E=vi(O,p,!0,l)&&E}if(O=l.g=o,E=vi(O,p,!0,l)&&E,E=vi(O,p,!1,l)&&E,d)for(R=0;R<d.length;R++)O=l.g=d[R],E=vi(O,p,!1,l)&&E}Oe.prototype.N=function(){if(Oe.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],p=0;p<d.length;p++)_i(d[p]);delete o.g[l],o.h--}}this.F=null},Oe.prototype.K=function(o,l,d,p){return this.i.add(String(o),l,!1,d,p)},Oe.prototype.L=function(o,l,d,p){return this.i.add(String(o),l,!0,d,p)};function vi(o,l,d,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var E=!0,R=0;R<l.length;++R){var O=l[R];if(O&&!O.da&&O.capture==d){var ue=O.listener,Re=O.ha||O.src;O.fa&&oa(o.i,O),E=ue.call(Re,p)!==!1&&E}}return E&&!p.defaultPrevented}function Ou(o,l,d){if(typeof o=="function")d&&(o=v(o,d));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Nu(o){o.g=Ou(()=>{o.g=null,o.i&&(o.i=!1,Nu(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Km extends $t{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Nu(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(o){$t.call(this),this.h=o,this.g={}}C(Hr,$t);var xu=[];function Vu(o){ae(o.g,function(l,d){this.g.hasOwnProperty(d)&&la(l)},o),o.g={}}Hr.prototype.N=function(){Hr.aa.N.call(this),Vu(this)},Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fa=c.JSON.stringify,Qm=c.JSON.parse,Zm=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function pa(){}pa.prototype.h=null;function Mu(o){return o.h||(o.h=o.i())}function Lu(){}var Gr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ma(){De.call(this,"d")}C(ma,De);function ga(){De.call(this,"c")}C(ga,De);var An={},Fu=null;function wi(){return Fu=Fu||new Oe}An.La="serverreachability";function Uu(o){De.call(this,An.La,o)}C(Uu,De);function Wr(o){const l=wi();Ue(l,new Uu(l))}An.STAT_EVENT="statevent";function ju(o,l){De.call(this,An.STAT_EVENT,o),this.stat=l}C(ju,De);function je(o){const l=wi();Ue(l,new ju(l,o))}An.Ma="timingevent";function Bu(o,l){De.call(this,An.Ma,o),this.size=l}C(Bu,De);function Kr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Qr(){this.g=!0}Qr.prototype.xa=function(){this.g=!1};function Ym(o,l,d,p,E,R){o.info(function(){if(o.g)if(R)for(var O="",ue=R.split("&"),Re=0;Re<ue.length;Re++){var se=ue[Re].split("=");if(1<se.length){var Ne=se[0];se=se[1];var xe=Ne.split("_");O=2<=xe.length&&xe[1]=="type"?O+(Ne+"="+se+"&"):O+(Ne+"=redacted&")}}else O=null;else O=R;return"XMLHTTP REQ ("+p+") [attempt "+E+"]: "+l+`
`+d+`
`+O})}function Xm(o,l,d,p,E,R,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+E+"]: "+l+`
`+d+`
`+R+" "+O})}function sr(o,l,d,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+eg(o,d)+(p?" "+p:"")})}function Jm(o,l){o.info(function(){return"TIMEOUT: "+l})}Qr.prototype.info=function(){};function eg(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var E=p[1];if(Array.isArray(E)&&!(1>E.length)){var R=E[0];if(R!="noop"&&R!="stop"&&R!="close")for(var O=1;O<E.length;O++)E[O]=""}}}}return fa(d)}catch{return l}}var Ti={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$u={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_a;function Ii(){}C(Ii,pa),Ii.prototype.g=function(){return new XMLHttpRequest},Ii.prototype.i=function(){return{}},_a=new Ii;function qt(o,l,d,p){this.j=o,this.i=l,this.l=d,this.R=p||1,this.U=new Hr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qu}function qu(){this.i=null,this.g="",this.h=!1}var zu={},ya={};function va(o,l,d){o.L=1,o.v=Ri(bt(l)),o.m=d,o.P=!0,Hu(o,null)}function Hu(o,l){o.F=Date.now(),Ei(o),o.A=bt(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),il(d.i,"t",p),o.C=0,d=o.j.J,o.h=new qu,o.g=El(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Km(v(o.Y,o,o.g),o.O)),l=o.U,d=o.g,p=o.ca;var E="readystatechange";Array.isArray(E)||(E&&(xu[0]=E.toString()),E=xu);for(var R=0;R<E.length;R++){var O=Pu(d,E[R],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Wr(),Ym(o.i,o.u,o.A,o.l,o.R,o.m)}qt.prototype.ca=function(o){o=o.target;const l=this.M;l&&Rt(o)==3?l.j():this.Y(o)},qt.prototype.Y=function(o){try{if(o==this.g)e:{const xe=Rt(this.g);var l=this.g.Ba();const ar=this.g.Z();if(!(3>xe)&&(xe!=3||this.g&&(this.h.h||this.g.oa()||dl(this.g)))){this.J||xe!=4||l==7||(l==8||0>=ar?Wr(3):Wr(2)),wa(this);var d=this.g.Z();this.X=d;t:if(Gu(this)){var p=dl(this.g);o="";var E=p.length,R=Rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),Zr(this);var O="";break t}this.h.i=new c.TextDecoder}for(l=0;l<E;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(R&&l==E-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,Xm(this.i,this.u,this.A,this.l,this.R,xe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Re=this.g;if((ue=Re.g?Re.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(ue)){var se=ue;break t}}se=null}if(d=se)sr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ta(this,d);else{this.o=!1,this.s=3,je(12),bn(this),Zr(this);break e}}if(this.P){d=!0;let it;for(;!this.J&&this.C<O.length;)if(it=tg(this,O),it==ya){xe==4&&(this.s=4,je(14),d=!1),sr(this.i,this.l,null,"[Incomplete Response]");break}else if(it==zu){this.s=4,je(15),sr(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else sr(this.i,this.l,it,null),Ta(this,it);if(Gu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xe!=4||O.length!=0||this.h.h||(this.s=1,je(16),d=!1),this.o=this.o&&d,!d)sr(this.i,this.l,O,"[Invalid Chunked Response]"),bn(this),Zr(this);else if(0<O.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Sa(Ne),Ne.M=!0,je(11))}}else sr(this.i,this.l,O,null),Ta(this,O);xe==4&&bn(this),this.o&&!this.J&&(xe==4?vl(this.j,this):(this.o=!1,Ei(this)))}else yg(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,je(12)):(this.s=0,je(13)),bn(this),Zr(this)}}}catch{}finally{}};function Gu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function tg(o,l){var d=o.C,p=l.indexOf(`
`,d);return p==-1?ya:(d=Number(l.substring(d,p)),isNaN(d)?zu:(p+=1,p+d>l.length?ya:(l=l.slice(p,p+d),o.C=p+d,l)))}qt.prototype.cancel=function(){this.J=!0,bn(this)};function Ei(o){o.S=Date.now()+o.I,Wu(o,o.I)}function Wu(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Kr(v(o.ba,o),l)}function wa(o){o.B&&(c.clearTimeout(o.B),o.B=null)}qt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Jm(this.i,this.A),this.L!=2&&(Wr(),je(17)),bn(this),this.s=2,Zr(this)):Wu(this,this.S-o)};function Zr(o){o.j.G==0||o.J||vl(o.j,o)}function bn(o){wa(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Vu(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Ta(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Ia(d.h,o))){if(!o.K&&Ia(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var E=p;if(E[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Di(d),ki(d);else break e;Ra(d),je(18)}}else d.za=E[1],0<d.za-d.T&&37500>E[2]&&d.F&&d.v==0&&!d.C&&(d.C=Kr(v(d.Za,d),6e3));if(1>=Zu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Sn(d,11)}else if((o.K||d.g==o)&&Di(d),!$(l))for(E=d.Da.g.parse(l),l=0;l<E.length;l++){let se=E[l];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const Ne=se[3];Ne!=null&&(d.la=Ne,d.j.info("VER="+d.la));const xe=se[4];xe!=null&&(d.Aa=xe,d.j.info("SVER="+d.Aa));const ar=se[5];ar!=null&&typeof ar=="number"&&0<ar&&(p=1.5*ar,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const it=o.g;if(it){const Ni=it.g?it.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ni){var R=p.h;R.g||Ni.indexOf("spdy")==-1&&Ni.indexOf("quic")==-1&&Ni.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ea(R,R.h),R.h=null))}if(p.D){const Pa=it.g?it.g.getResponseHeader("X-HTTP-Session-Id"):null;Pa&&(p.ya=Pa,he(p.I,p.D,Pa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=o;if(p.qa=Il(p,p.J?p.ia:null,p.W),O.K){Yu(p.h,O);var ue=O,Re=p.L;Re&&(ue.I=Re),ue.B&&(wa(ue),Ei(ue)),p.g=O}else _l(p);0<d.i.length&&Ci(d)}else se[0]!="stop"&&se[0]!="close"||Sn(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Sn(d,7):ba(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}Wr(4)}catch{}}var ng=class{constructor(o,l){this.g=o,this.map=l}};function Ku(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Zu(o){return o.h?1:o.g?o.g.size:0}function Ia(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Ea(o,l){o.g?o.g.add(l):o.h=l}function Yu(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Ku.prototype.cancel=function(){if(this.i=Xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Xu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return x(o.i)}function rg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,p=0;p<d;p++)l.push(o[p]);return l}l=[],d=0;for(p in o)l[d++]=o[p];return l}function sg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const p in o)l[d++]=p;return l}}}function Ju(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=sg(o),p=rg(o),E=p.length,R=0;R<E;R++)l.call(void 0,p[R],d&&d[R],o)}var el=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ig(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),E=null;if(0<=p){var R=o[d].substring(0,p);E=o[d].substring(p+1)}else R=o[d];l(R,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Rn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Rn){this.h=o.h,Ai(this,o.j),this.o=o.o,this.g=o.g,bi(this,o.s),this.l=o.l;var l=o.i,d=new Jr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),tl(this,d),this.m=o.m}else o&&(l=String(o).match(el))?(this.h=!1,Ai(this,l[1]||"",!0),this.o=Yr(l[2]||""),this.g=Yr(l[3]||"",!0),bi(this,l[4]),this.l=Yr(l[5]||"",!0),tl(this,l[6]||"",!0),this.m=Yr(l[7]||"")):(this.h=!1,this.i=new Jr(null,this.h))}Rn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Xr(l,nl,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Xr(l,nl,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Xr(d,d.charAt(0)=="/"?cg:ag,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Xr(d,lg)),o.join("")};function bt(o){return new Rn(o)}function Ai(o,l,d){o.j=d?Yr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function bi(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function tl(o,l,d){l instanceof Jr?(o.i=l,hg(o.i,o.h)):(d||(l=Xr(l,ug)),o.i=new Jr(l,o.h))}function he(o,l,d){o.i.set(l,d)}function Ri(o){return he(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Yr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Xr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,og),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function og(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var nl=/[#\/\?@]/g,ag=/[#\?:]/g,cg=/[#\?]/g,ug=/[#\?@]/g,lg=/#/g;function Jr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function zt(o){o.g||(o.g=new Map,o.h=0,o.i&&ig(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Jr.prototype,n.add=function(o,l){zt(this),this.i=null,o=ir(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function rl(o,l){zt(o),l=ir(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function sl(o,l){return zt(o),l=ir(o,l),o.g.has(l)}n.forEach=function(o,l){zt(this),this.g.forEach(function(d,p){d.forEach(function(E){o.call(l,E,p,this)},this)},this)},n.na=function(){zt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){const E=o[p];for(let R=0;R<E.length;R++)d.push(l[p])}return d},n.V=function(o){zt(this);let l=[];if(typeof o=="string")sl(this,o)&&(l=l.concat(this.g.get(ir(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return zt(this),this.i=null,o=ir(this,o),sl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function il(o,l,d){rl(o,l),0<d.length&&(o.i=null,o.g.set(ir(o,l),x(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];const R=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var E=R;O[p]!==""&&(E+="="+encodeURIComponent(String(O[p]))),o.push(E)}}return this.i=o.join("&")};function ir(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function hg(o,l){l&&!o.j&&(zt(o),o.i=null,o.g.forEach(function(d,p){var E=p.toLowerCase();p!=E&&(rl(this,p),il(this,E,d))},o)),o.j=l}function dg(o,l){const d=new Qr;if(c.Image){const p=new Image;p.onload=b(Ht,d,"TestLoadImage: loaded",!0,l,p),p.onerror=b(Ht,d,"TestLoadImage: error",!1,l,p),p.onabort=b(Ht,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=b(Ht,d,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function fg(o,l){const d=new Qr,p=new AbortController,E=setTimeout(()=>{p.abort(),Ht(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(R=>{clearTimeout(E),R.ok?Ht(d,"TestPingServer: ok",!0,l):Ht(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(E),Ht(d,"TestPingServer: error",!1,l)})}function Ht(o,l,d,p,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),p(d)}catch{}}function pg(){this.g=new Zm}function mg(o,l,d){const p=d||"";try{Ju(o,function(E,R){let O=E;h(E)&&(O=fa(E)),l.push(p+R+"="+encodeURIComponent(O))})}catch(E){throw l.push(p+"type="+encodeURIComponent("_badmap")),E}}function es(o){this.l=o.Ub||null,this.j=o.eb||!1}C(es,pa),es.prototype.g=function(){return new Si(this.l,this.j)},es.prototype.i=function(o){return function(){return o}}({});function Si(o,l){Oe.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Si,Oe),n=Si.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,ns(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ol(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ol(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?ts(this):ns(this),this.readyState==3&&ol(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ts(this))},n.Qa=function(o){this.g&&(this.response=o,ts(this))},n.ga=function(){this.g&&ts(this)};function ts(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ns(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function ns(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function al(o){let l="";return ae(o,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function Aa(o,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=al(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):he(o,l,d))}function me(o){Oe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(me,Oe);var gg=/^https?$/i,_g=["POST","PUT"];n=me.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_a.g(),this.v=this.o?Mu(this.o):Mu(_a),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(R){cl(this,R);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var E in p)d.set(E,p[E]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())d.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),E=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(_g,l,void 0))||p||E||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,O]of d)this.g.setRequestHeader(R,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hl(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){cl(this,R)}};function cl(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,ul(o),Pi(o)}function ul(o){o.A||(o.A=!0,Ue(o,"complete"),Ue(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ue(this,"complete"),Ue(this,"abort"),Pi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pi(this,!0)),me.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ll(this):this.bb())},n.bb=function(){ll(this)};function ll(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Rt(o)!=4||o.Z()!=2)){if(o.u&&Rt(o)==4)Ou(o.Ea,0,o);else if(Ue(o,"readystatechange"),Rt(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=O===0){var E=String(o.D).match(el)[1]||null;!E&&c.self&&c.self.location&&(E=c.self.location.protocol.slice(0,-1)),p=!gg.test(E?E.toLowerCase():"")}d=p}if(d)Ue(o,"complete"),Ue(o,"success");else{o.m=6;try{var R=2<Rt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",ul(o)}}finally{Pi(o)}}}}function Pi(o,l){if(o.g){hl(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ue(o,"ready");try{d.onreadystatechange=p}catch{}}}function hl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Rt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Rt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Qm(l)}};function dl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function yg(o){const l={};o=(o.g&&2<=Rt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if($(o[p]))continue;var d=I(o[p]);const E=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=l[E]||[];l[E]=R,R.push(d)}T(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rs(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function fl(o){this.Aa=0,this.i=[],this.j=new Qr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rs("baseRetryDelayMs",5e3,o),this.cb=rs("retryDelaySeedMs",1e4,o),this.Wa=rs("forwardChannelMaxRetries",2,o),this.wa=rs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ku(o&&o.concurrentRequestLimit),this.Da=new pg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fl.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,p){je(0),this.W=o,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Il(this,null,this.W),Ci(this)};function ba(o){if(pl(o),o.G==3){var l=o.U++,d=bt(o.I);if(he(d,"SID",o.K),he(d,"RID",l),he(d,"TYPE","terminate"),ss(o,d),l=new qt(o,o.j,l),l.L=2,l.v=Ri(bt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=El(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Ei(l)}Tl(o)}function ki(o){o.g&&(Sa(o),o.g.cancel(),o.g=null)}function pl(o){ki(o),o.u&&(c.clearTimeout(o.u),o.u=null),Di(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ci(o){if(!Qu(o.h)&&!o.s){o.s=!0;var l=o.Ga;$r||Su(),qr||($r(),qr=!0),ia.add(l,o),o.B=0}}function vg(o,l){return Zu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Kr(v(o.Ga,o,l),wl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const E=new qt(this,this.j,o);let R=this.o;if(this.S&&(R?(R=m(R),w(R,this.S)):R=this.S),this.m!==null||this.O||(E.H=R,R=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=gl(this,E,l),d=bt(this.I),he(d,"RID",o),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),ss(this,d),R&&(this.O?l="headers="+encodeURIComponent(String(al(R)))+"&"+l:this.m&&Aa(d,this.m,R)),Ea(this.h,E),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",l),he(d,"SID","null"),E.T=!0,va(E,d,null)):va(E,d,l),this.G=2}}else this.G==3&&(o?ml(this,o):this.i.length==0||Qu(this.h)||ml(this))};function ml(o,l){var d;l?d=l.l:d=o.U++;const p=bt(o.I);he(p,"SID",o.K),he(p,"RID",d),he(p,"AID",o.T),ss(o,p),o.m&&o.o&&Aa(p,o.m,o.o),d=new qt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=gl(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ea(o.h,d),va(d,p,l)}function ss(o,l){o.H&&ae(o.H,function(d,p){he(l,p,d)}),o.l&&Ju({},function(d,p){he(l,p,d)})}function gl(o,l,d){d=Math.min(o.i.length,d);var p=o.l?v(o.l.Na,o.l,o):null;e:{var E=o.i;let R=-1;for(;;){const O=["count="+d];R==-1?0<d?(R=E[0].g,O.push("ofs="+R)):R=0:O.push("ofs="+R);let ue=!0;for(let Re=0;Re<d;Re++){let se=E[Re].g;const Ne=E[Re].map;if(se-=R,0>se)R=Math.max(0,E[Re].g-100),ue=!1;else try{mg(Ne,O,"req"+se+"_")}catch{p&&p(Ne)}}if(ue){p=O.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,p}function _l(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;$r||Su(),qr||($r(),qr=!0),ia.add(l,o),o.v=0}}function Ra(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Kr(v(o.Fa,o),wl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,yl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Kr(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,je(10),ki(this),yl(this))};function Sa(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function yl(o){o.g=new qt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=bt(o.qa);he(l,"RID","rpc"),he(l,"SID",o.K),he(l,"AID",o.T),he(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&he(l,"TO",o.ja),he(l,"TYPE","xmlhttp"),ss(o,l),o.m&&o.o&&Aa(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ri(bt(l)),d.m=null,d.P=!0,Hu(d,o)}n.Za=function(){this.C!=null&&(this.C=null,ki(this),Ra(this),je(19))};function Di(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function vl(o,l){var d=null;if(o.g==l){Di(o),Sa(o),o.g=null;var p=2}else if(Ia(o.h,l))d=l.D,Yu(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var E=o.B;p=wi(),Ue(p,new Bu(p,d)),Ci(o)}else _l(o);else if(E=l.s,E==3||E==0&&0<l.X||!(p==1&&vg(o,l)||p==2&&Ra(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),E){case 1:Sn(o,5);break;case 4:Sn(o,10);break;case 3:Sn(o,6);break;default:Sn(o,2)}}}function wl(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Sn(o,l){if(o.j.info("Error code "+l),l==2){var d=v(o.fb,o),p=o.Xa;const E=!p;p=new Rn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ai(p,"https"),Ri(p),E?dg(p.toString(),d):fg(p.toString(),d)}else je(2);o.G=0,o.l&&o.l.sa(l),Tl(o),pl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),je(2)):(this.j.info("Failed to ping google.com"),je(1))};function Tl(o){if(o.G=0,o.ka=[],o.l){const l=Xu(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ka,l),P(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Il(o,l,d){var p=d instanceof Rn?bt(d):new Rn(d);if(p.g!="")l&&(p.g=l+"."+p.g),bi(p,p.s);else{var E=c.location;p=E.protocol,l=l?l+"."+E.hostname:E.hostname,E=+E.port;var R=new Rn(null);p&&Ai(R,p),l&&(R.g=l),E&&bi(R,E),d&&(R.l=d),p=R}return d=o.D,l=o.ya,d&&l&&he(p,d,l),he(p,"VER",o.la),ss(o,p),p}function El(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new me(new es({eb:d})):new me(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Al(){}n=Al.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Oi(){}Oi.prototype.g=function(o,l){return new Qe(o,l)};function Qe(o,l){Oe.call(this),this.g=new fl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!$(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!$(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new or(this)}C(Qe,Oe),Qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){ba(this.g)},Qe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=fa(o),o=d);l.i.push(new ng(l.Ya++,o)),l.G==3&&Ci(l)},Qe.prototype.N=function(){this.g.l=null,delete this.j,ba(this.g),delete this.g,Qe.aa.N.call(this)};function bl(o){ma.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(bl,ma);function Rl(){ga.call(this),this.status=1}C(Rl,ga);function or(o){this.g=o}C(or,Al),or.prototype.ua=function(){Ue(this.g,"a")},or.prototype.ta=function(o){Ue(this.g,new bl(o))},or.prototype.sa=function(o){Ue(this.g,new Rl)},or.prototype.ra=function(){Ue(this.g,"b")},Oi.prototype.createWebChannel=Oi.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,zf=function(){return new Oi},qf=function(){return wi()},$f=An,rc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ti.NO_ERROR=0,Ti.TIMEOUT=8,Ti.HTTP_ERROR=6,Ki=Ti,$u.COMPLETE="complete",Bf=$u,Lu.EventType=Gr,Gr.OPEN="a",Gr.CLOSE="b",Gr.ERROR="c",Gr.MESSAGE="d",Oe.prototype.listen=Oe.prototype.K,ls=Lu,jf=es,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,Uf=me}).apply(typeof Vi<"u"?Vi:typeof self<"u"?self:typeof window<"u"?window:{});const gh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new Co("@firebase/firestore");function is(){return qn.logLevel}function F(n,...e){if(qn.logLevel<=te.DEBUG){const t=e.map(qc);qn.debug(`Firestore (${Fr}): ${n}`,...t)}}function Ft(n,...e){if(qn.logLevel<=te.ERROR){const t=e.map(qc);qn.error(`Firestore (${Fr}): ${n}`,...t)}}function Sr(n,...e){if(qn.logLevel<=te.WARN){const t=e.map(qc);qn.warn(`Firestore (${Fr}): ${n}`,...t)}}function qc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n="Unexpected state"){const e=`FIRESTORE (${Fr}) INTERNAL ASSERTION FAILED: `+n;throw Ft(e),new Error(e)}function oe(n,e){n||z()}function Q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends st{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Me.UNAUTHENTICATED))}shutdown(){}}class GT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class WT{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new at;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new at,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new at)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new Hf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Me(e)}}class KT{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class QT{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new KT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(oe(typeof t.token=="string"),this.R=t.token,new ZT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=XT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ie(n,e){return n<e?-1:n>e?1:0}function Pr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new we(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new we(0,0))}static max(){return new G(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(),r===void 0?r=e.length-t:r>e.length-t&&z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ps.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ps?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ce extends Ps{construct(e,t,r){return new ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ce(t)}static emptyPath(){return new ce([])}}const JT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends Ps{construct(e,t,r){return new Pe(e,t,r)}static isValidIdentifier(e){return JT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(t)}static emptyPath(){return new Pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ce.fromString(e))}static fromName(e){return new B(ce.fromString(e).popFirst(5))}static empty(){return new B(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ce(e.slice()))}}function eI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new we(t+1,0):new we(t,r));return new fn(s,B.empty(),e)}function tI(n){return new fn(n.readTime,n.key,-1)}class fn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new fn(G.min(),B.empty(),-1)}static max(){return new fn(G.max(),B.empty(),-1)}}function nI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:ie(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==rI)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function iI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ii(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}zc.oe=-1;function oi(n){return n==null}function uo(n){return n===0&&1/n==-1/0}function oI(n){return typeof n=="number"&&Number.isInteger(n)&&!uo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function er(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function aI(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function Wf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){this.comparator=e,this.root=t||Se.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mi(this.root,e,this.comparator,!0)}}class Mi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Se.RED,this.left=s??Se.EMPTY,this.right=i??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Se(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Se.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Se(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yh(this.data.getIterator())}getIteratorFrom(e){return new yh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ke(this.comparator);return t.data=e,t}}class yh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new ke(Pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Pr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Kf("Invalid base64 string: "+i):i}}(e);return new Le(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const cI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pn(n){if(oe(!!n),typeof n=="string"){let e=0;const t=cI.exec(n);if(oe(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function zn(n){return typeof n=="string"?Le.fromBase64String(n):Le.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Hc(n){const e=n.mapValue.fields.__previous_value__;return Uo(e)?Hc(e):e}function ks(n){const e=pn(n.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,t,r,s,i,a,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}}class Cs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Cs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Uo(n)?4:lI(n)?9007199254740991:10:z()}function wt(n,e){if(n===e)return!0;const t=Hn(n);if(t!==Hn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ks(n).isEqual(ks(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=pn(s.timestampValue),c=pn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return zn(s.bytesValue).isEqual(zn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ye(s.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ye(s.integerValue)===ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ye(s.doubleValue),c=ye(i.doubleValue);return a===c?uo(a)===uo(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Pr(n.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(_h(a)!==_h(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!wt(a[u],c[u])))return!1;return!0}(n,e);default:return z()}}function Ds(n,e){return(n.values||[]).find(t=>wt(t,e))!==void 0}function kr(n,e){if(n===e)return 0;const t=Hn(n),r=Hn(e);if(t!==r)return ie(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ie(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ye(i.integerValue||i.doubleValue),u=ye(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return vh(n.timestampValue,e.timestampValue);case 4:return vh(ks(n),ks(e));case 5:return ie(n.stringValue,e.stringValue);case 6:return function(i,a){const c=zn(i),u=zn(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=ie(c[h],u[h]);if(f!==0)return f}return ie(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ie(ye(i.latitude),ye(a.latitude));return c!==0?c:ie(ye(i.longitude),ye(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,a){const c=i.values||[],u=a.values||[];for(let h=0;h<c.length&&h<u.length;++h){const f=kr(c[h],u[h]);if(f)return f}return ie(c.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,a){if(i===Li.mapValue&&a===Li.mapValue)return 0;if(i===Li.mapValue)return 1;if(a===Li.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let _=0;_<u.length&&_<f.length;++_){const v=ie(u[_],f[_]);if(v!==0)return v;const b=kr(c[u[_]],h[f[_]]);if(b!==0)return b}return ie(u.length,f.length)}(n.mapValue,e.mapValue);default:throw z()}}function vh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ie(n,e);const t=pn(n),r=pn(e),s=ie(t.seconds,r.seconds);return s!==0?s:ie(t.nanos,r.nanos)}function Cr(n){return sc(n)}function sc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=pn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return zn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=sc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${sc(t.fields[a])}`;return s+"}"}(n.mapValue):z()}function lo(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ic(n){return!!n&&"integerValue"in n}function Gc(n){return!!n&&"arrayValue"in n}function wh(n){return!!n&&"nullValue"in n}function Th(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Qi(n){return!!n&&"mapValue"in n}function _s(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return er(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=_s(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_s(n.arrayValue.values[t]);return e}return Object.assign({},n)}function lI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Qi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_s(t)}setAll(e){let t=Pe.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=_s(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Qi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Qi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){er(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new qe(_s(this.value))}}function Qf(n){const e=[];return er(n.fields,(t,r)=>{const s=new Pe([t]);if(Qi(r)){const i=Qf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ee(e,0,G.min(),G.min(),G.min(),qe.empty(),0)}static newFoundDocument(e,t,r,s){return new Ee(e,1,t,G.min(),r,s,0)}static newNoDocument(e,t){return new Ee(e,2,t,G.min(),G.min(),qe.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,G.min(),G.min(),qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.position=e,this.inclusive=t}}function Ih(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),t.key):r=kr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Eh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!wt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t="asc"){this.field=e,this.dir=t}}function hI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{}class ve extends Zf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new fI(e,t,r):t==="array-contains"?new gI(e,r):t==="in"?new _I(e,r):t==="not-in"?new yI(e,r):t==="array-contains-any"?new vI(e,r):new ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new pI(e,r):new mI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(kr(t,this.value)):t!==null&&Hn(this.value)===Hn(t)&&this.matchesComparison(kr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends Zf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ht(e,t)}matches(e){return Yf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Yf(n){return n.op==="and"}function Xf(n){return dI(n)&&Yf(n)}function dI(n){for(const e of n.filters)if(e instanceof ht)return!1;return!0}function oc(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+Cr(n.value);if(Xf(n))return n.filters.map(e=>oc(e)).join(",");{const e=n.filters.map(t=>oc(t)).join(",");return`${n.op}(${e})`}}function Jf(n,e){return n instanceof ve?function(r,s){return s instanceof ve&&r.op===s.op&&r.field.isEqual(s.field)&&wt(r.value,s.value)}(n,e):n instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Jf(a,s.filters[c]),!0):!1}(n,e):void z()}function ep(n){return n instanceof ve?function(t){return`${t.field.canonicalString()} ${t.op} ${Cr(t.value)}`}(n):n instanceof ht?function(t){return t.op.toString()+" {"+t.getFilters().map(ep).join(" ,")+"}"}(n):"Filter"}class fI extends ve{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class pI extends ve{constructor(e,t){super(e,"in",t),this.keys=tp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class mI extends ve{constructor(e,t){super(e,"not-in",t),this.keys=tp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class gI extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gc(t)&&Ds(t.arrayValue,this.value)}}class _I extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ds(this.value.arrayValue,t)}}class yI extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ds(this.value.arrayValue,t)}}class vI extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ds(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function Ah(n,e=null,t=[],r=[],s=null,i=null,a=null){return new wI(n,e,t,r,s,i,a)}function Wc(n){const e=Q(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>oc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Cr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Cr(r)).join(",")),e.ue=t}return e.ue}function Kc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!hI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Jf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Eh(n.startAt,e.startAt)&&Eh(n.endAt,e.endAt)}function ac(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function TI(n,e,t,r,s,i,a,c){return new tr(n,e,t,r,s,i,a,c)}function Qc(n){return new tr(n)}function bh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Zc(n){return n.collectionGroup!==null}function wr(n){const e=Q(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ke(Pe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Os(i,r))}),t.has(Pe.keyField().canonicalString())||e.ce.push(new Os(Pe.keyField(),r))}return e.ce}function yt(n){const e=Q(n);return e.le||(e.le=np(e,wr(n))),e.le}function II(n){const e=Q(n);return e.he||(e.he=np(e,n.explicitOrderBy)),e.he}function np(n,e){if(n.limitType==="F")return Ah(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Os(s.field,i)});const t=n.endAt?new Dr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Dr(n.startAt.position,n.startAt.inclusive):null;return Ah(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function cc(n,e){const t=n.filters.concat([e]);return new tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ho(n,e,t){return new tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function jo(n,e){return Kc(yt(n),yt(e))&&n.limitType===e.limitType}function rp(n){return`${Wc(yt(n))}|lt:${n.limitType}`}function lr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>ep(s)).join(", ")}]`),oi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Cr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Cr(s)).join(",")),`Target(${r})`}(yt(n))}; limitType=${n.limitType})`}function Bo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of wr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const h=Ih(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,wr(r),s)||r.endAt&&!function(a,c,u){const h=Ih(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,wr(r),s))}(n,e)}function EI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function sp(n){return(e,t)=>{let r=!1;for(const s of wr(n)){const i=AI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function AI(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?kr(u,h):z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){er(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Wf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=new pe(B.comparator);function Ut(){return bI}const ip=new pe(B.comparator);function hs(...n){let e=ip;for(const t of n)e=e.insert(t.key,t);return e}function op(n){let e=ip;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Dn(){return ys()}function ap(){return ys()}function ys(){return new Ur(n=>n.toString(),(n,e)=>n.isEqual(e))}const RI=new pe(B.comparator),SI=new ke(B.comparator);function ee(...n){let e=SI;for(const t of n)e=e.add(t);return e}const PI=new ke(ie);function kI(){return PI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uo(e)?"-0":e}}function up(n){return{integerValue:""+n}}function lp(n,e){return oI(e)?up(e):cp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this._=void 0}}function CI(n,e,t){return n instanceof Ns?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Uo(i)&&(i=Hc(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof xs?dp(n,e):n instanceof Vs?fp(n,e):function(s,i){const a=hp(s,i),c=Rh(a)+Rh(s.Pe);return ic(a)&&ic(s.Pe)?up(c):cp(s.serializer,c)}(n,e)}function DI(n,e,t){return n instanceof xs?dp(n,e):n instanceof Vs?fp(n,e):t}function hp(n,e){return n instanceof Ms?function(r){return ic(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ns extends $o{}class xs extends $o{constructor(e){super(),this.elements=e}}function dp(n,e){const t=pp(e);for(const r of n.elements)t.some(s=>wt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Vs extends $o{constructor(e){super(),this.elements=e}}function fp(n,e){let t=pp(e);for(const r of n.elements)t=t.filter(s=>!wt(s,r));return{arrayValue:{values:t}}}class Ms extends $o{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Rh(n){return ye(n.integerValue||n.doubleValue)}function pp(n){return Gc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t){this.field=e,this.transform=t}}function OI(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof xs&&s instanceof xs||r instanceof Vs&&s instanceof Vs?Pr(r.elements,s.elements,wt):r instanceof Ms&&s instanceof Ms?wt(r.Pe,s.Pe):r instanceof Ns&&s instanceof Ns}(n.transform,e.transform)}class NI{constructor(e,t){this.version=e,this.transformResults=t}}class ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qo{}function gp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zo(n.key,ze.none()):new ai(n.key,n.data,ze.none());{const t=n.data,r=qe.empty();let s=new ke(Pe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new En(n.key,r,new Xe(s.toArray()),ze.none())}}function xI(n,e,t){n instanceof ai?function(s,i,a){const c=s.value.clone(),u=Ph(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof En?function(s,i,a){if(!Zi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Ph(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(_p(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function vs(n,e,t,r){return n instanceof ai?function(i,a,c,u){if(!Zi(i.precondition,a))return c;const h=i.value.clone(),f=kh(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof En?function(i,a,c,u){if(!Zi(i.precondition,a))return c;const h=kh(i.fieldTransforms,u,a),f=a.data;return f.setAll(_p(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(i,a,c){return Zi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function VI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=hp(r.transform,s||null);i!=null&&(t===null&&(t=qe.empty()),t.set(r.field,i))}return t||null}function Sh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Pr(r,s,(i,a)=>OI(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ai extends qo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class En extends qo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _p(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ph(n,e,t){const r=new Map;oe(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,DI(a,c,t[s]))}return r}function kh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,CI(i,a,e))}return r}class zo extends qo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yp extends qo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=vs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=vs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ap();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=gp(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&Pr(this.mutations,e.mutations,(t,r)=>Sh(t,r))&&Pr(this.baseMutations,e.baseMutations,(t,r)=>Sh(t,r))}}class Yc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){oe(e.mutations.length===r.length);let s=function(){return RI}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Yc(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,ne;function vp(n){switch(n){default:return z();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function wp(n){if(n===void 0)return Ft("GRPC error has no .code"),S.UNKNOWN;switch(n){case _e.OK:return S.OK;case _e.CANCELLED:return S.CANCELLED;case _e.UNKNOWN:return S.UNKNOWN;case _e.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case _e.INTERNAL:return S.INTERNAL;case _e.UNAVAILABLE:return S.UNAVAILABLE;case _e.UNAUTHENTICATED:return S.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case _e.NOT_FOUND:return S.NOT_FOUND;case _e.ALREADY_EXISTS:return S.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return S.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case _e.ABORTED:return S.ABORTED;case _e.OUT_OF_RANGE:return S.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return S.UNIMPLEMENTED;case _e.DATA_LOSS:return S.DATA_LOSS;default:return z()}}(ne=_e||(_e={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new Vn([4294967295,4294967295],0);function Ch(n){const e=jI().encode(n),t=new Ff;return t.update(e),new Uint8Array(t.digest())}function Dh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vn([t,r],0),new Vn([s,i],0)]}class Xc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ds(`Invalid padding: ${t}`);if(r<0)throw new ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ds(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ds(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Vn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Vn.fromNumber(r)));return s.compare(BI)===1&&(s=new Vn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Ch(e),[r,s]=Dh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Xc(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=Ch(e),[r,s]=Dh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ci.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ho(G.min(),s,new pe(ie),Ut(),ee())}}class ci{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ci(r,t,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Tp{constructor(e,t){this.targetId=e,this.me=t}}class Ip{constructor(e,t,r=Le.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Oh{constructor(){this.fe=0,this.ge=xh(),this.pe=Le.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ee(),t=ee(),r=ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z()}}),new ci(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=xh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $I{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ut(),this.qe=Nh(),this.Qe=new pe(ie)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(ac(i))if(r===0){const a=new B(i.path);this.Ue(t,a,Ee.newNoDocument(a,G.min()))}else oe(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=zn(r).toUint8Array()}catch(u){if(u instanceof Kf)return Sr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Xc(a,s,i)}catch(u){return Sr(u instanceof ds?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&ac(c.target)){const u=new B(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ee.newNoDocument(u,e))}i.be&&(t.set(a,i.Ce()),i.ve())}});let r=ee();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Ho(e,t,this.Qe,this.ke,r);return this.ke=Ut(),this.qe=Nh(),this.Qe=new pe(ie),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Oh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ke(ie),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Oh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Nh(){return new pe(B.comparator)}function xh(){return new pe(B.comparator)}const qI={asc:"ASCENDING",desc:"DESCENDING"},zI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HI={and:"AND",or:"OR"};class GI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uc(n,e){return n.useProto3Json||oi(e)?e:{value:e}}function fo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ep(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function WI(n,e){return fo(n,e.toTimestamp())}function nt(n){return oe(!!n),G.fromTimestamp(function(t){const r=pn(t);return new we(r.seconds,r.nanos)}(n))}function Jc(n,e){return lc(n,e).canonicalString()}function lc(n,e){const t=function(s){return new ce(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ap(n){const e=ce.fromString(n);return oe(Dp(e)),e}function po(n,e){return Jc(n.databaseId,e.path)}function ws(n,e){const t=Ap(e);if(t.get(1)!==n.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(Rp(t))}function bp(n,e){return Jc(n.databaseId,e)}function KI(n){const e=Ap(n);return e.length===4?ce.emptyPath():Rp(e)}function hc(n){return new ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Rp(n){return oe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Vh(n,e,t){return{name:po(n,e),fields:t.value.mapValue.fields}}function QI(n,e){return"found"in e?function(r,s){oe(!!s.found),s.found.name,s.found.updateTime;const i=ws(r,s.found.name),a=nt(s.found.updateTime),c=s.found.createTime?nt(s.found.createTime):G.min(),u=new qe({mapValue:{fields:s.found.fields}});return Ee.newFoundDocument(i,a,c,u)}(n,e):"missing"in e?function(r,s){oe(!!s.missing),oe(!!s.readTime);const i=ws(r,s.missing),a=nt(s.readTime);return Ee.newNoDocument(i,a)}(n,e):z()}function ZI(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string"),Le.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Le.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?S.UNKNOWN:wp(h.code);return new N(f,h.message||"")}(a);t=new Ip(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ws(n,r.document.name),i=nt(r.document.updateTime),a=r.document.createTime?nt(r.document.createTime):G.min(),c=new qe({mapValue:{fields:r.document.fields}}),u=Ee.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Yi(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ws(n,r.document),i=r.readTime?nt(r.readTime):G.min(),a=Ee.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Yi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ws(n,r.document),i=r.removedTargetIds||[];t=new Yi([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new UI(s,i),c=r.targetId;t=new Tp(c,a)}}return t}function Sp(n,e){let t;if(e instanceof ai)t={update:Vh(n,e.key,e.value)};else if(e instanceof zo)t={delete:po(n,e.key)};else if(e instanceof En)t={update:Vh(n,e.key,e.data),updateMask:iE(e.fieldMask)};else{if(!(e instanceof yp))return z();t={verify:po(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Ns)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof xs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Vs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ms)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:WI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(n,e.precondition)),t}function YI(n,e){return n&&n.length>0?(oe(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?nt(s.updateTime):nt(i);return a.isEqual(G.min())&&(a=nt(i)),new NI(a,s.transformResults||[])}(t,e))):[]}function XI(n,e){return{documents:[bp(n,e.path)]}}function Pp(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=bp(n,s);const i=function(h){if(h.length!==0)return Cp(ht.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:nn(v.field),direction:nE(v.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=uc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function JI(n,e,t,r){const{_t:s,parent:i}=Pp(n,e),a={},c=[];let u=0;return t.forEach(h=>{const f="aggregate_"+u++;a[f]=h.alias,h.aggregateType==="count"?c.push({alias:f,count:{}}):h.aggregateType==="avg"?c.push({alias:f,avg:{field:nn(h.fieldPath)}}):h.aggregateType==="sum"&&c.push({alias:f,sum:{field:nn(h.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:s.structuredQuery},parent:s.parent},ut:a,parent:i}}function eE(n){let e=KI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){oe(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(_){const v=kp(_);return v instanceof ht&&Xf(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(v=>function(C){return new Os(hr(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(_){let v;return v=typeof _=="object"?_.value:_,oi(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(_){const v=!!_.before,b=_.values||[];return new Dr(b,v)}(t.startAt));let h=null;return t.endAt&&(h=function(_){const v=!_.before,b=_.values||[];return new Dr(b,v)}(t.endAt)),TI(e,s,a,i,c,"F",u,h)}function tE(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=hr(t.unaryFilter.field);return ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hr(t.unaryFilter.field);return ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hr(t.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=hr(t.unaryFilter.field);return ve.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(t){return ve.create(hr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ht.create(t.compositeFilter.filters.map(r=>kp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(t.compositeFilter.op))}(n):z()}function nE(n){return qI[n]}function rE(n){return zI[n]}function sE(n){return HI[n]}function nn(n){return{fieldPath:n.canonicalString()}}function hr(n){return Pe.fromServerFormat(n.fieldPath)}function Cp(n){return n instanceof ve?function(t){if(t.op==="=="){if(Th(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NAN"}};if(wh(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Th(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NOT_NAN"}};if(wh(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nn(t.field),op:rE(t.op),value:t.value}}}(n):n instanceof ht?function(t){const r=t.getFilters().map(s=>Cp(s));return r.length===1?r[0]:{compositeFilter:{op:sE(t.op),filters:r}}}(n):z()}function iE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Dp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,r,s,i=G.min(),a=G.min(),c=Le.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.ct=e}}function aE(n){const e=eE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ho(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this._n=new uE}addToCollectionParentIndex(e,t){return this._n.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(fn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(fn.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class uE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ke(ce.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ke(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Or(0)}static Ln(){return new Or(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.changes=new Ur(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&vs(r.mutation,s,Xe.empty(),we.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ee()){const s=Dn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=hs();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Dn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ee()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Ut();const a=ys(),c=function(){return ys()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof En)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),vs(f.mutation,h,f.mutation.getFieldMask(),we.now())):a.set(h.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var _;return c.set(h,new hE(f,(_=a.get(h))!==null&&_!==void 0?_:null))}),c))}recalculateAndSaveOverlays(e,t){const r=ys();let s=new pe((a,c)=>a-c),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||Xe.empty();f=c.applyToLocalView(h,f),r.set(u,f);const _=(s.get(c.batchId)||ee()).add(u);s=s.insert(c.batchId,_)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,_=ap();f.forEach(v=>{if(!i.has(v)){const b=gp(t.get(v),r.get(v));b!==null&&_.set(v,b),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,_))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Zc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(Dn());let c=-1,u=i;return a.next(h=>k.forEach(h,(f,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),i.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ee())).next(f=>({batchId:c,changes:op(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let s=hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=hs();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,u=>{const h=function(_,v){return new tr(v,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((_,v)=>{a=a.insert(_,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ee.newInvalidDocument(f)))});let c=hs();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&vs(f.mutation,h,Xe.empty(),we.now()),Bo(t,h)&&(c=c.insert(u,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return k.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:nt(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(s){return{name:s.name,query:aE(s.bundledQuery),readTime:nt(s.readTime)}}(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.overlays=new pe(B.comparator),this.hr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Dn();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=Dn(),i=t.length+1,a=new B(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new pe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Dn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Dn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return k.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new LI(t,r));let i=this.hr.get(t);i===void 0&&(i=ee(),this.hr.set(t,i)),this.hr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this.Pr=new ke(Ie.Ir),this.Tr=new ke(Ie.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new Ie(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new Ie(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new B(new ce([])),r=new Ie(t,e),s=new Ie(t,e+1),i=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new B(new ce([])),r=new Ie(t,e),s=new Ie(t,e+1);let i=ee();return this.Tr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ie(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return B.comparator(e.key,t.key)||ie(e.pr,t.pr)}static Er(e,t){return ie(e.pr,t.pr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new ke(Ie.Ir)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new MI(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.wr=this.wr.add(new Ie(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.br(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ie(t,0),s=new Ie(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],a=>{const c=this.Sr(a.pr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ke(ie);return t.forEach(s=>{const i=new Ie(s,0),a=new Ie(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],c=>{r=r.add(c.pr)})}),k.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const a=new Ie(new B(i),0);let c=new ke(ie);return this.wr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.pr)),!0)},a),k.resolve(this.Dr(c))}Dr(e){const t=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){oe(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return k.forEach(t.mutations,s=>{const i=new Ie(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new Ie(t,0),s=this.wr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.vr=e,this.docs=function(){return new pe(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let r=Ut();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ee.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ut();const a=t.path,c=new B(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||nI(tI(f),r)<=0||(s.has(f.key)||Bo(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){z()}Fr(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new _E(this)}getSize(e){return k.resolve(this.size)}}class _E extends lE{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.persistence=e,this.Mr=new Ur(t=>Wc(t),Kc),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Or=0,this.Nr=new eu,this.targetCount=0,this.Lr=Or.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),k.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Or(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.qn(t),k.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Mr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,t){this.Br={},this.overlays={},this.kr=new zc(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new yE(this),this.indexManager=new cE,this.remoteDocumentCache=function(s){return new gE(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new oE(t),this.$r=new fE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new pE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new mE(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const s=new wE(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,t){return k.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class wE extends sI{constructor(e){super(),this.currentSequenceNumber=e}}class tu{constructor(e){this.persistence=e,this.zr=new eu,this.jr=null}static Hr(e){return new tu(e)}get Jr(){if(this.jr)return this.jr;throw z()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),k.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Jr,r=>{const s=B.fromPath(r);return this.Yr(e,s).next(i=>{i||t.removeEntry(s,G.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return k.or([()=>k.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=s}static Ki(e,t){let r=ee(),s=ee();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nu(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Ng()?8:iI(Ce())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ji(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new TE;return this.Ji(e,t,a).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,t,a,c.size)})}).next(()=>i.result)}Yi(e,t,r,s){return r.documentReadCount<this.Wi?(is()<=te.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",lr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),k.resolve()):(is()<=te.DEBUG&&F("QueryEngine","Query:",lr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(is()<=te.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",lr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yt(t))):k.resolve())}ji(e,t){if(bh(t))return k.resolve(null);let r=yt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ho(t,null,"F"),r=yt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ee(...i);return this.zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Zi(t,c);return this.Xi(t,h,a,u.readTime)?this.ji(e,ho(t,null,"F")):this.es(e,h,t,u)}))})))}Hi(e,t,r,s){return bh(t)||s.isEqual(G.min())?k.resolve(null):this.zi.getDocuments(e,r).next(i=>{const a=this.Zi(t,i);return this.Xi(t,a,r,s)?k.resolve(null):(is()<=te.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),lr(t)),this.es(e,a,t,eI(s,-1)).next(c=>c))})}Zi(e,t){let r=new ke(sp(e));return t.forEach((s,i)=>{Bo(e,i)&&(r=r.add(i))}),r}Xi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,t,r){return is()<=te.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",lr(t)),this.zi.getDocumentsMatchingQuery(e,t,fn.min(),r)}es(e,t,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,t,r,s){this.persistence=e,this.ts=t,this.serializer=s,this.ns=new pe(ie),this.rs=new Ur(i=>Wc(i),Kc),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dE(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function AE(n,e,t,r){return new EE(n,e,t,r)}async function Op(n,e){const t=Q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=ee();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({us:h,removedBatchIds:a,addedBatchIds:c}))})})}function bE(n,e){const t=Q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.os.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const _=h.batch,v=_.keys();let b=k.resolve();return v.forEach(C=>{b=b.next(()=>f.getEntry(u,C)).next(x=>{const P=h.docVersions.get(C);oe(P!==null),x.version.compareTo(P)<0&&(_.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(u,_))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=ee();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Np(n){const e=Q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function RE(n,e){const t=Q(n),r=e.snapshotVersion;let s=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.os.newChangeBuffer({trackRemovals:!0});s=t.ns;const c=[];e.targetChanges.forEach((f,_)=>{const v=s.get(_);if(!v)return;c.push(t.Qr.removeMatchingKeys(i,f.removedDocuments,_).next(()=>t.Qr.addMatchingKeys(i,f.addedDocuments,_)));let b=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(_)!==null?b=b.withResumeToken(Le.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(_,b),function(x,P,L){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(v,b,f)&&c.push(t.Qr.updateTargetData(i,b))});let u=Ut(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(SE(i,a,e.documentUpdates).next(f=>{u=f.cs,h=f.ls})),!r.isEqual(G.min())){const f=t.Qr.getLastRemoteSnapshotVersion(i).next(_=>t.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return k.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.ns=s,i))}function SE(n,e,t){let r=ee(),s=ee();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Ut();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):F("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{cs:a,ls:s}})}function PE(n,e){const t=Q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kE(n,e){const t=Q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Qr.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.Qr.allocateTargetId(r).next(a=>(s=new un(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function dc(n,e,t){const r=Q(n),s=r.ns.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ii(a))throw a;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Mh(n,e,t){const r=Q(n);let s=G.min(),i=ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const _=Q(u),v=_.rs.get(f);return v!==void 0?k.resolve(_.ns.get(v)):_.Qr.getTargetData(h,f)}(r,a,yt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,t?s:G.min(),t?i:ee())).next(c=>(CE(r,EI(e),c),{documents:c,hs:i})))}function CE(n,e,t){let r=n.ss.get(e)||G.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(e,r)}class Lh{constructor(){this.activeTargetIds=kI()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DE{constructor(){this.no=new Lh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Lh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi=null;function ja(){return Fi===null?Fi=function(){return 268435456+Math.round(2147483648*Math.random())}():Fi++,"0x"+Fi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="WebChannelConnection";class VE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(t,r,s,i,a){const c=ja(),u=this.vo(t,r.toUriEncodedString());F("RestConnection",`Sending RPC '${t}' ${c}:`,u,s);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,i,a),this.Mo(t,u,h,s).then(f=>(F("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Sr("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",u,"request:",s),f})}xo(t,r,s,i,a,c){return this.Co(t,r,s,i,a)}Fo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}vo(t,r){const s=NE[t];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,s){const i=ja();return new Promise((a,c)=>{const u=new Uf;u.setWithCredentials(!0),u.listenOnce(Bf.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ki.NO_ERROR:const f=u.getResponseJson();F(Ve,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Ki.TIMEOUT:F(Ve,`RPC '${e}' ${i} timed out`),c(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ki.HTTP_ERROR:const _=u.getStatus();if(F(Ve,`RPC '${e}' ${i} failed with status:`,_,"response text:",u.getResponseText()),_>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const b=v==null?void 0:v.error;if(b&&b.status&&b.message){const C=function(P){const L=P.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(L)>=0?L:S.UNKNOWN}(b.status);c(new N(C,b.message))}else c(new N(S.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new N(S.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{F(Ve,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);F(Ve,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",h,r,15)})}Oo(e,t,r){const s=ja(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=zf(),c=qf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new jf({})),this.Fo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");F(Ve,`Creating RPC '${e}' stream ${s}: ${f}`,u);const _=a.createWebChannel(f,u);let v=!1,b=!1;const C=new xE({lo:P=>{b?F(Ve,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(v||(F(Ve,`Opening RPC '${e}' stream ${s} transport.`),_.open(),v=!0),F(Ve,`RPC '${e}' stream ${s} sending:`,P),_.send(P))},ho:()=>_.close()}),x=(P,L,$)=>{P.listen(L,q=>{try{$(q)}catch(Y){setTimeout(()=>{throw Y},0)}})};return x(_,ls.EventType.OPEN,()=>{b||(F(Ve,`RPC '${e}' stream ${s} transport opened.`),C.mo())}),x(_,ls.EventType.CLOSE,()=>{b||(b=!0,F(Ve,`RPC '${e}' stream ${s} transport closed`),C.po())}),x(_,ls.EventType.ERROR,P=>{b||(b=!0,Sr(Ve,`RPC '${e}' stream ${s} transport errored:`,P),C.po(new N(S.UNAVAILABLE,"The operation could not be completed")))}),x(_,ls.EventType.MESSAGE,P=>{var L;if(!b){const $=P.data[0];oe(!!$);const q=$,Y=q.error||((L=q[0])===null||L===void 0?void 0:L.error);if(Y){F(Ve,`RPC '${e}' stream ${s} received error:`,Y);const de=Y.status;let ae=function(g){const w=_e[g];if(w!==void 0)return wp(w)}(de),T=Y.message;ae===void 0&&(ae=S.INTERNAL,T="Unknown error status: "+de+" with message "+Y.message),b=!0,C.po(new N(ae,T)),_.close()}else F(Ve,`RPC '${e}' stream ${s} received:`,$),C.yo($)}}),x(c,$f.STAT_EVENT,P=>{P.stat===rc.PROXY?F(Ve,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===rc.NOPROXY&&F(Ve,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function Ba(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(n){return new GI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,t-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t,r,s,i,a,c,u){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ru(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(Ft(t.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===t&&this.u_(r,s)},r=>{e(()=>{const s=new N(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ME extends xp{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=ZI(this.serializer,e),r=function(i){if(!("targetChange"in i))return G.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?nt(a.readTime):G.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=hc(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=ac(u)?{documents:XI(i,u)}:{query:Pp(i,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ep(i,a.resumeToken);const h=uc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(G.min())>0){c.readTime=fo(i,a.snapshotVersion.toTimestamp());const h=uc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=tE(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=hc(this.serializer),t.removeTarget=e,this.i_(t)}}class LE extends xp{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=YI(e.writeResults,e.commitTime),r=nt(e.commitTime);return this.listener.A_(r,t)}return oe(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=hc(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Sp(this.serializer,r))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(e,lc(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(S.UNKNOWN,i.toString())})}xo(e,t,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.xo(e,lc(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(S.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class UE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Ft(t),this.y_=!1):F("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{r.enqueueAndForget(async()=>{nr(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Q(u);h.M_.add(4),await ui(h),h.N_.set("Unknown"),h.M_.delete(4),await Wo(h)}(this))})}),this.N_=new UE(r,s)}}async function Wo(n){if(nr(n))for(const e of n.x_)await e(!0)}async function ui(n){for(const e of n.x_)await e(!1)}function Vp(n,e){const t=Q(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),au(t)?ou(t):jr(t).Xo()&&iu(t,e))}function su(n,e){const t=Q(n),r=jr(t);t.F_.delete(e),r.Xo()&&Mp(t,e),t.F_.size===0&&(r.Xo()?r.n_():nr(t)&&t.N_.set("Unknown"))}function iu(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}jr(n).P_(e)}function Mp(n,e){n.L_.xe(e),jr(n).I_(e)}function ou(n){n.L_=new $I({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),jr(n).start(),n.N_.w_()}function au(n){return nr(n)&&!jr(n).Zo()&&n.F_.size>0}function nr(n){return Q(n).M_.size===0}function Lp(n){n.L_=void 0}async function BE(n){n.N_.set("Online")}async function $E(n){n.F_.forEach((e,t)=>{iu(n,e)})}async function qE(n,e){Lp(n),au(n)?(n.N_.D_(e),ou(n)):n.N_.set("Unknown")}async function zE(n,e,t){if(n.N_.set("Online"),e instanceof Ip&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.F_.delete(c),s.L_.removeTarget(c))}(n,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await mo(n,r)}else if(e instanceof Yi?n.L_.Ke(e):e instanceof Tp?n.L_.He(e):n.L_.We(e),!t.isEqual(G.min()))try{const r=await Np(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.L_.rt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.F_.get(h);f&&i.F_.set(h,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const f=i.F_.get(u);if(!f)return;i.F_.set(u,f.withResumeToken(Le.EMPTY_BYTE_STRING,f.snapshotVersion)),Mp(i,u);const _=new un(f.target,u,h,f.sequenceNumber);iu(i,_)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await mo(n,r)}}async function mo(n,e,t){if(!ii(e))throw e;n.M_.add(1),await ui(n),n.N_.set("Offline"),t||(t=()=>Np(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await Wo(n)})}function Fp(n,e){return e().catch(t=>mo(n,t,e))}async function Ko(n){const e=Q(n),t=mn(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;HE(e);)try{const s=await PE(e.localStore,r);if(s===null){e.v_.length===0&&t.n_();break}r=s.batchId,GE(e,s)}catch(s){await mo(e,s)}Up(e)&&jp(e)}function HE(n){return nr(n)&&n.v_.length<10}function GE(n,e){n.v_.push(e);const t=mn(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function Up(n){return nr(n)&&!mn(n).Zo()&&n.v_.length>0}function jp(n){mn(n).start()}async function WE(n){mn(n).V_()}async function KE(n){const e=mn(n);for(const t of n.v_)e.d_(t.mutations)}async function QE(n,e,t){const r=n.v_.shift(),s=Yc.from(r,e,t);await Fp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ko(n)}async function ZE(n,e){e&&mn(n).E_&&await async function(r,s){if(function(a){return vp(a)&&a!==S.ABORTED}(s.code)){const i=r.v_.shift();mn(r).t_(),await Fp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ko(r)}}(n,e),Up(n)&&jp(n)}async function Uh(n,e){const t=Q(n);t.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=nr(t);t.M_.add(3),await ui(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Wo(t)}async function YE(n,e){const t=Q(n);e?(t.M_.delete(2),await Wo(t)):e||(t.M_.add(2),await ui(t),t.N_.set("Unknown"))}function jr(n){return n.B_||(n.B_=function(t,r,s){const i=Q(t);return i.f_(),new ME(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:BE.bind(null,n),To:$E.bind(null,n),Ao:qE.bind(null,n),h_:zE.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),au(n)?ou(n):n.N_.set("Unknown")):(await n.B_.stop(),Lp(n))})),n.B_}function mn(n){return n.k_||(n.k_=function(t,r,s){const i=Q(t);return i.f_(),new LE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:WE.bind(null,n),Ao:ZE.bind(null,n),R_:KE.bind(null,n),A_:QE.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await Ko(n)):(await n.k_.stop(),n.v_.length>0&&(F("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new at,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new cu(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uu(n,e){if(Ft("AsyncQueue",`${e}: ${n}`),ii(n))return new N(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=hs(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new Tr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Tr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Tr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.q_=new pe(B.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):z():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Nr{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Nr(e,t,Tr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class JE{constructor(){this.queries=new Ur(e=>rp(e),jo),this.onlineState="Unknown",this.z_=new Set}}async function Bp(n,e){const t=Q(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new XE,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await t.onListen(s,!0);break;case 1:i.K_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=uu(a,`Initialization of query '${lr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.U_.push(e),e.j_(t.onlineState),i.K_&&e.H_(i.K_)&&lu(t)}async function $p(n,e){const t=Q(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.U_.indexOf(e);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function eA(n,e){const t=Q(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.U_)c.H_(s)&&(r=!0);a.K_=s}}r&&lu(t)}function tA(n,e,t){const r=Q(n),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(t);r.queries.delete(e)}function lu(n){n.z_.forEach(e=>{e.next()})}var fc,Bh;(Bh=fc||(fc={})).J_="default",Bh.Cache="cache";class qp{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Nr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=Nr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==fc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.key=e}}class Hp{constructor(e){this.key=e}}class nA{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ee(),this.mutatedKeys=ee(),this.Ia=sp(e),this.Ta=new Tr(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new jh,s=t?t.Ta:this.Ta;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,_)=>{const v=s.get(f),b=Bo(this.query,_)?_:null,C=!!v&&this.mutatedKeys.has(v.key),x=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;v&&b?v.data.isEqual(b.data)?C!==x&&(r.track({type:3,doc:b}),P=!0):this.Ra(v,b)||(r.track({type:2,doc:b}),P=!0,(u&&this.Ia(b,u)>0||h&&this.Ia(b,h)<0)&&(c=!0)):!v&&b?(r.track({type:0,doc:b}),P=!0):v&&!b&&(r.track({type:1,doc:v}),P=!0,(u||h)&&(c=!0)),P&&(b?(a=a.add(b),i=x?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ta:a,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((f,_)=>function(b,C){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return x(b)-x(C)}(f.type,_.type)||this.Ia(f.doc,_.doc)),this.Va(r),s=s!=null&&s;const c=t&&!s?this.ma():[],u=this.Pa.size===0&&this.current&&!s?1:0,h=u!==this.ha;return this.ha=u,a.length!==0||h?{snapshot:new Nr(this.query,e.Ta,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new jh,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ee(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new Hp(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new zp(r))}),t}pa(e){this.la=e.hs,this.Pa=ee();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Nr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class rA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class sA{constructor(e){this.key=e,this.wa=!1}}class iA{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Ur(c=>rp(c),jo),this.Da=new Map,this.Ca=new Set,this.va=new pe(B.comparator),this.Fa=new Map,this.Ma=new eu,this.xa={},this.Oa=new Map,this.Na=Or.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function oA(n,e,t=!0){const r=Yp(n);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await Gp(r,e,t,!0),s}async function aA(n,e){const t=Yp(n);await Gp(t,e,!0,!1)}async function Gp(n,e,t,r){const s=await kE(n.localStore,yt(e)),i=s.targetId,a=t?n.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await cA(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Vp(n.remoteStore,s),c}async function cA(n,e,t,r,s){n.Ba=(_,v,b)=>async function(x,P,L,$){let q=P.view.da(L);q.Xi&&(q=await Mh(x.localStore,P.query,!1).then(({documents:T})=>P.view.da(T,q)));const Y=$&&$.targetChanges.get(P.targetId),de=$&&$.targetMismatches.get(P.targetId)!=null,ae=P.view.applyChanges(q,x.isPrimaryClient,Y,de);return qh(x,P.targetId,ae.fa),ae.snapshot}(n,_,v,b);const i=await Mh(n.localStore,e,!0),a=new nA(e,i.hs),c=a.da(i.documents),u=ci.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);qh(n,t,h.fa);const f=new rA(e,t,a);return n.ba.set(e,f),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),h.snapshot}async function uA(n,e,t){const r=Q(n),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(a=>!jo(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await dc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&su(r.remoteStore,s.targetId),pc(r,s.targetId)}).catch(si)):(pc(r,s.targetId),await dc(r.localStore,s.targetId,!0))}async function lA(n,e){const t=Q(n),r=t.ba.get(e),s=t.Da.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),su(t.remoteStore,r.targetId))}async function hA(n,e,t){const r=yA(n);try{const s=await function(a,c){const u=Q(a),h=we.now(),f=c.reduce((b,C)=>b.add(C.key),ee());let _,v;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let C=Ut(),x=ee();return u.os.getEntries(b,f).next(P=>{C=P,C.forEach((L,$)=>{$.isValidDocument()||(x=x.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,C)).next(P=>{_=P;const L=[];for(const $ of c){const q=VI($,_.get($.key).overlayedDocument);q!=null&&L.push(new En($.key,q,Qf(q.value.mapValue),ze.exists(!0)))}return u.mutationQueue.addMutationBatch(b,h,L,c)}).next(P=>{v=P;const L=P.applyToLocalDocumentSet(_,x);return u.documentOverlayCache.saveOverlays(b,P.batchId,L)})}).then(()=>({batchId:v.batchId,changes:op(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let h=a.xa[a.currentUser.toKey()];h||(h=new pe(ie)),h=h.insert(c,u),a.xa[a.currentUser.toKey()]=h}(r,s.batchId,t),await li(r,s.changes),await Ko(r.remoteStore)}catch(s){const i=uu(s,"Failed to persist write");t.reject(i)}}async function Wp(n,e){const t=Q(n);try{const r=await RE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Fa.get(i);a&&(oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?oe(a.wa):s.removedDocuments.size>0&&(oe(a.wa),a.wa=!1))}),await li(t,r,e)}catch(r){await si(r)}}function $h(n,e,t){const r=Q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ba.forEach((i,a)=>{const c=a.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=Q(a);u.onlineState=c;let h=!1;u.queries.forEach((f,_)=>{for(const v of _.U_)v.j_(c)&&(h=!0)}),h&&lu(u)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dA(n,e,t){const r=Q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Fa.get(e),i=s&&s.key;if(i){let a=new pe(B.comparator);a=a.insert(i,Ee.newNoDocument(i,G.min()));const c=ee().add(i),u=new Ho(G.min(),new Map,new pe(ie),a,c);await Wp(r,u),r.va=r.va.remove(i),r.Fa.delete(e),hu(r)}else await dc(r.localStore,e,!1).then(()=>pc(r,e,t)).catch(si)}async function fA(n,e){const t=Q(n),r=e.batch.batchId;try{const s=await bE(t.localStore,e);Qp(t,r,null),Kp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await li(t,s)}catch(s){await si(s)}}async function pA(n,e,t){const r=Q(n);try{const s=await function(a,c){const u=Q(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(_=>(oe(_!==null),f=_.keys(),u.mutationQueue.removeMutationBatch(h,_))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Qp(r,e,t),Kp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await li(r,s)}catch(s){await si(s)}}function Kp(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function Qp(n,e,t){const r=Q(n);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function pc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||Zp(n,r)})}function Zp(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(su(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),hu(n))}function qh(n,e,t){for(const r of t)r instanceof zp?(n.Ma.addReference(r.key,e),mA(n,r)):r instanceof Hp?(F("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||Zp(n,r.key)):z()}function mA(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(F("SyncEngine","New document in limbo: "+t),n.Ca.add(r),hu(n))}function hu(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new B(ce.fromString(e)),r=n.Na.next();n.Fa.set(r,new sA(t)),n.va=n.va.insert(t,r),Vp(n.remoteStore,new un(yt(Qc(t.path)),r,"TargetPurposeLimboResolution",zc.oe))}}async function li(n,e,t){const r=Q(n),s=[],i=[],a=[];r.ba.isEmpty()||(r.ba.forEach((c,u)=>{a.push(r.Ba(u,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const f=h&&!h.fromCache;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(h){s.push(h);const f=nu.Ki(u.targetId,h);i.push(f)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(u,h){const f=Q(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>k.forEach(h,v=>k.forEach(v.qi,b=>f.persistence.referenceDelegate.addReference(_,v.targetId,b)).next(()=>k.forEach(v.Qi,b=>f.persistence.referenceDelegate.removeReference(_,v.targetId,b)))))}catch(_){if(!ii(_))throw _;F("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of h){const v=_.targetId;if(!_.fromCache){const b=f.ns.get(v),C=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(C);f.ns=f.ns.insert(v,x)}}}(r.localStore,i))}async function gA(n,e){const t=Q(n);if(!t.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await Op(t.localStore,e);t.currentUser=e,function(i,a){i.Oa.forEach(c=>{c.forEach(u=>{u.reject(new N(S.CANCELLED,a))})}),i.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await li(t,r.us)}}function _A(n,e){const t=Q(n),r=t.Fa.get(e);if(r&&r.wa)return ee().add(r.key);{let s=ee();const i=t.Da.get(e);if(!i)return s;for(const a of i){const c=t.ba.get(a);s=s.unionWith(c.view.Ea)}return s}}function Yp(n){const e=Q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_A.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dA.bind(null,e),e.Sa.h_=eA.bind(null,e.eventManager),e.Sa.ka=tA.bind(null,e.eventManager),e}function yA(n){const e=Q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pA.bind(null,e),e}class zh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Go(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return AE(this.persistence,new IE,e.initialUser,this.serializer)}createPersistence(e){return new vE(tu.Hr,this.serializer)}createSharedClientState(e){return new DE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vA{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$h(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gA.bind(null,this.syncEngine),await YE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JE}()}createDatastore(e){const t=Go(e.databaseInfo.databaseId),r=function(i){return new VE(i)}(e.databaseInfo);return function(i,a,c,u){return new FE(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new jE(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>$h(this.syncEngine,t,0),function(){return Fh.D()?new Fh:new OE}())}createSyncEngine(e,t){return function(s,i,a,c,u,h,f){const _=new iA(s,i,a,c,u,h);return f&&(_.La=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const s=Q(r);F("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await ui(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Ft("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new N(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(s,i){const a=Q(s),c={documents:i.map(_=>po(a.serializer,_))},u=await a.xo("BatchGetDocuments",a.serializer.databaseId,ce.emptyPath(),c,i.length),h=new Map;u.forEach(_=>{const v=QI(a.serializer,_);h.set(v.key.toString(),v)});const f=[];return i.forEach(_=>{const v=h.get(_.toString());oe(!!v),f.push(v)}),f}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new zo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=B.fromPath(r);this.mutations.push(new yp(s,this.precondition(s)))}),await async function(r,s){const i=Q(r),a={writes:s.map(c=>Sp(i.serializer,c))};await i.Co("Commit",i.serializer.databaseId,ce.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw z();t=G.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new N(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(G.min())?ze.exists(!1):ze.updateTime(t):ze.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(G.min()))throw new N(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ze.updateTime(t)}return ze.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.Za=r.maxAttempts,this.Yo=new ru(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new wA(this.datastore),t=this.tu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.nu(s)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const t=this.updateFunction(e);return!oi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!vp(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Me.UNAUTHENTICATED,this.clientId=Gf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new at;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=uu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $a(n,e){n.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Op(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Hh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await AA(n);F("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Uh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Uh(e.remoteStore,s)),n._onlineComponents=e}function EA(n){return n.name==="FirebaseError"?n.code===S.FAILED_PRECONDITION||n.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function AA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await $a(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!EA(t))throw t;Sr("Error using user provided cache. Falling back to memory cache: "+t),await $a(n,new zh)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await $a(n,new zh);return n._offlineComponents}async function du(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await Hh(n,n._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await Hh(n,new vA))),n._onlineComponents}function bA(n){return du(n).then(e=>e.syncEngine)}function Jp(n){return du(n).then(e=>e.datastore)}async function em(n){const e=await du(n),t=e.eventManager;return t.onListen=oA.bind(null,e.syncEngine),t.onUnlisten=uA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lA.bind(null,e.syncEngine),t}function RA(n,e,t={}){const r=new at;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new Xp({next:v=>{a.enqueueAndForget(()=>$p(i,_));const b=v.docs.has(c);!b&&v.fromCache?h.reject(new N(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&v.fromCache&&u&&u.source==="server"?h.reject(new N(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),_=new qp(Qc(c.path),f,{includeMetadataChanges:!0,ra:!0});return Bp(i,_)}(await em(n),n.asyncQueue,e,t,r)),r.promise}function SA(n,e,t={}){const r=new at;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new Xp({next:v=>{a.enqueueAndForget(()=>$p(i,_)),v.fromCache&&u.source==="server"?h.reject(new N(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(v)},error:v=>h.reject(v)}),_=new qp(c,f,{includeMetadataChanges:!0,ra:!0});return Bp(i,_)}(await em(n),n.asyncQueue,e,t,r)),r.promise}function PA(n,e,t){const r=new at;return n.asyncQueue.enqueueAndForget(async()=>{try{const s=await Jp(n);r.resolve(async function(a,c,u){var h;const f=Q(a),{request:_,ut:v,parent:b}=JI(f.serializer,II(c),u);f.connection.Do||delete _.parent;const C=(await f.xo("RunAggregationQuery",f.serializer.databaseId,b,_,1)).filter(P=>!!P.result);oe(C.length===1);const x=(h=C[0].result)===null||h===void 0?void 0:h.aggregateFields;return Object.keys(x).reduce((P,L)=>(P[v[L]]=x[L],P),{})}(s,e,t))}catch(s){r.reject(s)}}),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(n,e,t){if(!t)throw new N(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function kA(n,e,t,r){if(e===!0&&r===!0)throw new N(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wh(n){if(!B.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Kh(n){if(B.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z()}function Tt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qo(n);throw new N(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function CA(n,e){if(e<=0)throw new N(S.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HT;switch(r.type){case"firstParty":return new QT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Gh.get(t);r&&(F("ComponentProvider","Removing Datastore"),Gh.delete(t),r.terminate())}(this),Promise.resolve()}}function DA(n,e,t,r={}){var s;const i=(n=Tt(n,Zo))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Sr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Me.MOCK_USER;else{c=Id(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Me(h)}n._authCredentials=new GT(new Hf(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bt(this.firestore,e,this._query)}}class He{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class dn extends Bt{constructor(e,t,r){super(e,t,Qc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new B(e))}withConverter(e){return new dn(this.firestore,e,this._path)}}function Xi(n,e,...t){if(n=le(n),nm("collection","path",e),n instanceof Zo){const r=ce.fromString(e,...t);return Kh(r),new dn(n,null,r)}{if(!(n instanceof He||n instanceof dn))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ce.fromString(e,...t));return Kh(r),new dn(n.firestore,null,r)}}function Zt(n,e,...t){if(n=le(n),arguments.length===1&&(e=Gf.newId()),nm("doc","path",e),n instanceof Zo){const r=ce.fromString(e,...t);return Wh(r),new He(n,null,new B(r))}{if(!(n instanceof He||n instanceof dn))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ce.fromString(e,...t));return Wh(r),new He(n.firestore,n instanceof dn?n.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ru(this,"async_queue_retry"),this.hu=()=>{const t=Ba();t&&F("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=Ba();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=Ba();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new at;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!ii(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Ft("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const s=cu.createAndSchedule(this,e,t,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&z()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class rr extends Zo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=function(){return new OA}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rm(this),this._firestoreClient.terminate()}}function NA(n,e){const t=typeof n=="object"?n:Do(),r=typeof n=="string"?n:"(default)",s=wn(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vd("firestore");i&&DA(s,...i)}return s}function hi(n){return n._firestoreClient||rm(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function rm(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,h,f){return new uI(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,tm(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new IA(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class VA{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gn(Le.fromBase64String(e))}catch(t){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Gn(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=/^__.*__$/;class LA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new En(e,this.data,this.fieldMask,t,this.fieldTransforms):new ai(e,this.data,t,this.fieldTransforms)}}class sm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new En(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function im(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class pu{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new pu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return go(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(im(this.fu)&&MA.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class FA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Go(e)}Fu(e,t,r,s=!1){return new pu({fu:e,methodName:t,vu:r,path:Pe.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yo(n){const e=n._freezeSettings(),t=Go(n._databaseId);return new FA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function UA(n,e,t,r,s,i={}){const a=n.Fu(i.merge||i.mergeFields?2:0,e,t,s);_u("Data must be an object, but it was:",a,r);const c=um(r,a);let u,h;if(i.merge)u=new Xe(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const _ of i.mergeFields){const v=mc(e,_,t);if(!a.contains(v))throw new N(S.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);hm(f,v)||f.push(v)}u=new Xe(f),h=a.fieldTransforms.filter(_=>u.covers(_.field))}else u=null,h=a.fieldTransforms;return new LA(new qe(c),u,h)}class Xo extends fi{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xo}}class mu extends fi{_toFieldTransform(e){return new mp(e.path,new Ns)}isEqual(e){return e instanceof mu}}class gu extends fi{constructor(e,t){super(e),this.xu=t}_toFieldTransform(e){const t=new Ms(e.serializer,lp(e.serializer,this.xu));return new mp(e.path,t)}isEqual(e){return e instanceof gu&&this.xu===e.xu}}function om(n,e,t,r){const s=n.Fu(1,e,t);_u("Data must be an object, but it was:",s,r);const i=[],a=qe.empty();er(r,(u,h)=>{const f=yu(e,u,t);h=le(h);const _=s.Su(f);if(h instanceof Xo)i.push(f);else{const v=pi(h,_);v!=null&&(i.push(f),a.set(f,v))}});const c=new Xe(i);return new sm(a,c,s.fieldTransforms)}function am(n,e,t,r,s,i){const a=n.Fu(1,e,t),c=[mc(e,r,t)],u=[s];if(i.length%2!=0)throw new N(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)c.push(mc(e,i[v])),u.push(i[v+1]);const h=[],f=qe.empty();for(let v=c.length-1;v>=0;--v)if(!hm(h,c[v])){const b=c[v];let C=u[v];C=le(C);const x=a.Su(b);if(C instanceof Xo)h.push(b);else{const P=pi(C,x);P!=null&&(h.push(b),f.set(b,P))}}const _=new Xe(h);return new sm(f,_,a.fieldTransforms)}function cm(n,e,t,r=!1){return pi(t,n.Fu(r?4:3,e))}function pi(n,e){if(lm(n=le(n)))return _u("Unsupported field value:",e,n),um(n,e);if(n instanceof fi)return function(r,s){if(!im(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=pi(c,s.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=we.fromDate(r);return{timestampValue:fo(s.serializer,i)}}if(r instanceof we){const i=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fo(s.serializer,i)}}if(r instanceof fu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gn)return{bytesValue:Ep(s.serializer,r._byteString)};if(r instanceof He){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Jc(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Qo(r)}`)}(n,e)}function um(n,e){const t={};return Wf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):er(n,(r,s)=>{const i=pi(s,e.pu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function lm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof we||n instanceof fu||n instanceof Gn||n instanceof He||n instanceof fi)}function _u(n,e,t){if(!lm(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Qo(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function mc(n,e,t){if((e=le(e))instanceof di)return e._internalPath;if(typeof e=="string")return yu(n,e);throw go("Field path arguments must be of type string or ",n,!1,void 0,t)}const jA=new RegExp("[~\\*/\\[\\]]");function yu(n,e,t){if(e.search(jA)>=0)throw go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new di(...e.split("."))._internalPath}catch{throw go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function go(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new N(S.INVALID_ARGUMENT,c+n+u)}function hm(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class BA extends Ls{data(){return super.data()}}function Jo(n,e){return typeof e=="string"?yu(n,e):e instanceof di?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vu{}class ea extends vu{}function Ts(n,e,...t){let r=[];e instanceof vu&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof wu).length,c=i.filter(u=>u instanceof ta).length;if(a>1||a>0&&c>0)throw new N(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ta extends ea{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ta(e,t,r)}_apply(e){const t=this._parse(e);return fm(e._query,t),new Bt(e.firestore,e.converter,cc(e._query,t))}_parse(e){const t=Yo(e.firestore);return function(i,a,c,u,h,f,_){let v;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new N(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Yh(_,f);const b=[];for(const C of _)b.push(Zh(u,i,C));v={arrayValue:{values:b}}}else v=Zh(u,i,_)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Yh(_,f),v=cm(c,a,_,f==="in"||f==="not-in");return ve.create(h,f,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function kt(n,e,t){const r=e,s=Jo("where",n);return ta._create(s,r,t)}class wu extends vu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new wu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ht.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)fm(a,u),a=cc(a,u)}(e._query,t),new Bt(e.firestore,e.converter,cc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tu extends ea{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Tu(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new N(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Os(i,a)}(e._query,this._field,this._direction);return new Bt(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new tr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function gc(n,e="asc"){const t=e,r=Jo("orderBy",n);return Tu._create(r,t)}class Iu extends ea{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Iu(e,t,r)}_apply(e){return new Bt(e.firestore,e.converter,ho(e._query,this._limit,this._limitType))}}function _c(n){return CA("limit",n),Iu._create("limit",n,"F")}class Eu extends ea{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Eu(e,t,r)}_apply(e){const t=qA(e,this.type,this._docOrFields,this._inclusive);return new Bt(e.firestore,e.converter,function(s,i){return new tr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function dm(...n){return Eu._create("startAfter",n,!1)}function qA(n,e,t,r){if(t[0]=le(t[0]),t[0]instanceof Ls)return function(i,a,c,u,h){if(!u)throw new N(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const f=[];for(const _ of wr(i))if(_.field.isKeyField())f.push(lo(a,u.key));else{const v=u.data.field(_.field);if(Uo(v))throw new N(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+_.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(v===null){const b=_.field.canonicalString();throw new N(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${b}' (used as the orderBy) does not exist.`)}f.push(v)}return new Dr(f,h)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Yo(n.firestore);return function(a,c,u,h,f,_){const v=a.explicitOrderBy;if(f.length>v.length)throw new N(S.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const b=[];for(let C=0;C<f.length;C++){const x=f[C];if(v[C].field.isKeyField()){if(typeof x!="string")throw new N(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof x}`);if(!Zc(a)&&x.indexOf("/")!==-1)throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${x}' contains a slash.`);const P=a.path.child(ce.fromString(x));if(!B.isDocumentKey(P))throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const L=new B(P);b.push(lo(c,L))}else{const P=cm(u,h,x);b.push(P)}}return new Dr(b,_)}(n._query,n.firestore._databaseId,s,e,t,r)}}function Zh(n,e,t){if(typeof(t=le(t))=="string"){if(t==="")throw new N(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zc(e)&&t.indexOf("/")!==-1)throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ce.fromString(t));if(!B.isDocumentKey(r))throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lo(n,new B(r))}if(t instanceof He)return lo(n,t._key);throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qo(t)}.`)}function Yh(n,e){if(!Array.isArray(n)||n.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fm(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class pm{convertValue(e,t="none"){switch(Hn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return er(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new fu(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Hc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ks(e));default:return null}}convertTimestamp(e){const t=pn(e);return new we(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ce.fromString(e);oe(Dp(r));const s=new Cs(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||Ft(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class HA extends pm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}function GA(){return new xA("count")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Au extends Ls{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ji(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Jo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ji extends Au{data(e={}){return super.data(e)}}class WA{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new mr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ji(this._firestore,this._userDataWriter,r.key,r,new mr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new Ji(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Ji(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:KA(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function KA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n){n=Tt(n,He);const e=Tt(n.firestore,rr);return RA(hi(e),n._key).then(t=>ZA(e,n,t))}class na extends pm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}function yc(n){n=Tt(n,Bt);const e=Tt(n.firestore,rr),t=hi(e),r=new na(e);return $A(n._query),SA(t,n._query).then(s=>new WA(e,r,n,s))}function QA(n,e,t,...r){n=Tt(n,He);const s=Tt(n.firestore,rr),i=Yo(s);let a;return a=typeof(e=le(e))=="string"||e instanceof di?am(i,"updateDoc",n._key,e,t,r):om(i,"updateDoc",n._key,e),gm(s,[a.toMutation(n._key,ze.exists(!0))])}function mm(n){return gm(Tt(n.firestore,rr),[new zo(n._key,ze.none())])}function gm(n,e){return function(r,s){const i=new at;return r.asyncQueue.enqueueAndForget(async()=>hA(await bA(r),s,i)),i.promise}(hi(n),e)}function ZA(n,e,t){const r=t.docs.get(e._key),s=new na(n);return new Au(n,s,e._key,r,new mr(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(n){return XA(n,{count:GA()})}function XA(n,e){const t=Tt(n.firestore,rr),r=hi(t),s=aI(e,(i,a)=>new FI(a,i.aggregateType,i._internalFieldPath));return PA(r,n._query,s).then(i=>function(c,u,h){const f=new na(c);return new VA(u,f,h)}(t,n,i))}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA={maxAttempts:5};function os(n,e){if((n=le(n)).firestore!==e)throw new N(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Yo(t)}get(t){const r=os(t,this._firestore),s=new HA(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return z();const a=i[0];if(a.isFoundDocument())return new Ls(this._firestore,s,a.key,a,r.converter);if(a.isNoDocument())return new Ls(this._firestore,s,r._key,null,r.converter);throw z()})}set(t,r,s){const i=os(t,this._firestore),a=zA(i.converter,r,s),c=UA(this._dataReader,"Transaction.set",i._key,a,i.converter!==null,s);return this._transaction.set(i._key,c),this}update(t,r,s,...i){const a=os(t,this._firestore);let c;return c=typeof(r=le(r))=="string"||r instanceof di?am(this._dataReader,"Transaction.update",a._key,r,s,i):om(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,c),this}delete(t){const r=os(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=os(e,this._firestore),r=new na(this._firestore);return super.get(e).then(s=>new Au(this._firestore,r,t._key,s._document,new mr(!1,!1),t.converter))}}function tb(n,e,t){n=Tt(n,rr);const r=Object.assign(Object.assign({},JA),t);return function(i){if(i.maxAttempts<1)throw new N(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,a,c){const u=new at;return i.asyncQueue.enqueueAndForget(async()=>{const h=await Jp(i);new TA(i.asyncQueue,h,c,a,u).Xa()}),u.promise}(hi(n),s=>e(new eb(n,s)),r)}function nb(){return new mu("serverTimestamp")}function Jh(n){return new gu("increment",n)}(function(e,t=!0){(function(s){Fr=s})(Xn),ut(new Mt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new rr(new WT(r.getProvider("auth-internal")),new YT(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cs(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),et(gh,"4.6.3",e),et(gh,"4.6.3","esm2017")})();class rb{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="firebasestorage.googleapis.com",ym="storageBucket",sb=2*60*1e3,ib=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends st{constructor(e,t,r=0){super(qa(e),`Firebase Storage: ${t} (${qa(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function qa(n){return"storage/"+n}function vm(){const n="An unknown error occurred, please check the error payload for server response.";return new be(Ae.UNKNOWN,n)}function ob(n){return new be(Ae.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function ab(n){return new be(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function cb(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(Ae.UNAUTHENTICATED,n)}function ub(){return new be(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function lb(n){return new be(Ae.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function hb(){return new be(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function db(){return new be(Ae.CANCELED,"User canceled the upload/download.")}function fb(n){return new be(Ae.INVALID_URL,"Invalid URL '"+n+"'.")}function pb(n){return new be(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function mb(){return new be(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ym+"' property when initializing the app?")}function gb(){return new be(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function vc(n){return new be(Ae.INVALID_ARGUMENT,n)}function wm(){return new be(Ae.APP_DELETED,"The Firebase app was deleted.")}function _b(n){return new be(Ae.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function as(n){throw new be(Ae.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Je.makeFromUrl(e,t)}catch{return new Je(e,"")}if(r.path==="")return r;throw pb(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(Y){Y.path.charAt(Y.path.length-1)==="/"&&(Y.path_=Y.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function h(Y){Y.path_=decodeURIComponent(Y.path)}const f="v[A-Za-z0-9_]+",_=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",b=new RegExp(`^https?://${_}/${f}/b/${s}/o${v}`,"i"),C={bucket:1,path:3},x=t===_m?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",L=new RegExp(`^https?://${x}/${s}/${P}`,"i"),q=[{regex:c,indices:u,postModify:i},{regex:b,indices:C,postModify:h},{regex:L,indices:{bucket:1,path:2},postModify:h}];for(let Y=0;Y<q.length;Y++){const de=q[Y],ae=de.regex.exec(e);if(ae){const T=ae[de.indices.bucket];let m=ae[de.indices.path];m||(m=""),r=new Je(T,m),de.postModify(r);break}}if(r==null)throw fb(e);return r}}class yb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function u(){return c===2}let h=!1;function f(...P){h||(h=!0,e.apply(null,P))}function _(P){s=setTimeout(()=>{s=null,n(b,u())},P)}function v(){i&&clearTimeout(i)}function b(P,...L){if(h){v();return}if(P){v(),f.call(null,P,...L);return}if(u()||a){v(),f.call(null,P,...L);return}r<64&&(r*=2);let q;c===1?(c=2,q=0):q=(r+Math.random())*1e3,_(q)}let C=!1;function x(P){C||(C=!0,v(),!h&&(s!==null?(P||(c=2),clearTimeout(s),_(0)):P||(c=1)))}return _(0),i=setTimeout(()=>{a=!0,x(!0)},t),x}function wb(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(n){return n!==void 0}function Ib(n){return typeof n=="object"&&!Array.isArray(n)}function Tm(n){return typeof n=="string"||n instanceof String}function ed(n,e,t,r){if(r<e)throw vc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw vc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Em(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Mn||(Mn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,t,r,s,i,a,c,u,h,f,_,v=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=_,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,C)=>{this.resolve_=b,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ui(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===Mn.NO_ERROR,u=i.getStatus();if(!c||Eb(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Mn.ABORT;r(!1,new Ui(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new Ui(h,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());Tb(u)?i(u):i()}catch(u){a(u)}else if(c!==null){const u=vm();u.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,u)):a(u)}else if(s.canceled){const u=this.appDelete_?wm():db();a(u)}else{const u=hb();a(u)}};this.canceled_?t(!1,new Ui(!1,null,!0)):this.backoffId_=vb(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ui{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function bb(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Rb(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Sb(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Pb(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function kb(n,e,t,r,s,i,a=!0){const c=Em(n.urlParams),u=n.url+c,h=Object.assign({},n.headers);return Sb(h,e),bb(h,t),Rb(h,i),Pb(h,r),new Ab(u,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(n){let e;try{e=JSON.parse(n)}catch{return null}return Ib(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Db(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function bm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(n,e){return e}class Be{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||Ob}}let ji=null;function Nb(n){return!Tm(n)||n.length<2?n:bm(n)}function xb(){if(ji)return ji;const n=[];n.push(new Be("bucket")),n.push(new Be("generation")),n.push(new Be("metageneration")),n.push(new Be("name","fullPath",!0));function e(i,a){return Nb(a)}const t=new Be("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new Be("size");return s.xform=r,n.push(s),n.push(new Be("timeCreated")),n.push(new Be("updated")),n.push(new Be("md5Hash",null,!0)),n.push(new Be("cacheControl",null,!0)),n.push(new Be("contentDisposition",null,!0)),n.push(new Be("contentEncoding",null,!0)),n.push(new Be("contentLanguage",null,!0)),n.push(new Be("contentType",null,!0)),n.push(new Be("metadata","customMetadata",!0)),ji=n,ji}function Vb(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Je(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function Mb(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return Vb(r,n),r}function Lb(n,e,t){const r=Am(e);return r===null?null:Mb(n,r,t)}function Fb(n,e,t,r){const s=Am(e);if(s===null||!Tm(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(h=>{const f=n.bucket,_=n.fullPath,v="/b/"+a(f)+"/o/"+a(_),b=Im(v,t,r),C=Em({alt:"media",token:h});return b+C})[0]}class Ub{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(n){if(!n)throw vm()}function Bb(n,e){function t(r,s){const i=Lb(n,s,e);return jb(i!==null),Fb(i,s,n.host,n._protocol)}return t}function $b(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=ub():s=cb():t.getStatus()===402?s=ab(n.bucket):t.getStatus()===403?s=lb(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function qb(n){const e=$b(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=ob(n.path)),i.serverResponse=s.serverResponse,i}return t}function zb(n,e,t){const r=e.fullServerUrl(),s=Im(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new Ub(s,i,Bb(n,t),a);return c.errorHandler=qb(e),c}class Hb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw as("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw as("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw as("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw as("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw as("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Gb extends Hb{initXhr(){this.xhr_.responseType="text"}}function Wb(){return new Gb}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t){this._service=e,t instanceof Je?this._location=t:this._location=Je.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Wn(e,t)}get root(){const e=new Je(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bm(this._location.path)}get storage(){return this._service}get parent(){const e=Cb(this._location.path);if(e===null)return null;const t=new Je(this._location.bucket,e);return new Wn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw _b(e)}}function Kb(n){n._throwIfRoot("getDownloadURL");const e=zb(n.storage,n._location,xb());return n.storage.makeRequestWithTokens(e,Wb).then(t=>{if(t===null)throw gb();return t})}function Qb(n,e){const t=Db(n._location.path,e),r=new Je(n._location.bucket,t);return new Wn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(n){return/^[A-Za-z]+:\/\//.test(n)}function Yb(n,e){return new Wn(n,e)}function Rm(n,e){if(n instanceof bu){const t=n;if(t._bucket==null)throw mb();const r=new Wn(t,t._bucket);return e!=null?Rm(r,e):r}else return e!==void 0?Qb(n,e):n}function Xb(n,e){if(e&&Zb(e)){if(n instanceof bu)return Yb(n,e);throw vc("To use ref(service, url), the first argument must be a Storage instance.")}else return Rm(n,e)}function td(n,e){const t=e==null?void 0:e[ym];return t==null?null:Je.makeFromBucketSpec(t,n)}function Jb(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Id(s,n.app.options.projectId))}class bu{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=_m,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sb,this._maxUploadRetryTime=ib,this._requests=new Set,s!=null?this._bucket=Je.makeFromBucketSpec(s,this._host):this._bucket=td(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Je.makeFromBucketSpec(this._url,e):this._bucket=td(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ed("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ed("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new yb(wm());{const a=kb(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const nd="@firebase/storage",rd="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="storage";function eR(n){return n=le(n),Kb(n)}function tR(n,e){return n=le(n),Xb(n,e)}function nR(n=Do(),e){n=le(n);const r=wn(n,Sm).getImmediate({identifier:e}),s=vd("storage");return s&&rR(r,...s),r}function rR(n,e,t,r={}){Jb(n,e,t,r)}function sR(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new bu(t,r,s,e,Xn)}function iR(){ut(new rb(Sm,sR,"PUBLIC").setMultipleInstances(!0)),et(nd,rd,""),et(nd,rd,"esm2017")}iR();var re;(function(n){n.assertEqual=s=>s;function e(s){}n.assertIs=e;function t(s){throw new Error}n.assertNever=t,n.arrayToEnum=s=>{const i={};for(const a of s)i[a]=a;return i},n.getValidEnumValues=s=>{const i=n.objectKeys(s).filter(c=>typeof s[s[c]]!="number"),a={};for(const c of i)a[c]=s[c];return n.objectValues(a)},n.objectValues=s=>n.objectKeys(s).map(function(i){return s[i]}),n.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const i=[];for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&i.push(a);return i},n.find=(s,i)=>{for(const a of s)if(i(a))return a},n.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function r(s,i=" | "){return s.map(a=>typeof a=="string"?`'${a}'`:a).join(i)}n.joinValues=r,n.jsonStringifyReplacer=(s,i)=>typeof i=="bigint"?i.toString():i})(re||(re={}));var wc;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(wc||(wc={}));const M=re.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),rn=n=>{switch(typeof n){case"undefined":return M.undefined;case"string":return M.string;case"number":return isNaN(n)?M.nan:M.number;case"boolean":return M.boolean;case"function":return M.function;case"bigint":return M.bigint;case"symbol":return M.symbol;case"object":return Array.isArray(n)?M.array:n===null?M.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?M.promise:typeof Map<"u"&&n instanceof Map?M.map:typeof Set<"u"&&n instanceof Set?M.set:typeof Date<"u"&&n instanceof Date?M.date:M.object;default:return M.unknown}},D=re.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),oR=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:");class rt extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(i){return i.message},r={_errors:[]},s=i=>{for(const a of i.issues)if(a.code==="invalid_union")a.unionErrors.map(s);else if(a.code==="invalid_return_type")s(a.returnTypeError);else if(a.code==="invalid_arguments")s(a.argumentsError);else if(a.path.length===0)r._errors.push(t(a));else{let c=r,u=0;for(;u<a.path.length;){const h=a.path[u];u===a.path.length-1?(c[h]=c[h]||{_errors:[]},c[h]._errors.push(t(a))):c[h]=c[h]||{_errors:[]},c=c[h],u++}}};return s(this),r}static assert(e){if(!(e instanceof rt))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,re.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},r=[];for(const s of this.issues)s.path.length>0?(t[s.path[0]]=t[s.path[0]]||[],t[s.path[0]].push(e(s))):r.push(e(s));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}rt.create=n=>new rt(n);const xr=(n,e)=>{let t;switch(n.code){case D.invalid_type:n.received===M.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case D.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,re.jsonStringifyReplacer)}`;break;case D.unrecognized_keys:t=`Unrecognized key(s) in object: ${re.joinValues(n.keys,", ")}`;break;case D.invalid_union:t="Invalid input";break;case D.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${re.joinValues(n.options)}`;break;case D.invalid_enum_value:t=`Invalid enum value. Expected ${re.joinValues(n.options)}, received '${n.received}'`;break;case D.invalid_arguments:t="Invalid function arguments";break;case D.invalid_return_type:t="Invalid function return type";break;case D.invalid_date:t="Invalid date";break;case D.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:re.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case D.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case D.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case D.custom:t="Invalid input";break;case D.invalid_intersection_types:t="Intersection results could not be merged";break;case D.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case D.not_finite:t="Number must be finite";break;default:t=e.defaultError,re.assertNever(n)}return{message:t}};let Pm=xr;function aR(n){Pm=n}function _o(){return Pm}const yo=n=>{const{data:e,path:t,errorMaps:r,issueData:s}=n,i=[...t,...s.path||[]],a={...s,path:i};if(s.message!==void 0)return{...s,path:i,message:s.message};let c="";const u=r.filter(h=>!!h).slice().reverse();for(const h of u)c=h(a,{data:e,defaultError:c}).message;return{...s,path:i,message:c}},cR=[];function V(n,e){const t=_o(),r=yo({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===xr?void 0:xr].filter(s=>!!s)});n.common.issues.push(r)}class Fe{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const r=[];for(const s of t){if(s.status==="aborted")return K;s.status==="dirty"&&e.dirty(),r.push(s.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){const r=[];for(const s of t){const i=await s.key,a=await s.value;r.push({key:i,value:a})}return Fe.mergeObjectSync(e,r)}static mergeObjectSync(e,t){const r={};for(const s of t){const{key:i,value:a}=s;if(i.status==="aborted"||a.status==="aborted")return K;i.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof a.value<"u"||s.alwaysSet)&&(r[i.value]=a.value)}return{status:e.value,value:r}}}const K=Object.freeze({status:"aborted"}),gr=n=>({status:"dirty",value:n}),Ge=n=>({status:"valid",value:n}),Tc=n=>n.status==="aborted",Ic=n=>n.status==="dirty",Fs=n=>n.status==="valid",Us=n=>typeof Promise<"u"&&n instanceof Promise;function vo(n,e,t,r){if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(n)}function km(n,e,t,r,s){if(typeof e=="function"?n!==e||!s:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(n,t),t}var j;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(j||(j={}));var fs,ps;class It{constructor(e,t,r,s){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=s}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const sd=(n,e)=>{if(Fs(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new rt(n.common.issues);return this._error=t,this._error}}};function X(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:r,description:s}=n;if(e&&(t||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(a,c)=>{var u,h;const{message:f}=n;return a.code==="invalid_enum_value"?{message:f??c.defaultError}:typeof c.data>"u"?{message:(u=f??r)!==null&&u!==void 0?u:c.defaultError}:a.code!=="invalid_type"?{message:c.defaultError}:{message:(h=f??t)!==null&&h!==void 0?h:c.defaultError}},description:s}}class J{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return rn(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:rn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Fe,ctx:{common:e.parent.common,data:e.data,parsedType:rn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Us(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;const s={common:{issues:[],async:(r=t==null?void 0:t.async)!==null&&r!==void 0?r:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:rn(e)},i=this._parseSync({data:e,path:s.path,parent:s});return sd(s,i)}async parseAsync(e,t){const r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){const r={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:rn(e)},s=this._parse({data:e,path:r.path,parent:r}),i=await(Us(s)?s:Promise.resolve(s));return sd(r,i)}refine(e,t){const r=s=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(s):t;return this._refinement((s,i)=>{const a=e(s),c=()=>i.addIssue({code:D.custom,...r(s)});return typeof Promise<"u"&&a instanceof Promise?a.then(u=>u?!0:(c(),!1)):a?!0:(c(),!1)})}refinement(e,t){return this._refinement((r,s)=>e(r)?!0:(s.addIssue(typeof t=="function"?t(r,s):t),!1))}_refinement(e){return new dt({schema:this,typeName:H.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return vt.create(this,this._def)}nullable(){return vn.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ct.create(this,this._def)}promise(){return Mr.create(this,this._def)}or(e){return qs.create([this,e],this._def)}and(e){return zs.create(this,e,this._def)}transform(e){return new dt({...X(this._def),schema:this,typeName:H.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Qs({...X(this._def),innerType:this,defaultValue:t,typeName:H.ZodDefault})}brand(){return new Ru({typeName:H.ZodBranded,type:this,...X(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new Zs({...X(this._def),innerType:this,catchValue:t,typeName:H.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return mi.create(this,e)}readonly(){return Ys.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const uR=/^c[^\s-]{8,}$/i,lR=/^[0-9a-z]+$/,hR=/^[0-9A-HJKMNP-TV-Z]{26}$/,dR=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,fR=/^[a-z0-9_-]{21}$/i,pR=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,mR=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,gR="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let za;const _R=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,yR=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,vR=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Cm="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",wR=new RegExp(`^${Cm}$`);function Dm(n){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`),e}function TR(n){return new RegExp(`^${Dm(n)}$`)}function Om(n){let e=`${Cm}T${Dm(n)}`;const t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function IR(n,e){return!!((e==="v4"||!e)&&_R.test(n)||(e==="v6"||!e)&&yR.test(n))}class ot extends J{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==M.string){const i=this._getOrReturnCtx(e);return V(i,{code:D.invalid_type,expected:M.string,received:i.parsedType}),K}const r=new Fe;let s;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(s=this._getOrReturnCtx(e,s),V(s,{code:D.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(s=this._getOrReturnCtx(e,s),V(s,{code:D.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const a=e.data.length>i.value,c=e.data.length<i.value;(a||c)&&(s=this._getOrReturnCtx(e,s),a?V(s,{code:D.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):c&&V(s,{code:D.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")mR.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"email",code:D.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")za||(za=new RegExp(gR,"u")),za.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"emoji",code:D.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")dR.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"uuid",code:D.invalid_string,message:i.message}),r.dirty());else if(i.kind==="nanoid")fR.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"nanoid",code:D.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")uR.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"cuid",code:D.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")lR.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"cuid2",code:D.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")hR.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"ulid",code:D.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),V(s,{validation:"url",code:D.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"regex",code:D.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(s=this._getOrReturnCtx(e,s),V(s,{code:D.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(s=this._getOrReturnCtx(e,s),V(s,{code:D.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(s=this._getOrReturnCtx(e,s),V(s,{code:D.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?Om(i).test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{code:D.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="date"?wR.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{code:D.invalid_string,validation:"date",message:i.message}),r.dirty()):i.kind==="time"?TR(i).test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{code:D.invalid_string,validation:"time",message:i.message}),r.dirty()):i.kind==="duration"?pR.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"duration",code:D.invalid_string,message:i.message}),r.dirty()):i.kind==="ip"?IR(e.data,i.version)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"ip",code:D.invalid_string,message:i.message}),r.dirty()):i.kind==="base64"?vR.test(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{validation:"base64",code:D.invalid_string,message:i.message}),r.dirty()):re.assertNever(i);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(s=>e.test(s),{validation:t,code:D.invalid_string,...j.errToObj(r)})}_addCheck(e){return new ot({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...j.errToObj(e)})}url(e){return this._addCheck({kind:"url",...j.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...j.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...j.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...j.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...j.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...j.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...j.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...j.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...j.errToObj(e)})}datetime(e){var t,r;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,local:(r=e==null?void 0:e.local)!==null&&r!==void 0?r:!1,...j.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...j.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...j.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...j.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...j.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...j.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...j.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...j.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...j.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...j.errToObj(t)})}nonempty(e){return this.min(1,j.errToObj(e))}trim(){return new ot({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ot({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ot({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ot.create=n=>{var e;return new ot({checks:[],typeName:H.ZodString,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...X(n)})};function ER(n,e){const t=(n.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,s=t>r?t:r,i=parseInt(n.toFixed(s).replace(".","")),a=parseInt(e.toFixed(s).replace(".",""));return i%a/Math.pow(10,s)}class gn extends J{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==M.number){const i=this._getOrReturnCtx(e);return V(i,{code:D.invalid_type,expected:M.number,received:i.parsedType}),K}let r;const s=new Fe;for(const i of this._def.checks)i.kind==="int"?re.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),V(r,{code:D.invalid_type,expected:"integer",received:"float",message:i.message}),s.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),V(r,{code:D.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),V(r,{code:D.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="multipleOf"?ER(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),V(r,{code:D.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),V(r,{code:D.not_finite,message:i.message}),s.dirty()):re.assertNever(i);return{status:s.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,j.toString(t))}gt(e,t){return this.setLimit("min",e,!1,j.toString(t))}lte(e,t){return this.setLimit("max",e,!0,j.toString(t))}lt(e,t){return this.setLimit("max",e,!1,j.toString(t))}setLimit(e,t,r,s){return new gn({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:j.toString(s)}]})}_addCheck(e){return new gn({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:j.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:j.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:j.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:j.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:j.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:j.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:j.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:j.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:j.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&re.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(t===null||r.value>t)&&(t=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}gn.create=n=>new gn({checks:[],typeName:H.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1,...X(n)});class _n extends J{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==M.bigint){const i=this._getOrReturnCtx(e);return V(i,{code:D.invalid_type,expected:M.bigint,received:i.parsedType}),K}let r;const s=new Fe;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),V(r,{code:D.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),V(r,{code:D.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),V(r,{code:D.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):re.assertNever(i);return{status:s.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,j.toString(t))}gt(e,t){return this.setLimit("min",e,!1,j.toString(t))}lte(e,t){return this.setLimit("max",e,!0,j.toString(t))}lt(e,t){return this.setLimit("max",e,!1,j.toString(t))}setLimit(e,t,r,s){return new _n({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:j.toString(s)}]})}_addCheck(e){return new _n({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:j.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:j.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:j.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:j.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:j.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}_n.create=n=>{var e;return new _n({checks:[],typeName:H.ZodBigInt,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...X(n)})};class js extends J{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==M.boolean){const r=this._getOrReturnCtx(e);return V(r,{code:D.invalid_type,expected:M.boolean,received:r.parsedType}),K}return Ge(e.data)}}js.create=n=>new js({typeName:H.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1,...X(n)});class Kn extends J{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==M.date){const i=this._getOrReturnCtx(e);return V(i,{code:D.invalid_type,expected:M.date,received:i.parsedType}),K}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return V(i,{code:D.invalid_date}),K}const r=new Fe;let s;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(s=this._getOrReturnCtx(e,s),V(s,{code:D.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(s=this._getOrReturnCtx(e,s),V(s,{code:D.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):re.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Kn({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:j.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:j.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Kn.create=n=>new Kn({checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:H.ZodDate,...X(n)});class wo extends J{_parse(e){if(this._getType(e)!==M.symbol){const r=this._getOrReturnCtx(e);return V(r,{code:D.invalid_type,expected:M.symbol,received:r.parsedType}),K}return Ge(e.data)}}wo.create=n=>new wo({typeName:H.ZodSymbol,...X(n)});class Bs extends J{_parse(e){if(this._getType(e)!==M.undefined){const r=this._getOrReturnCtx(e);return V(r,{code:D.invalid_type,expected:M.undefined,received:r.parsedType}),K}return Ge(e.data)}}Bs.create=n=>new Bs({typeName:H.ZodUndefined,...X(n)});class $s extends J{_parse(e){if(this._getType(e)!==M.null){const r=this._getOrReturnCtx(e);return V(r,{code:D.invalid_type,expected:M.null,received:r.parsedType}),K}return Ge(e.data)}}$s.create=n=>new $s({typeName:H.ZodNull,...X(n)});class Vr extends J{constructor(){super(...arguments),this._any=!0}_parse(e){return Ge(e.data)}}Vr.create=n=>new Vr({typeName:H.ZodAny,...X(n)});class Ln extends J{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Ge(e.data)}}Ln.create=n=>new Ln({typeName:H.ZodUnknown,...X(n)});class jt extends J{_parse(e){const t=this._getOrReturnCtx(e);return V(t,{code:D.invalid_type,expected:M.never,received:t.parsedType}),K}}jt.create=n=>new jt({typeName:H.ZodNever,...X(n)});class To extends J{_parse(e){if(this._getType(e)!==M.undefined){const r=this._getOrReturnCtx(e);return V(r,{code:D.invalid_type,expected:M.void,received:r.parsedType}),K}return Ge(e.data)}}To.create=n=>new To({typeName:H.ZodVoid,...X(n)});class ct extends J{_parse(e){const{ctx:t,status:r}=this._processInputParams(e),s=this._def;if(t.parsedType!==M.array)return V(t,{code:D.invalid_type,expected:M.array,received:t.parsedType}),K;if(s.exactLength!==null){const a=t.data.length>s.exactLength.value,c=t.data.length<s.exactLength.value;(a||c)&&(V(t,{code:a?D.too_big:D.too_small,minimum:c?s.exactLength.value:void 0,maximum:a?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),r.dirty())}if(s.minLength!==null&&t.data.length<s.minLength.value&&(V(t,{code:D.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),r.dirty()),s.maxLength!==null&&t.data.length>s.maxLength.value&&(V(t,{code:D.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((a,c)=>s.type._parseAsync(new It(t,a,t.path,c)))).then(a=>Fe.mergeArray(r,a));const i=[...t.data].map((a,c)=>s.type._parseSync(new It(t,a,t.path,c)));return Fe.mergeArray(r,i)}get element(){return this._def.type}min(e,t){return new ct({...this._def,minLength:{value:e,message:j.toString(t)}})}max(e,t){return new ct({...this._def,maxLength:{value:e,message:j.toString(t)}})}length(e,t){return new ct({...this._def,exactLength:{value:e,message:j.toString(t)}})}nonempty(e){return this.min(1,e)}}ct.create=(n,e)=>new ct({type:n,minLength:null,maxLength:null,exactLength:null,typeName:H.ZodArray,...X(e)});function dr(n){if(n instanceof fe){const e={};for(const t in n.shape){const r=n.shape[t];e[t]=vt.create(dr(r))}return new fe({...n._def,shape:()=>e})}else return n instanceof ct?new ct({...n._def,type:dr(n.element)}):n instanceof vt?vt.create(dr(n.unwrap())):n instanceof vn?vn.create(dr(n.unwrap())):n instanceof Et?Et.create(n.items.map(e=>dr(e))):n}class fe extends J{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=re.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==M.object){const h=this._getOrReturnCtx(e);return V(h,{code:D.invalid_type,expected:M.object,received:h.parsedType}),K}const{status:r,ctx:s}=this._processInputParams(e),{shape:i,keys:a}=this._getCached(),c=[];if(!(this._def.catchall instanceof jt&&this._def.unknownKeys==="strip"))for(const h in s.data)a.includes(h)||c.push(h);const u=[];for(const h of a){const f=i[h],_=s.data[h];u.push({key:{status:"valid",value:h},value:f._parse(new It(s,_,s.path,h)),alwaysSet:h in s.data})}if(this._def.catchall instanceof jt){const h=this._def.unknownKeys;if(h==="passthrough")for(const f of c)u.push({key:{status:"valid",value:f},value:{status:"valid",value:s.data[f]}});else if(h==="strict")c.length>0&&(V(s,{code:D.unrecognized_keys,keys:c}),r.dirty());else if(h!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const h=this._def.catchall;for(const f of c){const _=s.data[f];u.push({key:{status:"valid",value:f},value:h._parse(new It(s,_,s.path,f)),alwaysSet:f in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const h=[];for(const f of u){const _=await f.key,v=await f.value;h.push({key:_,value:v,alwaysSet:f.alwaysSet})}return h}).then(h=>Fe.mergeObjectSync(r,h)):Fe.mergeObjectSync(r,u)}get shape(){return this._def.shape()}strict(e){return j.errToObj,new fe({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,r)=>{var s,i,a,c;const u=(a=(i=(s=this._def).errorMap)===null||i===void 0?void 0:i.call(s,t,r).message)!==null&&a!==void 0?a:r.defaultError;return t.code==="unrecognized_keys"?{message:(c=j.errToObj(e).message)!==null&&c!==void 0?c:u}:{message:u}}}:{}})}strip(){return new fe({...this._def,unknownKeys:"strip"})}passthrough(){return new fe({...this._def,unknownKeys:"passthrough"})}extend(e){return new fe({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new fe({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:H.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new fe({...this._def,catchall:e})}pick(e){const t={};return re.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new fe({...this._def,shape:()=>t})}omit(e){const t={};return re.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new fe({...this._def,shape:()=>t})}deepPartial(){return dr(this)}partial(e){const t={};return re.objectKeys(this.shape).forEach(r=>{const s=this.shape[r];e&&!e[r]?t[r]=s:t[r]=s.optional()}),new fe({...this._def,shape:()=>t})}required(e){const t={};return re.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof vt;)i=i._def.innerType;t[r]=i}}),new fe({...this._def,shape:()=>t})}keyof(){return Nm(re.objectKeys(this.shape))}}fe.create=(n,e)=>new fe({shape:()=>n,unknownKeys:"strip",catchall:jt.create(),typeName:H.ZodObject,...X(e)});fe.strictCreate=(n,e)=>new fe({shape:()=>n,unknownKeys:"strict",catchall:jt.create(),typeName:H.ZodObject,...X(e)});fe.lazycreate=(n,e)=>new fe({shape:n,unknownKeys:"strip",catchall:jt.create(),typeName:H.ZodObject,...X(e)});class qs extends J{_parse(e){const{ctx:t}=this._processInputParams(e),r=this._def.options;function s(i){for(const c of i)if(c.result.status==="valid")return c.result;for(const c of i)if(c.result.status==="dirty")return t.common.issues.push(...c.ctx.common.issues),c.result;const a=i.map(c=>new rt(c.ctx.common.issues));return V(t,{code:D.invalid_union,unionErrors:a}),K}if(t.common.async)return Promise.all(r.map(async i=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await i._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(s);{let i;const a=[];for(const u of r){const h={...t,common:{...t.common,issues:[]},parent:null},f=u._parseSync({data:t.data,path:t.path,parent:h});if(f.status==="valid")return f;f.status==="dirty"&&!i&&(i={result:f,ctx:h}),h.common.issues.length&&a.push(h.common.issues)}if(i)return t.common.issues.push(...i.ctx.common.issues),i.result;const c=a.map(u=>new rt(u));return V(t,{code:D.invalid_union,unionErrors:c}),K}}get options(){return this._def.options}}qs.create=(n,e)=>new qs({options:n,typeName:H.ZodUnion,...X(e)});const Pt=n=>n instanceof Gs?Pt(n.schema):n instanceof dt?Pt(n.innerType()):n instanceof Ws?[n.value]:n instanceof yn?n.options:n instanceof Ks?re.objectValues(n.enum):n instanceof Qs?Pt(n._def.innerType):n instanceof Bs?[void 0]:n instanceof $s?[null]:n instanceof vt?[void 0,...Pt(n.unwrap())]:n instanceof vn?[null,...Pt(n.unwrap())]:n instanceof Ru||n instanceof Ys?Pt(n.unwrap()):n instanceof Zs?Pt(n._def.innerType):[];class ra extends J{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==M.object)return V(t,{code:D.invalid_type,expected:M.object,received:t.parsedType}),K;const r=this.discriminator,s=t.data[r],i=this.optionsMap.get(s);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(V(t,{code:D.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),K)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){const s=new Map;for(const i of t){const a=Pt(i.shape[e]);if(!a.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const c of a){if(s.has(c))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(c)}`);s.set(c,i)}}return new ra({typeName:H.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:s,...X(r)})}}function Ec(n,e){const t=rn(n),r=rn(e);if(n===e)return{valid:!0,data:n};if(t===M.object&&r===M.object){const s=re.objectKeys(e),i=re.objectKeys(n).filter(c=>s.indexOf(c)!==-1),a={...n,...e};for(const c of i){const u=Ec(n[c],e[c]);if(!u.valid)return{valid:!1};a[c]=u.data}return{valid:!0,data:a}}else if(t===M.array&&r===M.array){if(n.length!==e.length)return{valid:!1};const s=[];for(let i=0;i<n.length;i++){const a=n[i],c=e[i],u=Ec(a,c);if(!u.valid)return{valid:!1};s.push(u.data)}return{valid:!0,data:s}}else return t===M.date&&r===M.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class zs extends J{_parse(e){const{status:t,ctx:r}=this._processInputParams(e),s=(i,a)=>{if(Tc(i)||Tc(a))return K;const c=Ec(i.value,a.value);return c.valid?((Ic(i)||Ic(a))&&t.dirty(),{status:t.value,value:c.data}):(V(r,{code:D.invalid_intersection_types}),K)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,a])=>s(i,a)):s(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}zs.create=(n,e,t)=>new zs({left:n,right:e,typeName:H.ZodIntersection,...X(t)});class Et extends J{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==M.array)return V(r,{code:D.invalid_type,expected:M.array,received:r.parsedType}),K;if(r.data.length<this._def.items.length)return V(r,{code:D.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),K;!this._def.rest&&r.data.length>this._def.items.length&&(V(r,{code:D.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const i=[...r.data].map((a,c)=>{const u=this._def.items[c]||this._def.rest;return u?u._parse(new It(r,a,r.path,c)):null}).filter(a=>!!a);return r.common.async?Promise.all(i).then(a=>Fe.mergeArray(t,a)):Fe.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new Et({...this._def,rest:e})}}Et.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Et({items:n,typeName:H.ZodTuple,rest:null,...X(e)})};class Hs extends J{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==M.object)return V(r,{code:D.invalid_type,expected:M.object,received:r.parsedType}),K;const s=[],i=this._def.keyType,a=this._def.valueType;for(const c in r.data)s.push({key:i._parse(new It(r,c,r.path,c)),value:a._parse(new It(r,r.data[c],r.path,c)),alwaysSet:c in r.data});return r.common.async?Fe.mergeObjectAsync(t,s):Fe.mergeObjectSync(t,s)}get element(){return this._def.valueType}static create(e,t,r){return t instanceof J?new Hs({keyType:e,valueType:t,typeName:H.ZodRecord,...X(r)}):new Hs({keyType:ot.create(),valueType:e,typeName:H.ZodRecord,...X(t)})}}class Io extends J{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==M.map)return V(r,{code:D.invalid_type,expected:M.map,received:r.parsedType}),K;const s=this._def.keyType,i=this._def.valueType,a=[...r.data.entries()].map(([c,u],h)=>({key:s._parse(new It(r,c,r.path,[h,"key"])),value:i._parse(new It(r,u,r.path,[h,"value"]))}));if(r.common.async){const c=new Map;return Promise.resolve().then(async()=>{for(const u of a){const h=await u.key,f=await u.value;if(h.status==="aborted"||f.status==="aborted")return K;(h.status==="dirty"||f.status==="dirty")&&t.dirty(),c.set(h.value,f.value)}return{status:t.value,value:c}})}else{const c=new Map;for(const u of a){const h=u.key,f=u.value;if(h.status==="aborted"||f.status==="aborted")return K;(h.status==="dirty"||f.status==="dirty")&&t.dirty(),c.set(h.value,f.value)}return{status:t.value,value:c}}}}Io.create=(n,e,t)=>new Io({valueType:e,keyType:n,typeName:H.ZodMap,...X(t)});class Qn extends J{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==M.set)return V(r,{code:D.invalid_type,expected:M.set,received:r.parsedType}),K;const s=this._def;s.minSize!==null&&r.data.size<s.minSize.value&&(V(r,{code:D.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),t.dirty()),s.maxSize!==null&&r.data.size>s.maxSize.value&&(V(r,{code:D.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),t.dirty());const i=this._def.valueType;function a(u){const h=new Set;for(const f of u){if(f.status==="aborted")return K;f.status==="dirty"&&t.dirty(),h.add(f.value)}return{status:t.value,value:h}}const c=[...r.data.values()].map((u,h)=>i._parse(new It(r,u,r.path,h)));return r.common.async?Promise.all(c).then(u=>a(u)):a(c)}min(e,t){return new Qn({...this._def,minSize:{value:e,message:j.toString(t)}})}max(e,t){return new Qn({...this._def,maxSize:{value:e,message:j.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Qn.create=(n,e)=>new Qn({valueType:n,minSize:null,maxSize:null,typeName:H.ZodSet,...X(e)});class Ir extends J{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==M.function)return V(t,{code:D.invalid_type,expected:M.function,received:t.parsedType}),K;function r(c,u){return yo({data:c,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,_o(),xr].filter(h=>!!h),issueData:{code:D.invalid_arguments,argumentsError:u}})}function s(c,u){return yo({data:c,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,_o(),xr].filter(h=>!!h),issueData:{code:D.invalid_return_type,returnTypeError:u}})}const i={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof Mr){const c=this;return Ge(async function(...u){const h=new rt([]),f=await c._def.args.parseAsync(u,i).catch(b=>{throw h.addIssue(r(u,b)),h}),_=await Reflect.apply(a,this,f);return await c._def.returns._def.type.parseAsync(_,i).catch(b=>{throw h.addIssue(s(_,b)),h})})}else{const c=this;return Ge(function(...u){const h=c._def.args.safeParse(u,i);if(!h.success)throw new rt([r(u,h.error)]);const f=Reflect.apply(a,this,h.data),_=c._def.returns.safeParse(f,i);if(!_.success)throw new rt([s(f,_.error)]);return _.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Ir({...this._def,args:Et.create(e).rest(Ln.create())})}returns(e){return new Ir({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new Ir({args:e||Et.create([]).rest(Ln.create()),returns:t||Ln.create(),typeName:H.ZodFunction,...X(r)})}}class Gs extends J{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Gs.create=(n,e)=>new Gs({getter:n,typeName:H.ZodLazy,...X(e)});class Ws extends J{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return V(t,{received:t.data,code:D.invalid_literal,expected:this._def.value}),K}return{status:"valid",value:e.data}}get value(){return this._def.value}}Ws.create=(n,e)=>new Ws({value:n,typeName:H.ZodLiteral,...X(e)});function Nm(n,e){return new yn({values:n,typeName:H.ZodEnum,...X(e)})}class yn extends J{constructor(){super(...arguments),fs.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),r=this._def.values;return V(t,{expected:re.joinValues(r),received:t.parsedType,code:D.invalid_type}),K}if(vo(this,fs)||km(this,fs,new Set(this._def.values)),!vo(this,fs).has(e.data)){const t=this._getOrReturnCtx(e),r=this._def.values;return V(t,{received:t.data,code:D.invalid_enum_value,options:r}),K}return Ge(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return yn.create(e,{...this._def,...t})}exclude(e,t=this._def){return yn.create(this.options.filter(r=>!e.includes(r)),{...this._def,...t})}}fs=new WeakMap;yn.create=Nm;class Ks extends J{constructor(){super(...arguments),ps.set(this,void 0)}_parse(e){const t=re.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==M.string&&r.parsedType!==M.number){const s=re.objectValues(t);return V(r,{expected:re.joinValues(s),received:r.parsedType,code:D.invalid_type}),K}if(vo(this,ps)||km(this,ps,new Set(re.getValidEnumValues(this._def.values))),!vo(this,ps).has(e.data)){const s=re.objectValues(t);return V(r,{received:r.data,code:D.invalid_enum_value,options:s}),K}return Ge(e.data)}get enum(){return this._def.values}}ps=new WeakMap;Ks.create=(n,e)=>new Ks({values:n,typeName:H.ZodNativeEnum,...X(e)});class Mr extends J{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==M.promise&&t.common.async===!1)return V(t,{code:D.invalid_type,expected:M.promise,received:t.parsedType}),K;const r=t.parsedType===M.promise?t.data:Promise.resolve(t.data);return Ge(r.then(s=>this._def.type.parseAsync(s,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Mr.create=(n,e)=>new Mr({type:n,typeName:H.ZodPromise,...X(e)});class dt extends J{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===H.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:r}=this._processInputParams(e),s=this._def.effect||null,i={addIssue:a=>{V(r,a),a.fatal?t.abort():t.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),s.type==="preprocess"){const a=s.transform(r.data,i);if(r.common.async)return Promise.resolve(a).then(async c=>{if(t.value==="aborted")return K;const u=await this._def.schema._parseAsync({data:c,path:r.path,parent:r});return u.status==="aborted"?K:u.status==="dirty"||t.value==="dirty"?gr(u.value):u});{if(t.value==="aborted")return K;const c=this._def.schema._parseSync({data:a,path:r.path,parent:r});return c.status==="aborted"?K:c.status==="dirty"||t.value==="dirty"?gr(c.value):c}}if(s.type==="refinement"){const a=c=>{const u=s.refinement(c,i);if(r.common.async)return Promise.resolve(u);if(u instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return c};if(r.common.async===!1){const c=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return c.status==="aborted"?K:(c.status==="dirty"&&t.dirty(),a(c.value),{status:t.value,value:c.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(c=>c.status==="aborted"?K:(c.status==="dirty"&&t.dirty(),a(c.value).then(()=>({status:t.value,value:c.value}))))}if(s.type==="transform")if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Fs(a))return a;const c=s.transform(a.value,i);if(c instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:c}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>Fs(a)?Promise.resolve(s.transform(a.value,i)).then(c=>({status:t.value,value:c})):a);re.assertNever(s)}}dt.create=(n,e,t)=>new dt({schema:n,typeName:H.ZodEffects,effect:e,...X(t)});dt.createWithPreprocess=(n,e,t)=>new dt({schema:e,effect:{type:"preprocess",transform:n},typeName:H.ZodEffects,...X(t)});class vt extends J{_parse(e){return this._getType(e)===M.undefined?Ge(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}vt.create=(n,e)=>new vt({innerType:n,typeName:H.ZodOptional,...X(e)});class vn extends J{_parse(e){return this._getType(e)===M.null?Ge(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}vn.create=(n,e)=>new vn({innerType:n,typeName:H.ZodNullable,...X(e)});class Qs extends J{_parse(e){const{ctx:t}=this._processInputParams(e);let r=t.data;return t.parsedType===M.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Qs.create=(n,e)=>new Qs({innerType:n,typeName:H.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...X(e)});class Zs extends J{_parse(e){const{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},s=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Us(s)?s.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new rt(r.common.issues)},input:r.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new rt(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Zs.create=(n,e)=>new Zs({innerType:n,typeName:H.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...X(e)});class Eo extends J{_parse(e){if(this._getType(e)!==M.nan){const r=this._getOrReturnCtx(e);return V(r,{code:D.invalid_type,expected:M.nan,received:r.parsedType}),K}return{status:"valid",value:e.data}}}Eo.create=n=>new Eo({typeName:H.ZodNaN,...X(n)});const AR=Symbol("zod_brand");class Ru extends J{_parse(e){const{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class mi extends J{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?K:i.status==="dirty"?(t.dirty(),gr(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const s=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?K:s.status==="dirty"?(t.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:r.path,parent:r})}}static create(e,t){return new mi({in:e,out:t,typeName:H.ZodPipeline})}}class Ys extends J{_parse(e){const t=this._def.innerType._parse(e),r=s=>(Fs(s)&&(s.value=Object.freeze(s.value)),s);return Us(t)?t.then(s=>r(s)):r(t)}unwrap(){return this._def.innerType}}Ys.create=(n,e)=>new Ys({innerType:n,typeName:H.ZodReadonly,...X(e)});function xm(n,e={},t){return n?Vr.create().superRefine((r,s)=>{var i,a;if(!n(r)){const c=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,u=(a=(i=c.fatal)!==null&&i!==void 0?i:t)!==null&&a!==void 0?a:!0,h=typeof c=="string"?{message:c}:c;s.addIssue({code:"custom",...h,fatal:u})}}):Vr.create()}const bR={object:fe.lazycreate};var H;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(H||(H={}));const RR=(n,e={message:`Input not instance of ${n.name}`})=>xm(t=>t instanceof n,e),Vm=ot.create,Mm=gn.create,SR=Eo.create,PR=_n.create,Lm=js.create,kR=Kn.create,CR=wo.create,DR=Bs.create,OR=$s.create,NR=Vr.create,xR=Ln.create,VR=jt.create,MR=To.create,LR=ct.create,FR=fe.create,UR=fe.strictCreate,jR=qs.create,BR=ra.create,$R=zs.create,qR=Et.create,zR=Hs.create,HR=Io.create,GR=Qn.create,WR=Ir.create,KR=Gs.create,QR=Ws.create,ZR=yn.create,YR=Ks.create,XR=Mr.create,id=dt.create,JR=vt.create,e0=vn.create,t0=dt.createWithPreprocess,n0=mi.create,r0=()=>Vm().optional(),s0=()=>Mm().optional(),i0=()=>Lm().optional(),o0={string:n=>ot.create({...n,coerce:!0}),number:n=>gn.create({...n,coerce:!0}),boolean:n=>js.create({...n,coerce:!0}),bigint:n=>_n.create({...n,coerce:!0}),date:n=>Kn.create({...n,coerce:!0})},a0=K;var Z=Object.freeze({__proto__:null,defaultErrorMap:xr,setErrorMap:aR,getErrorMap:_o,makeIssue:yo,EMPTY_PATH:cR,addIssueToContext:V,ParseStatus:Fe,INVALID:K,DIRTY:gr,OK:Ge,isAborted:Tc,isDirty:Ic,isValid:Fs,isAsync:Us,get util(){return re},get objectUtil(){return wc},ZodParsedType:M,getParsedType:rn,ZodType:J,datetimeRegex:Om,ZodString:ot,ZodNumber:gn,ZodBigInt:_n,ZodBoolean:js,ZodDate:Kn,ZodSymbol:wo,ZodUndefined:Bs,ZodNull:$s,ZodAny:Vr,ZodUnknown:Ln,ZodNever:jt,ZodVoid:To,ZodArray:ct,ZodObject:fe,ZodUnion:qs,ZodDiscriminatedUnion:ra,ZodIntersection:zs,ZodTuple:Et,ZodRecord:Hs,ZodMap:Io,ZodSet:Qn,ZodFunction:Ir,ZodLazy:Gs,ZodLiteral:Ws,ZodEnum:yn,ZodNativeEnum:Ks,ZodPromise:Mr,ZodEffects:dt,ZodTransformer:dt,ZodOptional:vt,ZodNullable:vn,ZodDefault:Qs,ZodCatch:Zs,ZodNaN:Eo,BRAND:AR,ZodBranded:Ru,ZodPipeline:mi,ZodReadonly:Ys,custom:xm,Schema:J,ZodSchema:J,late:bR,get ZodFirstPartyTypeKind(){return H},coerce:o0,any:NR,array:LR,bigint:PR,boolean:Lm,date:kR,discriminatedUnion:BR,effect:id,enum:ZR,function:WR,instanceof:RR,intersection:$R,lazy:KR,literal:QR,map:HR,nan:SR,nativeEnum:YR,never:VR,null:OR,nullable:e0,number:Mm,object:FR,oboolean:i0,onumber:s0,optional:JR,ostring:r0,pipeline:n0,preprocess:t0,promise:XR,record:zR,set:GR,strictObject:UR,string:Vm,symbol:CR,transformer:id,tuple:qR,undefined:DR,union:jR,unknown:xR,void:MR,NEVER:a0,ZodIssueCode:D,quotelessJson:oR,ZodError:rt});const Fm=Z.object({owner:Z.string().nullable().optional(),name:Z.string().nullable().optional(),isProduct:Z.boolean().optional(),listingDate:Z.unknown().optional(),price:Z.number().optional()}),c0=.1,u0={apiKey:"AIzaSyADkBixzr6He-A_dzPmwrgTzoq4zvfO8fo",authDomain:"blobtown-a8fed.firebaseapp.com",projectId:"blobtown-a8fed",storageBucket:"blobtown-a8fed.appspot.com",messagingSenderId:"417289612345",appId:"1:417289612345:web:5dc7ecd466bb3d25bf31e8",measurementId:"G-PQRD8HGQVE"},l0=u0,sa=kd(l0),Ye=NA(sa),h0=nR(sa),H0=aw(sa);BT(sa);const d0=Z.union([Z.literal("blob"),Z.literal("avatar")]),Ac=Z.object({id:Z.string(),name:Z.string().optional(),balance:Z.number()}),f0=Z.object({id:Z.string(),creatorId:Z.string().nullable().optional(),creator:Ac.nullable().optional(),thumbnailId:Z.string(),ownerId:Z.string().nullable().optional(),owner:Ac.nullable().optional(),type:d0,isProduct:Z.boolean(),price:Z.number(),name:Z.string().nullable(),loadRotation:Z.number().array().nullable(),doc:Z.any(),emittable:Z.string()}),St={users:{parse(n){const e=Ac.safeParse(n);return e.error&&console.error("[fb.users.parse]",e.error),n},async loadByIds(n){const e=new Map;try{const t=await St.users.listById(n);for(const r of t)e.set(r.id,r);return e}catch(t){return console.error("[fb.users.loadByIds]",t),e}},async findById(n){try{const e=(await Xh(Zt(Ye,"users",n))).data();if(!e)throw new Error("Not found");return St.users.parse({id:n,name:e.name,balance:e.money})}catch(e){console.error("[fb.users.findById]",e);return}},async listById(n){try{const e=[];return n.length>0&&e.push(kt("uID","in",n)),(await yc(Ts(Xi(Ye,"users"),...e))).docs.map(r=>{const s=r.data();return St.users.parse({id:r.id,name:s.name,balance:-1})})}catch(e){return console.error("[fb.users.listById]",e),[]}}},items:{parse(n){const e=f0.safeParse(n);return e.error&&console.error("[fb.items.parse]",e.error),n},async findById(n){try{const e=(await Xh(Zt(Ye,"items",n))).data();if(!e)throw new Error("Unable to find inventory item.");const[t,r]=await Promise.all([St.users.findById(e.creator),St.users.findById(e.owner)]);return St.items.parse({id:n,thumbnailId:e.thumbnail,creatorId:e.creator,creator:t,ownerId:e.owner,owner:r,type:e.type,isProduct:e.isProduct,name:e.name,price:e.price,loadRotation:e.loadRotation,emittable:JSON.stringify({...e,createDate:new Date(e.createDate.seconds).toISOString(),listingDate:new Date(e.listingDate.seconds).toISOString()})})}catch(e){throw console.error("[fb.items.findById]",e),e}},async list(n){try{const e=[gc(n.isProduct?"listingDate":"createDate","desc"),_c(n.limit??24)];n.cursor&&e.push(dm(n.cursor)),typeof(n==null?void 0:n.ownerId)<"u"&&e.push(kt("owner","==",n.ownerId)),typeof(n==null?void 0:n.type)<"u"&&e.push(kt("type","==",n.type)),typeof(n==null?void 0:n.isProduct)<"u"&&e.push(kt("isProduct","==",n.isProduct));const t=await yc(Ts(Xi(Ye,"items"),...e)),r=new Set(t.docs.map(i=>i.data().owner)),s=await St.users.loadByIds(Array.from(r));return t.docs.map(i=>{const a=i.data();return St.items.parse({id:i.id,thumbnailId:a.thumbnail,ownerId:a.owner,owner:s.get(a.owner),type:a.type,isProduct:a.isProduct,name:a.name,price:a.price,loadRotation:a.loadRotation,doc:i,emittable:JSON.stringify({...a,createDate:new Date(a.createDate.seconds).toISOString(),listingDate:new Date(a.listingDate.seconds).toISOString()})})})}catch(e){return console.error("[fb.items.list]",e),[]}},async count(n){try{const e=[];return typeof(n==null?void 0:n.ownerId)<"u"&&e.push(kt("owner","==",n.ownerId)),typeof(n==null?void 0:n.type)<"u"&&e.push(kt("type","==",n.type)),typeof(n==null?void 0:n.isProduct)<"u"&&e.push(kt("isProduct","==",n.isProduct)),(await YA(Ts(Xi(Ye,"items"),...e))).data().count}catch(e){throw console.error("[fb.items.count]",e),e}},async update(n){try{const e=Fm.parse(n.attrs);return e.price&&(e.price=Math.round(e.price)),e.isProduct&&(e.listingDate=nb()),await QA(Zt(Ye,"items",n.id),e)}catch(e){throw console.error("[fb.items.update]",e),e}},async purchase(n){try{const e=await St.users.findById(n.purchaserId);if(!e)throw new Error("User not found.");if(e.balance<n.price)throw new Error("Not enough funds.");return await tb(Ye,async t=>Promise.all([t.update(Zt(Ye,"items",n.itemId),{owner:n.purchaserId,price:n.price,isProduct:!1}),t.update(Zt(Ye,"users",n.purchaserId),{money:Jh(-n.price)}),n.ownerId&&t.update(Zt(Ye,"users",n.ownerId),{money:Jh(n.price-Math.round(n.price*c0))})])),n}catch(e){throw console.error("[fb.items.purchase]",e),e}},async delete(n){try{await mm(Zt(Ye,"items",n))}catch(e){throw console.error("[fb.items.delete]",e),e}}}};async function G0(n){try{const e=Xi(Ye,"videos"),t=n.cursor?Ts(e,kt("owner","==",n.userId),gc("createDate","desc"),dm(n.cursor),_c(20)):Ts(e,kt("owner","==",n.userId),gc("createDate","desc"),_c(20)),r=await yc(t);if(r.metadata)return r.docs.map(s=>({doc:s,id:s.id,...s.data()}))}catch(e){return console.error(e,"[listUserVideos] Failed to get user videos doc."),[]}}async function W0(n){try{const e=Zt(Ye,"videos",n);return await mm(e),!0}catch(e){return console.error(e,"[listUserVideos] Failed to get user videos doc."),!1}}async function K0(n){return eR(tR(h0,n))}const Wt=new WeakMap,kn=new WeakMap,Dt=new WeakMap;var p0={};const Ao=Symbol("anyProducer"),od=Promise.resolve(),bo=Symbol("listenerAdded"),Ro=Symbol("listenerRemoved");let So=!1,Ha=!1;const Po=n=>typeof n=="string"||typeof n=="symbol"||typeof n=="number";function cr(n){if(!Po(n))throw new TypeError("`eventName` must be a string, symbol, or number")}function Bi(n){if(typeof n!="function")throw new TypeError("listener must be a function")}function ur(n,e){const t=kn.get(n);if(t.has(e))return t.get(e)}function Is(n,e){const t=Po(e)?e:Ao,r=Dt.get(n);if(r.has(t))return r.get(t)}function m0(n,e,t){const r=Dt.get(n);if(r.has(e))for(const s of r.get(e))s.enqueue(t);if(r.has(Ao)){const s=Promise.all([e,t]);for(const i of r.get(Ao))i.enqueue(s)}}function ad(n,e){e=Array.isArray(e)?e:[e];let t=!1,r=()=>{},s=[];const i={enqueue(a){s.push(a),r()},finish(){t=!0,r()}};for(const a of e){let c=Is(n,a);c||(c=new Set,Dt.get(n).set(a,c)),c.add(i)}return{async next(){return s?s.length===0?t?(s=void 0,this.next()):(await new Promise(a=>{r=a}),this.next()):{done:!1,value:await s.shift()}:{done:!0}},async return(a){s=void 0;for(const c of e){const u=Is(n,c);u&&(u.delete(i),u.size===0&&Dt.get(n).delete(c))}return r(),arguments.length>0?{done:!0,value:await a}:{done:!0}},[Symbol.asyncIterator](){return this}}}function cd(n){if(n===void 0)return ud;if(!Array.isArray(n))throw new TypeError("`methodNames` must be an array of strings");for(const e of n)if(!ud.includes(e))throw typeof e!="string"?new TypeError("`methodNames` element must be a string"):new Error(`${e} is not Emittery method`);return n}const fr=n=>n===bo||n===Ro;function $i(n,e,t){if(fr(e))try{So=!0,n.emit(e,t)}finally{So=!1}}class Zn{static mixin(e,t){return t=cd(t),r=>{if(typeof r!="function")throw new TypeError("`target` must be function");for(const a of t)if(r.prototype[a]!==void 0)throw new Error(`The property \`${a}\` already exists on \`target\``);function s(){return Object.defineProperty(this,e,{enumerable:!1,value:new Zn}),this[e]}Object.defineProperty(r.prototype,e,{enumerable:!1,get:s});const i=a=>function(...c){return this[e][a](...c)};for(const a of t)Object.defineProperty(r.prototype,a,{enumerable:!1,value:i(a)});return r}}static get isDebugEnabled(){if(typeof p0!="object")return Ha;const{env:e}=globalThis.process??{env:{}};return e.DEBUG==="emittery"||e.DEBUG==="*"||Ha}static set isDebugEnabled(e){Ha=e}constructor(e={}){Wt.set(this,new Set),kn.set(this,new Map),Dt.set(this,new Map),Dt.get(this).set(Ao,new Set),this.debug=e.debug??{},this.debug.enabled===void 0&&(this.debug.enabled=!1),this.debug.logger||(this.debug.logger=(t,r,s,i)=>{try{i=JSON.stringify(i)}catch{i=`Object with the following keys failed to stringify: ${Object.keys(i).join(",")}`}(typeof s=="symbol"||typeof s=="number")&&(s=s.toString());const a=new Date,c=`${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}.${a.getMilliseconds()}`;console.log(`[${c}][emittery:${t}][${r}] Event Name: ${s}
	data: ${i}`)})}logIfDebugEnabled(e,t,r){(Zn.isDebugEnabled||this.debug.enabled)&&this.debug.logger(e,this.debug.name,t,r)}on(e,t){Bi(t),e=Array.isArray(e)?e:[e];for(const r of e){cr(r);let s=ur(this,r);s||(s=new Set,kn.get(this).set(r,s)),s.add(t),this.logIfDebugEnabled("subscribe",r,void 0),fr(r)||$i(this,bo,{eventName:r,listener:t})}return this.off.bind(this,e,t)}off(e,t){Bi(t),e=Array.isArray(e)?e:[e];for(const r of e){cr(r);const s=ur(this,r);s&&(s.delete(t),s.size===0&&kn.get(this).delete(r)),this.logIfDebugEnabled("unsubscribe",r,void 0),fr(r)||$i(this,Ro,{eventName:r,listener:t})}}once(e){let t;const r=new Promise(s=>{t=this.on(e,i=>{t(),s(i)})});return r.off=t,r}events(e){e=Array.isArray(e)?e:[e];for(const t of e)cr(t);return ad(this,e)}async emit(e,t){if(cr(e),fr(e)&&!So)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emit",e,t),m0(this,e,t);const r=ur(this,e)??new Set,s=Wt.get(this),i=[...r],a=fr(e)?[]:[...s];await od,await Promise.all([...i.map(async c=>{if(r.has(c))return c(t)}),...a.map(async c=>{if(s.has(c))return c(e,t)})])}async emitSerial(e,t){if(cr(e),fr(e)&&!So)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emitSerial",e,t);const r=ur(this,e)??new Set,s=Wt.get(this),i=[...r],a=[...s];await od;for(const c of i)r.has(c)&&await c(t);for(const c of a)s.has(c)&&await c(e,t)}onAny(e){return Bi(e),this.logIfDebugEnabled("subscribeAny",void 0,void 0),Wt.get(this).add(e),$i(this,bo,{listener:e}),this.offAny.bind(this,e)}anyEvent(){return ad(this)}offAny(e){Bi(e),this.logIfDebugEnabled("unsubscribeAny",void 0,void 0),$i(this,Ro,{listener:e}),Wt.get(this).delete(e)}clearListeners(e){e=Array.isArray(e)?e:[e];for(const t of e)if(this.logIfDebugEnabled("clear",t,void 0),Po(t)){const r=ur(this,t);r&&r.clear();const s=Is(this,t);if(s){for(const i of s)i.finish();s.clear()}}else{Wt.get(this).clear();for(const[r,s]of kn.get(this).entries())s.clear(),kn.get(this).delete(r);for(const[r,s]of Dt.get(this).entries()){for(const i of s)i.finish();s.clear(),Dt.get(this).delete(r)}}}listenerCount(e){var r,s,i;e=Array.isArray(e)?e:[e];let t=0;for(const a of e){if(Po(a)){t+=Wt.get(this).size+(((r=ur(this,a))==null?void 0:r.size)??0)+(((s=Is(this,a))==null?void 0:s.size)??0)+(((i=Is(this))==null?void 0:i.size)??0);continue}a!==void 0&&cr(a),t+=Wt.get(this).size;for(const c of kn.get(this).values())t+=c.size;for(const c of Dt.get(this).values())t+=c.size}return t}bindMethods(e,t){if(typeof e!="object"||e===null)throw new TypeError("`target` must be an object");t=cd(t);for(const r of t){if(e[r]!==void 0)throw new Error(`The property \`${r}\` already exists on \`target\``);Object.defineProperty(e,r,{enumerable:!1,value:this[r].bind(this)})}}}const ud=Object.getOwnPropertyNames(Zn.prototype).filter(n=>n!=="constructor");Object.defineProperty(Zn,"listenerAdded",{value:bo,writable:!1,enumerable:!0,configurable:!1});Object.defineProperty(Zn,"listenerRemoved",{value:Ro,writable:!1,enumerable:!0,configurable:!1});function g0(){const n="0123456789abcdef";let e="";for(let t=0;t<36;t++){const r=Math.random()*16|0;t===8||t===13||t===18||t===23?e+="-":t===14?e+="4":t===19?e+=n[r&3|8]:e+=n[r]}return e}const _0=Z.union([Z.object({type:Z.literal("command:navigate"),attrs:Z.object({path:Z.string()})}),Z.object({type:Z.literal("command:invalidate_cache"),attrs:Z.object({key:Z.unknown().array()})}),Z.object({type:Z.literal("command:update_item"),attrs:Fm.extend({id:Z.string()})}),Z.object({type:Z.literal("request:check_limits"),attrs:Z.object({type:Z.union([Z.literal("avatar"),Z.literal("blob"),Z.literal("product")])})})]),Kt={client:typeof window<"u"&&"vuplex"in window&&window.vuplex,emitter:new Zn,listen(n){if(typeof window>"u")return;function e(){Kt.client&&Kt.client.addEventListener("message",t=>{console.log("[Vuplex.listen] Received message:",t);const r=_0.safeParse(JSON.parse(t.data));if(!r.success){console.warn("[Vuplex.listen] Message was not handled",{event:t,message:r});return}n(r.data)})}return Kt.client?e():window.addEventListener("vuplexready",e),function(){window.removeEventListener("vuplexready",e)}},emit(n,e){if(console.info("[Vuplex.emit] Attempting to send message:",n),typeof window>"u")return;const t=g0();return!e&&Kt.client?(Kt.client.postMessage({id:t,...n}),new Promise(r=>r(!0))):new Promise((r,s)=>{if(!Kt.client)return s("Unable to send message to vuplex.");const i=setTimeout(()=>{s("Message went unacknowledged.")},3e3);Kt.emitter.once(t).then(a=>{if(clearTimeout(i),!a.success)return console.error("[Vuplex.emit] Message failed:",n,a.error),s(a.error);console.info("[Vuplex.emit] Message acknowledged:",n),r(!0)}),Kt.client.postMessage({id:t,...n})})}};export{uw as A,P0 as B,D0 as C,Aw as D,vw as E,V0 as F,yw as G,eR as H,tR as I,h0 as J,E0 as K,Jy as L,M0 as M,I0 as N,T0 as O,F0 as Q,Tw as R,Vc as S,Kt as V,C0 as a,R0 as b,S0 as c,Ss as d,St as e,mw as f,A0 as g,lw as h,H0 as i,U0 as j,b0 as k,K0 as l,k0 as m,Lc as n,df as o,Mc as p,W0 as q,G0 as r,fw as s,x0 as t,Ew as u,N0 as v,O0 as w,hw as x,Mo as y,Z as z};

const __vite__fileDeps=["assets/production-Dmx2KYnM.js","assets/components-B4muXIau.js","assets/client-DJ4wINi5.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var C=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var i=(t,e,s)=>(C(t,e,"read from private field"),s?s.call(t):e.get(t)),y=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},h=(t,e,s,r)=>(C(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var k=(t,e,s,r)=>({set _(n){h(t,e,n,s)},get _(){return i(t,e,r)}});import{u as Z,y as W,z as Y,A as G,r as g,_ as X,B as ee,x as c,M as te,L as se,O as re,S as ie}from"./components-B4muXIau.js";import{S as B,h as V,n as f,m as P,M as ne,a as q,b,f as ae,o as j,c as oe,d as T,p as _,s as ue,u as ce,V as R,e as $,g as le,Q as he,i as de}from"./client-DJ4wINi5.js";import{Q as fe}from"./storage-image-CkFV5oAj.js";import{i as ye}from"./infiniteQueryBehavior-jgK0HRxR.js";import{u as me,I as pe}from"./use-update-item-BIrWijUJ.js";import{u as ge,S as ve,a as be}from"./session.context-vmK1tNTN.js";/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let H="positions";function we({getKey:t,...e}){let{isSpaMode:s}=Z(),r=W(),n=Y();G({getKey:t,storageKey:H});let a=g.useMemo(()=>{if(!t)return null;let l=t(r,n);return l!==r.key?l:null},[]);if(s)return null;let o=((l,v)=>{if(!window.history.state||!window.history.state.key){let w=Math.random().toString(32).slice(2);window.history.replaceState({key:w},"")}try{let m=JSON.parse(sessionStorage.getItem(l)||"{}")[v||window.history.state.key];typeof m=="number"&&window.scrollTo(0,m)}catch(w){console.error(w),sessionStorage.removeItem(l)}}).toString();return g.createElement("script",X({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${o})(${JSON.stringify(H)}, ${JSON.stringify(a)})`}}))}const Oe="modulepreload",Qe=function(t){return"/"+t},U={},Se=function(e,s,r){let n=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));n=Promise.all(s.map(l=>{if(l=Qe(l),l in U)return;U[l]=!0;const v=l.endsWith(".css"),w=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${w}`))return;const m=document.createElement("link");if(m.rel=v?"stylesheet":Oe,v||(m.as="script",m.crossOrigin=""),m.href=l,o&&m.setAttribute("nonce",o),document.head.appendChild(m),v)return new Promise((z,J)=>{m.addEventListener("load",z),m.addEventListener("error",()=>J(new Error(`Unable to preload CSS for ${l}`)))})}))}return n.then(()=>e()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})};var p,L,xe=(L=class extends B{constructor(e={}){super();y(this,p,void 0);this.config=e,h(this,p,new Map)}build(e,s,r){const n=s.queryKey,a=s.queryHash??V(n,s);let o=this.get(a);return o||(o=new fe({cache:this,queryKey:n,queryHash:a,options:e.defaultQueryOptions(s),state:r,defaultOptions:e.getQueryDefaults(n)}),this.add(o)),o}add(e){i(this,p).has(e.queryHash)||(i(this,p).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const s=i(this,p).get(e.queryHash);s&&(e.destroy(),s===e&&i(this,p).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){f.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return i(this,p).get(e)}getAll(){return[...i(this,p).values()]}find(e){const s={exact:!0,...e};return this.getAll().find(r=>P(s,r))}findAll(e={}){const s=this.getAll();return Object.keys(e).length>0?s.filter(r=>P(e,r)):s}notify(e){f.batch(()=>{this.listeners.forEach(s=>{s(e)})})}onFocus(){f.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){f.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},p=new WeakMap,L),d,D,N,Ee=(N=class extends B{constructor(e={}){super();y(this,d,void 0);y(this,D,void 0);this.config=e,h(this,d,new Map),h(this,D,Date.now())}build(e,s,r){const n=new ne({mutationCache:this,mutationId:++k(this,D)._,options:e.defaultMutationOptions(s),state:r});return this.add(n),n}add(e){const s=I(e),r=i(this,d).get(s)??[];r.push(e),i(this,d).set(s,r),this.notify({type:"added",mutation:e})}remove(e){var r;const s=I(e);if(i(this,d).has(s)){const n=(r=i(this,d).get(s))==null?void 0:r.filter(a=>a!==e);n&&(n.length===0?i(this,d).delete(s):i(this,d).set(s,n))}this.notify({type:"removed",mutation:e})}canRun(e){var r;const s=(r=i(this,d).get(I(e)))==null?void 0:r.find(n=>n.state.status==="pending");return!s||s===e}runNext(e){var r;const s=(r=i(this,d).get(I(e)))==null?void 0:r.find(n=>n!==e&&n.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}clear(){f.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...i(this,d).values()].flat()}find(e){const s={exact:!0,...e};return this.getAll().find(r=>q(s,r))}findAll(e={}){return this.getAll().filter(s=>q(e,s))}notify(e){f.batch(()=>{this.listeners.forEach(s=>{s(e)})})}resumePausedMutations(){const e=this.getAll().filter(s=>s.state.isPaused);return f.batch(()=>Promise.all(e.map(s=>s.continue().catch(b))))}},d=new WeakMap,D=new WeakMap,N);function I(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}var u,O,Q,x,E,S,A,M,K,Ae=(K=class{constructor(t={}){y(this,u,void 0);y(this,O,void 0);y(this,Q,void 0);y(this,x,void 0);y(this,E,void 0);y(this,S,void 0);y(this,A,void 0);y(this,M,void 0);h(this,u,t.queryCache||new xe),h(this,O,t.mutationCache||new Ee),h(this,Q,t.defaultOptions||{}),h(this,x,new Map),h(this,E,new Map),h(this,S,0)}mount(){k(this,S)._++,i(this,S)===1&&(h(this,A,ae.subscribe(async t=>{t&&(await this.resumePausedMutations(),i(this,u).onFocus())})),h(this,M,j.subscribe(async t=>{t&&(await this.resumePausedMutations(),i(this,u).onOnline())})))}unmount(){var t,e;k(this,S)._--,i(this,S)===0&&((t=i(this,A))==null||t.call(this),h(this,A,void 0),(e=i(this,M))==null||e.call(this),h(this,M,void 0))}isFetching(t){return i(this,u).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return i(this,O).findAll({...t,status:"pending"}).length}getQueryData(t){var s;const e=this.defaultQueryOptions({queryKey:t});return(s=i(this,u).get(e.queryHash))==null?void 0:s.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const s=this.defaultQueryOptions(t),r=i(this,u).build(this,s);return t.revalidateIfStale&&r.isStaleByTime(s.staleTime)&&this.prefetchQuery(s),Promise.resolve(e)}}getQueriesData(t){return i(this,u).findAll(t).map(({queryKey:e,state:s})=>{const r=s.data;return[e,r]})}setQueryData(t,e,s){const r=this.defaultQueryOptions({queryKey:t}),n=i(this,u).get(r.queryHash),a=n==null?void 0:n.state.data,o=oe(e,a);if(o!==void 0)return i(this,u).build(this,r).setData(o,{...s,manual:!0})}setQueriesData(t,e,s){return f.batch(()=>i(this,u).findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,s)]))}getQueryState(t){var s;const e=this.defaultQueryOptions({queryKey:t});return(s=i(this,u).get(e.queryHash))==null?void 0:s.state}removeQueries(t){const e=i(this,u);f.batch(()=>{e.findAll(t).forEach(s=>{e.remove(s)})})}resetQueries(t,e){const s=i(this,u),r={type:"active",...t};return f.batch(()=>(s.findAll(t).forEach(n=>{n.reset()}),this.refetchQueries(r,e)))}cancelQueries(t={},e={}){const s={revert:!0,...e},r=f.batch(()=>i(this,u).findAll(t).map(n=>n.cancel(s)));return Promise.all(r).then(b).catch(b)}invalidateQueries(t={},e={}){return f.batch(()=>{if(i(this,u).findAll(t).forEach(r=>{r.invalidate()}),t.refetchType==="none")return Promise.resolve();const s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){const s={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},r=f.batch(()=>i(this,u).findAll(t).filter(n=>!n.isDisabled()).map(n=>{let a=n.fetch(void 0,s);return s.throwOnError||(a=a.catch(b)),n.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(r).then(b)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const s=i(this,u).build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(b).catch(b)}fetchInfiniteQuery(t){return t.behavior=ye(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(b).catch(b)}resumePausedMutations(){return j.isOnline()?i(this,O).resumePausedMutations():Promise.resolve()}getQueryCache(){return i(this,u)}getMutationCache(){return i(this,O)}getDefaultOptions(){return i(this,Q)}setDefaultOptions(t){h(this,Q,t)}setQueryDefaults(t,e){i(this,x).set(T(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...i(this,x).values()];let s={};return e.forEach(r=>{_(t,r.queryKey)&&(s={...s,...r.defaultOptions})}),s}setMutationDefaults(t,e){i(this,E).set(T(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...i(this,E).values()];let s={};return e.forEach(r=>{_(t,r.mutationKey)&&(s={...s,...r.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;const e={...i(this,Q).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=V(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===ue&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...i(this,Q).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){i(this,u).clear(),i(this,O).clear()}},u=new WeakMap,O=new WeakMap,Q=new WeakMap,x=new WeakMap,E=new WeakMap,S=new WeakMap,A=new WeakMap,M=new WeakMap,K);const Me={avatar:50,blob:100,product:20};function De(){const t=ee(),e=ce(),s=ge(),r=me().mutateAsync;return g.useEffect(()=>R.listen(n=>{switch(n.type){case"command:navigate":{t(n.attrs.path);break}case"command:invalidate_cache":{e.invalidateQueries({queryKey:n.attrs.key});break}case"command:update_item":{const{id:a,...o}=n.attrs;r({id:a,attrs:o});break}case"request:check_limits":{const a={ownerId:s.currentUserId};n.attrs.type==="avatar"&&(a.type="avatar"),n.attrs.type==="blob"&&(a.type="blob"),n.attrs.type==="product"&&(a.isProduct=!0),$.items.count(a).then(o=>{const l=Me[n.attrs.type];R.emit({type:"reply:check_limits",attrs:{limitReached:o>=l}})});break}}}),[t,e,s.currentUserId,r]),null}const ke="/assets/root-vr-CasyQwJT.css",Ie=new Ae({defaultOptions:{queries:{retry:!1}}}),Ce=g.lazy(()=>Se(()=>import("./production-Dmx2KYnM.js").then(t=>t.Y),__vite__mapDeps([0,1,2])).then(t=>({default:t.ReactQueryDevtools}))),F={currentUserId:void 0,accessToken:void 0,balance:0,set(){console.error("SessionContext.set was called before the context was initialized.")}};function Ue(){const[t,e]=g.useState({...F,status:"PENDING",device:"headset"}),[s,r]=g.useState(!1),n=g.useRef(!1);return g.useEffect(()=>{if(t.device==="headset"&&!n.current){n.current=!0;const a=document.createElement("link");a.href=ke,a.type="text/css",a.rel="stylesheet",a.media="screen,print",document.getElementsByTagName("head")[0].appendChild(a)}},[t]),g.useEffect(()=>{le(de,async a=>{if(a){const{uid:o,accessToken:l}=a,v=await $.users.findById(o);v&&e(w=>({...w,currentUserId:o,accessToken:l,balance:v.balance,status:"AUTHORIZED"}))}else e(o=>({...o,...F,status:"UNAUTHORIZED"}))},a=>{console.error(a),e(o=>({...o,status:"UNAUTHORIZED"}))}),window.toggleDevtools=()=>r(a=>!a)},[]),c.jsxs("html",{lang:"en",children:[c.jsxs("head",{children:[c.jsx("meta",{charSet:"utf-8"}),c.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),c.jsx(te,{}),c.jsx(se,{}),c.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),c.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),c.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",rel:"stylesheet"})]}),c.jsxs("body",{className:"flex flex-col min-h-screen min-w-screen",children:[c.jsxs(he,{client:Ie,children:[c.jsx(ve,{}),c.jsxs(be.Provider,{value:t,children:[c.jsx(De,{}),c.jsx(re,{})]}),s&&c.jsx(g.Suspense,{fallback:null,children:c.jsx(Ce,{})}),c.jsx(pe,{position:"bottom-center",toastOptions:{className:"!rounded !shadow-lg border border-zinc-100 text-sm font-semibold"}})]}),c.jsx("div",{className:"fixed inset-0 bg-white -z-20"}),c.jsx(we,{}),c.jsx(ie,{})]})]})}export{Ue as A,Se as _};
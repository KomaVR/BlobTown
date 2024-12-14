import{r as c}from"./components-B4muXIau.js";import{u as F,j as _,e as H}from"./client-DJ4wINi5.js";import{S as U}from"./storage-image-CkFV5oAj.js";let q={data:""},L=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||q,Q=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,K=/\/\*[^]*?\*\/|  +/g,D=/\n+/g,b=(e,t)=>{let r="",s="",o="";for(let a in e){let n=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+n+";":s+=a[1]=="f"?b(n,a):a+"{"+b(n,a[1]=="k"?"":t)+"}":typeof n=="object"?s+=b(n,t?t.replace(/([^,])+/g,i=>a.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):a):n!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=b.p?b.p(a,n):a+":"+n+";")}return r+(t&&o?t+"{"+o+"}":o)+s},y={},S=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+S(e[r]);return t}return e},R=(e,t,r,s,o)=>{let a=S(e),n=y[a]||(y[a]=(l=>{let d=0,u=11;for(;d<l.length;)u=101*u+l.charCodeAt(d++)>>>0;return"go"+u})(a));if(!y[n]){let l=a!==e?e:(d=>{let u,f,m=[{}];for(;u=Q.exec(d.replace(K,""));)u[4]?m.shift():u[3]?(f=u[3].replace(D," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][u[1]]=u[2].replace(D," ").trim();return m[0]})(e);y[n]=b(o?{["@keyframes "+n]:l}:l,r?"":"."+n)}let i=r&&y.g?y.g:null;return r&&(y.g=y[n]),((l,d,u,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=u?l+d.data:d.data+l)})(y[n],t,s,i),n},Y=(e,t,r)=>e.reduce((s,o,a)=>{let n=t[a];if(n&&n.call){let i=n(r),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":b(i,""):i===!1?"":i}return s+o+(n??"")},"");function O(e){let t=this||{},r=e.call?e(t.p):e;return R(r.unshift?r.raw?Y(r,[].slice.call(arguments,1),t.p):r.reduce((s,o)=>Object.assign(s,o&&o.call?o(t.p):o),{}):r,L(t.target),t.g,t.o,t.k)}let M,A,N;O.bind({g:1});let h=O.bind({k:1});function Z(e,t,r,s){b.p=t,M=e,A=r,N=s}function v(e,t){let r=this||{};return function(){let s=arguments;function o(a,n){let i=Object.assign({},a),l=i.className||o.className;r.p=Object.assign({theme:A&&A()},i),r.o=/ *go\d+/.test(l),i.className=O.apply(r,s)+(l?" "+l:"");let d=e;return e[0]&&(d=i.as||e,delete i.as),N&&d[0]&&N(i),M(d,i)}return o}}var B=e=>typeof e=="function",I=(e,t)=>B(e)?e(t):e,G=(()=>{let e=0;return()=>(++e).toString()})(),T=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),J=20,$=new Map,V=1e3,P=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),x({type:4,toastId:e})},V);$.set(e,t)},W=e=>{let t=$.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,J)};case 1:return t.toast.id&&W(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return e.toasts.find(a=>a.id===r.id)?z(e,{type:1,toast:r}):z(e,{type:0,toast:r});case 3:let{toastId:s}=t;return s?P(s):e.toasts.forEach(a=>{P(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===s||s===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},k=[],j={toasts:[],pausedAt:void 0},x=e=>{j=z(j,e),k.forEach(t=>{t(j)})},X={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ee=(e={})=>{let[t,r]=c.useState(j);c.useEffect(()=>(k.push(r),()=>{let o=k.indexOf(r);o>-1&&k.splice(o,1)}),[t]);let s=t.toasts.map(o=>{var a,n;return{...e,...e[o.type],...o,duration:o.duration||((a=e[o.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||X[o.type],style:{...e.style,...(n=e[o.type])==null?void 0:n.style,...o.style}}});return{...t,toasts:s}},te=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||G()}),w=e=>(t,r)=>{let s=te(t,e,r);return x({type:2,toast:s}),s.id},p=(e,t)=>w("blank")(e,t);p.error=w("error");p.success=w("success");p.loading=w("loading");p.custom=w("custom");p.dismiss=e=>{x({type:3,toastId:e})};p.remove=e=>x({type:4,toastId:e});p.promise=(e,t,r)=>{let s=p.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(o=>(p.success(I(t.success,o),{id:s,...r,...r==null?void 0:r.success}),o)).catch(o=>{p.error(I(t.error,o),{id:s,...r,...r==null?void 0:r.error})}),e};var re=(e,t)=>{x({type:1,toast:{id:e,height:t}})},ae=()=>{x({type:5,time:Date.now()})},oe=e=>{let{toasts:t,pausedAt:r}=ee(e);c.useEffect(()=>{if(r)return;let a=Date.now(),n=t.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(a-i.createdAt);if(l<0){i.visible&&p.dismiss(i.id);return}return setTimeout(()=>p.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[t,r]);let s=c.useCallback(()=>{r&&x({type:6,time:Date.now()})},[r]),o=c.useCallback((a,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=n||{},u=t.filter(g=>(g.position||d)===(a.position||d)&&g.height),f=u.findIndex(g=>g.id===a.id),m=u.filter((g,C)=>C<f&&g.visible).length;return u.filter(g=>g.visible).slice(...i?[m+1]:[0,m]).reduce((g,C)=>g+(C.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:re,startPause:ae,endPause:s,calculateOffset:o}}},se=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ie=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ne=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,le=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${se} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ie} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ne} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,de=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ce=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${de} 1s linear infinite;
`,ue=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,pe=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,me=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ue} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${pe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,fe=v("div")`
  position: absolute;
`,ge=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ye=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,he=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ye} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,be=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?c.createElement(he,null,t):t:r==="blank"?null:c.createElement(ge,null,c.createElement(ce,{...s}),r!=="loading"&&c.createElement(fe,null,r==="error"?c.createElement(le,{...s}):c.createElement(me,{...s})))},ve=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,xe=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,we="0%{opacity:0;} 100%{opacity:1;}",Ee="0%{opacity:1;} 100%{opacity:0;}",$e=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ke=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,je=(e,t)=>{let r=e.includes("top")?1:-1,[s,o]=T()?[we,Ee]:[ve(r),xe(r)];return{animation:t?`${h(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ie=c.memo(({toast:e,position:t,style:r,children:s})=>{let o=e.height?je(e.position||t||"top-center",e.visible):{opacity:0},a=c.createElement(be,{toast:e}),n=c.createElement(ke,{...e.ariaProps},I(e.message,e));return c.createElement($e,{className:e.className,style:{...o,...r,...e.style}},typeof s=="function"?s({icon:a,message:n}):c.createElement(c.Fragment,null,a,n))});Z(c.createElement);var Oe=({id:e,className:t,style:r,onHeightUpdate:s,children:o})=>{let a=c.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;s(e,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return c.createElement("div",{ref:a,className:t,style:r},o)},Ce=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:T()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...o}},Ae=O`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Pe=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:o,containerStyle:a,containerClassName:n})=>{let{toasts:i,handlers:l}=oe(r);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...a},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let u=d.position||t,f=l.calculateOffset(d,{reverseOrder:e,gutter:s,defaultPosition:t}),m=Ce(u,f);return c.createElement(Oe,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Ae:"",style:m},d.type==="custom"?I(d.message,d):o?o(d):c.createElement(Ie,{toast:d,position:u}))}))},Se=p;function Me(){const e=F();return _({mutationFn:async(...t)=>H.items.update(...t),onError(t){console.error("[useUpdateItem] Error:",t)},onSuccess(t,r){U.cache.delete(r.id),e.invalidateQueries({queryKey:["inventory"]}),e.invalidateQueries({queryKey:["store"]})}})}export{Pe as I,Se as _,Me as u};

import{x as o}from"./components-B4muXIau.js";function i(t){var s,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var e=t.length;for(s=0;s<e;s++)t[s]&&(n=i(t[s]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function a(){for(var t,s,n=0,r="",e=arguments.length;n<e;n++)(t=arguments[n])&&(s=i(t))&&(r&&(r+=" "),r+=s);return r}function C({size:t,className:s,...n}){let r="w-8 h-8";return t==="sm"&&(r="w-4 h-4"),t==="lg"&&(r="w-10 h-10"),t==="xl"&&(r="w-14 h-14"),o.jsxs("div",{role:"status",children:[o.jsxs("svg",{"aria-hidden":"true",className:a("text-white animate-spin dark:text-gray-600 fill-transparent",r,s),viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[o.jsx("path",{d:"M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z",stroke:"currentFill","stroke-width":"12","stroke-linecap":"round","stroke-linejoin":"round"}),o.jsx("path",{d:"M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762",stroke:"currentColor","stroke-width":"12","stroke-linecap":"round","stroke-linejoin":"round"})]}),o.jsx("span",{className:"sr-only",children:"Loading..."})]})}export{C as L,a as c};

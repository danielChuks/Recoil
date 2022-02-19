"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[3774],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(n),y=c,d=f["".concat(l,".").concat(y)]||f[y]||p[y]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function y(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(7462),c=n(3366),o=(n(7294),n(3905)),a=["components"],i={title:"urlSyncEffect(...)",sidebar_label:"urlSyncEffect()"},l=void 0,s={unversionedId:"recoil-sync/api/urlSyncEffect",id:"recoil-sync/api/urlSyncEffect",title:"urlSyncEffect(...)",description:"An optional effect that may be used instead of syncEffect() for URL Persistence in order to specify additional options, such as if state changes should replace the URL or push a new entry in the browser history stack.",source:"@site/docs/recoil-sync/api/urlSyncEffect.md",sourceDirName:"recoil-sync/api",slug:"/recoil-sync/api/urlSyncEffect",permalink:"/ko/docs/recoil-sync/api/urlSyncEffect",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/recoil-sync/api/urlSyncEffect.md",tags:[],version:"current",frontMatter:{title:"urlSyncEffect(...)",sidebar_label:"urlSyncEffect()"},sidebar:"recoil-sync",previous:{title:"useRecoilURLSync()",permalink:"/ko/docs/recoil-sync/api/useRecoilURLSync"},next:{title:"<RecoilURLSyncJSON/>",permalink:"/ko/docs/recoil-sync/api/RecoilURLSyncJSON"}},u=[],p={toc:u};function f(e){var t=e.components,n=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An optional effect that may be used instead of ",(0,o.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/syncEffect"},(0,o.kt)("inlineCode",{parentName:"a"},"syncEffect()"))," for ",(0,o.kt)("a",{parentName:"p",href:"/docs/recoil-sync/url-persistence"},"URL Persistence")," in order to specify additional options, such as if state changes should replace the URL or push a new entry in the browser history stack."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function urlSyncEffect<T>(options: {\n  ...SyncEffectOptions<T>,\n  history?: 'replace' | 'push',\n}): AtomEffect<T>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"history")," -",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"replace")," (default) - Replace the current browser URL with the updated state."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"push")," - Push a URL with the updated state onto the browser history stack.")))),(0,o.kt)("p",null,"If a transaction contains mutations from some atoms that replace and some atoms that push state changes, then the URL will first replace with the items to replace and then push a new URL on the stack with the full changes from the batched transaction."))}f.isMDXComponent=!0}}]);
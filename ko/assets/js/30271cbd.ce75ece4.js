"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[9067],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),f=i,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(d,o(o({ref:n},s),{},{components:t})):r.createElement(d,o({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2171:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],c={title:"<RecoilURLSyncJSON ...props />",sidebar_label:"<RecoilURLSyncJSON/>"},l=void 0,p={unversionedId:"recoil-sync/api/RecoilURLSyncJSON",id:"recoil-sync/api/RecoilURLSyncJSON",title:"<RecoilURLSyncJSON ...props />",description:"A component from the Recoil Sync library to sync atoms using the syncEffect() or urlSyncEffect() atom effects with the browser URL.",source:"@site/docs/recoil-sync/api/RecoilURLSyncJSON.md",sourceDirName:"recoil-sync/api",slug:"/recoil-sync/api/RecoilURLSyncJSON",permalink:"/ko/docs/recoil-sync/api/RecoilURLSyncJSON",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/recoil-sync/api/RecoilURLSyncJSON.md",tags:[],version:"current",frontMatter:{title:"<RecoilURLSyncJSON ...props />",sidebar_label:"<RecoilURLSyncJSON/>"},sidebar:"recoil-sync",previous:{title:"urlSyncEffect()",permalink:"/ko/docs/recoil-sync/api/urlSyncEffect"},next:{title:"useRecoilURLSyncJSON()",permalink:"/ko/docs/recoil-sync/api/useRecoilURLSyncJSON"}},s=[{value:"Examples",id:"examples",children:[],level:2}],u={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A component from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/introduction"},"Recoil Sync library")," to sync atoms using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/syncEffect"},(0,a.kt)("inlineCode",{parentName:"a"},"syncEffect()"))," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/urlSyncEffect"},(0,a.kt)("inlineCode",{parentName:"a"},"urlSyncEffect()"))," atom effects with the browser URL."),(0,a.kt)("p",null,"This is identical to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/RecoilURLSync"},(0,a.kt)("inlineCode",{parentName:"a"},"<RecoilURLSync/>"))," component except that it provides built-in JSON encoding and does not accept ",(0,a.kt)("inlineCode",{parentName:"p"},"serialize"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"deserialize")," options."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON"},"JSON standard")," encodes JavaScript primitives and objects with the corresponding ",(0,a.kt)("a",{parentName:"p",href:"/docs/refine/introduction"},"Refine")," checkers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"null")," - ",(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/Primitive_Checkers#literal"},(0,a.kt)("inlineCode",{parentName:"a"},"literal(null)"))," or ",(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/Primitive_Checkers#nullable"},(0,a.kt)("inlineCode",{parentName:"a"},"nullable(...)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"boolean")," - ",(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/Primitive_Checkers#boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"boolean()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"number")," - ",(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/Primitive_Checkers#number"},(0,a.kt)("inlineCode",{parentName:"a"},"number()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"string")," - ",(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/Primitive_Checkers#string"},(0,a.kt)("inlineCode",{parentName:"a"},"string()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Array")," - ",(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/Collection_Checkers#array"},(0,a.kt)("inlineCode",{parentName:"a"},"array(...)"))," or ",(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/Collection_Checkers#tuple"},(0,a.kt)("inlineCode",{parentName:"a"},"tuple(...)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Object")," - ",(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/Collection_Checkers#object"},(0,a.kt)("inlineCode",{parentName:"a"},"object(...)"))," or ",(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/Collection_Checkers#dict"},(0,a.kt)("inlineCode",{parentName:"a"},"dict(...)")))),(0,a.kt)("p",null,"This implementation handles ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," as an empty query param or a non-existent object property."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," class is also supported by encoding it as an ISO string.  This can be re-hydrated back to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," object if you use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/refine/api/Primitive_Checkers#jsondate"},(0,a.kt)("inlineCode",{parentName:"a"},"jsonDate()"))," checker from ",(0,a.kt)("a",{parentName:"p",href:"/docs/refine/introduction"},"Refine"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Set")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," JavaScript containers are not supported with JSON.  You can use ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/RecoilURLSyncTransit"},"Transit encoding")," to encode those containers and custom user classes."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/url-persistence"},"URL Persistence Guide")," for examples."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[5820],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8265:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"syncEffect(...)",sidebar_label:"syncEffect()"},l=void 0,s={unversionedId:"recoil-sync/api/syncEffect",id:"recoil-sync/api/syncEffect",title:"syncEffect(...)",description:"A function to get an atom effect for the recoil-sync library to synchronize an atom with external state defined with the useRecoilSync() hook or `` component.",source:"@site/docs/recoil-sync/api/syncEffect.md",sourceDirName:"recoil-sync/api",slug:"/recoil-sync/api/syncEffect",permalink:"/ko/docs/recoil-sync/api/syncEffect",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/recoil-sync/api/syncEffect.md",tags:[],version:"current",frontMatter:{title:"syncEffect(...)",sidebar_label:"syncEffect()"},sidebar:"recoil-sync",previous:{title:"URL Persistence",permalink:"/ko/docs/recoil-sync/url-persistence"},next:{title:"useRecoilSync()",permalink:"/ko/docs/recoil-sync/api/useRecoilSync"}},p=[{value:"Examples",id:"examples",children:[],level:2},{value:"Advanced Mappings",id:"advanced-mappings",children:[{value:"<code>read</code> Interface",id:"read-interface",children:[],level:3},{value:"<code>write</code> Interface",id:"write-interface",children:[],level:3}],level:2}],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A function to get an ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/atom-effects"},"atom effect")," for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-sync/introduction"},(0,i.kt)("inlineCode",{parentName:"a"},"recoil-sync"))," library to synchronize an atom with external state defined with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/useRecoilSync"},(0,i.kt)("inlineCode",{parentName:"a"},"useRecoilSync()"))," hook or ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/RecoilSync"},(0,i.kt)("inlineCode",{parentName:"a"},"<RecoilSync/>"))," component."),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function syncEffect<T>(options: {\n  refine: Checker<T>,\n\n  itemKey?: string,\n  storeKey?: string,\n\n  syncDefault?: boolean,\n\n  // Optional for advanced mappings\n  read?: ReadAtom,\n  write?: WriteAtom<T>,\n}): AtomEffect<T>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refine")," - A ",(0,i.kt)("a",{parentName:"li",href:"/docs/refine/introduction"},"Refine")," ",(0,i.kt)("a",{parentName:"li",href:"/docs/refine/api/Checkers"},(0,i.kt)("inlineCode",{parentName:"a"},"Checker<>"))," function which validates the input")),(0,i.kt)("p",null,"Optional options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"itemKey")," - A string key for this particular atom in the external store.  If not provided it defaults to the atom's own key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storeKey")," - A string key to match this effect with a ",(0,i.kt)("a",{parentName:"li",href:"/docs/recoil-sync/api/useRecoilSync"},(0,i.kt)("inlineCode",{parentName:"a"},"useRecoilSync()"))," store to sync with."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"syncDefault")," - If true, the atom will sync the actual default value instead of clearing or resetting the external state.  When set this will also attempt to write the default value when the atom is first read, not just when it is set."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read")," - An optional callback describing how to read this atom from the external store."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"write")," - An optional callback describing how to write this atom to the external store.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-sync/introduction#input-validation"},"Recoil Sync library guide")," for examples."),(0,i.kt)("h2",{id:"advanced-mappings"},"Advanced Mappings"),(0,i.kt)("h3",{id:"read-interface"},(0,i.kt)("inlineCode",{parentName:"h3"},"read")," Interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"type ReadItem = ItemKey =>\n  | void\n  | DefaultValue\n  | Promise<DefaultValue | mixed>\n  | Loadable<DefaultValue | mixed>\n  | mixed;\n\ntype ReadAtom = ({read: ReadItem}) =>\n  | DefaultValue\n  | Promise<DefaultValue | mixed>\n  | Loadable<DefaultValue | mixed>\n  | mixed;\n")),(0,i.kt)("h3",{id:"write-interface"},(0,i.kt)("inlineCode",{parentName:"h3"},"write")," Interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"type WriteItem = <T>(ItemKey, DefaultValue | T) => void;\ntype ResetItem = ItemKey => void;\n\ntype WriteAtomInterface = {\n  write: WriteItem,\n  reset: ResetItem,\n  read: ReadItem,\n};\ntype WriteAtom<T> = (WriteAtomInterface, DefaultValue | T) => void;\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-sync/introduction#advanced-atom-mappings"},"Recoil Sync library guide")," for examples."))}f.isMDXComponent=!0}}]);
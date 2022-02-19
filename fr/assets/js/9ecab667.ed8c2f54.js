"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[1297],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,y=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2122:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Implementing a Store",sidebar_label:"Implementing a Store"},l=void 0,s={unversionedId:"recoil-sync/implement-store",id:"recoil-sync/implement-store",title:"Implementing a Store",description:"While the library comes with some built-in stores, you can implement your own using useRecoilSync() or `.  The hook and component forms are equivalent, use whichever is more convenient for you.  Specify an optional storeKey` to identify and match up which atoms should sync with which store.  Then, specify the following optional callbacks to define the behavior for your store:",source:"@site/docs/recoil-sync/implement-store.md",sourceDirName:"recoil-sync",slug:"/recoil-sync/implement-store",permalink:"/fr/docs/recoil-sync/implement-store",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/recoil-sync/implement-store.md",tags:[],version:"current",frontMatter:{title:"Implementing a Store",sidebar_label:"Implementing a Store"},sidebar:"recoil-sync",previous:{title:"Syncing Atoms",permalink:"/fr/docs/recoil-sync/sync-effect"},next:{title:"URL Persistence",permalink:"/fr/docs/recoil-sync/url-persistence"}},p=[{value:"Example",id:"example",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"While the library comes with some built-in stores, you can implement your own using ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/useRecoilSync"},(0,i.kt)("inlineCode",{parentName:"a"},"useRecoilSync()"))," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/RecoilSync"},(0,i.kt)("inlineCode",{parentName:"a"},"<RecoilSync/>")),".  The hook and component forms are equivalent, use whichever is more convenient for you.  Specify an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"storeKey")," to identify and match up which atoms should sync with which store.  Then, specify the following optional callbacks to define the behavior for your store:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/recoil-sync/api/useRecoilSync#read-interface"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"read")))," - How to read an individual item from the external store, such as when initializing the atom."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/recoil-sync/api/useRecoilSync#write-interface"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"write")))," - How to write mutated atom state to the external store."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/recoil-sync/api/useRecoilSync#listen-interface"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"listen")))," - How to subscribe to async updates from the store to mutate atom state.")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/useRecoilSync"},"API reference")," for the full details on the callbacks."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"An example store that will initialize atoms based on React prop values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'function InitFromProps(props) {\n  return (\n    <RecoilSync\n      storeKey="init-from-props"\n      read={itemKey => props[itemKey]}\n    />\n  );\n}\n')),(0,i.kt)("p",null,"An example store that will synchronize with a custom database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function SyncWithDB() {\n  const connection = useMyDB();\n  useRecoilSync({\n    storeKey: 'my-db',\n    read: itemKey => connection.get(itemKey),\n    write: ({diff}) => {\n      for (const [key, value] of diff) {\n        connection.set(key, value);\n      }\n    },\n    listen: ({updateItem}) => {\n      const subscription = connection.subscribe((key, value) => {\n        updateItem(key, value);\n      });\n      return () => subscription.release();\n    },\n  });\n  return null;\n}\n")))}m.isMDXComponent=!0}}]);
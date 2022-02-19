"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4437],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2369:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Sync Atom Effect - syncEffect()",sidebar_label:"Syncing Atoms"},l=void 0,c={unversionedId:"recoil-sync/sync-effect",id:"recoil-sync/sync-effect",title:"Sync Atom Effect - syncEffect()",description:"syncEffect() is an atom effect is used to tag atoms that should be synchronized and have them initialize their value with the external store.  The only required option is refine for input validation.  The itemKey option allows you to specify a key for this particular atom with the external store.  If not specified, it defaults to the atom's own key.  A storeKey can also be provided to match up which external store to sync with, if you have more than one.  There are additional options, such as read and write for more advanced cases.",source:"@site/docs/recoil-sync/sync-effect.md",sourceDirName:"recoil-sync",slug:"/recoil-sync/sync-effect",permalink:"/zh-hans/docs/recoil-sync/sync-effect",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/recoil-sync/sync-effect.md",tags:[],version:"current",frontMatter:{title:"Sync Atom Effect - syncEffect()",sidebar_label:"Syncing Atoms"},sidebar:"recoil-sync",previous:{title:"Introduction",permalink:"/zh-hans/docs/recoil-sync/introduction"},next:{title:"Implementing a Store",permalink:"/zh-hans/docs/recoil-sync/implement-store"}},p=[{value:"Input Validation",id:"input-validation",children:[],level:2},{value:"Backward Compatibility",id:"backward-compatibility",children:[{value:"Upgrade atom type",id:"upgrade-atom-type",children:[],level:3},{value:"Upgrade atom key",id:"upgrade-atom-key",children:[],level:3},{value:"Upgrade atom storage",id:"upgrade-atom-storage",children:[],level:3}],level:2},{value:"Syncing with Multiple Storages",id:"syncing-with-multiple-storages",children:[{value:"Abstract Stores",id:"abstract-stores",children:[],level:3}],level:2},{value:"Advanced Atom Mappings",id:"advanced-atom-mappings",children:[{value:"Many-to-one",id:"many-to-one",children:[],level:3},{value:"One-to-many",id:"one-to-many",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/syncEffect"},(0,o.kt)("inlineCode",{parentName:"a"},"syncEffect()"))," is an ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/atom-effects"},"atom effect")," is used to tag atoms that should be synchronized and have them initialize their value with the external store.  The only required option is ",(0,o.kt)("inlineCode",{parentName:"p"},"refine")," for input validation.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"itemKey")," option allows you to specify a key for this particular atom with the external store.  If not specified, it defaults to the atom's own key.  A ",(0,o.kt)("inlineCode",{parentName:"p"},"storeKey")," can also be provided to match up which external store to sync with, if you have more than one.  There are additional options, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," for more advanced cases."),(0,o.kt)("h2",{id:"input-validation"},"Input Validation"),(0,o.kt)("p",null,"To validate the input from the external system and refine from ",(0,o.kt)("inlineCode",{parentName:"p"},"mixed")," to a strongly typed Flow or TypeScript input, ",(0,o.kt)("inlineCode",{parentName:"p"},"recoil-sync")," uses the ",(0,o.kt)("a",{parentName:"p",href:"/docs/refine/introduction"},"Refine")," library.  This library uses a set of composable functions to describe the type and perform runtime validation.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"refine")," property of ",(0,o.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/syncEffect"},(0,o.kt)("inlineCode",{parentName:"a"},"syncEffect()"))," takes a ",(0,o.kt)("a",{parentName:"p",href:"/docs/refine/api/Checkers"},"Refine ",(0,o.kt)("inlineCode",{parentName:"a"},"Checker")),".  The type of the Refine checker must match the type of the atom."),(0,o.kt)("p",null,"Example effect for a simple string atom:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"  syncEffect({ refine: string() }),\n")),(0,o.kt)("p",null,"Example effect for a nullable number:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"  syncEffect({ refine: nullable(number()) }),\n")),(0,o.kt)("p",null,"Custom user class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"  syncEffect({ refine: custom(x => x instanceof MyClass ? x : null) }),\n")),(0,o.kt)("p",null,"More complex example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"  syncEffect({ refine: object({\n    id: number(),\n    friends: array(number()),\n    positions: dict(tuple(boolean(), number())),\n  })}),\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/refine/introduction"},"Refine documentation")," for details."),(0,o.kt)("h2",{id:"backward-compatibility"},"Backward Compatibility"),(0,o.kt)("p",null,"It can be important to support legacy systems or external systems with previous versions of state.  There are several mechanisms available for this"),(0,o.kt)("h3",{id:"upgrade-atom-type"},"Upgrade atom type"),(0,o.kt)("p",null,"If an atom was persisted to a store and you have since changed the type of the atom, you can use Refine's ",(0,o.kt)("a",{parentName:"p",href:"/docs/refine/api/Advanced_Checkers#match"},(0,o.kt)("inlineCode",{parentName:"a"},"match()"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/refine/api/Advanced_Checkers#asType"},(0,o.kt)("inlineCode",{parentName:"a"},"asType()"))," to upgrade the type.  This example reads an ID that is currently a number but was previously stored as a string or an object.  It will upgrade the previous types and the atom will always store the latest type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const myAtom = atom<number>({\n  key: 'MyAtom',\n  default: 0,\n  effects: [\n    syncEffect({ refine: match(\n      number(),\n      asType(string(), x => parseInt(x)),\n      asType(object({value: number()}), x => x.value)),\n    }),\n  ],\n});\n")),(0,o.kt)("h3",{id:"upgrade-atom-key"},"Upgrade atom key"),(0,o.kt)("p",null,"The atom's key may also change over time.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," option allows us to specify how to read the atom from the external store"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const myAtom = atom<number>({\n  key: 'MyAtom',\n  default: 0,\n  effects: [\n    syncEffect({\n      itemKey: 'new_key',\n      read: ({read}) => read('new_key') ?? read('old_key'),\n    }),\n  ],\n});\n")),(0,o.kt)("p",null,"More complex transformations when reading are possible, see below."),(0,o.kt)("h3",{id:"upgrade-atom-storage"},"Upgrade atom storage"),(0,o.kt)("p",null,"You can also migrate an atom to sync with a new external store using multiple effects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const myAtom = atom<number>({\n  key: 'MyAtom',\n  default: 0,\n  effects: [\n    syncEffect({ storeKey: 'old_store', refine: number() }),\n    syncEffect({ storeKey: 'new_store', refine: number() }),\n  ],\n});\n")),(0,o.kt)("h2",{id:"syncing-with-multiple-storages"},"Syncing with Multiple Storages"),(0,o.kt)("p",null,"It may be desirable for an atom to always sync with multiple storage systems.  For example, an atom for some UI state may want to persist the current state for a shareable URL while also syncing with a per-user default stored in the cloud.  This can be done simply by composing multiple atom effects (you can mix-and-match using ",(0,o.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/syncEffect"},(0,o.kt)("inlineCode",{parentName:"a"},"syncEffect()"))," or other atom effects).  The effects are executed in order, so the last one gets priority for initializing the atom."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const currentTabState = atom<string>({\n  key: 'CurrentTab',\n  default: 'FirstTab', // Fallback default for first-use\n  effects: [\n    // Initialize default with per-user default from the cloud\n    syncEffect({ storeKey: 'user_defaults', refine: string() }),\n\n    // Override with state stored in URL if reloading or sharing\n    syncEffect({ storeKey: 'url', refine: string() }),\n  ],\n});\n")),(0,o.kt)("h3",{id:"abstract-stores"},"Abstract Stores"),(0,o.kt)("p",null,"The same atom might also sync with different storages depending on the host environment.  For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const currentUserState = atom<number>({\n  key: 'CurrentUser',\n  default: 0,\n  effects: [\n    syncEffect({ storeKey: 'ui_state', refine: number() }),\n  ],\n});\n")),(0,o.kt)("p",null,"A standalone app might sync that atom with the URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function MyStandaloneApp() {\n  return (\n    <RecoilRoot>\n      <RecoilURLSyncTransit storeKey=\"ui_state\" location={{part: 'hash'}} />\n        ...\n    </RecoilRoot>\n  );\n}\n")),(0,o.kt)("p",null,"While another app that uses components which use the same atom might want to sync it with local storage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function AnotherApp() {\n  return (\n    <RecoilRoot>\n      <RecoilSyncLocalStorage storeKey="ui_state" />\n        ...\n    </RecoilRoot>\n  )\n}\n')),(0,o.kt)("h2",{id:"advanced-atom-mappings"},"Advanced Atom Mappings"),(0,o.kt)("p",null,"Atoms may not map to items in the external store one-to-one.  ",(0,o.kt)("a",{parentName:"p",href:"/docs/recoil-sync/introduction#upgrade-atom-key"},"This example")," describes using ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," to implement a key upgrade.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," options for ",(0,o.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/syncEffect"},(0,o.kt)("inlineCode",{parentName:"a"},"syncEffect()"))," can be used to implement more complex mappings."),(0,o.kt)("p",null,"Care must be taken with advanced mappings as there could be ordering issues, atoms may try to overwrite the same items, etc."),(0,o.kt)("h3",{id:"many-to-one"},"Many-to-one"),(0,o.kt)("p",null,"Example effect for an atom that pulls state from multiple external items:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function manyToOneSyncEffect() {\n  syncEffect({\n    refine: object({ foo: nullable(number()), bar: nullable(number()) }),\n    read: ({read}) => ({foo: read('foo'), bar: read('bar')}),\n    write: ({write, reset}, newValue) => {\n      if (newValue instanceof DefaultValue) {\n        reset('foo');\n        reset('bar');\n      } else {\n        write('foo', newValue.foo);\n        write('bar', newValue.bar);\n      }\n    },\n  });\n}\n\natom<{foo: number, bar: number}>({\n  key: 'MyObject',\n  default: {},\n  effects: [manyToOneSyncEffect()],\n});\n")),(0,o.kt)("h3",{id:"one-to-many"},"One-to-many"),(0,o.kt)("p",null,"Example effect that pulls state from a prop in a compound external object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function oneToManySyncEffect(prop: string) {\n  const validate = assertion(dict(nullable(number())));\n  syncEffect({\n    refine: nullable(number()),\n    read: ({read}) => validate(read('compound'))[prop],\n    write: ({write, read}, newValue) => {\n      const compound = {...validate(read('compound'))};\n      if (newValue instanceof DefaultValue) {\n        delete compound[prop];\n        write('compound', compound);\n      } else {\n        write('compound', {...compound, [prop]: newValue});\n      }\n    },\n  });\n}\n\natom<number>({\n  key: 'MyNumber',\n  default: 0,\n  effects: [oneToManySyncEffect('foo')],\n});\n")))}m.isMDXComponent=!0}}]);
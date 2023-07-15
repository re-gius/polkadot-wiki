"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},16769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"maintain-guides-how-to-stop-validating",title:"How to Stop Validating",sidebar_label:"How to Stop Validating",description:"Steps on how to stop validating.",keywords:["validating","how to stop validating","validate","chill"],slug:"../maintain-guides-how-to-stop-validating"},l=void 0,d={unversionedId:"maintain/maintain-guides-how-to-stop-validating",id:"maintain/maintain-guides-how-to-stop-validating",title:"How to Stop Validating",description:"Steps on how to stop validating.",source:"@site/../docs/maintain/maintain-guides-how-to-stop-validating.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-stop-validating",permalink:"/docs/maintain-guides-how-to-stop-validating",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-stop-validating.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1689335021,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"maintain-guides-how-to-stop-validating",title:"How to Stop Validating",sidebar_label:"How to Stop Validating",description:"Steps on how to stop validating.",keywords:["validating","how to stop validating","validate","chill"],slug:"../maintain-guides-how-to-stop-validating"},sidebar:"docs",previous:{title:"How to Chill",permalink:"/docs/maintain-guides-how-to-chill"},next:{title:"Validator Community Overview",permalink:"/docs/maintain-guides-validator-community"}},p={},u=[{value:"Chill Validator",id:"chill-validator",level:2},{value:"Purge validator session keys",id:"purge-validator-session-keys",level:2},{value:"Unbond your tokens",id:"unbond-your-tokens",level:2}],c={toc:u},h="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)(h,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you wish to remain a validator or nominator (e.g. you're only stopping for planned downtime or\nserver maintenance), submitting the ",(0,i.kt)("inlineCode",{parentName:"p"},"chill")," extrinsic in the ",(0,i.kt)("inlineCode",{parentName:"p"},"staking")," pallet should suffice. It is\nonly if you wish to unbond funds or reap an account that you should continue with the following."),(0,i.kt)("p",null,"To ensure a smooth stop to validation, make sure you should do the following actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chill your validator"),(0,i.kt)("li",{parentName:"ul"},"Purge validator session keys"),(0,i.kt)("li",{parentName:"ul"},"Unbond your tokens")),(0,i.kt)("p",null,"These can all be done with ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"PolkadotJS Apps")," interface or with\nextrinsics."),(0,i.kt)("h2",{id:"chill-validator"},"Chill Validator"),(0,i.kt)("p",null,"To chill your validator or nominator, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"staking.chill()")," extrinsic. See the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-chill"},"How to Chill")," page for more information. You can also\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking-advanced"},"claim your rewards")," at this time."),(0,i.kt)("h2",{id:"purge-validator-session-keys"},"Purge validator session keys"),(0,i.kt)("p",null,"Purging the validator's session keys removes the key reference. This can be done through the\n",(0,i.kt)("inlineCode",{parentName:"p"},"session.purgeKeys()")," extrinsic. The key reference exists on the account that originally called the\n",(0,i.kt)("inlineCode",{parentName:"p"},"session.set_keys()")," extrinsic, which could be the stash or the staking proxy (at the time the keys\nwere set)."),(0,i.kt)("admonition",{title:"Purge keys using the same account that set the keys",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Make sure to call the session.purge_keys() extrinsic from the same account that set the keys in the\nfirst place in order for the correct reference to be removed. Calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"session.purge_keys()"),"\nfrom the wrong account, although it may succeed, will result in a reference on the other account\nthat ",(0,i.kt)("strong",{parentName:"p"},"cannot")," be removed, and as a result that account cannot be reaped.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"If you skip this step, you will not be able to reap your stash account"),", and you will also need\nto rebond, purge the session keys, unbond, and wait the unbonding period again before being able to\ntransfer your tokens."),(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-nominate-polkadot"},"Unbonding and Rebonding")," for more details.")),(0,i.kt)("h2",{id:"unbond-your-tokens"},"Unbond your tokens"),(0,i.kt)("p",null,"Unbonding your tokens can be done through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Network > Staking > Account actions"),' page in\nPolkadotJS Apps by clicking the corresponding stash account dropdown and selecting "Unbond funds".\nThis can also be done through the ',(0,i.kt)("inlineCode",{parentName:"p"},"staking.unbond()")," extrinsic with the staking proxy account."))}m.isMDXComponent=!0}}]);
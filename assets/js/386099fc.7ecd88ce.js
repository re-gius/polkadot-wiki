(self.webpackChunk=self.webpackChunk||[]).push([[8139],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(74165),o=a(15861),r=a(67294),s=a(87152),i=a(30967),l=a(67425);function u(e,t,a){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)((0,n.Z)().mark((function e(t,a,o){var r,l,u,p,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){e.next=18;break}return e.abrupt("return");case 18:return u=new s.U(r),e.next=21,i.G.create({provider:u});case 21:p=e.sent,(d=a.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=d[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"precise":(0,l.Precise)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"erasToDays":(0,l.ErasToDays)(e,n,a);break;case"percentage":(0,l.Percentage)(e,n);break;case"permillToPercent":(0,l.PermillToPercent)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,a=e.path,s=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,p=(0,r.useState)(""),c=p[0],h=p[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?d(s.toString(),l,t,h):h(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t,a,h);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(o,l,t,h):h(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(i){console.log(i)}}}),[]),c}},67425:e=>{var t="polkadot",a="kusama",n="statemine",o="statemint",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,s,i){var l=void 0;if(s===t||s===o)l=3;else{if(s!==a&&s!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),i((e=Number.isInteger(e/r[s].precision)?e/r[s].precision+" "+r[s].symbol:(e/r[s].precision).toFixed(l)+" "+r[s].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/r[t].precision+" "+r[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,r,s){var i=void 0;if(s===t||s===o)i=1;else{if(s!==a&&s!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=4}r((e/=i).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},60283:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=a(47940),i=["components"],l={id:"learn-polkadot-opengov-treasury",title:"Treasury",sidebar_label:"Treasury",description:"Polkadot's On-chain Treasury.",keywords:["treasury","funds","funding","tips","tipping"],slug:"../learn-polkadot-opengov-treasury"},u=void 0,p={unversionedId:"learn/learn-polkadot-opengov-treasury",id:"learn/learn-polkadot-opengov-treasury",title:"Treasury",description:"Polkadot's On-chain Treasury.",source:"@site/../docs/learn/learn-polkadot-opengov-treasury.md",sourceDirName:"learn",slug:"/learn-polkadot-opengov-treasury",permalink:"/docs/learn-polkadot-opengov-treasury",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-polkadot-opengov-treasury.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1701269541,formattedLastUpdatedAt:"Nov 29, 2023",frontMatter:{id:"learn-polkadot-opengov-treasury",title:"Treasury",sidebar_label:"Treasury",description:"Polkadot's On-chain Treasury.",keywords:["treasury","funds","funding","tips","tipping"],slug:"../learn-polkadot-opengov-treasury"},sidebar:"docs",previous:{title:"Technical Fellowship",permalink:"/docs/learn-polkadot-technical-fellowship"},next:{title:"Tokens and Assets",permalink:"/docs/learn-assets-index"}},d={},c=[{value:"Treasury Inflow and Outflow",id:"treasury-inflow-and-outflow",level:2},{value:"Treasury Tracks",id:"treasury-tracks",level:2},{value:"Bounties",id:"bounties",level:2},{value:"Parent Bounties",id:"parent-bounties",level:3},{value:"Child Bounties",id:"child-bounties",level:3}],h={toc:c},k="wrapper";function f(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)(k,(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Treasury is a pot of funds collected through a portion of block production rewards, transaction\nfees, slashing, and ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-inflation"},"staking inefficiencies"),".Treasury funds are held in a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-advanced#system-accounts"},"system account")," that cannot be controlled by any\nexternal account; only the system internal logic can access it."),(0,r.kt)("admonition",{title:"Creating a Treasury Proposal on Polkadot OpenGov",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you would like to create a treasury proposal on Polkadot OpenGov, follow the instructions\noutlined on ",(0,r.kt)("a",{parentName:"p",href:"./learn-guides-treasury#creating-a-treasury-proposal"},"this how-to guide"),".")),(0,r.kt)("h2",{id:"treasury-inflow-and-outflow"},"Treasury Inflow and Outflow"),(0,r.kt)("p",null,"Tokens that are deposited into the Treasury (i.e. the inflow) is determined by the following\nmechanisms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Transaction fees:")," 80% of the transaction fees of every submitted extrinsic is diverted to the\nTreasury, while 20% is given to the block producers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Staking inefficiencies:")," the network knows an exogenously determined parameter called ideal\nstaking rate. The APY for stakers (nominators & validators) decreases whenever the actual staking\nrate is not equal to the ideal staking rate. To keep inflation constant at 10%, the system does\nnot creates less tokens, rather some share of the overall reward for stakers is diverted to the\nTreasury (more information\n",(0,r.kt)("a",{parentName:"li",href:"https://research.web3.foundation/Polkadot/overview/token-economics"},"here"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Slashes:")," whenever validators and nominators are slashed, a share of the slashed tokens are\ndiverted to Treasury. They are typically rare and unpredictable events."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Transfers:")," everyone can send funds to the Treasury directly. This is a rare event and\ntypically due to grantees reimbursing some of the amount they got allocated for various reasons.")),(0,r.kt)("p",null,"The outflow is determined by the following mechanisms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Burned tokens:")," at the end of each spend period\n",(0,r.kt)(s.Z,{network:"polkadot",path:"consts.treasury.burn",defaultValue:1e4,filter:"permillToPercent",mdxType:"RPC"}),"","%\nof the available funds are burned."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Treasury proposals & Bounties:")," they make up the largest share of outflow tokens to the\ncommunity and need to be approved by governance. Then, payouts occur at the end of a\n",(0,r.kt)("a",{parentName:"li",href:"/docs/glossary#spend-period"},"spend period"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tips:")," smaller payouts directly to grantees that can happen within a\n",(0,r.kt)("a",{parentName:"li",href:"/docs/glossary#spend-period"},"spend period"),".")),(0,r.kt)("admonition",{title:"Spend Period Schedule",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"On Polkadot-JS UI, navigate to Governance > Treasury to view the status of current\n",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary#spend-period"},"spend period"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"preimage-whitelist",src:a(29620).Z,width:"2508",height:"413"}))),(0,r.kt)("h2",{id:"treasury-tracks"},"Treasury Tracks"),(0,r.kt)("p",null,"OpenGov allows for managing funds through six tracks, each with its own\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-origins#origins-and-tracks-info"},"origin and track parameters"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-polkadot-opengov-origins#treasurer"},"Treasurer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-polkadot-opengov-origins#big-spender"},"Big Spender")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-polkadot-opengov-origins#medium-spender"},"Medium Spender")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-polkadot-opengov-origins#small-spender"},"Small Spender")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-polkadot-opengov-origins#big-tipper"},"Big Tipper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-polkadot-opengov-origins#small-tipper"},"Small Tipper"))),(0,r.kt)("admonition",{title:"How to access Treasury funds?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Access to Treasury funds requires successful enactment of referendum in the respective treasury\ntrack on-chain. Learn how to submit a treasury proposal for referendum\n",(0,r.kt)("a",{parentName:"p",href:"./learn-guides-treasury#creating-a-treasury-proposal"},"here"),".")),(0,r.kt)("h2",{id:"bounties"},"Bounties"),(0,r.kt)("h3",{id:"parent-bounties"},"Parent Bounties"),(0,r.kt)("p",null,"Getting treasury funding through OpenGov, depending on which treasury track you submit your\nreferendum, can be a long and uncertain process. This is not always a suitable option, for example,\nfor event organizers who need to pay costs upfront or close to the event's date. Bounties solve this\nproblem by procuring access to treasury funds in a single shot and using them to fund multiple\nevents later on through ",(0,r.kt)("a",{parentName:"p",href:"#child-bounties"},"child bounties"),". This is why bounties are also called\n",(0,r.kt)("em",{parentName:"p"},"parent")," bounties."),(0,r.kt)("p",null,"Parent bounty proposals aim to reserve a portion of treasury funds once, which will be used later.\nThey save proponents the time needed to create and obtain approval for several OpenGov referenda.\nBounties are managed by curators, where the curator is usually a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-multisig"},"multi-signature account"),". Bounties can access a large amount of funds,\nso managing those funds with a multisig is a good practice to enhance security. Essentially,\ncurators are multisig addresses with agency over a portion of the treasury to promote events, fix a\nbug or vulnerability, develop a strategy, or monitor a set of tasks related to a specific topic, all\nfor the benefit of the Polkadot ecosystem."),(0,r.kt)("p",null,"A proposer can ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-guides-bounties#submit-a-bounty-proposal"},"submit a bounty proposal")," to\nOpenGov,\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-guides-bounties#assign-a-curator-to-a-bounty"},"with a curator to be defined later"),", whose\nbackground and expertise is such that they can determine when the task is complete."),(0,r.kt)("p",null,"When submitting the value of the bounty, the proposer can specify a fee that will be paid to\ncurators willing to invest their time and expertise in the task; this amount will be included in the\ntotal value of the bounty. In this sense, the curator's fee can be defined as the difference between\nthe amounts paid to child bounty awardees and the total value of the bounty."),(0,r.kt)("p",null,"Curators are selected through OpenGov referendum after the bounty proposal passes; and they need to\npay an upfront deposit to take the position. The deposit is calculated by multiplying the curator\nfee by\n",(0,r.kt)(s.Z,{network:"polkadot",path:"consts.bounties.curatorDepositMultiplier",defaultValue:5e5,filter:"permillToPercent",mdxType:"RPC"}),"","%,\nand it can range between a minimum of\n",(0,r.kt)(s.Z,{network:"polkadot",path:"consts.bounties.curatorDepositMin",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"","\nand a maximum of\n",(0,r.kt)(s.Z,{network:"polkadot",path:"consts.bounties.curatorDepositMax",defaultValue:2e12,filter:"humanReadable",mdxType:"RPC"}),"",".\nThis deposit can be used to punish curators if they act maliciously. However, if they are successful\nin managing the bounty to completion, they will receive their deposit back, and part of the bounty\nfunding as a payment for their efforts."),(0,r.kt)("p",null,"Curators are expected to have a decent track record in addressing the issues the bounty wants to\nsolve. They should be very knowledgeable on the topics covered by the bounty and have proven project\nmanagement skills or experience. These recommendations help ensure an effective use of the bounty\nmechanism. A Bounty is a reward for a specified body of work or set of objectives that needs to be\nexecuted for a predefined treasury amount designated to be paid out. The responsibility of assigning\na payout address once the specified set of objectives is completed is delegated to the curator."),(0,r.kt)("p",null,"The bounty has a predetermined duration of\n",(0,r.kt)(s.Z,{network:"polkadot",path:"consts.bounties.bountyUpdatePeriod",defaultValue:1296e3,filter:"blocksToDays",mdxType:"RPC"}),"","\ndays, with possible extension(s) to be requested by the curator. To maintain flexibility during the\ntasks\u2019 curation, the curator will also be able to create child bounties for more granularity in the\nallocation of funds and as part of a nested iteration of the bounty mechanism."),(0,r.kt)("h3",{id:"child-bounties"},"Child Bounties"),(0,r.kt)("p",null,"Child bounties are spawned from ",(0,r.kt)("a",{parentName:"p",href:"#parent-bounties"},"parent bounties"),". Child bounties are used to\naccess funds directly from the parent bounty without going through an OpenGov referendum."),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"Polkadot-JS Guides",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are an advanced user, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-guides-bounties"},"Polkadot-JS guides about bounties"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-guides-treasury"},"treasury"),".")))}f.isMDXComponent=!0},29620:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/treasury-spend-period-a4883f21d69a6f05ca497b9893cc89a5.png"},46601:()=>{}}]);
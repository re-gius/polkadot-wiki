"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6496],{73036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(74848),r=n(28453);const s={id:"build-smart-contracts",title:"Smart Contracts",sidebar_label:"Smart Contracts",description:"How smart contracts play their role in the Polkadot ecosystem.",keywords:["build","smart contract","evm","wasm"],slug:"../build-smart-contracts"},i=void 0,o={id:"build/build-smart-contracts",title:"Smart Contracts",description:"How smart contracts play their role in the Polkadot ecosystem.",source:"@site/../docs/build/build-smart-contracts.md",sourceDirName:"build",slug:"/build-smart-contracts",permalink:"/docs/build-smart-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-smart-contracts.md",tags:[],version:"current",lastUpdatedBy:"henrique-c-ladeira",lastUpdatedAt:1728142286e3,frontMatter:{id:"build-smart-contracts",title:"Smart Contracts",sidebar_label:"Smart Contracts",description:"How smart contracts play their role in the Polkadot ecosystem.",keywords:["build","smart contract","evm","wasm"],slug:"../build-smart-contracts"},sidebar:"docs",previous:{title:"Node Interaction",permalink:"/docs/build-node-interaction"},next:{title:"Protocol Development Resources",permalink:"/docs/build-protocol-index"}},c={},l=[{value:"Difference between developing a smart contract and a parachain",id:"difference-between-developing-a-smart-contract-and-a-parachain",level:2},{value:"Layer of Abstraction",id:"layer-of-abstraction",level:3},{value:"Gas Fees",id:"gas-fees",level:3},{value:"Building a Smart Contract",id:"building-a-smart-contract",level:2},{value:"Frontier EVM Contracts",id:"frontier-evm-contracts",level:3},{value:"Substrate Contracts",id:"substrate-contracts",level:3},{value:"Resources",id:"resources",level:4},{value:"Contracts Pallet",id:"contracts-pallet",level:3},{value:"Storage Rent: Deprecated",id:"storage-rent-deprecated",level:4},{value:"Polkadot Standards Proposals (PSPs)",id:"polkadot-standards-proposals-psps",level:3},{value:"Ink",id:"ink",level:3},{value:"Libraries for Smart Contracts in <code>ink!</code>",id:"libraries-for-smart-contracts-in-ink",level:4},{value:"Smart Contract Environments",id:"smart-contract-environments",level:2},{value:"Parity Tech",id:"parity-tech",level:3},{value:"Parachains",id:"parachains",level:3},{value:"Moonbeam",id:"moonbeam",level:4},{value:"Astar",id:"astar",level:4},{value:"Acala",id:"acala",level:4},{value:"Phala",id:"phala",level:4},{value:"Darwinia",id:"darwinia",level:4},{value:"Keep In Touch",id:"keep-in-touch",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The relay chain which is a layer 0 blockchain, does not support smart contracts natively. However,\nparachains which are layer 1 blockchains are equipped with the functionality to support smart\ncontracts."}),"\n",(0,a.jsxs)(t.p,{children:["The two primary supported smart contract environments are ",(0,a.jsx)(t.a,{href:"#ink",children:"ink!"})," and EVM. There are multiple\n",(0,a.jsx)(t.a,{href:"#parachains",children:"parachains that support both environments"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"difference-between-developing-a-smart-contract-and-a-parachain",children:"Difference between developing a smart contract and a parachain"}),"\n",(0,a.jsx)(t.h3,{id:"layer-of-abstraction",children:"Layer of Abstraction"}),"\n",(0,a.jsx)(t.p,{children:"When you write a smart contract, you are creating the instructions that associate with and deploy on\na specific chain address."}),"\n",(0,a.jsx)(t.p,{children:"In comparison, a runtime module on a parachain is the entire logic of a chain's state transitions\n(what's called a state transition function)."}),"\n",(0,a.jsx)(t.p,{children:"Smart contracts must consciously implement upgradeability while parachains have the ability to swap\nout their code entirely through a root command or via the governance pallet."}),"\n",(0,a.jsx)(t.p,{children:"When you build a smart contract, it will eventually be deployed to a target chain with its own\nenvironment. Parachains allow the developer to declare the environment of their own chain, even\nallowing others to write smart contracts for it."}),"\n",(0,a.jsx)(t.h3,{id:"gas-fees",children:"Gas Fees"}),"\n",(0,a.jsxs)(t.p,{children:["Smart contracts must find a way to limit their own execution, or else full nodes are vulnerable to\nDOS attacks. An infinite loop in a smart contract, for example, could consume the computational\nresources of an entire chain, preventing others from using it. The\n",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Halting_problem",children:"halting problem"}),' shows that even with a powerful\nenough language, it is impossible to know ahead of time whether or not a program will ever cease\nexecution. Some platforms, such as Bitcoin, get around this constraint by providing a very\nrestricted scripting language. Others, such as Ethereum, "charge" the smart contract "gas" for the\nrights to execute their code. If a smart contract does get into a state where execution will never\nhalt, it eventually runs out of gas, ceases execution, and any state transition that the smart\ncontract would have made is rolled back.']}),"\n",(0,a.jsxs)(t.p,{children:["Parachains can implement arbitrarily powerful programming languages and contain no gas notion for\ntheir own native logic. This means that some functionality is easier to implement for the developer,\nbut some constructs, such as a loop without a terminating condition, should ",(0,a.jsx)(t.em,{children:"never"})," be implemented.\nLeaving certain logic, such as complex loops that could run indefinitely, to a non-smart contract\nlayer, or even trying to eliminate it, will often be a wiser choice. Parachains try to be proactive,\nwhile smart contract platforms are event-driven."]}),"\n",(0,a.jsxs)(t.p,{children:["Relay chain and parachains typically use the ",(0,a.jsx)(t.em,{children:"weight-fee model"})," and not a ",(0,a.jsx)(t.em,{children:"gas-metering model"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"building-a-smart-contract",children:"Building a Smart Contract"}),"\n",(0,a.jsx)(t.p,{children:"The relay chain does not natively support smart contracts. However, since the parachains that\nconnect to the relay chain can support arbitrary state transitions, they support smart contracts."}),"\n",(0,a.jsx)(t.p,{children:"Substrate presently supports smart contracts out-of-the-box in several ways:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The EVM pallet offered by ",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/frontier",children:"Frontier"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["The\n",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/contracts/",children:"Contracts pallet"}),"\nin the FRAME library for Wasm-based contracts."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"frontier-evm-contracts",children:"Frontier EVM Contracts"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/paritytech/frontier",children:"Frontier"})," is the suite of tools that enables a Substrate\nchain to run Ethereum contracts (EVM) natively with the same API/RPC interface, Ethereum exposes on\nSubstrate. Ethereum Addresses can also be mapped directly to and from Substrate's SS58 scheme from\nexisting accounts."]}),"\n",(0,a.jsx)(t.h3,{id:"substrate-contracts",children:"Substrate Contracts"}),"\n",(0,a.jsxs)(t.p,{children:["Substrate offers a built-in\n",(0,a.jsx)(t.a,{href:"https://paritytech.github.io/substrate/master/pallet_contracts/index.html",children:"contract pallet"}),";\nparachains can also support ",(0,a.jsx)(t.a,{href:"/docs/learn-wasm",children:"WebAssembly"})," smart contracts. Additionally,\nthere is the ",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/frontier/tree/master/frame/evm#evm-module",children:"EVM Pallet"}),",\nwhich allows a parachain to implement the Ethereum Virtual Machine, thereby supporting almost direct\nports of Ethereum contracts."]}),"\n",(0,a.jsxs)(t.p,{children:["A video version of the recap of the smart contract situation is available on the\n",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=fKHkFBXaUxQ",children:"Polkadot YouTube channel"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"resources",children:"Resources"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://stackoverflow.com/a/56041305",children:"When should I build a Substrate runtime versus a Substrate smart contract"}),"?\nThis post answers the question more technically of when a developer might choose to develop a\nruntime versus a smart contract."]}),"\n",(0,a.jsx)(t.p,{children:"Here is the list of current resources available to developers who want to get started writing smart\ncontracts to deploy on parachains based on Substrate."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/paritytech/ink",children:"ink!"})," - Parity's ink to write smart contracts."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.substrate.io/tutorials/smart-contracts/",children:"Substrate ink! Workshop"})," - Walks you\nthrough the basics of writing and deploying an ERC-20 token using ",(0,a.jsx)(t.code,{children:"ink!"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"contracts-pallet",children:"Contracts Pallet"}),"\n",(0,a.jsx)(t.p,{children:"The experience of deploying to an EVM-based chain may be more familiar to developers that have\nwritten smart contracts before. However, the Contracts pallet makes some notable improvements to the\ndesign of the EVM:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Wasm"}),". The Contracts pallet uses WebAssembly as its compilation target. Any language that\ncompiles to Wasm can potentially be used to write smart contracts. Nevertheless, it is better to\nhave a dedicated domain-specific language, and for that reason Parity offers the ",(0,a.jsx)(t.a,{href:"#ink",children:"ink!"}),"\nlanguage."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Deposit"}),". Contracts must hold a deposit (named ",(0,a.jsx)(t.em,{children:"ContractDeposit"})," ) suitably large enough in\norder to justify their existence on-chain. A deployer needs to deposit this into the new contract\non top of the ",(0,a.jsx)(t.em,{children:"ExistentialDeposit"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Caching"}),". Contracts are cached by default and therefore means they only need to be deployed\nonce and afterward be instantiated as many times as you want. This helps to keep the storage load\non the chain down to the minimum. On top of this, when a contract is no longer being used and the\n",(0,a.jsx)(t.em,{children:"existential deposit"})," is drained, the code will be erased from storage (known as reaping)."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"storage-rent-deprecated",children:"Storage Rent: Deprecated"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"pallet_contracts"})," was initially designed to combat unbounded state growth by charging contracts for\nthe state they consume but has since been deprecated."]}),"\n",(0,a.jsxs)(t.p,{children:["See the associated ",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/substrate/pull/9669",children:"pull request"})," for more\ndetails."]}),"\n",(0,a.jsx)(t.h3,{id:"polkadot-standards-proposals-psps",children:"Polkadot Standards Proposals (PSPs)"}),"\n",(0,a.jsx)(t.p,{children:"Web3 Foundation supports proposals for Polkadot that define a set standards to fit ecosystem needs.\nThese standards go through several acceptance phases, where the engagement of the whole community is\nneeded to build valuable and future-proof standards. All the teams who will benefit from a standard\nneed to agree on its content."}),"\n",(0,a.jsxs)(t.p,{children:["Some of these PSPs are targeting Substrate's ",(0,a.jsx)(t.code,{children:"contracts"})," pallet:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md",children:"PSP22 - Fungible Token Standard"})," Please\nvisit ",(0,a.jsx)(t.a,{href:"https://github.com/w3f/PSPs",children:"Polkadot Standards Proposals (PSPs) Github"})," for more\ninformation."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"ink",children:"Ink"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/paritytech/ink",children:"ink!"})," is a domain specific language for writing smart contracts\nin Rust and compiles to Wasm code. As it states in its README, it is still in an experimental phase\nso brave developers should be aware that they might have a bumpy - but workable - development\nexperience. There are some projects that have built projects in ink! with a decent level of\ncomplexity such as Plasm's ",(0,a.jsx)(t.a,{href:"https://github.com/staketechnologies/Plasm",children:"Plasma contracts"}),", so it is\nmature enough to start building interesting things."]}),"\n",(0,a.jsxs)(t.p,{children:["For interested developers, they can get started writing smart contracts using ink! by studying the\n",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/ink/tree/master/examples",children:"examples"})," that were already written. These\ncan be used as guideposts to writing more complex logic that will be deployable on smart contract\nparachains."]}),"\n",(0,a.jsx)(t.p,{children:"ink! has laid much of the groundwork for a new smart contract stack that is based on a Wasm virtual\nmachine and compatible with Substrate chains."}),"\n",(0,a.jsxs)(t.h4,{id:"libraries-for-smart-contracts-in-ink",children:["Libraries for Smart Contracts in ",(0,a.jsx)(t.code,{children:"ink!"})]}),"\n",(0,a.jsxs)(t.p,{children:["Collected below are some community examples of smart contracts in ",(0,a.jsx)(t.code,{children:"ink!"}),". ",(0,a.jsx)(t.strong,{children:"Are you working on a\nsmart contract example? Ask us to add it to this page!"})]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.openbrush.io/",children:"OpenBrush"}),": an ",(0,a.jsx)(t.code,{children:"ink!"})," library providing standard contracts based on\n",(0,a.jsx)(t.a,{href:"https://github.com/w3f/PSPs",children:"PSP"})," with useful contracts and macros for building."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://inkathon.xyz/",children:"ink!athon"}),": Starterkit for full-stack dApps with ink! smart contracts &\nfrontend."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/patractlabs/metis",children:"Metis"}),": a Wasm contract standard library, developed by\n",(0,a.jsx)(t.a,{href:"https://github.com/patractlabs",children:"Patract Labs"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"smart-contract-environments",children:"Smart Contract Environments"}),"\n",(0,a.jsx)(t.p,{children:"It is still early for smart contracts on the relay chain and the development is only now\nstabilizing. We are actively producing content to help developers get up to speed and will maintain\nthe Wiki with the latest resources. You should also keep up to date with the following links:"}),"\n",(0,a.jsx)(t.h3,{id:"parity-tech",children:"Parity Tech"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/paritytech/ink",children:"ink!"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/contracts",children:"Substrate contracts pallet"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"parachains",children:"Parachains"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://moonbeam.network/",children:"Moonbeam"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://astar.network/",children:"Astar"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://acala.network/",children:"Acala"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://phala.network",children:"Phala"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://darwinia.network/",children:"Darwinia"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Many smart contract platforms are building to become a parachain in the ecosystem. A community\ncreated and maintained list of different smart contract platforms building on Polkadot can be found\nat ",(0,a.jsx)(t.a,{href:"https://www.polkaproject.com/#/projects?cateID=1&tagID=6",children:"PolkaProjects"}),". Additionally,\ninformation about ink smart contracts can be accessed at\n",(0,a.jsx)(t.a,{href:"https://use.ink/#where-can-i-deploy-ink-contracts",children:"use.ink"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"moonbeam",children:"Moonbeam"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["ink!: ",(0,a.jsx)(t.strong,{children:"Unsupported"})]}),"\n",(0,a.jsxs)(t.li,{children:["EVM (Solidity): ",(0,a.jsx)(t.a,{href:"https://moonbeam.network/networks/moonbeam/",children:(0,a.jsx)(t.strong,{children:"Supported"})})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://moonbeam.network/",children:"Moonbeam"})," is another project that is planning to deploy to Polkadot as a\nparachain and will support Ethereum compatible smart contracts. Since Moonbeam uses\n",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/frontier",children:"Frontier"}),", an interoperability layer with existing Ethereum\ntooling, it will support all applications that are written to target the EVM environment with little\nfriction."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://docs.moonbeam.network/networks/moonriver/",children:"Moonriver"}),", a companion network to Moonbeam,\nlaunched as a parachain on Kusama. Parachain functionality is live, and features are being\nincrementally released. The final phase of the launch will include EVM functionality and balance\ntransfers."]}),"\n",(0,a.jsxs)(t.p,{children:["Try deploying a smart contract to Moonbeam by following their\n",(0,a.jsx)(t.a,{href:"https://docs.moonbeam.network/",children:"documentation"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"astar",children:"Astar"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["ink!/Wasm: ",(0,a.jsx)(t.a,{href:"https://docs.astar.network/docs/build/#wasm-smart-contracts",children:(0,a.jsx)(t.strong,{children:"Supported"})})]}),"\n",(0,a.jsxs)(t.li,{children:["EVM (Solidity): ",(0,a.jsxs)(t.a,{href:"https://docs.astar.network/docs/build/#evm-smart-contracts",children:[" ",(0,a.jsx)(t.strong,{children:"Supported"})]})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://astar.network/",children:"Astar Network"})," supports the building of dApps with EVM and WASM smart\ncontracts and offers developers true interoperability. True interoperability with cross-consensus\nmessaging ",(0,a.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-xcm",children:"XCM"})," and cross-virtual machine\n",(0,a.jsx)(t.a,{href:"https://github.com/AstarNetwork/",children:"XVM"}),". We are made by developers and for developers. Astar\u2019s\nunique Build2Earn model empowers developers to get paid through a dApp staking mechanism for the\ncode they write and dApps they build."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://shiden.astar.network/",children:"Shiden Network"})," is the canary network of Astar Network, live as a\nparachain on Kusama, and supports the EVM and WASM environment for all developers who want to build\nout use-cases in a canary network with economic value. Shiden acts as a playground for developers."]}),"\n",(0,a.jsxs)(t.p,{children:["Try deploying an Ethereum or ink! smart contract by following their\n",(0,a.jsx)(t.a,{href:"https://docs.astar.network/",children:"documentation"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"acala",children:"Acala"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["ink!: ",(0,a.jsx)(t.strong,{children:"Unsupported"})]}),"\n",(0,a.jsxs)(t.li,{children:["EVM (Solidity): ",(0,a.jsx)(t.a,{href:"https://wiki.acala.network/build/development-guide",children:(0,a.jsx)(t.strong,{children:"Supported"})})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://acala.network/",children:"Acala"})," is a decentralized finance consortium and DeFi infrastructure chain\ndelivering a set of protocols to serve as the DeFi hub on Polkadot.\n",(0,a.jsx)(t.a,{href:"https://acala.network/karura",children:"Karura"}),", Acala's canary network is live as a parachain on Kusama.\nInterested teams are now able to deploy DApps and smart contracts on Karura's platform. Acala is\nalso implementing the ",(0,a.jsx)(t.a,{href:"https://wiki.acala.network/learn/acala-evm/why-acala-evm",children:"Acala EVM"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Try deploying an Acala EVM smart contract by following their\n",(0,a.jsx)(t.a,{href:"https://wiki.acala.network/build/development-guide/smart-contracts",children:"documentation"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"phala",children:"Phala"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["ink!: ",(0,a.jsx)(t.strong,{children:"Unsupported"})]}),"\n",(0,a.jsxs)(t.li,{children:["EVM (Solidity): ",(0,a.jsx)(t.strong,{children:"Unsupported"})]}),"\n",(0,a.jsxs)(t.li,{children:["See: ",(0,a.jsx)(t.a,{href:"https://docs.phala.network/developers/phat-contract",children:(0,a.jsx)(t.strong,{children:"Phat Contracts"})})," powered by ink!"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://phala.network",children:"Phala"})," is an off-chain trustless compute infrastructure that provides fully\nverifiable computation. Using ",(0,a.jsx)(t.a,{href:"https://docs.phala.network/developers/phat-contract",children:"Phat contracts"}),",\ndevelopers can write smart contracts that can interact with web2 services.\n",(0,a.jsx)(t.a,{href:"https://phala.network/en/khala",children:"Khala"})," is Phala's canary network and is live as a parachain on\nKusama."]}),"\n",(0,a.jsxs)(t.p,{children:["Try deploying a smart contract that interacts with Etherscan's web2 API by following their\n",(0,a.jsx)(t.a,{href:"https://docs.phala.network/developers/build-on-phat-contract/create-contract",children:"documentation"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"darwinia",children:"Darwinia"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["ink!: ",(0,a.jsx)(t.strong,{children:"Unsupported"})]}),"\n",(0,a.jsxs)(t.li,{children:["EVM (Solidity) Support:\n",(0,a.jsx)(t.a,{href:"https://docs.darwinia.network/libraries-4a4ce70014ba43b7977aeb16ce9634ab",children:(0,a.jsx)(t.strong,{children:"Supported"})})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://darwinia.network/",children:"Darwinia"})," is a community-run technology and service powering the\ncross-chain capabilities of decentralized applications. By crafting secure and efficient cross-chain\nmessaging protocols, Darwinia is at the forefront of facilitating seamless communication between\ndisparate blockchain networks. The newest addition to the suite of protocols is ",(0,a.jsx)(t.code,{children:"Darwinia Msgport"}),",\nan innovative messaging abstraction that has been successfully implemented across a wide array of\nmainstream smart contract platforms, broadening the potential for interoperability and enabling\ndevelopers to create more versatile and connected blockchain ecosystems."]}),"\n",(0,a.jsxs)(t.p,{children:["Try deploying a smart contract to Darwinia by following their\n",(0,a.jsx)(t.a,{href:"https://docs.darwinia.network/dapp-development-4b021f21c52d474aa08a8109eb55bbd1",children:"documentation"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"keep-in-touch",children:"Keep In Touch"}),"\n",(0,a.jsx)(t.p,{children:"Even though the tooling is still maturing, the advantage of being early will be the familiarity and\nhead start on your project, allowing you to innovate and create something truly new."}),"\n",(0,a.jsxs)(t.p,{children:["If you have interesting ideas for smart contracts on Polkadot feel free to drop into the\n",(0,a.jsx)(t.a,{href:"https://matrix.to/#/#polkadot-watercooler:matrix.org",children:"Polkadot Watercooler"})," to talk about them.\nDevelopers may be interested in joining the\n",(0,a.jsx)(t.a,{href:"https://matrix.to/#/#polkadotnoobs:matrix.org",children:"Polkadot Beginners Lounge"})," or\n",(0,a.jsx)(t.a,{href:"https://substrate.stackexchange.com/",children:"Substrate and Polkadot StackExchange"})," to ask their questions.\nAs always, keep up to date with Polkadot and Kusama by following the\n",(0,a.jsx)(t.a,{href:"/docs/community",children:"social channels"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{435:function(t,s,a){t.exports=a.p+"assets/img/29-1.59470b62.png"},436:function(t,s,a){t.exports=a.p+"assets/img/29-2.fe930c6c.png"},437:function(t,s,a){t.exports=a.p+"assets/img/29-3.3beb9c6b.png"},502:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"solidity极简入门-29-函数选择器selector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solidity极简入门-29-函数选择器selector"}},[t._v("#")]),t._v(" Solidity极简入门: 29. 函数选择器Selector")]),t._v(" "),e("p",[t._v("我最近在重新学solidity，巩固一下细节，也写一个“Solidity极简入门”，供小白们使用（编程大佬可以另找教程），每周更新1-3讲。")]),t._v(" "),e("p",[t._v("欢迎关注我的推特："),e("a",{attrs:{href:"https://twitter.com/0xAA_Science",target:"_blank",rel:"noopener noreferrer"}},[t._v("@0xAA_Science"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("欢迎加入WTF科学家社区，内有加微信群方法："),e("a",{attrs:{href:"https://discord.gg/5akcruXrsk",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("所有代码和教程开源在github（1024个star发课程认证，2048个star发社群NFT）: "),e("a",{attrs:{href:"https://github.com/AmazingAng/WTFSolidity",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/AmazingAng/WTFSolidity"),e("OutboundLink")],1)]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"selector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selector"}},[t._v("#")]),t._v(" "),e("code",[t._v("selector")])]),t._v(" "),e("p",[t._v("当我们调用智能合约时，本质上是向目标合约发送了一段"),e("code",[t._v("calldata")]),t._v("，在remix中发送一次交易后，可以在详细信息中看见"),e("code",[t._v("input")]),t._v("即为此次交易的"),e("code",[t._v("calldata")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(435),alt:"tx input in remix"}})]),t._v(" "),e("p",[t._v("发送的"),e("code",[t._v("calldata")]),t._v("中前4个字节是"),e("code",[t._v("selector")]),t._v("（函数选择器）。这一讲，我们将介绍"),e("code",[t._v("selector")]),t._v("是什么，以及如何使用。")]),t._v(" "),e("h3",{attrs:{id:"msg-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msg-data"}},[t._v("#")]),t._v(" "),e("code",[t._v("msg.data")])]),t._v(" "),e("p",[e("code",[t._v("msg.data")]),t._v("是"),e("code",[t._v("solidity")]),t._v("中的一个全局变量，值为完整的"),e("code",[t._v("calldata")]),t._v("（调用函数时传入的数据）。")]),t._v(" "),e("p",[t._v("在下面的代码中，我们可以通过"),e("code",[t._v("Log")]),t._v("事件来输出调用"),e("code",[t._v("mint")]),t._v("函数的"),e("code",[t._v("calldata")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-solidity extra-class"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// event 返回msg.data")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mint")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("emit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("当参数为"),e("code",[t._v("0x2c44b726ADF1963cA47Af88B284C06f30380fC78")]),t._v("时，输出的"),e("code",[t._v("calldata")]),t._v("为")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("0x6a6278420000000000000000000000002c44b726adf1963ca47af88b284c06f30380fc78\n")])])]),e("p",[t._v("这段很乱的字节码可以分成两部分：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("前4个字节为函数选择器selector：\n0x6a627842\n\n后面32个字节为输入的参数：\n0x0000000000000000000000002c44b726adf1963ca47af88b284c06f30380fc78\n")])])]),e("p",[t._v("其实"),e("code",[t._v("calldata")]),t._v("就是告诉智能合约，我要调用哪个函数，以及参数是什么。")]),t._v(" "),e("h3",{attrs:{id:"method-id、selector和函数签名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method-id、selector和函数签名"}},[t._v("#")]),t._v(" "),e("code",[t._v("method id")]),t._v("、"),e("code",[t._v("selector")]),t._v("和"),e("code",[t._v("函数签名")])]),t._v(" "),e("p",[e("code",[t._v("method id")]),t._v("定义为"),e("code",[t._v("函数签名")]),t._v("的"),e("code",[t._v("Keccak")]),t._v("哈希后的前4个字节，当"),e("code",[t._v("selector")]),t._v("与"),e("code",[t._v("method id")]),t._v("相匹配时，即表示调用该函数，那么"),e("code",[t._v("函数签名")]),t._v("是什么？")]),t._v(" "),e("p",[t._v("其实在第21讲中，我们简单介绍了函数签名，为"),e("code",[t._v('"函数名（逗号分隔的参数类型)"')]),t._v("。举个例子，上面代码中"),e("code",[t._v("mint")]),t._v("的函数签名为"),e("code",[t._v('"mint(address)"')]),t._v("。在同一个智能合约中，不同的函数有不同的函数签名，因此我们可以通过函数签名来确定要调用哪个函数。")]),t._v(" "),e("p",[e("strong",[t._v("注意")]),t._v("，在函数签名中，"),e("code",[t._v("uint")]),t._v("和"),e("code",[t._v("int")]),t._v("要写为"),e("code",[t._v("uint256")]),t._v("和"),e("code",[t._v("int256")]),t._v("。")]),t._v(" "),e("p",[t._v("我们写一个函数，来验证"),e("code",[t._v("mint")]),t._v("函数的"),e("code",[t._v("method id")]),t._v("是否为"),e("code",[t._v("0x6a627842")]),t._v("。大家可以运行下面的函数，看看结果。")]),t._v(" "),e("div",{staticClass:"language-solidity extra-class"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mintSelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pure")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes4")]),t._v(" mSelector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mint(address)"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("结果正是"),e("code",[t._v("0x6a627842")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(436),alt:"method id in remix"}})]),t._v(" "),e("h3",{attrs:{id:"使用selector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用selector"}},[t._v("#")]),t._v(" 使用"),e("code",[t._v("selector")])]),t._v(" "),e("p",[t._v("我们可以利用"),e("code",[t._v("selector")]),t._v("来调用目标函数。例如我想调用"),e("code",[t._v("mint")]),t._v("函数，我只需要利用"),e("code",[t._v("abi.encodeWithSelector")]),t._v("将"),e("code",[t._v("mint")]),t._v("函数的"),e("code",[t._v("method id")]),t._v("作为"),e("code",[t._v("selector")]),t._v("和参数打包编码，传给"),e("code",[t._v("call")]),t._v("函数：")]),t._v(" "),e("div",{staticClass:"language-solidity extra-class"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("callWithSignature")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" success"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeWithSelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x6a627842")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x2c44b726ADF1963cA47Af88B284C06f30380fC78"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("success"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("在日志中，我们可以看到"),e("code",[t._v("mint")]),t._v("函数被成功调用，并输出"),e("code",[t._v("Log")]),t._v("事件。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(437),alt:"logs in remix"}})]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("这一讲，我们介绍了什么是"),e("code",[t._v("函数选择器")]),t._v("（"),e("code",[t._v("selector")]),t._v("），它和"),e("code",[t._v("msg.data")]),t._v("、"),e("code",[t._v("函数签名")]),t._v("的关系，以及如何使用它调用目标函数。")])])}),[],!1,null,null,null);s.default=n.exports}}]);
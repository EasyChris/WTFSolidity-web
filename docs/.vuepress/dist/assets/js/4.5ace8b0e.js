(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{406:function(t,s,a){t.exports=a.p+"assets/img/21-1.d5917121.png"},407:function(t,s,a){t.exports=a.p+"assets/img/21-2.85548e7c.png"},408:function(t,s,a){t.exports=a.p+"assets/img/21-3.a5632d89.png"},409:function(t,s,a){t.exports=a.p+"assets/img/21-4.b03bd611.png"},410:function(t,s,a){t.exports=a.p+"assets/img/21-5.f7003e85.png"},411:function(t,s,a){t.exports=a.p+"assets/img/21-6.1f7e8599.png"},412:function(t,s,a){t.exports=a.p+"assets/img/21-7.5afb6c43.png"},413:function(t,s,a){t.exports=a.p+"assets/img/21-8.682e7290.png"},414:function(t,s,a){t.exports=a.p+"assets/img/21-9.2a9606b6.png"},494:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"solidity极简入门-21-调用其他合约"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#solidity极简入门-21-调用其他合约"}},[t._v("#")]),t._v(" Solidity极简入门: 21. 调用其他合约")]),t._v(" "),n("p",[t._v("我最近在重新学solidity，巩固一下细节，也写一个“Solidity极简入门”，供小白们使用（编程大佬可以另找教程），每周更新1-3讲。")]),t._v(" "),n("p",[t._v("欢迎关注我的推特："),n("a",{attrs:{href:"https://twitter.com/0xAA_Science",target:"_blank",rel:"noopener noreferrer"}},[t._v("@0xAA_Science"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("WTF技术社群discord，内有加微信群方法："),n("a",{attrs:{href:"https://discord.gg/5akcruXrsk",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("所有代码和教程开源在github（1024个star发课程认证，2048个star发社群NFT）: "),n("a",{attrs:{href:"https://github.com/AmazingAng/WTFSolidity",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/AmazingAng/WTFSolidity"),n("OutboundLink")],1)]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"调用已部署合约"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#调用已部署合约"}},[t._v("#")]),t._v(" 调用已部署合约")]),t._v(" "),n("p",[t._v("开发者写智能合约来调用其他合约，这让以太坊网络上的程序可以复用，从而建立繁荣的生态。很多"),n("code",[t._v("web3")]),t._v("项目依赖于调用其他合约，比如收益农场（"),n("code",[t._v("yield farming")]),t._v("）。这一讲，我们介绍如何在已知合约代码（或接口）和地址情况下调用目标合约的函数。")]),t._v(" "),n("h2",{attrs:{id:"目标合约"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目标合约"}},[t._v("#")]),t._v(" 目标合约")]),t._v(" "),n("p",[t._v("我们先写一个简单的合约"),n("code",[t._v("OtherContract")]),t._v("来调用。")]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OtherContract")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" _x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 状态变量_x")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 收到eth的事件，记录amount和gas")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" amount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" gas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回合约ETH余额")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBalance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以调整状态变量_x的函数，并且可以往合约转ETH (payable)")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("payable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果转入ETH，则释放Log事件")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("emit")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("gasleft")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取_x")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这个合约包含一个状态变量"),n("code",[t._v("_x")]),t._v("，一个事件"),n("code",[t._v("Log")]),t._v("在收到"),n("code",[t._v("ETH")]),t._v("时触发，三个函数：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("getBalance()")]),t._v(": 返回合约"),n("code",[t._v("ETH")]),t._v("余额。")]),t._v(" "),n("li",[n("code",[t._v("setX()")]),t._v(": "),n("code",[t._v("external payable")]),t._v("函数，可以设置"),n("code",[t._v("_x")]),t._v("的值，并向合约发送"),n("code",[t._v("ETH")]),t._v("。")]),t._v(" "),n("li",[n("code",[t._v("getX()")]),t._v(": 读取"),n("code",[t._v("_x")]),t._v("的值。")])]),t._v(" "),n("h2",{attrs:{id:"调用othercontract合约"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#调用othercontract合约"}},[t._v("#")]),t._v(" 调用"),n("code",[t._v("OtherContract")]),t._v("合约")]),t._v(" "),n("p",[t._v("我们可以利用合约的地址和合约代码（或接口）来创建合约的引用："),n("code",[t._v("_Name(_Address)")]),t._v("，其中"),n("code",[t._v("_Name")]),t._v("是合约名，"),n("code",[t._v("_Address")]),t._v("是合约地址。然后用合约的引用来调用它的函数："),n("code",[t._v("_Name(_Address).f()")]),t._v("，其中"),n("code",[t._v("f()")]),t._v("是要调用的函数。")]),t._v(" "),n("p",[t._v("下面我们介绍4个调用合约的例子，在remix中编译合约后，分别部署"),n("code",[t._v("OtherContract")]),t._v("和"),n("code",[t._v("CallContract")]),t._v("：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(406),alt:"deploy contract0 in remix"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(407),alt:"deploy contract1 in remix"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(408),alt:"deploy contract2 in remix"}})]),t._v(" "),n("h3",{attrs:{id:"_1-传入合约地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-传入合约地址"}},[t._v("#")]),t._v(" 1. 传入合约地址")]),t._v(" "),n("p",[t._v("我们可以在函数里传入目标合约地址，生成目标合约的引用，然后调用目标函数。以调用"),n("code",[t._v("OtherContract")]),t._v("合约的"),n("code",[t._v("setX")]),t._v("函数为例，我们在新合约中写一个"),n("code",[t._v("callSetX")]),t._v("函数，传入已部署好的"),n("code",[t._v("OtherContract")]),t._v("合约地址"),n("code",[t._v("_Address")]),t._v("和"),n("code",[t._v("setX")]),t._v("的参数"),n("code",[t._v("x")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("callSetX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("OtherContract")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("复制"),n("code",[t._v("OtherContract")]),t._v("合约的地址，填入"),n("code",[t._v("callSetX")]),t._v("函数的参数中，成功调用后，调用"),n("code",[t._v("OtherContract")]),t._v("合约中的"),n("code",[t._v("getX")]),t._v("验证"),n("code",[t._v("x")]),t._v("变为123")]),t._v(" "),n("p",[n("img",{attrs:{src:a(409),alt:"call contract1 in remix"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(410),alt:"call contract2 in remix"}})]),t._v(" "),n("h3",{attrs:{id:"_2-传入合约变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-传入合约变量"}},[t._v("#")]),t._v(" 2. 传入合约变量")]),t._v(" "),n("p",[t._v("我们可以直接在函数里传入合约的引用，只需要把上面参数的"),n("code",[t._v("address")]),t._v("类型改为目标合约名，比如"),n("code",[t._v("OtherContract")]),t._v("。下面例子实现了调用目标合约的"),n("code",[t._v("getX()")]),t._v("函数。")]),t._v(" "),n("p",[n("strong",[t._v("注意")]),t._v("该函数参数"),n("code",[t._v("OtherContract _Address")]),t._v("底层类型仍然是"),n("code",[t._v("address")]),t._v("，生成的"),n("code",[t._v("ABI")]),t._v("中、调用"),n("code",[t._v("callGetX")]),t._v("时传入的参数都是"),n("code",[t._v("address")]),t._v("类型")]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("callGetX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OtherContract _Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("复制"),n("code",[t._v("OtherContract")]),t._v("合约的地址，填入"),n("code",[t._v("callGetX")]),t._v("函数的参数中，调用后成功获取"),n("code",[t._v("x")]),t._v("的值")]),t._v(" "),n("p",[n("img",{attrs:{src:a(411),alt:"call contract3 in remix"}})]),t._v(" "),n("h3",{attrs:{id:"_3-创建合约变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建合约变量"}},[t._v("#")]),t._v(" 3. 创建合约变量")]),t._v(" "),n("p",[t._v("我们可以创建合约变量，然后通过它来调用目标函数。下面例子，我们给变量"),n("code",[t._v("oc")]),t._v("存储了"),n("code",[t._v("OtherContract")]),t._v("合约的引用：")]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("callGetX2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        OtherContract oc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("OtherContract")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("复制"),n("code",[t._v("OtherContract")]),t._v("合约的地址，填入"),n("code",[t._v("callGetX2")]),t._v("函数的参数中，调用后成功获取"),n("code",[t._v("x")]),t._v("的值")]),t._v(" "),n("p",[n("img",{attrs:{src:a(412),alt:"call contract4 in remix"}})]),t._v(" "),n("h3",{attrs:{id:"_4-调用合约并发送eth"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-调用合约并发送eth"}},[t._v("#")]),t._v(" 4. 调用合约并发送"),n("code",[t._v("ETH")])]),t._v(" "),n("p",[t._v("如果目标合约的函数是"),n("code",[t._v("payable")]),t._v("的，那么我们可以通过调用它来给合约转账："),n("code",[t._v("_Name(_Address).f{value: _Value}()")]),t._v("，其中"),n("code",[t._v("_Name")]),t._v("是合约名，"),n("code",[t._v("_Address")]),t._v("是合约地址，"),n("code",[t._v("f")]),t._v("是目标函数名，"),n("code",[t._v("_Value")]),t._v("是要转的"),n("code",[t._v("ETH")]),t._v("数额（以"),n("code",[t._v("wei")]),t._v("为单位）。")]),t._v(" "),n("p",[n("code",[t._v("OtherContract")]),t._v("合约的"),n("code",[t._v("setX")]),t._v("函数是"),n("code",[t._v("payable")]),t._v("的，在下面这个例子中我们通过调用"),n("code",[t._v("setX")]),t._v("来往目标合约转账。")]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setXTransferETH")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" otherContract"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("payable")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("OtherContract")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("otherContract"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("复制"),n("code",[t._v("OtherContract")]),t._v("合约的地址，填入"),n("code",[t._v("setXTransferETH")]),t._v("函数的参数中，并转入10ETH")]),t._v(" "),n("p",[n("img",{attrs:{src:a(413),alt:"call contract5 in remix"}})]),t._v(" "),n("p",[t._v("转账后，我们可以通过"),n("code",[t._v("Log")]),t._v("事件和"),n("code",[t._v("getBalance()")]),t._v("函数观察目标合约"),n("code",[t._v("ETH")]),t._v("余额的变化。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(414),alt:"call contract6 in remix"}})]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("这一讲，我们介绍了如何通过目标合约代码（或接口）和地址来创建合约的引用，从而调用目标合约的函数。")])])}),[],!1,null,null,null);s.default=e.exports}}]);
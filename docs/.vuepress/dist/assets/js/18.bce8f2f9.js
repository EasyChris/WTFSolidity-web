(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{415:function(t,s,a){t.exports=a.p+"assets/img/22-1.35c9c472.png"},416:function(t,s,a){t.exports=a.p+"assets/img/22-2.8ec3e1b3.png"},417:function(t,s,a){t.exports=a.p+"assets/img/22-3.9a6137c7.png"},495:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"solidity极简入门-22-call"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#solidity极简入门-22-call"}},[t._v("#")]),t._v(" Solidity极简入门: 22. Call")]),t._v(" "),n("p",[t._v("我最近在重新学solidity，巩固一下细节，也写一个“Solidity极简入门”，供小白们使用（编程大佬可以另找教程），每周更新1-3讲。")]),t._v(" "),n("p",[t._v("欢迎关注我的推特："),n("a",{attrs:{href:"https://twitter.com/0xAA_Science",target:"_blank",rel:"noopener noreferrer"}},[t._v("@0xAA_Science"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("WTF技术社群discord，内有加微信群方法："),n("a",{attrs:{href:"https://discord.gg/5akcruXrsk",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("所有代码和教程开源在github（1024个star发课程认证，2048个star发社群NFT）: "),n("a",{attrs:{href:"https://github.com/AmazingAng/WTFSolidity",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/AmazingAng/WTFSolidity"),n("OutboundLink")],1)]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("我们曾在"),n("a",{attrs:{href:"https://github.com/AmazingAng/WTFSolidity/tree/main/20_SendETH",target:"_blank",rel:"noopener noreferrer"}},[t._v("第20讲：发送ETH"),n("OutboundLink")],1),t._v("那一讲介绍过利用"),n("code",[t._v("call")]),t._v("来发送"),n("code",[t._v("ETH")]),t._v("，这一讲我们将介绍如何利用它调用合约。")]),t._v(" "),n("h2",{attrs:{id:"call"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#call"}},[t._v("#")]),t._v(" Call")]),t._v(" "),n("p",[n("code",[t._v("call")]),t._v(" 是"),n("code",[t._v("address")]),t._v("类型的低级成员函数，它用来与其他合约交互。它的返回值为"),n("code",[t._v("(bool, data)")]),t._v("，分别对应"),n("code",[t._v("call")]),t._v("是否成功以及目标函数的返回值。")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("call")]),t._v("是"),n("code",[t._v("solidity")]),t._v("官方推荐的通过触发"),n("code",[t._v("fallback")]),t._v("或"),n("code",[t._v("receive")]),t._v("函数发送"),n("code",[t._v("ETH")]),t._v("的方法。")]),t._v(" "),n("li",[t._v("不推荐用"),n("code",[t._v("call")]),t._v("来调用另一个合约，因为当你调用不安全合约的函数时，你就把主动权交给了它。推荐的方法仍是声明合约变量后调用函数，见"),n("a",{attrs:{href:"https://github.com/AmazingAng/WTFSolidity/tree/main/21_CallContract",target:"_blank",rel:"noopener noreferrer"}},[t._v("第21讲：调用其他合约"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("当我们不知道对方合约的源代码或"),n("code",[t._v("ABI")]),t._v("，就没法生成合约变量；这时，我们仍可以通过"),n("code",[t._v("call")]),t._v("调用对方合约的函数。")])]),t._v(" "),n("h3",{attrs:{id:"call的使用规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#call的使用规则"}},[t._v("#")]),t._v(" "),n("code",[t._v("call")]),t._v("的使用规则")]),t._v(" "),n("p",[n("code",[t._v("call")]),t._v("的使用规则如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("目标合约地址.call(二进制编码);\n")])])]),n("p",[t._v("其中"),n("code",[t._v("二进制编码")]),t._v("利用结构化编码函数"),n("code",[t._v("abi.encodeWithSignature")]),t._v("获得：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('abi.encodeWithSignature("函数签名", 逗号分隔的具体参数)\n')])])]),n("p",[n("code",[t._v("函数签名")]),t._v("为"),n("code",[t._v('"函数名（逗号分隔的参数类型)"')]),t._v("。例如"),n("code",[t._v('abi.encodeWithSignature("f(uint256,address)", _x, _addr)')]),t._v("。")]),t._v(" "),n("p",[t._v("另外"),n("code",[t._v("call")]),t._v("在调用合约时可以指定交易发送的"),n("code",[t._v("ETH")]),t._v("数额和"),n("code",[t._v("gas")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("目标合约地址.call{value:发送数额, gas:gas数额}(二进制编码);\n")])])]),n("p",[t._v("看起来有点复杂，下面我们举个"),n("code",[t._v("call")]),t._v("应用的例子。")]),t._v(" "),n("h3",{attrs:{id:"目标合约"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目标合约"}},[t._v("#")]),t._v(" 目标合约")]),t._v(" "),n("p",[t._v("我们先写一个简单的目标合约"),n("code",[t._v("OtherContract")]),t._v("并部署，代码与第19讲中基本相同，只是多了"),n("code",[t._v("fallback")]),t._v("函数。")]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OtherContract")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" _x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 状态变量x")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 收到eth的事件，记录amount和gas")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" amount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" gas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("payable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回合约ETH余额")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBalance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以调整状态变量_x的函数，并且可以往合约转ETH (payable)")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("payable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果转入ETH，则释放Log事件")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("emit")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("gasleft")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取x")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这个合约包含一个状态变量"),n("code",[t._v("x")]),t._v("，一个在收到"),n("code",[t._v("ETH")]),t._v("时触发的事件"),n("code",[t._v("Log")]),t._v("，三个函数：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("getBalance()")]),t._v(": 返回合约"),n("code",[t._v("ETH")]),t._v("余额。")]),t._v(" "),n("li",[n("code",[t._v("setX()")]),t._v(": "),n("code",[t._v("external payable")]),t._v("函数，可以设置"),n("code",[t._v("x")]),t._v("的值，并向合约发送"),n("code",[t._v("ETH")]),t._v("。")]),t._v(" "),n("li",[n("code",[t._v("getX()")]),t._v(": 读取"),n("code",[t._v("x")]),t._v("的值。")])]),t._v(" "),n("h3",{attrs:{id:"利用call调用目标合约"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#利用call调用目标合约"}},[t._v("#")]),t._v(" 利用"),n("code",[t._v("call")]),t._v("调用目标合约")]),t._v(" "),n("p",[n("strong",[t._v("1. Response事件")])]),t._v(" "),n("p",[t._v("我们写一个"),n("code",[t._v("Call")]),t._v("合约来调用目标合约函数。首先定义一个"),n("code",[t._v("Response")]),t._v("事件，输出"),n("code",[t._v("call")]),t._v("返回的"),n("code",[t._v("success")]),t._v("和"),n("code",[t._v("data")]),t._v("，方便我们观察返回值。")]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义Response事件，输出call返回的结果success和data")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("2. 调用setX函数")])]),t._v(" "),n("p",[t._v("我们定义"),n("code",[t._v("callSetX")]),t._v("函数来调用目标合约的"),n("code",[t._v("setX()")]),t._v("，转入"),n("code",[t._v("msg.value")]),t._v("数额的"),n("code",[t._v("ETH")]),t._v("，并释放"),n("code",[t._v("Response")]),t._v("事件输出"),n("code",[t._v("success")]),t._v("和"),n("code",[t._v("data")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("callSetX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("payable")]),t._v(" _addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("payable")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// call setX()，同时可以发送ETH")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("call"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tabi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeWithSignature")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setX(uint256)"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("emit")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//释放事件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("接下来我们调用"),n("code",[t._v("callSetX")]),t._v("把状态变量"),n("code",[t._v("_x")]),t._v("改为5，参数为"),n("code",[t._v("OtherContract")]),t._v("地址和"),n("code",[t._v("5")]),t._v("，由于目标函数"),n("code",[t._v("setX()")]),t._v("没有返回值，因此"),n("code",[t._v("Response")]),t._v("事件输出的"),n("code",[t._v("data")]),t._v("为"),n("code",[t._v("0x")]),t._v("，也就是空。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(415),alt:"22-1"}})]),t._v(" "),n("p",[n("strong",[t._v("3. 调用getX函数")])]),t._v(" "),n("p",[t._v("下面我们调用"),n("code",[t._v("getX()")]),t._v("函数，它将返回目标合约"),n("code",[t._v("_x")]),t._v("的值，类型为"),n("code",[t._v("uint256")]),t._v("。我们可以利用"),n("code",[t._v("abi.decode")]),t._v("来解码"),n("code",[t._v("call")]),t._v("的返回值"),n("code",[t._v("data")]),t._v("，并读出数值。")]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("callGetX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// call getX()")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tabi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeWithSignature")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getX()"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("emit")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//释放事件")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" abi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("从"),n("code",[t._v("Response")]),t._v("事件的输出，我们可以看到"),n("code",[t._v("data")]),t._v("为"),n("code",[t._v("0x0000000000000000000000000000000000000000000000000000000000000005")]),t._v("。而经过"),n("code",[t._v("abi.decode")]),t._v("，最终返回值为"),n("code",[t._v("5")]),t._v("。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(416),alt:"22-2"}})]),t._v(" "),n("p",[n("strong",[t._v("4. 调用不存在的函数")])]),t._v(" "),n("p",[t._v("如果我们给"),n("code",[t._v("call")]),t._v("输入的函数不存在于目标合约，那么目标合约的"),n("code",[t._v("fallback")]),t._v("函数会被触发。")]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("callNonExist")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// call getX()")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tabi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeWithSignature")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo(uint256)"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("emit")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//释放事件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("上面例子中，我们"),n("code",[t._v("call")]),t._v("了不存在的"),n("code",[t._v("foo")]),t._v("函数。"),n("code",[t._v("call")]),t._v("仍能执行成功，并返回"),n("code",[t._v("success")]),t._v("，但其实调用的目标合约"),n("code",[t._v("fallback")]),t._v("函数。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(417),alt:"22-3"}})]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("这一讲，我们介绍了如何用"),n("code",[t._v("call")]),t._v("这一低级函数来调用其他合约。"),n("code",[t._v("call")]),t._v("不是调用合约的推荐方法，因为不安全。但他能让我们在不知道源代码和"),n("code",[t._v("ABI")]),t._v("的情况下调用目标合约，很有用。")])])}),[],!1,null,null,null);s.default=e.exports}}]);
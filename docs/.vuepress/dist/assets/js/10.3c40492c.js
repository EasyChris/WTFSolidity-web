(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{361:function(t,s,a){t.exports=a.p+"assets/img/3-3.19875fac.png"},362:function(t,s,a){t.exports=a.p+"assets/img/3-4.2583fed6.png"},363:function(t,s,a){t.exports=a.p+"assets/img/3-1.2c096966.png"},364:function(t,s,a){t.exports=a.p+"assets/img/3-2.af20d288.png"},476:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"solidity极简入门-3-函数类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solidity极简入门-3-函数类型"}},[t._v("#")]),t._v(" Solidity极简入门:3. 函数类型")]),t._v(" "),e("p",[t._v("我最近在重新学solidity，巩固一下细节，也写一个“Solidity极简入门”，供小白们使用（编程大佬可以另找教程），每周更新1-3讲。")]),t._v(" "),e("p",[t._v("欢迎关注我的推特："),e("a",{attrs:{href:"https://twitter.com/0xAA_Science",target:"_blank",rel:"noopener noreferrer"}},[t._v("@0xAA_Science"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("WTF技术社群discord，内有加微信群方法："),e("a",{attrs:{href:"https://discord.gg/5akcruXrsk",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("所有代码和教程开源在github（1024个star发课程认证，2048个star发社群NFT）: "),e("a",{attrs:{href:"https://github.com/AmazingAng/WTFSolidity",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/AmazingAng/WTFSolidity"),e("OutboundLink")],1)]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"solidity中的函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solidity中的函数"}},[t._v("#")]),t._v(" Solidity中的函数")]),t._v(" "),e("p",[t._v("solidity官方文档里把函数归到数值类型，但我觉得差别很大，所以单独分一类。我们先看一下solidity中函数的形式：")]),t._v(" "),e("div",{staticClass:"language-solidity extra-class"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("parameter types"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("internal")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pure")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("payable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" types"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("看着些复杂，咱们从前往后一个一个看（方括号中的是可写可不写的关键字）：")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("function")]),t._v("：声明函数时的固定用法，想写函数，就要以function关键字开头。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("(<parameter types>)")]),t._v("：圆括号里写函数的参数，也就是要输入到函数的变量类型和名字。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("{internal|external|public|private}")]),t._v("：函数可见性说明符，一共4种。没标明函数类型的，默认"),e("code",[t._v("internal")]),t._v("。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("public")]),t._v(": 内部外部均可见。(也可用于修饰状态变量，public变量会自动生成 "),e("code",[t._v("getter")]),t._v("函数，用于查询数值).")]),t._v(" "),e("li",[e("code",[t._v("private")]),t._v(": 只能从本合约内部访问，继承的合约也不能用（也可用于修饰状态变量）。")]),t._v(" "),e("li",[e("code",[t._v("external")]),t._v(": 只能从合约外部访问（但是可以用"),e("code",[t._v("this.f()")]),t._v("来调用，"),e("code",[t._v("f")]),t._v("是函数名）")]),t._v(" "),e("li",[e("code",[t._v("internal")]),t._v(": 只能从合约内部访问，继承的合约可以用（也可用于修饰状态变量）。")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("[pure|view|payable]")]),t._v("：决定函数权限/功能的关键字。"),e("code",[t._v("payable")]),t._v("（可支付的）很好理解，带着它的函数，运行的时候可以给合约转入"),e("code",[t._v("ETH")]),t._v("。"),e("code",[t._v("pure")]),t._v("和"),e("code",[t._v("view")]),t._v("的介绍见下一节。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("[returns ()]")]),t._v("：函数返回的变量类型和名称。")])])]),t._v(" "),e("h2",{attrs:{id:"到底什么是pure和view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#到底什么是pure和view"}},[t._v("#")]),t._v(" 到底什么是"),e("code",[t._v("Pure")]),t._v("和"),e("code",[t._v("View")]),t._v("？")]),t._v(" "),e("p",[t._v("我刚开始学"),e("code",[t._v("solidity")]),t._v("的时候，一直不理解"),e("code",[t._v("pure")]),t._v("跟"),e("code",[t._v("view")]),t._v("关键字，因为别的语言没有类似的关键字。"),e("code",[t._v("solidity")]),t._v("加入这两个关键字，我认为是因为"),e("code",[t._v("gas fee")]),t._v("。合约的状态变量存储在链上，"),e("code",[t._v("gas fee")]),t._v("很贵，如果不改写链上变量，就不用付"),e("code",[t._v("gas")]),t._v("。调用"),e("code",[t._v("pure")]),t._v("跟"),e("code",[t._v("view")]),t._v("的函数是不需要付gas的。")]),t._v(" "),e("p",[t._v("我画了一个马里奥插画，帮助大家理解。在插画里，我把合约中的状态变量（存储在链上）比作碧池公主，三种不同的角色代表不同的关键字。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images.mirror-media.xyz/publication-images/1B9kHsTYnDY_QURSWMmPb.png?height=1028&width=1758",alt:"WTH is pure and view in solidity?"}})]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("pure")]),t._v("，中文意思是“纯”，在"),e("code",[t._v("solidity")]),t._v("里理解为“纯纯牛马”。包含"),e("code",[t._v("pure")]),t._v("关键字的函数，不能读取也不能写入存储在链上的状态变量。就像小怪一样，看不到也摸不到碧池公主。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("view")]),t._v("，“看”，在"),e("code",[t._v("solidity")]),t._v("里理解为“看客”。包含"),e("code",[t._v("view")]),t._v("关键字的函数，能读取但也不能写入状态变量。类似马里奥，能看到碧池，但终究是看客，不能入洞房。")])]),t._v(" "),e("li",[e("p",[t._v("不写"),e("code",[t._v("pure")]),t._v("也不写"),e("code",[t._v("view")]),t._v("，函数既可以读取也可以写入状态变量。类似马里奥里的"),e("code",[t._v("boss")]),t._v("，可以对碧池公主为所欲为🐶。")])])]),t._v(" "),e("h2",{attrs:{id:"代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),e("h3",{attrs:{id:"_1-pure-v-s-view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-pure-v-s-view"}},[t._v("#")]),t._v(" 1. pure v.s. view")]),t._v(" "),e("p",[t._v("我们在合约里定义一个状态变量 "),e("code",[t._v("number = 5")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-solidity extra-class"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SPDX-License-Identifier: MIT")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pragma")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("solidity")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),e("span",{pre:!0,attrs:{class:"token version number"}},[t._v("0.8.4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FunctionTypes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" number "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("定义一个add() function，每次调用，输出 number + 1。")]),t._v(" "),e("div",{staticClass:"language-solidity extra-class"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        number "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" number "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("如果"),e("code",[t._v("add()")]),t._v("包含了"),e("code",[t._v("pure")]),t._v("关键字，例如 "),e("code",[t._v("function add() pure external")]),t._v("，就会报错。因为"),e("code",[t._v("pure")]),t._v("（纯纯牛马）是不配读取合约里的状态变量的，更不配改写。那"),e("code",[t._v("pure")]),t._v("函数能做些什么？举个例子，你可以给函数传递一个参数 "),e("code",[t._v("_number")]),t._v("，然后让他返回 "),e("code",[t._v("_number+1")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-solidity extra-class"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pure: 纯纯牛马")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" _number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pure")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" new_number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        new_number "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _number"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Example:")]),t._v(" "),e("img",{attrs:{src:a(361),alt:"3-3.png"}})]),t._v(" "),e("p",[t._v("如果"),e("code",[t._v("add()")]),t._v("包含"),e("code",[t._v("view")]),t._v("，比如"),e("code",[t._v("function add() view external")]),t._v("，也会报错。因为"),e("code",[t._v("view")]),t._v("能读取，但不能够改写状态变量。可以稍微改写下方程，让他不改写"),e("code",[t._v("number")]),t._v("，而是返回一个新的变量。")]),t._v(" "),e("div",{staticClass:"language-solidity extra-class"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// view: 看客")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addView")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" new_number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        new_number "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" number "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Example:")]),t._v(" "),e("img",{attrs:{src:a(362),alt:"3-4.png"}})]),t._v(" "),e("h3",{attrs:{id:"_2-internal-v-s-external"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-internal-v-s-external"}},[t._v("#")]),t._v(" 2. internal v.s. external")]),t._v(" "),e("div",{staticClass:"language-solidity extra-class"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// internal: 内部")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("internal")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        number "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" number "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 合约内的函数可以调用内部函数")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minusCall")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("我们定义一个"),e("code",[t._v("internal")]),t._v("的"),e("code",[t._v("minus()")]),t._v("函数，每次调用使得"),e("code",[t._v("number")]),t._v("变量减1。由于是"),e("code",[t._v("internal")]),t._v("，只能由合约内部调用，而外部不能。因此，我们必须再定义一个"),e("code",[t._v("external")]),t._v("的"),e("code",[t._v("minusCall()")]),t._v("函数，来间接调用内部的"),e("code",[t._v("minus()")]),t._v("。\n"),e("strong",[t._v("Example:")]),t._v(" "),e("img",{attrs:{src:a(363),alt:"3-1.png"}})]),t._v(" "),e("h3",{attrs:{id:"_3-payable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-payable"}},[t._v("#")]),t._v(" 3. payable")]),t._v(" "),e("div",{staticClass:"language-solidity extra-class"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// payable: 递钱，能给合约支付eth的函数")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minusPayable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("payable")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" balance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n        balance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("我们定义一个"),e("code",[t._v("external payable")]),t._v("的"),e("code",[t._v("minusPayable()")]),t._v("函数，间接的调用"),e("code",[t._v("minus()")]),t._v("，并且返回合约里的"),e("code",[t._v("ETH")]),t._v("余额（"),e("code",[t._v("this")]),t._v("关键字可以让我们引用合约地址)。\n我们可以在调用"),e("code",[t._v("minusPayable()")]),t._v("时，往合约里转入1个"),e("code",[t._v("ETH")]),t._v("。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images.mirror-media.xyz/publication-images/ETDPN8myq7jFfAL8CUAFt.png?height=148&width=588",alt:""}})]),t._v(" "),e("p",[t._v("我们可以在返回的信息中看到，合约的余额是1 ETH。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images.mirror-media.xyz/publication-images/nGZ2pz0MvzgXuKrENJPYf.png?height=128&width=1130",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("Example:")]),t._v(" "),e("img",{attrs:{src:a(364),alt:"3-2.png"}})]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("在第三讲，我们介绍了"),e("code",[t._v("solidity")]),t._v("中的函数类型，比较难理解的是"),e("code",[t._v("pure")]),t._v("和"),e("code",[t._v("view")]),t._v("，在其他语言中没出现过。"),e("code",[t._v("solidity")]),t._v("引入"),e("code",[t._v("pure")]),t._v("和"),e("code",[t._v("view")]),t._v("关键字主要是为了节省"),e("code",[t._v("gas")]),t._v("和控制函数权限，这两种方程都是不消耗"),e("code",[t._v("gas")]),t._v("的。下一讲我们会介绍引用和映射两种类型，并介绍更复杂的函数。")])])}),[],!1,null,null,null);s.default=n.exports}}]);
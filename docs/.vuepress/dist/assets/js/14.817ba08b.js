(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{370:function(t,s,a){t.exports=a.p+"assets/img/6-1.44d1b1d0.png"},371:function(t,s,a){t.exports=a.p+"assets/img/6-2.3e851ffb.png"},372:function(t,s,a){t.exports=a.p+"assets/img/6-3.7eb5d0b5.png"},479:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"solidity极简入门-6-引用类型-array-struct"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#solidity极简入门-6-引用类型-array-struct"}},[t._v("#")]),t._v(" Solidity极简入门: 6. 引用类型, array, struct")]),t._v(" "),n("p",[t._v("我最近在重新学solidity，巩固一下细节，也写一个“Solidity极简入门”，供小白们使用（编程大佬可以另找教程），每周更新1-3讲。")]),t._v(" "),n("p",[t._v("欢迎关注我的推特："),n("a",{attrs:{href:"https://twitter.com/0xAA_Science",target:"_blank",rel:"noopener noreferrer"}},[t._v("@0xAA_Science"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("所有代码开源在github(64个star开微信交流群，已开"),n("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform",target:"_blank",rel:"noopener noreferrer"}},[t._v("填表加入"),n("OutboundLink")],1),t._v("；128个star录教学视频): "),n("a",{attrs:{href:"https://github.com/AmazingAng/WTFSolidity",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/AmazingAng/WTFSolidity"),n("OutboundLink")],1)]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("这一讲，我们将介绍"),n("code",[t._v("solidity")]),t._v("中的两个重要变量类型：数组（"),n("code",[t._v("array")]),t._v("）和结构体（"),n("code",[t._v("struct")]),t._v("）。")]),t._v(" "),n("h2",{attrs:{id:"数组-array"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组-array"}},[t._v("#")]),t._v(" 数组 array")]),t._v(" "),n("p",[t._v("数组（"),n("code",[t._v("Array")]),t._v("）是"),n("code",[t._v("solidity")]),t._v("常用的一种变量类型，用来存储一组数据（整数，字节，地址等等）。数组分为固定长度数组和可变长度数组两种：")]),t._v(" "),n("ul",[n("li",[t._v("固定长度数组：在声明时指定数组的长度。用"),n("code",[t._v("T[k]")]),t._v("的格式声明，其中"),n("code",[t._v("T")]),t._v("是元素的类型，"),n("code",[t._v("k")]),t._v("是长度，例如：")])]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 固定长度 Array")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" array1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" array2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" array3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("可变长度数组（动态数组）：在声明时不指定数组的长度。用"),n("code",[t._v("T[]")]),t._v("的格式声明，其中"),n("code",[t._v("T")]),t._v("是元素的类型，例如（"),n("code",[t._v("bytes")]),t._v("比较特殊，是数组，但是不用加"),n("code",[t._v("[]")]),t._v("）：")])]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可变长度 Array")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" array4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" array5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" array6"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" array7"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"创建数组的规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建数组的规则"}},[t._v("#")]),t._v(" 创建数组的规则")]),t._v(" "),n("p",[t._v("在solidity里，创建数组有一些规则：")]),t._v(" "),n("ul",[n("li",[t._v("对于"),n("code",[t._v("memory")]),t._v("修饰的"),n("code",[t._v("动态数组")]),t._v("，可以用"),n("code",[t._v("new")]),t._v("操作符来创建，但是必须声明长度，并且声明后长度不能改变。例子：")])]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// memory动态数组")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" array8 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" array9 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("bytes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("数组字面常数是写作表达式形式的数组，并且不会立即赋值给变量，例如"),n("code",[t._v("[uint(1),2,3]")]),t._v("（需要声明第一个元素的类型，不然默认用存储空间最小的类型）")]),t._v(" "),n("li",[t._v("如果创建的是动态数组，你需要一个一个元素的赋值。")])]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"数组成员"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组成员"}},[t._v("#")]),t._v(" 数组成员")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("length")]),t._v(": 数组有一个包含元素数量的"),n("code",[t._v("length")]),t._v("成员，"),n("code",[t._v("memory")]),t._v("数组的长度在创建后是固定的。")]),t._v(" "),n("li",[n("code",[t._v("push()")]),t._v(": "),n("code",[t._v("动态数组")]),t._v("和"),n("code",[t._v("bytes")]),t._v("拥有"),n("code",[t._v("push()")]),t._v("成员，可以在数组最后添加一个"),n("code",[t._v("0")]),t._v("元素。")]),t._v(" "),n("li",[n("code",[t._v("push(x)")]),t._v(": "),n("code",[t._v("动态数组")]),t._v("和"),n("code",[t._v("bytes")]),t._v("拥有"),n("code",[t._v("push(x)")]),t._v("成员，可以在数组最后添加一个"),n("code",[t._v("x")]),t._v("元素。")]),t._v(" "),n("li",[n("code",[t._v("pop()")]),t._v(": "),n("code",[t._v("动态数组")]),t._v("和"),n("code",[t._v("bytes")]),t._v("拥有"),n("code",[t._v("pop()")]),t._v("成员，可以移除数组最后一个元素。")])]),t._v(" "),n("p",[n("strong",[t._v("Example:")]),t._v(" "),n("img",{attrs:{src:a(370),alt:"6-1.png"}})]),t._v(" "),n("h2",{attrs:{id:"结构体-struct"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构体-struct"}},[t._v("#")]),t._v(" 结构体 struct")]),t._v(" "),n("p",[n("code",[t._v("Solidity")]),t._v("支持通过构造结构体的形式定义新的类型。创建结构体的方法：")]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结构体")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" score"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[t._v("    Student student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始一个student结构体")]),t._v("\n")])])]),n("p",[t._v("给结构体赋值的两种方法：")]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  给结构体赋值")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法1:在函数中创建一个storage的struct引用")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initStudent1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Student "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("storage")]),t._v(" _student "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// assign a copy of student")]),t._v("\n        _student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        _student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("score "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("Example:")]),t._v(" "),n("img",{attrs:{src:a(371),alt:"6-2.png"}})]),t._v(" "),n("div",{staticClass:"language-solidity extra-class"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法2:直接引用状态变量的struct")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initStudent2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("score "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("Example:")]),t._v(" "),n("img",{attrs:{src:a(372),alt:"6-3.png"}})]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("这一讲，我们介绍了solidity中数组（"),n("code",[t._v("array")]),t._v("）和结构体（"),n("code",[t._v("struct")]),t._v("）的基本用法。下一讲我们将介绍solidity中的哈希表——映射（"),n("code",[t._v("mapping")]),t._v("）。")])])}),[],!1,null,null,null);s.default=e.exports}}]);
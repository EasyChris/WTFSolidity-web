(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{393:function(t,s,e){t.exports=e.p+"assets/img/15-1.7b995a91.png"},394:function(t,s,e){t.exports=e.p+"assets/img/15-2.7c0ed971.png"},395:function(t,s,e){t.exports=e.p+"assets/img/15-3.16b077fd.png"},498:function(t,s,e){"use strict";e.r(s);var a=e(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"solidity极简入门-15-异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solidity极简入门-15-异常"}},[t._v("#")]),t._v(" Solidity极简入门: 15. 异常")]),t._v(" "),a("p",[t._v("我最近在重新学solidity，巩固一下细节，也写一个“Solidity极简入门”，供小白们使用（编程大佬可以另找教程），每周更新1-3讲。")]),t._v(" "),a("p",[t._v("欢迎关注我的推特："),a("a",{attrs:{href:"https://twitter.com/0xAA_Science",target:"_blank",rel:"noopener noreferrer"}},[t._v("@0xAA_Science"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("WTF技术社群discord，内有加微信群方法："),a("a",{attrs:{href:"https://discord.gg/5akcruXrsk",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("所有代码和教程开源在github（1024个star发课程认证，2048个star发社群NFT）: "),a("a",{attrs:{href:"https://github.com/AmazingAng/WTFSolidity",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/AmazingAng/WTFSolidity"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("这一讲，我们介绍"),a("code",[t._v("solidity")]),t._v("三种抛出异常的方法："),a("code",[t._v("error")]),t._v("，"),a("code",[t._v("require")]),t._v("和"),a("code",[t._v("assert")]),t._v("，并比较三种方法的"),a("code",[t._v("gas")]),t._v("消耗。")]),t._v(" "),a("h2",{attrs:{id:"异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[t._v("#")]),t._v(" 异常")]),t._v(" "),a("p",[t._v("写智能合约经常会出"),a("code",[t._v("bug")]),t._v("，"),a("code",[t._v("solidity")]),t._v("中的异常命令帮助我们"),a("code",[t._v("debug")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error"}},[t._v("#")]),t._v(" Error")]),t._v(" "),a("p",[a("code",[t._v("error")]),t._v("是"),a("code",[t._v("solidity 0.8版本")]),t._v("新加的内容，方便且高效（省"),a("code",[t._v("gas")]),t._v("）地向用户解释操作失败的原因。人们可以在"),a("code",[t._v("contract")]),t._v("之外定义异常。下面，我们定义一个"),a("code",[t._v("TransferNotOwner")]),t._v("异常，当用户不是代币"),a("code",[t._v("owner")]),t._v("的时候尝试转账，会抛出错误：")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[t._v("error "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TransferNotOwner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义error")]),t._v("\n")])])]),a("p",[t._v("在执行当中，"),a("code",[t._v("error")]),t._v("必须搭配"),a("code",[t._v("revert")]),t._v("（回退）命令使用。")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferOwner1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" tokenId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" newOwner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_owners"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tokenId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("revert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TransferNotOwner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        _owners"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tokenId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newOwner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们定义了一个"),a("code",[t._v("transferOwner1()")]),t._v("函数，它会检查代币的"),a("code",[t._v("owner")]),t._v("是不是发起人，如果不是，就会抛出"),a("code",[t._v("TransferNotOwner")]),t._v("异常；如果是的话，就会转账。")]),t._v(" "),a("h3",{attrs:{id:"require"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require"}},[t._v("#")]),t._v(" Require")]),t._v(" "),a("p",[a("code",[t._v("require")]),t._v("命令是"),a("code",[t._v("solidity 0.8版本")]),t._v("之前抛出异常的常用方法，目前很多主流合约仍然还在使用它。它很好用，唯一的缺点就是"),a("code",[t._v("gas")]),t._v("随着描述异常的字符串长度增加，比"),a("code",[t._v("error")]),t._v("命令要高。使用方法："),a("code",[t._v('require(检查条件，"异常的描述")')]),t._v("，当检查条件不成立的时候，就会抛出异常。")]),t._v(" "),a("p",[t._v("我们用"),a("code",[t._v("require")]),t._v("命令重写一下上面的"),a("code",[t._v("transferOwner")]),t._v("函数：")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferOwner2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" tokenId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" newOwner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_owners"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tokenId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Transfer Not Owner"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        _owners"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tokenId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newOwner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"assert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assert"}},[t._v("#")]),t._v(" Assert")]),t._v(" "),a("p",[a("code",[t._v("assert")]),t._v("命令一般用于程序员写程序"),a("code",[t._v("debug")]),t._v("，因为它不能解释抛出异常的原因（比"),a("code",[t._v("require")]),t._v("少个字符串）。它的用法很简单，"),a("code",[t._v("assert(检查条件）")]),t._v("，当检查条件不成立的时候，就会抛出异常。")]),t._v(" "),a("p",[t._v("我们用"),a("code",[t._v("assert")]),t._v("命令重写一下上面的"),a("code",[t._v("transferOwner")]),t._v("函数：")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferOwner3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" tokenId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" newOwner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_owners"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tokenId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        _owners"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tokenId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newOwner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"在remix上验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在remix上验证"}},[t._v("#")]),t._v(" 在remix上验证")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("输入任意"),a("code",[t._v("uint256")]),t._v("数字和非0地址，调用"),a("code",[t._v("transferOwner1")]),t._v("，也就是"),a("code",[t._v("error")]),t._v("方法，控制台抛出了异常并显示我们自定义的"),a("code",[t._v("TransferNotOwner")]),t._v("。\n"),a("img",{attrs:{src:e(393),alt:"13 1.png"}})])]),t._v(" "),a("li",[a("p",[t._v("输入任意"),a("code",[t._v("uint256")]),t._v("数字和非0地址，调用"),a("code",[t._v("transferOwner2")]),t._v("，也就是"),a("code",[t._v("require")]),t._v("方法，控制台抛出了异常并打印出"),a("code",[t._v("require")]),t._v("中的字符串。\n"),a("img",{attrs:{src:e(394),alt:"13 2.png"}})])]),t._v(" "),a("li",[a("p",[t._v("输入任意"),a("code",[t._v("uint256")]),t._v("数字和非0地址，调用"),a("code",[t._v("transferOwner3")]),t._v("，也就是"),a("code",[t._v("assert")]),t._v("方法，控制台只抛出了异常。\n"),a("img",{attrs:{src:e(395),alt:"13 3.png"}})])])]),t._v(" "),a("h2",{attrs:{id:"三种方法的gas比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三种方法的gas比较"}},[t._v("#")]),t._v(" 三种方法的gas比较")]),t._v(" "),a("p",[t._v("我们比较一下三种抛出异常的"),a("code",[t._v("gas")]),t._v("消耗，通过remix控制台的Debug按钮，能查到每次函数调用的"),a("code",[t._v("gas")]),t._v("消耗分别如下：")]),t._v(" "),a("ol",[a("li",[a("strong",[a("code",[t._v("error")]),t._v("方法"),a("code",[t._v("gas")]),t._v("消耗")]),t._v("：24445")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("require")]),t._v("方法"),a("code",[t._v("gas")]),t._v("消耗")]),t._v("：24743")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("assert")]),t._v("方法"),a("code",[t._v("gas")]),t._v("消耗")]),t._v("：24446")])]),t._v(" "),a("p",[t._v("我们可以看到，"),a("code",[t._v("error")]),t._v("方法"),a("code",[t._v("gas")]),t._v("最少，其次是"),a("code",[t._v("assert")]),t._v("，"),a("code",[t._v("require")]),t._v("方法消耗"),a("code",[t._v("gas")]),t._v("最多！因此，"),a("code",[t._v("error")]),t._v("既可以告知用户抛出异常的原因，又能省"),a("code",[t._v("gas")]),t._v("，大家要多用！（注意，由于部署测试时间的不同，每个函数的"),a("code",[t._v("gas")]),t._v("消耗会有所不同，但是比较结果会是一致的。）")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("这一讲，我们介绍"),a("code",[t._v("solidity")]),t._v("三种抛出异常的方法："),a("code",[t._v("error")]),t._v("，"),a("code",[t._v("require")]),t._v("和"),a("code",[t._v("assert")]),t._v("，并比较了三种方法的"),a("code",[t._v("gas")]),t._v("消耗。结论："),a("code",[t._v("error")]),t._v("既可以告知用户抛出异常的原因，又能省"),a("code",[t._v("gas")]),t._v("。")])])}),[],!1,null,null,null);s.default=r.exports}}]);
# Solidity极简入门-工具篇5：使用Dune可视化区块链数据 

我最近在重新学solidity，巩固一下细节，也写一个“Solidity极简入门”，供小白们使用），每周更新1-3讲。

欢迎关注我的推特：[@0xAA_Science](https://twitter.com/0xAA_Science)

WTF技术社群discord，内有加微信群方法：[链接](https://discord.gg/5akcruXrsk)

所有代码和教程开源在github: [github.com/AmazingAng/WTFSolidity](https://github.com/AmazingAng/WTFSolidity)

-----

## hardhat安装

### 先安装node

可以使用 nvm 安装node

[GitHub - nvm-sh/nvm: Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions](https://github.com/nvm-sh/nvm)

### 初始化文件夹

```shell
mkidr hardhat-demo
npm init -y
npm install --save-dev hardhat
npx hardhat

```

```shell
👷 Welcome to Hardhat v2.9.9 👷‍

? What do you want to do? …
  Create a JavaScript project
  Create a TypeScript project
❯ Create an empty hardhat.config.js
  Quit

```

选择创建空白项目配置 `Create an empty hardhat.config.js`

### 安装插件
```shell
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

将插件添加到你的hardhat配置文件中 `hardhat.config.js`

```js
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
};
```

## 编写合约 ｜ 编译合约
如果你用过remix，那么你直接在remix上点击保存的时候，remix是会自动帮你编译的，但是在本地的hardhat开发环境中，你需要手动编译一下。

### 新建合约目录

新建`contracts`合约目录，并添加第31章节的ERC20合约。

### 编写测试合约
这里的合约直接使用第31章节的ERC20合约

```js
// SPDX-License-Identifier: MIT
// WTF Solidity by 0xAA

pragma solidity ^0.8.4;

import "./IERC20.sol";

contract ERC20 is IERC20 {

    mapping(address => uint256) public override balanceOf;

    mapping(address => mapping(address => uint256)) public override allowance;

    uint256 public override totalSupply;   // 代币总供给

    string public name;   // 名称
    string public symbol;  // 符号
    
    uint8 public decimals = 18; // 小数位数

    // @dev 在合约部署的时候实现合约名称和符号
    constructor(string memory name_, string memory symbol_){
        name = name_;
        symbol = symbol_;
    }

    // @dev 实现`transfer`函数，代币转账逻辑
    function transfer(address recipient, uint amount) external override returns (bool) {
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    // @dev 实现 `approve` 函数, 代币授权逻辑
    function approve(address spender, uint amount) external override returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    // @dev 实现`transferFrom`函数，代币授权转账逻辑
    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external override returns (bool) {
        allowance[sender][msg.sender] -= amount;
        balanceOf[sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    // @dev 铸造代币，从 `0` 地址转账给 调用者地址
    function mint(uint amount) external {
        balanceOf[msg.sender] += amount;
        totalSupply += amount;
        emit Transfer(address(0), msg.sender, amount);
    }

    // @dev 销毁代币，从 调用者地址 转账给  `0` 地址
    function burn(uint amount) external {
        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        emit Transfer(msg.sender, address(0), amount);
    }

}

```

### 编译合约
```shell
npx hardhat compile
```

看到如下输出，说明合约编译成功。

```shell
$ npx hardhat compile
Compiling 1 file with 0.8.9
Compilation finished successfully
```


## 编写单元测试

新建测试文件夹`test`,新建`test.js`

```js
const {expect} = require('chai');
const { ethers } = require('hardhat');


describe("ERC20 合约测试", ()=>{
  it("合约部署", async () => {
     // ethers.getSigners,代表eth账号  ethers 是一个全局函数，可以直接调用
     const [owner, addr1, addr2] = await ethers.getSigners();
     // ethers.js 中的 ContractFactory 是用于部署新智能合约的抽象，因此这里的 ERC20 是我们代币合约实例的工厂。ERC20代表contracts 文件夹中的 ERC20.sol 文件
     const Token = await ethers.getContractFactory("ERC20");
     // 部署合约, 传入参数 ERC20.sol 中的构造函数参数分别是 name, symbol 这里我们都叫做WTF
     const hardhatToken = await Token.deploy("WTF", "WTF"); 
      // 获取合约地址
     const ContractAddress = await hardhatToken.address;
     expect(ContractAddress).to.properAddress;
  });
})
```

## Hardhat 测试

```shell
npx hardhat test
# 如果有多个文件想跑指定文件可以使用
npx mocha test/test.js
```

看到如下输出，说明测试成功。

```shell
(node:17142) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)


  ERC20 合约测试
    ✔ 合约部署 (1648ms)


  1 passing (2s)
```

## 总结

这一讲，我们介绍了Hardhat基础用法。通过Hardhat我们能够工程化solidity的项目，并提供了很多有用的脚手架。在后续的文章中，我们会介绍更多的Hardhat的高级用法，比如如何使用Hardhat的插件，如何使用Hardhat的测试框架等等。
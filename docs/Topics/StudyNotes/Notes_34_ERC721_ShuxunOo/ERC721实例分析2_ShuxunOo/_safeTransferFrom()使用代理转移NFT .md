# _safeTransferFrom()使用代理转移NFT (1)

地址`0xb9016E740176B54755cBAad721dCDD6a65aB40Fd`下有`tokenID`为`[951, 952]`

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_.png)

地址`0x0FD745DB2fd13f1598c65fa3d32696C1fF6DA23f`没有NFT

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_1.png)

现在将`0xb9016E740176B54755cBAad721dCDD6a65aB40Fd`地址下的`951`号NFT授权给`0x0FD745DB2fd13f1598c65fa3d32696C1fF6DA23f`

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_2.png)

交易详情：

[Polygon Transaction Hash (Txhash) Details | PolygonScan](https://polygonscan.com/tx/0x58873c6278ed0f7448afcc8a4f8225c7912de7c8b8497048fcfd8f3cd70f0cc4)

此时再次检查，地址`0x0FD745DB2fd13f1598c65fa3d32696C1fF6DA23f`没有依旧NFT

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_3.png)

951号NFT的归属权依旧属于地址`0xb9016E740176B54755cBAad721dCDD6a65aB40Fd`

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_4.png)

但是我们调用getApprove（）函数发现，951号NFT已经授权给了`0x0FD745DB2fd13f1598c65fa3d32696C1fF6DA23f`

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_5.png)

接下来我们使用`0x0FD745DB2fd13f1598c65fa3d32696C1fF6DA23f`将951号NFT从`0xb9016E740176B54755cBAad721dCDD6a65aB40Fd`转移给地址`0x8600C2E501f145C2EaA1fC2a46334Fe7B29493c1`

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_6.png)

`交易明细：`

[Polygon Transaction Hash (Txhash) Details | PolygonScan](https://polygonscan.com/tx/0x042fa2f76ba9716255f2c399e3abf881978a15c7b27f925fe2373c4eadce71a5)

地址`0x8600C2E501f145C2EaA1fC2a46334Fe7B29493c1`已经有了951号NFT

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_7.png)

`0xb9016E740176B54755cBAad721dCDD6a65aB40Fd`此时只剩952号NFT

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_8.png)

## 一个小问题：

951号NFT从原地址`0xb9016E740176B54755cBAad721dCDD6a65aB40Fd`转移给地址`0x8600C2E501f145C2EaA1fC2a46334Fe7B29493c1`，那么之前`0xb9016E740176B54755cBAad721dCDD6a65aB40Fd`授权给地址`0x0FD745DB2fd13f1598c65fa3d32696C1fF6DA23f`的代理权还在吗？

直观来讲，随着`0xb9016E740176B54755cBAad721dCDD6a65aB40Fd`对951号NFT归属权的丧失，之前`0xb9016E740176B54755cBAad721dCDD6a65aB40Fd`的所有关于归属权的衍生操作都会失效，正所谓是人走茶凉，如果代理权还在的话，`0x0FD745DB2fd13f1598c65fa3d32696C1fF6DA23f`依旧可以将951号NFT偷偷转移给别人，这显然是不符合常理的，接下来我们验证一下自己的猜想。

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_9.png)

951号NFT的授权地址变为0，之前的授权自动取消，其实这一切都是开发者实现考虑好的。

函数之间的调用关系：`safeTransferFrom（）`调用 `safeTransferFrom（）`（函数重名，参数不同） `调用_transfer（）`，在`_transfer（）`中取消更改授权操作。

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_10.png)

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_11.png)

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_12.png)

在`_transfer（）`中取消更改授权操作。

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_13.png)

[Polygon Transaction Hash (Txhash) Details | PolygonScan](https://polygonscan.com/tx/0x41de905938fc10782b4269dc4ad065be2a1391caa12f8afabd92902b4a2b4835)

![Untitled](./img/_safeTransferFrom()使用代理转移NFT_14.png)

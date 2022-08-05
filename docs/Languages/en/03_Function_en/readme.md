#  Solidity Minimalist Tutorial: 3. Function type

Recently, I have been relearning Solidity, consolidating the finer details, and also writing a "Solidity Minimalist Tutorial" for newbies to learn. Lectures are updated 1~3 times weekly. 

Everyone is welcomed to follow my Twitter: [@0xAA_Science](https://twitter.com/0xAA_Science)

WTF Academy Discord: [Link](https://discord.gg/5akcruXrsk)

All codebase and tutorial notes are open source and available on GitHub (At 1024 repo stars, course certification is unlocked. At 2048 repo stars, community NFT is unlocked.): [github.com/AmazingAng/WTFSolidity](https://github.com/AmazingAng/WTFSolidity)

---

## Function in Solidity

Function is classified into values type by solidity document, but I put it a separate category, since there is a big difference in my opinion. Let's take a look of solidity function:

```solidity
    function (<parameter types>) {internal|external} [pure|view|payable] [returns (<return types>)]
```

kind of complicated, let's move forward one by one (keyword in square brackets is optional):

1. `function`: Start with the keyword `function`.

2. `(<parameter types>)`: The input variable types and names of the function.

3. `{internal|external|public|private}`: Function visibility specifiers. There are 4 kinds, and `internal` is the default visibility level for state variables:

   - `public`: Visible to all.

   - `private`: Can only be accessed within this contract, derived contracts cannot used it.

    - `external`: Can only be called from other contracts. But can be called by `this.f()` inside the contract, where `f` is function name.

    - `internal`: Can only be accessed internall and by contracts deriving from it.

    **Note**: `public|private|internal` can be also used on state variables. Public variables will automatically generate `getter` functions for querying values.

4. `[pure|view|payable]`: Keywords that dictate a Solidity functions behavior. `payable` is easy to understand. One can send `ETH` to the contract via `payable` functions. `pure` and `view` are introduced at the next section.

5. `[returns ()]`: Return variable types and names.

## WTF is `Pure` and `View`?

When I started learning `solidity`, I didn't understand `pure` and `view` at all, since there are no similar keywords in other languages. `solidity` added these two keywords, because of `gas fee`. The contract state variables are stored on block chain, and `gas fee` is very expensive. If you don't rewrite the variables on the chain, you don't need to pay `gas`. Thus, You don't need to pay `gas` for calling  `pure` and `view` functions.

I drew a Mario illustration to help you understand `pure` and `view`. In the picture, I put state variables (stored on-chain) as Princess Bitch, three different roles represent different keywords.

![WTH is pure and view in solidity?](https://images.mirror-media.xyz/publication-images/1B9kHsTYnDY_QURSWMmPb.png?height=1028&width=1758)

- `pure` : Functions containing `pure` keyword cannot read nor write state variables on-chain. Just like the little monster, it can't see or touch Princess Bitch.

- `view` : Functions containing `view` keyword can read but can not write on-chain state variables. Similar to Mario, able to see Princess but can not get inside.

- Without `pure` and `view`: Functions can both read and write state variables. Like the `boss` can do whatever he wants.

## Code

### 1. pure v.s. view

We define a state variable `number = 5`

```solidity
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.4;
    contract FunctionTypes{
        uint256 public number = 5;
```

Define an `add()` function, add 1 to `number ` every when called.

```solidity
    // default
    function add() external{
        number = number + 1;
    }
```

If `add()` contains `pure` keyword, i.e. `function add() pure external`, it will occur error. Because `pure` can not read state variable in contract nor write. So what can `pure` do ? i.e. you can pass a parameter `_number` to function, let function returns `_number + 1`.

```solidity
    // pure
    function addPure(uint256 _number) external pure returns(uint256 new_number){
        new_number = _number+1;
    }
```

**Example:**
![3-3.png](./img/3-3.png)

If `add()` contains `view` , i.e. `function add() view external`, it will also occur error. Because `view` can read, but can not write state variable. We can modify the function as follows:

```solidity
    // view
    function addView() external view returns(uint256 new_number) {
        new_number = number + 1;
    }
```

**Example:**
![3-4.png](./img/3-4.png)

### 2. internal v.s. external

```solidity
    // internal
    function minus() internal {
        number = number - 1;
    }

    // external
    function minusCall() external {
        minus();
    }
```

Define a `internal minus()` function, `number` will decrease 1 each time function called. Since `internal` function can only be called within the contract itself. Therefore, we need to define a `external` `minusCall()` function to call `minus()` internally.

**Example:**
![3-1.png](./img/3-1.png)

### 3. payable

```solidity
    // payable: ensure that money (ETH) is being sent to the contract and out of the contract as well
    function minusPayable() external payable returns(uint256 balance) {
        minus();
        balance = address(this).balance;
    }
```

Define a `external payable minusPayable()` function, which calls `minus()` and return `ETH` balance of the current contract (`this` keyword can let us query current contract address). Since the funciton is `payable`, we can send 1 `ETH` to the contract when calling `minusPayable()`.

![](https://images.mirror-media.xyz/publication-images/ETDPN8myq7jFfAL8CUAFt.png?height=148&width=588)

We can see that contract balance is 1 `ETH` in return message.

![](https://images.mirror-media.xyz/publication-images/nGZ2pz0MvzgXuKrENJPYf.png?height=128&width=1130)

**Example:**
![3-2.png](./img/3-2.png)

## Tutorial summary

In this section, we introduced `solidity` function type. `pure` and `view` keywords are difficult to understand, since they have not appeared in other languages. You don't need to pay gas fees for calling `pure` or `view` functions, since they don't modify the on-chain data.

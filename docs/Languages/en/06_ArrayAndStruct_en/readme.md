# Solidity Minimalist Primer: Tutorial 6. reference type, array, struct

Recently, I have been relearning the Solidity, consolidating the finer details, and also writing a "Solidity Minimalist Primer" for newbies to learn and use from (advanced programmers can find another tutorial). Lectures are updated 1 o 3 times weekly. 

Everyone is welcomed to follow my Twitter: [@0xAA_Science](https://twitter.com/0xAA_Science)

WTF Solidity Discord server, herein contains the method to join the Chinese WeChat communinity: [Link](https://discord.gg/5akcruXrsk)

All codebase and tutorial notes are open source and available on GitHub (At 1024 repo stars, course certification is unlocked. At 2048 repo stars, community NFT is unlocked.): [github.com/AmazingAng/WTFSolidity](https://github.com/AmazingAng/WTFSolidity)

-----
In this lecture, we will introduce two important variable types in `solidity`: `array` and structure `struct`.

## Array
`Array` is a variable type commonly used by `solidity` to store a set of data (integers, bytes, addresses, etc.).

There are two types of arrays: fixed-length arrays and variable-length arrays.：

- Fixed-length arrays: Specify the length of the array at declaration time. declared in the format `T[k]`, where `T` is the type of the element and `k` is the length, example：
```solidity
    // Fixed Length Array
    uint[8] array1;
    byte[5] array2;
    address[100] array3;
```
- Variable Length Array（Dynamic Array）：Do not specify the length of the array when declaring it. Use the format of `T[]`, where `T` is the type of the element, for example (`bytes` is special, it is an array, but you don't need to add `[]`)：
```solidity
    // Variable Length Array
    uint[] array4;
    byte[] array5;
    address[] array6;
    bytes array7;
```
### Rules for creating arrays
In solidity, there are some rules for creating arrays：

- For a `memory` modified `dynamic array`, it can be created with the `new` operator, but the length must be declared, and the length cannot be changed after the declaration. example：
```solidity
    // memory dynamic array
    uint[] memory array8 = new uint[](5);
    bytes memory array9 = new bytes(9);
```
- Array literal constants are arrays in the form of expressions, and are not immediately assigned to variables, such as `[uint(1),2,3]` (the type of the first element needs to be declared, otherwise the type with the smallest storage space is used by default )
- If creating a dynamic array, you need an element-by-element assignment.
```solidity
    uint[] memory x = new uint[](3);
    x[0] = 1;
    x[1] = 3;
    x[2] = 4;
```
### array member
- `length`: Arrays have a `length` member containing the number of elements, and the length of a `memory` array is fixed after creation.
- `push()`: `Dynamic arrays` and `bytes` have a `push()` member that adds a `0` element at the end of the array.
- `push(x)`: `Dynamic arrays` and `bytes` have `push(x)` members, which can add an `x` element at the end of the array.
- `pop()`: `Dynamic arrays` and `bytes` have a `pop()` member that removes the last element of the array.

**Example:**
![6-1.png](./img/6-1.png)

## struct
`Dynamic arrays` and `bytes` have a `pop()` member that removes the last element of the array.：
```solidity
    // struct
    struct Student{
        uint256 id;
        uint256 score; 
    }
```
```solidity
    Student student; // Initially a student structure
```
There are two ways to assign values to structures:
```solidity
    //  assign value to structure
    // Method 1: Create a storage struct reference in the function
    function initStudent1() external{
        Student storage _student = student; // assign a copy of student
        _student.id = 11;
        _student.score = 100;
    }
```
**Example:**
![6-2.png](./img/6-2.png)

```solidity
     // Method 2: Directly refer to the struct of the state variable
    function initStudent2() external{
        student.id = 1;
        student.score = 80;
    }
```
**Example:**
![6-3.png](./img/6-3.png)

## Summarize
In this lecture, we introduced the basic usage of array (`array`) and structure (`struct`) in solidity. In the next lecture, we will introduce the hash table in solidity - mapping (`mapping`)。


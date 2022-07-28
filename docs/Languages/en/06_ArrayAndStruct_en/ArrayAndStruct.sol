// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract ArrayTypes {

    // Fixed Length Array
    uint[8] array1;
    bytes1[5] array2;
    address[100] array3;

    // Variable Length Array
    uint[] array4;
    bytes1[] array5;
    address[] array6;
    bytes array7;

    // Initialize a variable-length Array
    uint[] array8 = new uint[](5);
    bytes array9 = new bytes(9);
    //  Assign value to variable length array
    function initArray() external pure returns(uint[] memory){
        uint[] memory x = new uint[](3);
        x[0] = 1;
        x[1] = 3;
        x[2] = 4;
        return(x);
    }

    function arrayPush() public  returns(uint[] memory){
        uint[2] memory a = [uint(1),2];
        array4 = a;
        array4.push(3);
        return array4;
    }
}

pragma solidity ^0.8.4;
contract StructTypes {
    // Struct
    struct Student{
        uint256 id;
        uint256 score; 
    }
    Student student; // Initially a student structure
    //  assign value to structure
    // Method 1: Create a storage struct reference in the function
    function initStudent1() external{
        Student storage _student = student; // assign a copy of student
        _student.id = 11;
        _student.score = 100;
    }

     // Method 2: Directly refer to the struct of the state variable
    function initStudent2() external{
        student.id = 1;
        student.score = 80;
    }
  
}

pragma solidity ^0.8.4;
contract EnumTypes {
    // Represent uint 0, 1, 2 as Buy, Hold, Sell
    enum ActionSet { Buy, Hold, Sell }
    // Create enum variable action
    ActionSet action = ActionSet.Buy;

    // enum can be explicitly converted to uint
    function enumToUint() external view returns(uint){
        return uint(action);
    }
}

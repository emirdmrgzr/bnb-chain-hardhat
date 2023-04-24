// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter{
    uint public total;
    uint public substracted;
    uint public multiplied;
    uint public divided;

    function add (uint number1, uint number2) public{
        total = number1 + number2;
        require(total >= number1,"Addition is invalid!");
    }

    function substract(uint number1, uint number2) public{
        substracted = number1 - number2;
        require(number1>=number2,"Substraction is invalid!");
    }

    function multiply(uint number1, uint number2) public{
        multiplied = number1 * number2;
        require(total >= number1 && total >= number2,"Multiplication is invalid!");
    }

    function divide(uint number1, uint number2) public{
        require(number2!= 0, "Division is invalid!");
        divided = number1 / number2;
    }

    function returnValues() public view returns(uint, uint, uint, uint){
        return(total, substracted, multiplied, divided);
    }
}
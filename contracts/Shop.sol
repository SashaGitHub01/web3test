// SPDX-License-Identifier: MIT
pragma solidity >=0.4.17 <0.9.0;

contract Coin {
  address public minter;
  mapping(address => uint) public balances;

  function update(uint newBalance) public {
    balances[msg.sender] = newBalance;
  }

  function getData() public pure returns(uint) {
    return 16;
  }
}

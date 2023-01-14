// SPDX-License-Identifier: MIT
pragma solidity >=0.4.17 <0.9.0;

contract Coin {
    address public minter;
    uint256 public data = 0;
    uint256 public value = 0;
    string public status;
    uint256 public nextId;
    mapping(address => uint256) public balances;

    event MyEvent(
        uint256 indexed id,
        uint256 indexed date,
        string indexed value
    );

    function update(uint256 newBalance) public {
        balances[msg.sender] = newBalance;
    }

    function emitMyEvent(string calldata val) public {
        emit MyEvent(nextId, block.timestamp, val);
        nextId++;
    }

    function add(uint256 amount)
        public
        returns (bool myBool, string memory myStr)
    {
        data += amount;
        return (true, "Hey!");
    }

    function getData() public view returns (uint256) {
        return data;
    }

    function sendEth() external payable {
        status = "sent";
    }

    receive() external payable {
        status = "receive";
    }

    fallback() external payable {
        status = "fallback";
    }
}

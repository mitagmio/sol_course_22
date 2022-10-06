// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken1 is ERC20 {
    constructor(uint256 initialSupply) ERC20("TestToken1", "TTK1") {
            _mint(msg.sender, initialSupply*10**decimals());
    }

    function decimals() public view override returns (uint8) {
        return 10;
    }
}

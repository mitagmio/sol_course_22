// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract USDT is ERC20, Ownable {
    // uint256 initialSupply
    constructor() ERC20("Tether USD", "USDT") {
        // _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    function decimals() public pure override returns (uint8) {
        return 6;
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount * 10 ** decimals());
    }
}
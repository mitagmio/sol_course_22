// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

contract BalanceAccounting {

    uint256 private _totalSupply;
    mapping(address => uint256) private _balances;

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function _mint(address account, uint256 amount) internal virtual {
        _totalSupply += amount;
        _balances[account] += amount;
    }

    function _burn(address account, uint256 amount) internal virtual {
        _balances[account] -= amount;
        _totalSupply -= amount;
    }

}
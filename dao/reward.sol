// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Reward {

    constructor() {}

    function withdrawReward() external {
        IERC20 tokenUSDT = IERC20(address(0xfE09A8E5127232899fd0403D29Bff9a9c1cA0BdD));
        uint256 balanceUSDT = tokenUSDT.balanceOf(address(this));
        require(balanceUSDT > 0, "Nothing to pay!");

        IERC20 tokenOMDAO = IERC20(address(0x53ef682b4BB9f21E7d38318ee00A8e2C1AB02d21));
        uint256 totalOMDAOBanalce = tokenOMDAO.totalSupply();

        address addrA = address(0x0e8c6ed32a5587C78434fA3410821FcA444C1B74);
        address addrB = address(0xb9a4203428a86ee97a2Cc62D8fc78b4e6b544a86);
        address addrC = address(0xDa20B603355831fA75C95d71E38e28C1153943Dc);
        address addrD = address(0x3dAdc71CC46A1275A93b77690612a26529A4b2B8);
        address addrE = address(0x4d88AfB1B9745A198Ff7b1c5E1CC5b235B4Fbac7);

        uint256 amountA = balanceUSDT * 5 / 100;
        uint256 amountB = balanceUSDT * 2 / 10;
        uint256 amountC = balanceUSDT * 5 / 100;
        uint256 amountD = balanceUSDT * 2 / 10;
        uint256 amountE = balanceUSDT * 5 / 10;

        if (totalOMDAOBanalce >= 10000000 * 10**6) {

            amountB = balanceUSDT * 25 / 100;
            amountC = balanceUSDT * 75 / 1000;
            amountD = balanceUSDT * 125 / 1000;

        }

        tokenUSDT.transfer(addrA, amountA);

        tokenUSDT.transfer(addrB, amountB);

        tokenUSDT.transfer(addrC, amountC);

        tokenUSDT.transfer(addrD, amountD);

        tokenUSDT.transfer(addrE, amountE);

    }
}
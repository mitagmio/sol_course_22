// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "./utils/TransferableUpgradeable.sol";

contract TRANSFER_TOKENS_V1 is
    Initializable,
    OwnableUpgradeable,
    TransferableUpgradeable
{
    address private _transporter;
    using SafeERC20Upgradeable for IERC20Upgradeable;

    function initialize() public initializer {
        __Context_init();
        __Ownable_init();
        __Transferable_init(
            address(0x1111121d43d2Bb8e74b7689DBc9E0563F0FB8663)
        );
    }

    modifier transmitterOrOwner() {
        require(
            (transmitter() == _msgSender() || owner() == _msgSender()),
            "TRANSFER_TOKENS: caller is not the transmitter or owner"
        );
        _;
    }

    function transferTransmittership(
        address newTransmitter
    ) public override transmitterOrOwner {
        require(
            newTransmitter != address(0),
            "Transferable: new transmitter is the zero address"
        );
        _transferTransmittership(newTransmitter);
    }

    function transferToken(
        address _tokenContract,
        address _to,
        uint256 _amount
    ) external transmitterOrOwner {
        require(
            _tokenContract != address(0),
            "ERC20: contract is the zero address"
        );
        require(_to != address(0), "ERC20: transfer to zero address");
        IERC20Upgradeable tokenContract = IERC20Upgradeable(_tokenContract);
        tokenContract.safeTransfer(_to, _amount);
    }
}

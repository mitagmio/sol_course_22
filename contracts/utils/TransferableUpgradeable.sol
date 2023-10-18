// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.7.0) (access/Transferable.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";

/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an transmitter) that can be granted exclusive access to
 * specific functions.
 *
 * By default, the transmitter account will be the one that deploys the contract. This
 * can later be changed with {transferTransmittership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyTransmitter`, which can be applied to your functions to restrict their use to
 * the transmitter.
 */
abstract contract TransferableUpgradeable is Initializable, ContextUpgradeable {
    address private _transmitter;

    event TransmittershipTransferred(
        address indexed previousTransmitter,
        address indexed newTransmitter
    );

    /**
     * @dev Initializes the contract setting the deployer as the initial transmitter.
     */
    function __Transferable_init(
        address newTransmitter
    ) internal onlyInitializing {
        __Transferable_init_unchained(newTransmitter);
    }

    function __Transferable_init_unchained(
        address newTransmitter
    ) internal onlyInitializing {
        if (newTransmitter == address(0)) {
            _transferTransmittership(_msgSender());
        } else {
            _transferTransmittership(newTransmitter);
        }
    }

    /**
     * @dev Throws if called by any account other than the transmitter.
     */
    modifier onlyTransmitter() {
        _checkTransmitter();
        _;
    }

    /**
     * @dev Returns the address of the current transmitter.
     */
    function transmitter() public view virtual returns (address) {
        return _transmitter;
    }

    /**
     * @dev Throws if the sender is not the transmitter.
     */
    function _checkTransmitter() internal view virtual {
        require(
            transmitter() == _msgSender(),
            "Transferable: caller is not the transmitter"
        );
    }

    /**
     * @dev Leaves the contract without transmitter. It will not be possible to call
     * `onlyTransmitter` functions anymore. Can only be called by the current transmitter.
     *
     * NOTE: Renouncing transmittership will leave the contract without an transmitter,
     * thereby removing any functionality that is only available to the transmitter.
     */
    function renounceTransmittership() public virtual onlyTransmitter {
        _transferTransmittership(address(0));
    }

    /**
     * @dev Transfers transmittership of the contract to a new account (`newTransmitter`).
     * Can only be called by the current transmitter.
     */
    function transferTransmittership(
        address newTransmitter
    ) public virtual onlyTransmitter {
        require(
            newTransmitter != address(0),
            "Transferable: new transmitter is the zero address"
        );
        _transferTransmittership(newTransmitter);
    }

    /**
     * @dev Transfers transmittership of the contract to a new account (`newTransmitter`).
     * Internal function without access restriction.
     */
    function _transferTransmittership(address newTransmitter) internal virtual {
        address oldTransmitter = _transmitter;
        _transmitter = newTransmitter;
        emit TransmittershipTransferred(oldTransmitter, newTransmitter);
    }

    /**
     * @dev This empty reserved space is put in place to allow future versions to add new
     * variables without shifting down storage in the inheritance chain.
     * See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps
     */
    uint256[49] private __gap;
}

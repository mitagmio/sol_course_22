// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";

library Percent {
  // Solidity automatically throws when dividing by 0
  struct percent {
    uint num;
    uint den;
  }
  function mul(percent storage p, uint a) internal view returns (uint) {
    if (a == 0) {
      return 0;
    }
    return a*p.num/p.den;
  }

  function div(percent storage p, uint a) internal view returns (uint) {
    return a/p.num*p.den;
  }

  function sub(percent storage p, uint a) internal view returns (uint) {
    uint b = mul(p, a);
    if (b >= a) return 0;
    return a - b;
  }

  function add(percent storage p, uint a) internal view returns (uint) {
    return a + mul(p, a);
  }
}

contract OMDAO is ERC20, Pausable, Ownable, ERC20Permit {
    using Percent for Percent.percent;
    Percent.percent private m_feePercent = Percent.percent(1, 10); // 1/10*100% = 10%
    Percent.percent private m_50Percent = Percent.percent(5, 10); // 5/10*100% = 50%
    Percent.percent private m_burnPercent = Percent.percent(9, 10); // 9/10*100% = 90%
    address private addrUSDT = address(0xfE09A8E5127232899fd0403D29Bff9a9c1cA0BdD);
    address private addrStake;
    address private addrRewardTeam;
    constructor() ERC20("OM DAO", "OMD") ERC20Permit("OM DAO") {}

    function decimals() public pure override returns (uint8) {
        return 6;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }

    function setAddressUSDT(address _addrUSDT) external onlyOwner{
        require(_addrUSDT != address(0), "ERC20: contract is the zero address");
        addrUSDT = _addrUSDT;
    }

    function setAddressStake(address _addrStake) external onlyOwner{
        addrStake = _addrStake;
    }

    function setAddressReward(address _addrReward) external onlyOwner{
        addrRewardTeam = _addrReward;
    }

    function _moneyRouter(uint256 _amount) internal {
        IERC20 usdt = IERC20(addrUSDT);
        uint256 amount = _amount;
        address addrReward = addrRewardTeam;
        if (addrStake != address(0)) {
            amount = m_50Percent.mul(_amount);
            _mint(addrStake, amount);
        }
        if (addrRewardTeam == address(0)) addrReward = owner();
        (bool success) = usdt.transfer(addrReward, amount);
        require(success,"Transfer failed!");
    }

    function buyToken(uint256 _amount) external{
        require(_amount >= 1 * 10**decimals(),"Amount must be greater than or equal to 1 USDT.");
        IERC20 usdt = IERC20(addrUSDT);
        (bool success) = usdt.transferFrom(msg.sender, address(this), _amount);
        require(success,"Transfer failed! Please approve amount USDT for this contract.");
        _moneyRouter(m_feePercent.mul(_amount));
        _mint(msg.sender, _amount);
    }

    function sellToken(uint256 _amount) external{
        require(_amount >= 1 * 10**decimals(),"Amount must be greater than or equal to 1 token.");
        _burn(msg.sender, _amount);
        IERC20 usdt = IERC20(addrUSDT);
        (bool success) = usdt.transfer(msg.sender, m_burnPercent.mul(_amount));
        require(success,"Transfer failed!");
    }

    function withdrawToken(address _tokenContract, uint256 _amount) external onlyOwner{
        require(_tokenContract != address(0), "ERC20: contract is the zero address");
        IERC20 tokenContract = IERC20(_tokenContract);

        // transfer the token from address of this contract
        // to address of the user (executing the withdrawToken() function)
        tokenContract.transfer(msg.sender, _amount);
    }
}

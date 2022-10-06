const { ethers, upgrades } = require("hardhat");

const PROXY = "0x26bF04F7b4A629255341DeDAd25f474180e0162c";

async function main() {
    const MioTeERC20UpgradebleV2 = await ethers.getContractFactory("MioTeERC20UpgradebleV2");
    console.log("Upgrading MyERC20Upgradeble...");
    await upgrades.upgradeProxy(PROXY, MioTeERC20UpgradebleV2);
    console.log("MyERC20Upgradeble upgraded");
}

main();
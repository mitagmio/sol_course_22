const { ethers, upgrades } = require("hardhat");

async function main() {
    const MioTeERC20UpgradebleV1 = await ethers.getContractFactory("MioTeERC20UpgradebleV1");
    console.log("Deploying MyERC20Upgradeble...");
    const box = await upgrades.deployProxy(MioTeERC20UpgradebleV1, [10000], {
        initializer: "initialize",
    });
    await box.deployed();
    console.log("MyERC20Upgradeble deployed to:", box.address);
}

main();
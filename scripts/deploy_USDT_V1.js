const { ethers, upgrades } = require("hardhat");

async function main() {
    const USDTV1 = await ethers.getContractFactory("USDTV1");
    console.log("Deploying USDTV1...");
    const box = await upgrades.deployProxy(USDTV1, [], {
        initializer: "initialize",
        gasPrice: 50000000000,
        gasLimit: 6000000,
    });
    await box.deployed();
    console.log("USDTV1 deployed to:", box.address);
}

main();
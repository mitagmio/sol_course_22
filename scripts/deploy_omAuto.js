const { ethers } = require("hardhat");

async function main() {
    const omAuto = await ethers.getContractFactory("omAuto");
    console.log("Deploying omAuto...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omAuto.deploy();
    await box.deployed();
    console.log("omAuto deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
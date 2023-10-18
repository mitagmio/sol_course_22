const { ethers } = require("hardhat");

async function main() {
    const omdwDelC = await ethers.getContractFactory("omdwDelC");
    console.log("Deploying omdwDelC...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omdwDelC.deploy();
    await box.deployed();
    console.log("omdwDelC deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
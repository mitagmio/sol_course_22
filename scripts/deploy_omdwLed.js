const { ethers } = require("hardhat");

async function main() {
    const omdwLed = await ethers.getContractFactory("omdwLed");
    console.log("Deploying omdwLed...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omdwLed.deploy();
    await box.deployed();
    console.log("omdwLed deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
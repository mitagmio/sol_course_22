const { ethers } = require("hardhat");

async function main() {
    const omdwCR = await ethers.getContractFactory("omdwCR");
    console.log("Deploying omdwCR...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omdwCR.deploy();
    await box.deployed();
    console.log("omdwCR deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
const { ethers } = require("hardhat");

async function main() {
    const OmDaoSwapCR = await ethers.getContractFactory("OmDaoSwapCR");
    console.log("Deploying OmDaoSwapCR...");
    console.log(await ethers.provider.getGasPrice());
    const box = await OmDaoSwapCR.deploy();
    await box.deployed();
    console.log("OmDaoSwapCR deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
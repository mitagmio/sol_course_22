const { ethers } = require("hardhat");

async function main() {
    const OmDaoSwapTigr = await ethers.getContractFactory("OmDaoSwapTigr");
    console.log("Deploying OmDaoSwapTigr...");
    console.log(await ethers.provider.getGasPrice());
    const box = await OmDaoSwapTigr.deploy();
    await box.deployed();
    console.log("OmDaoSwapTigr deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
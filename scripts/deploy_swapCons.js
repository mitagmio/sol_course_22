const { ethers } = require("hardhat");

async function main() {
    const OmDaoSwapCons = await ethers.getContractFactory("OmDaoSwapCons");
    console.log("Deploying OmDaoSwapCons...");
    console.log(await ethers.provider.getGasPrice());
    const box = await OmDaoSwapCons.deploy();
    await box.deployed();
    console.log("OmDaoSwapCons deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
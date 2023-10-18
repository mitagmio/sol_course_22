const { ethers } = require("hardhat");

async function main() {
    const OMD_LAUNCHPAD = await ethers.getContractFactory("OMD_LAUNCHPAD");
    console.log("Deploying OMD_LAUNCHPAD...");
    console.log(await ethers.provider.getGasPrice());
    const box = await OMD_LAUNCHPAD.deploy();
    await box.deployed();
    console.log("OMD_LAUNCHPAD deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
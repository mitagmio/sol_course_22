const { ethers } = require("hardhat");

async function main() {
    const OMDAOWrappedTigr = await ethers.getContractFactory("OMDAOWrappedTigr");
    console.log("Deploying OMDAOWrappedTigr...");
    console.log(await ethers.provider.getGasPrice());
    const box = await OMDAOWrappedTigr.deploy();
    await box.deployed();
    console.log("OMDAOWrappedTigr deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
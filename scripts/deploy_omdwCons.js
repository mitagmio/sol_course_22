const { ethers } = require("hardhat");

async function main() {
    const omdwCons = await ethers.getContractFactory("omdwCons");
    console.log("Deploying omdwCons...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omdwCons.deploy();
    await box.deployed();
    console.log("omdwCons deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
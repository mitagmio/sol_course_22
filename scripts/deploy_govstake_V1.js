const { ethers } = require("hardhat");

async function main() {
    const GOVSTAKE_V1 = await ethers.getContractFactory("GOVSTAKE_V1");
    console.log("Deploying GOVSTAKE_V1...");
    console.log(await ethers.provider.getGasPrice());
    const box = await GOVSTAKE_V1.deploy();
    await box.deployed();
    console.log("GOVSTAKE_V1 deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
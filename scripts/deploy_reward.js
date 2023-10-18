const { ethers } = require("hardhat");

async function main() {
    const REWARD_V3 = await ethers.getContractFactory("REWARD_V3");
    console.log("Deploying REWARD_V3...");
    console.log(await ethers.provider.getGasPrice());
    const box = await REWARD_V3.deploy();
    await box.deployed();
    console.log("REWARD_V3 deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
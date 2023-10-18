const { ethers } = require("hardhat");

async function main() {
    const omFP = await ethers.getContractFactory("omFP");
    console.log("Deploying omFP...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omFP.deploy();
    await box.deployed();
    console.log("omFP deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
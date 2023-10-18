const { ethers } = require("hardhat");

async function main() {
    const omCRD = await ethers.getContractFactory("omCRD");
    console.log("Deploying omCRD...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omCRD.deploy();
    await box.deployed();
    console.log("omCRD deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
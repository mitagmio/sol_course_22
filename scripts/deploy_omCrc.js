const { ethers } = require("hardhat");

async function main() {
    const omCrc = await ethers.getContractFactory("omCrc");
    console.log("Deploying omCrc...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omCrc.deploy();
    await box.deployed();
    console.log("omCrc deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
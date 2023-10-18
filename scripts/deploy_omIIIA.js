const { ethers } = require("hardhat");

async function main() {
    const omIIIA = await ethers.getContractFactory("omIIIA");
    console.log("Deploying omIIIA...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omIIIA.deploy();
    await box.deployed();
    console.log("omIIIA deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
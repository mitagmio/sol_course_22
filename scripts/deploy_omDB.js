const { ethers } = require("hardhat");

async function main() {
    const omDB = await ethers.getContractFactory("omDB");
    console.log("Deploying omDB...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omDB.deploy();
    await box.deployed();
    console.log("omDB deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
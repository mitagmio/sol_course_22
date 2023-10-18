const { ethers } = require("hardhat");

async function main() {
    const omdwChai = await ethers.getContractFactory("omdwChai");
    console.log("Deploying omdwChai...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omdwChai.deploy();
    await box.deployed();
    console.log("omdwChai deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
const { ethers } = require("hardhat");

async function main() {
    const omAra = await ethers.getContractFactory("omAra");
    console.log("Deploying omAra...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omAra.deploy();
    await box.deployed();
    console.log("omAra deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
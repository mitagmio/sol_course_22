const { ethers } = require("hardhat");

async function main() {
    const omOo = await ethers.getContractFactory("omOo");
    console.log("Deploying omOo...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omOo.deploy();
    await box.deployed();
    console.log("omOo deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
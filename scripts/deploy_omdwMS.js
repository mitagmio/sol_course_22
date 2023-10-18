const { ethers } = require("hardhat");

async function main() {
    const omdwMS = await ethers.getContractFactory("omdwMS");
    console.log("Deploying omdwMS...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omdwMS.deploy();
    await box.deployed();
    console.log("omdwMS deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
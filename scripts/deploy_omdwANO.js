const { ethers } = require("hardhat");

async function main() {
    const omdwANO = await ethers.getContractFactory("omdwANO");
    console.log("Deploying omdwANO...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omdwANO.deploy();
    await box.deployed();
    console.log("omdwANO deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
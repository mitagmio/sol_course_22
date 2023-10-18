const { ethers } = require("hardhat");

async function main() {
    const USDT = await ethers.getContractFactory("USDT");
    const box = await USDT.deploy();
    await box.deployed();
    console.log("Deploying USDT...", box.address);
}

main();
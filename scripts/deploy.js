const { ethers } = require("hardhat");

async function main() {
    const MyTokenWhiteList = await ethers.getContractFactory("MyTokenWhiteList");
    const box = await MyTokenWhiteList.deploy();
    await box.deployed();
    console.log("Deploying MyTokenWhiteList...", box.address);
}

main();
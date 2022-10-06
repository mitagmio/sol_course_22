const { ethers } = require("hardhat");

async function main() {
    const TestTokenBuyTether = await ethers.getContractFactory("TestTokenBuyTether");
    console.log("Deploying TestTokenBuyTether...", TestTokenBuyTether.address);
}

main();
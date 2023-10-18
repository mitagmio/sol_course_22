const { ethers } = require("hardhat");

async function main() {
    const omdwCont = await ethers.getContractFactory("omdwCont");
    console.log("Deploying omdwCont...");
    console.log(await ethers.provider.getGasPrice());
    const box = await omdwCont.deploy();
    await box.deployed();
    console.log("omdwCont deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
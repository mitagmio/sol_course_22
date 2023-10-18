const { ethers, upgrades } = require("hardhat");

async function main() {
    const TRANSFER_TOKENS_V1 = await ethers.getContractFactory("TRANSFER_TOKENS_V1");
    console.log("Deploying TRANSFER_TOKENS_V1...");
    console.log(await ethers.provider.getGasPrice());
    const box = await upgrades.deployProxy(TRANSFER_TOKENS_V1, [], {
        initializer: "initialize",
        timeout: 0,
        // gasPrice: 30000000000,
    });
    await box.deployed();
    console.log("TRANSFER_TOKENS_V1 deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
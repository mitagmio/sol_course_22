const { ethers, upgrades } = require("hardhat");

async function main() {
    const OMDAOLLC_V1 = await ethers.getContractFactory("OMDAOLLC_V1");
    console.log("Deploying OMDAOLLC_V1...");
    console.log(await ethers.provider.getGasPrice());
    const box = await upgrades.deployProxy(OMDAOLLC_V1, [], {
        initializer: "initialize",
        timeout: 0,
        gasPrice: 30000000000,
    });
    await box.deployed();
    console.log("OMDAOLLC_V1 deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
const { ethers, upgrades } = require("hardhat");

async function main() {
    const OMD_LAUNCHPAD_V1 = await ethers.getContractFactory("OMD_LAUNCHPAD_V1");
    console.log("Deploying OMD_LAUNCHPAD_V1...");
    console.log(await ethers.provider.getGasPrice());
    const box = await upgrades.deployProxy(OMD_LAUNCHPAD_V1, [], {
        initializer: "initialize",
        timeout: 0,
        // gasPrice: 30000000000,
    });
    await box.deployed();
    console.log("OMD_LAUNCHPAD_V1 deployed to:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
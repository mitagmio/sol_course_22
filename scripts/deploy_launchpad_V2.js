const { ethers, upgrades } = require("hardhat");

const PROXY = "0x9a4d39F46044400Aa48Ab528f8EC3DD3B793f885";

async function main() {
    const OMD_LAUNCHPAD_V2 = await ethers.getContractFactory("OMD_LAUNCHPAD_V2");
    console.log("Upgrading OMD_LAUNCHPAD_V2...");
    console.log(await ethers.provider.getGasPrice());
    const box = await upgrades.upgradeProxy(PROXY, OMD_LAUNCHPAD_V2, {
        timeout: 0,
    });
    console.log("OMD_LAUNCHPAD_V2 upgraded:", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
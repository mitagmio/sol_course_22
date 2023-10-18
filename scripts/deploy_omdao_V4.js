const { ethers, upgrades } = require("hardhat");

const PROXY = "0xA4282798c2199a1C58843088297265acD748168c";

async function main() {
    const OMDAOLLC_V4 = await ethers.getContractFactory("OMDAOLLC_V4");
    console.log("Upgrading OMDAOLLC_V4...");
    await upgrades.upgradeProxy(PROXY, OMDAOLLC_V4, {
        timeout: 0,
    });
    console.log("OMDAOLLC_V4 upgraded");
}

main();
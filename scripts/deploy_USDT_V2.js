const { ethers, upgrades } = require("hardhat");

const PROXY = "0x178825587FC1A7D5D6373221182290a7A4566a0A";

async function main() {
    const USDTV2 = await ethers.getContractFactory("USDTV2");
    console.log("Upgrading USDTV2...");
    await upgrades.upgradeProxy(PROXY, USDTV2);
    console.log("USDTV2 upgraded");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
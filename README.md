# Basic Sample Hardhat Project For Transparent Proxy ERC-20
env $(cat .env) npx hardhat run --network rinkeby scripts/deploy-V1.js

env $(cat .env) npx hardhat verify --network rinkeby 0x26bF04F7b4A62925Contract____Address5341DeDAd25f474180e0162c

env $(cat .env) npx hardhat run --network rinkeby scripts/deploy-V2.js
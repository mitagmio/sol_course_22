require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
      // , evmVersion: `paris` // для развертывания в сетях не поддерживающих PUSH0x5f
    }
  },
  gasReporter: {
    enabled: true,
  },
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    mainnet: {
      url: 'https://mainnet.infura.io/v3/' + process.env.INFURA_API_KEY,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    goerli: {
      url: 'https://goerli.infura.io/v3/' + process.env.INFURA_API_KEY,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      // gasPrice: 57000000000,
      // gasLimit: 60000000,
    },
    polygon: {
      url: 'https://polygon-rpc.com',
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

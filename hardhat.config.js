require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = "DwQYBWMP6dh_-dYfoVqBXiVv388S7M1C";

const GOERLI_PRIVATE_KEY = "7d7e2ba9e196f03be367b1416450700979a11079a911b220e2f4031c29b32983";

module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};

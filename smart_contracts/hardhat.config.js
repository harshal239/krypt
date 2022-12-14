require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/oLMuGVM4Dqoi1ZRukw5_lLZh7GSqRAOo",
      accounts: [
        "b5afa62617128007579cf3fb98de311c7fe0356912274efba8ad9f498091ded6",
      ],
    },
  },
};

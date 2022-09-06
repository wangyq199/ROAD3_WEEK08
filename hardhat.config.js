require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 */

module.exports = {
  solidity: "0.8.4",
  networks: {
    
    "optimism": {
      url: "https://opt-mainnet.g.alchemy.com/v2/q-YcFG2I1TLJOKYCYUdmyy_1s1WQ5by_",
      accounts: [ "e2971ff4016d9b63d572cc279c4335469611b7329e935f1dc6ebcedb8777cc5c" ]
    }
  }
};
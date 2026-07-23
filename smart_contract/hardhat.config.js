import "dotenv/config";
import hardhatEthers from "@nomicfoundation/hardhat-ethers";

export default {
  solidity: "0.8.28",
  plugins: [hardhatEthers],

  networks: {
    sepolia: {
      type: "http",
      chainType: "l1",
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
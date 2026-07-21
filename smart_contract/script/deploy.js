import { network } from "hardhat";

const { ethers, networkName } = await network.create();

console.log(`Deploying Transactions to ${networkName}...`);

const transactions = await ethers.deployContract("Transactions");

console.log("Waiting for deployment...");
await transactions.waitForDeployment();

console.log("Transactions deployed at:", await transactions.getAddress());

console.log("Deployment successful!");
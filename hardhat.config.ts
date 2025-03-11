import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
	solidity: "0.8.28",
	networks: {
		goerli: {
			url: process.env?.ALCHEMY_TESTET_RPC_URL,
			accounts: [process.env?.TESTNET_PRIVATE_KEY as string],
		},
	},
};

export default config;

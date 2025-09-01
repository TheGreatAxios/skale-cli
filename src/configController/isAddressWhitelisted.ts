import { isAddress, JsonRpcProvider } from "ethers";
import { chains, supportedChainKeys } from "../chains";

import { type Command } from "commander";
import { createConfigControllerInstance } from "./contract";
import chalk from "chalk";

export function isAddressWhitelisted(program: Command) {
	program
		.command('isAddressWhitelisted <address>')
		.description('Check if an Ethereum address is whitelisted on a sChain')
		.requiredOption('-c, --chain <chain>', 'The chain to check on')
		.action(async(address: string, options: { chain: string }) => {
			
			if (!supportedChainKeys.includes(options.chain)) {
				throw new Error(`Invalid Chain. Must be one of ${supportedChainKeys}`);
			}
			
			const provider = new JsonRpcProvider((chains as any)[options.chain].rpcUrl);
			const contract = createConfigControllerInstance(provider);

			if (!isAddress(address)) {
				throw new Error("Address is not valid");
			}
			const isWhitelisted = await contract.isAddressWhitelisted(address);

			if (isWhitelisted) {
				console.log(chalk.green(`${address} is whitelisted on ${options.chain}`));
			} else {
				console.log(chalk.red(`${address} is not whitelisted on ${options.chain}`));
			}			
		});
}
import ConfigControllerABI from "../abis/configController.abi.json";
import { Contract, JsonRpcProvider } from "ethers";

export function createConfigControllerInstance(provider: JsonRpcProvider) {
	return new Contract("0xD2002000000000000000000000000000000000d2", ConfigControllerABI, provider);
}
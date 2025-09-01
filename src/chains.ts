const MAINNET_RPC_URL_BASE = "https://mainnet.skalenodes.com/v1";
const TESTNET_RPC_URL_BASE = "https://testnet.skalenodes.com/v1";

export const chains = {
	calypso: {
		rpcUrl: `${MAINNET_RPC_URL_BASE}/honorable-steel-rasalhague`
	},
	europa: {
		rpcUrl: `${MAINNET_RPC_URL_BASE}/elated-tan-skat`
	},
	nebula: {
		rpcUrl: `${MAINNET_RPC_URL_BASE}/green-giddy-denebola`
	},
	titan: {
		rpcUrl: `${MAINNET_RPC_URL_BASE}/parallel-stormy-spica`
	},
	strayshot: {
		rpcUrl: `${MAINNET_RPC_URL_BASE}/fussy-smoggy-megrez`
	},
	"calypso-testnet": {
		rpcUrl: `${TESTNET_RPC_URL_BASE}/giant-half-dual-testnet`
	},
	"europa-testnet": {
		rpcUrl: `${TESTNET_RPC_URL_BASE}/juicy-low-small-testnet`
	},
	"nebula-testnet": {
		rpcUrl: `${TESTNET_RPC_URL_BASE}/lanky-ill-funny-testnet`
	},
	"titan-testnet": {
		rpcUrl: `${TESTNET_RPC_URL_BASE}/aware-fake-trim-testnet`
	}
}

export const supportedChainKeys = Object.keys(chains);
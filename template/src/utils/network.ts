import Web3 from "web3";

export type NetworkType = "eth" | "rinkeby" | "polygon" | "bsc" | "fantom" | "avalanche" | "aurora";

export const NETWORK: Record<NetworkType, NetworkType> = {
    eth: "eth",
    rinkeby: "rinkeby",
    polygon: "polygon",
    aurora: "aurora",
    bsc: "bsc",
    fantom: "fantom",
    avalanche: "avalanche",
};

export const networkNames = {
    [NETWORK.eth]: "Ethereum",
    [NETWORK.polygon]: "Polygon",
    [NETWORK.rinkeby]: "Rinkeby",
    [NETWORK.aurora]: "Aurora",
    [NETWORK.bsc]: "Binance Smart Chain",
    [NETWORK.fantom]: "Fantom",
    [NETWORK.avalanche]: "Avalanche",
};

export const idToNetwork: Record<number, NetworkType> = {
    1: NETWORK.eth,
    4: NETWORK.rinkeby,
    56: NETWORK.bsc,
    137: NETWORK.polygon,
    250: NETWORK.fantom,
    43114: NETWORK.avalanche,
    1313161554: NETWORK.aurora,
};

const inverse = (obj: Record<any, any>) => Object.fromEntries(Object.entries(obj).map((a) => a.reverse()));
export const networkToId: Record<NetworkType, number> = inverse(idToNetwork);

export const networkInfo = {
    [NETWORK.eth]: {
        chainName: "Ethereum Mainnet",
        chainId: Web3.utils.toHex(networkToId[NETWORK.eth]),
        blockExplorerUrls: ["https://etherscan.io"],
        rpcUrls: [`https://mainnet.infura.io/v3/${process.env.INFURA_ID}`],
    },
    [NETWORK.rinkeby]: {
        chainName: "Rinkeby",
        chainId: Web3.utils.toHex(networkToId[NETWORK.rinkeby]),
        blockExplorerUrls: ["https://rinkeby.etherscan.io"],
        rpcUrls: [`https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`],
    },
    [NETWORK.bsc]: {
        chainName: "Binance Smart Chain Mainnet",
        chainId: Web3.utils.toHex(networkToId[NETWORK.bsc]),
        rpcUrls: ["https://bsc-dataseed.binance.org/"],
        blockExplorerUrls: ["https://bscscan.com"],
        nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
        },
    },
    [NETWORK.polygon]: {
        chainName: "Polygon Mainnet",
        chainId: Web3.utils.toHex(networkToId[NETWORK.polygon]),
        rpcUrls: ["https://polygon-rpc.com/"],
        blockExplorerUrls: ["https://polygonscan.com/"],
        nativeCurrency: {
            name: "MATIC Token",
            symbol: "MATIC Token",
            decimals: 18,
        },
    },
    [NETWORK.fantom]: {
        chainName: "Fantom Opera",
        chainId: Web3.utils.toHex(networkToId[NETWORK.fantom]),
        rpcUrls: ["https://rpc.ftm.tools/"],
        blockExplorerUrls: ["https://ftmscan.com"],
        nativeCurrency: {
            name: "FTM",
            symbol: "FTM",
            decimals: 18,
        },
    },
    [NETWORK.avalanche]: {
        chainName: "Avalanche C-Chain",
        chainId: Web3.utils.toHex(networkToId[NETWORK.avalanche]),
        rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
        blockExplorerUrls: ["https://snowtrace.io"],
        nativeCurrency: {
            name: "AVAX",
            symbol: "AVAX",
            decimals: 18,
        },
    },
    [NETWORK.aurora]: {
        chainName: "Aurora Mainnet",
        chainId: Web3.utils.toHex(networkToId[NETWORK.aurora]),
        rpcUrls: ["https://mainnet.aurora.dev"],
        blockExplorerUrls: ["https://aurorascan.dev"],
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
    },
};

export const changeNetworkAtMetamask = async (networkName: NetworkType) => {
    try {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: Web3.utils.toHex(networkToId[networkName]) }],
        });
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        // @ts-ignore
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [networkInfo[networkName]],
                });
            } catch (addError) {
                console.error(addError);
            }
        }
    }
};

export const getTrxHashLink = (hash: string, chain: NetworkType) =>
    `${networkInfo[chain].blockExplorerUrls}/tx/${hash}`;

export const getAddressLink = (address: string, chain: NetworkType) =>
    `${networkInfo[chain].blockExplorerUrls}/token/${address}`;

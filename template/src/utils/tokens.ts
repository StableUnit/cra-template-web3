import BN from "bn.js";
import Web3 from "web3";
import { NetworkType } from "./network";
import CONTRACT_ERC20 from "../contracts/ERC20.json";

export type TokenMetadataType = {
    address: string;
    name: string;
    symbol: string;
    decimals: string;
    balance?: string;
};

export const fromHRToBN = (n: number, decimals: number) => {
    const MAX_SMALL_DECIMAL = 6;
    if (decimals <= MAX_SMALL_DECIMAL) {
        return new BN(10).pow(new BN(decimals)).muln(n);
    }

    const multiplierSmall = new BN(10).pow(new BN(MAX_SMALL_DECIMAL));
    const multiplierMain = new BN(10).pow(new BN(decimals - MAX_SMALL_DECIMAL));

    return multiplierSmall.muln(n).mul(multiplierMain);
};

export const toHRNumber = (bn: BN, decimal = 0) => bn.div(new BN(10).pow(new BN(decimal))).toNumber();
export const toHRNumberFloat = (bn: BN, decimal = 0) => toHRNumber(bn.muln(100), decimal) / 100;

export const getTokenMetadata = async (web3: Web3, chain: NetworkType, address: string, account?: string) => {
    const tokenContract = new web3.eth.Contract(CONTRACT_ERC20 as any, address);
    const balance = account ? await tokenContract.methods.balanceOf(account).call() : undefined;

    return {
        address,
        balance,
        name: await tokenContract.methods.name().call(),
        symbol: await tokenContract.methods.symbol().call(),
        decimals: await tokenContract.methods.decimals().call(),
    } as TokenMetadataType;
};

import Web3 from "web3";
import Actions from "./actions";
import {NetworkType} from "../utils/network";

export type ActionType =
    | {
          type: Actions.SetWeb3;
          payload: Web3;
      }
    | {
          type: Actions.SetAccount;
          payload?: string;
      }
    | {
        type: Actions.SetChain;
        payload?: NetworkType;
    };

export interface ReducerState {
    web3: Web3;
    account?: string;
    chain?: NetworkType;
}

const reducer = (state: ReducerState, action: ActionType) => {
    const { type, payload } = action;
    switch (type) {
        case Actions.SetWeb3:
            return {
                ...state,
                web3: payload,
            };
        case Actions.SetAccount:
            return {
                ...state,
                account: payload,
            };
        case Actions.SetChain:
            return {
                ...state,
                chain: payload,
            };
        default:
            return state;
    }
};

export default reducer;

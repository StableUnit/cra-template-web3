import Web3 from "web3";
import Actions from "./actions";

export type ActionType =
    | {
          type: Actions.SetWeb3;
          payload: Web3;
      }
    | {
          type: Actions.SetAccount;
          payload?: string;
      };

export interface ReducerState {
    web3: Web3;
    account?: string;
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
        default:
            return state;
    }
};

export default reducer;

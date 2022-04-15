import React from "react";
import Web3 from "web3";

import { ActionType, ReducerState } from "./index";

export const initialState: ReducerState = {
    web3: new Web3(Web3.givenProvider),
    account: undefined,
    chain: undefined,
};

export const StateContext = React.createContext(initialState);
export const DispatchContext = React.createContext<React.Dispatch<ActionType>>(() => null);

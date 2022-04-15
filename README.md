[![license](https://img.shields.io/github/license/jamesisaac/react-native-background-task.svg)](https://opensource.org/licenses/MIT)

# 👷 cra-template-web3
Create-React-App Template for DApps

## How to use this package
### 1. Use it with CRA (create app with name "my-app")
```commandline
npx create-react-app my-app --template web3
```
### 2. Create .env file with your INFURA_ID

Copy .env.example with the name .env (also you can add it on .gitignore) and your INFURA_ID from https://infura.io/dashboard

## 🧩 Stack:
1) `typescript`
2) `useReducer` with `useContext` as state-manager
3) `ErrorBoundary` to handle errors during render with `componentDidCatch`
4) `react-notifications-component` to show error or success notifications
5) `scss` to operate with css
6) `eslint` (there are some eslint/tslint rules, you may customize them in `.eslintrc.js`)

## ⛓️ Current chain support
- Ethereum - Mainnet (chainId: 1)
- Ethereum - Rinkeby (chainId 4)
- Binance Smart Chain - Mainnet (chainId 56)
- Polygon - Mainnet (chainId 137)
- Fantom - Mainnet (chainId 250)
- Avalanche - Mainnet (chainId 43114)
- Aurora - Mainnet (chainId 1313161554)

You can add new chains and configure rpc urls in `networkInfo` object in `utils/network.ts`.

In `src/utils` you can find some functions that are often used in DApps.

\
\
\
\
This project was made by [StableUnit team](https://twitter.com/stableunitdao).

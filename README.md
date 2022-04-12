# Create-React-App Template for DApps

For creating cra project `my-app` just run `npx create-react-app my-app --template web3`
Don't forget to create .env file with your INFURA_ID

We use:
1) `typescript`
2) `useReducer` with `useContext` as state-manager
3) `ErrorBoundary` to handle errors during render with `componentDidCatch`
4) `react-notifications-component` to show error or success notifications
5) `scss` to operate with css
6) `eslint` (there are some eslint/tslint rules, you may customize them in `.eslintrc.js`)

In `src/utils` you can find some functions that are often used in DApps.

Also, you can configure rpc urls in `networkInfo` object in `utils/network.ts`.

\
\
\
\
This project was made by [StableUnit team](https://stableunit.org/).
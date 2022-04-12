import React, { useContext } from "react";

import { getShortAddress } from "../../utils/wallet";

import "./Header.scss";
import { StateContext } from "../../reducer/constants";

interface NavbarProps {
    onConnect: () => void;
    onDisconnect: () => void;
}

const Header = ({ onConnect, onDisconnect }: NavbarProps) => {
    const { account } = useContext(StateContext);

    return (
        <div className="header">
            <div className="header__logo">
                <a href="https://stableunit.org/" target="_blank" rel="noreferrer">
                    <img src="https://stableunit.org/assets/img/logo.svg" />
                </a>
            </div>
            <div className="header__navbar">
                {account ? (
                    <div className="header__address" onClick={onDisconnect}>
                        {getShortAddress(account)}
                    </div>
                ) : (
                    <div className="header__button" onClick={onConnect}>
                        Connect wallet
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;

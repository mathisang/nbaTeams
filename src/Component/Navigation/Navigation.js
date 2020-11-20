import React from 'react';
import Logo from "./Logo";
import Search from "../Navigation/Search";
import Menu from "../Navigation/Menu";

function Navigation() {
    return (
        <div className="navigation">
            <div className="leftSide">
                <Logo />
                <Search />
            </div>
            <div className="rightSide">
                <Menu />
            </div>
        </div>
    );
}

export default Navigation;
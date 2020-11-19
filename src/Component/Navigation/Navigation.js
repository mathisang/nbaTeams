import React from 'react';
import Logo from "./Logo";
import Search from "../Navigation/Search";

function Navigation() {
    return (
        <div className="navigation">
            <Logo />
            <Search />
        </div>
    );
}

export default Navigation;
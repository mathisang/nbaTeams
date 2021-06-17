import React from 'react';
import Logo from "./Logo";
import Search from "../Navigation/Search";
import Menu from "../Navigation/Menu";

function Navigation({teamData}) {
    return (
        <div className="navigation">
            <div className="leftSide">
                <Logo />
                <Search teamData={teamData} />
            </div>
            <div className="rightSide">
                <Menu />
            </div>
        </div>
    );
}

export default Navigation;
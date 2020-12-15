import React from 'react';
import '../Style/App.scss';
import Navigation from "./Navigation/Navigation";
import Team from "./Team.js";

function Loader() {
    return (
        <div className="home">
            <Navigation />
            <Team />
        </div>
    );
}

export default Loader;
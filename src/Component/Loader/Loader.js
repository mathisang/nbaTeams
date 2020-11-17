import React from 'react';
import '../../Style/Loader.scss';
import BackgroundLine from "./BackgroundLine";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";

function Loader() {
    return (
        <div className="loaderContent">
            <Logo />
            <ProgressBar />
            <BackgroundLine />
        </div>
    );
}

export default Loader;

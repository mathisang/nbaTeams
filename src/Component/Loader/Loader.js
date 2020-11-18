import React, {useEffect} from 'react';
import '../../Style/Loader.scss';
import BackgroundLine from "./BackgroundLine";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";

function Loader({loaderStep, setLoaderStep}) {
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoaderStep(2);
    //     }, 13000);
    // }, []);

    return (
        <div className="loaderContent">
            <Logo />
            <ProgressBar />
            <BackgroundLine />
        </div>
    );
}

export default Loader;

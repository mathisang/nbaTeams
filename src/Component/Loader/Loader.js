import React, {useEffect} from 'react';
import '../../Style/Loader.scss';
import BackgroundLine from "./BackgroundLine";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";

function Loader({loaderStep, setLoaderStep}) {
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoaderOn(false);
    //     }, 13000);
    // }, );
    useEffect(() => {
        console.log(loaderStep);
        setLoaderStep(105);
        console.log(loaderStep);
    })

    return (
        <div className="loaderContent">
            <Logo />
            <ProgressBar />
            <BackgroundLine />
        </div>
    );
}

export default Loader;

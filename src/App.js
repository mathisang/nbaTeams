import React, {useEffect, useState} from 'react';
import Loader from "./Component/Loader/Loader";
import Home from "./Component/Home.js";

function App() {
    const [loaderStep, setLoaderStep] = useState(1);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoaderOn(false);
    //     }, 13000);
    // }, );

    return (
        <div className="App">
            {loaderStep !== 0 ? (
                <Loader loaderStep={loaderStep} setLoaderStep={setLoaderStep} />
            ) : (
                <Home/>
            )}
        </div>
    );
}

export default App;

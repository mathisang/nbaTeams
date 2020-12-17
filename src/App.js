import React, {useEffect, useState} from 'react';
import Loader from "./Component/Loader/Loader";
import Home from "./Component/Home.js";
import Navigation from "./Component/Navigation/Navigation";
import './Style/App.scss';

// CHANGER BG TEAM
// intersection observer react

function App() {
    const [loaderStep, setLoaderStep] = useState(0);
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        fetch("https://www.balldontlie.io/api/v1/teams", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setTeamData(data.data));

    }, []);

    // useEffect(() => {
    //     let Loaders = document.querySelectorAll('.loaderContent')[0];
    //     Loaders.style.backgroundPosition = "50% 50%";
    //     setTimeout(() => {
    //         Loaders.style.backgroundPosition = "100% 50%";
    //         setTimeout(() => {
    //             setLoaderStep(1)
    //         }, 3300);
    //     }, 12000);
    // }, []);

    return (
        <div className="App">
            {loaderStep !== 0 ? (
                <Loader loaderStep={loaderStep} setLoaderStep={setLoaderStep} />
            ) : (
                <div>
                    <Navigation />
                    <Home teamData={teamData} />
                </div>
            )}
        </div>
    );
}

export default App;

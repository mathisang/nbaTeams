import React, {useEffect, useState} from 'react';
import Loader from "./Component/Loader/Loader";
import Home from "./Component/Home.js";
import Navigation from "./Component/Navigation/Navigation";
import './Style/App.scss';
import Menu from "./Component/Menu";
import Details from "./Component/Details";
import teams from "./Data/teams.json"

// CHANGER BG TEAM
// intersection observer react

function App() {
    const [loaderStep, setLoaderStep] = useState(0);
    const [teamDetails, setTeamDetails] = useState("");
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:1245/teams", {
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((data) => setTeamData(data));

        // const curry = NBA.findPlayer('Stephen Curry');
        // console.log(NBA);

        setTeamData(teams);
    }, []);

    // useEffect(() => {
    //     let Loaders = document.querySelectorAll('.loaderContent')[0];
    //     Loaders.style.backgroundPosition = "50% 50%";
    //     setTimeout(() => {
    //         Loaders.style.backgroundPosition = "100% 50%";
    //         setTimeout(() => {
    //             setLoaderStep(0)
    //         }, 3300);
    //     }, 12000);
    // }, []);

    return (
        <div className="App">
            {loaderStep !== 0 ? (
                <Loader loaderStep={loaderStep} setLoaderStep={setLoaderStep} />
            ) : teamDetails !== "" ? (
                <Details teamDetails={teamDetails} setTeamDetails={setTeamDetails} />
            ) : (
                <div>
                    <Navigation teamData={teamData} />
                    <Menu teamData={teamData} />
                    <Home teamData={teamData} setTeamDetails={setTeamDetails} />
                </div>
            )}
        </div>
    );
}

export default App;

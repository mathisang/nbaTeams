import React, {useEffect, useState} from 'react';
import '../Style/Details.scss';

function Details({teamDetails, setTeamDetails}) {
    const [teamData, setTeamData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch("https://www.balldontlie.io/api/v1/teams/"+teamDetails, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setTeamData(data));
        console.log(teamData)
    }, [refresh]);

    return (
        <div>
            <header>
                <div className="teamInfos">
                    <h1>{teamData.name}</h1>
                    <p>{teamData.city} <span className="round" /> {teamData.abbreviation}</p>
                </div>
                <svg onClick={() => setTeamDetails("")} width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 14.9998C0 14.4623 0.205225 13.9247 0.614745 13.5148L13.5144 0.615425C14.335 -0.205142 15.6654 -0.205142 16.4856 0.615425C17.3059 1.43566 17.3059 2.7658 16.4856 3.58644L5.07146 14.9998L16.4848 26.4135C17.3051 27.2338 17.3051 28.5641 16.4848 29.3843C15.6646 30.2052 14.3346 30.2052 13.514 29.3843L0.61428 16.4851C0.204826 16.075 0 15.5374 0 14.9998Z" fill="white"/>
                </svg>
            </header>

            
        </div>
    );
}

export default Details;
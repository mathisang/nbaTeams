import React, {useEffect, useState} from 'react';
import '../Style/Details.scss';
import Players from "../Data/players.json";
import $ from "jquery"

function Details({teamDetails, setTeamDetails}) {
    const [refresh, setRefresh] = useState(false);
    const [arrayPlayers, setArrayPlayers] = useState([]);
    const [arrayTopPlayers, setArrayTopPlayers] = useState([]);
    const [arrayTempPlayers, setArrayTempPlayers] = useState([]);

    useEffect(() => {
        setArrayTempPlayers(Players);

        var listTopPlayers = arrayTempPlayers.filter(function(i) {
            return i.teamId === teamDetails.teamId && i.topPlayer === true;
        });

        var listPlayers = arrayTempPlayers.filter(function(i) {
            return i.teamId === teamDetails.teamId && !i.topPlayer;
        });

        setArrayTopPlayers(listTopPlayers);
        setArrayPlayers(listPlayers);
    }, [refresh]);

    // const updating2  = (e) => {
    //     fetch("http://localhost:1245/stats/"+e)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 document.getElementById(e).innerText = result.commonPlayerInfo[0].position;
    //             },
    //             (error) => {
    //                 document.getElementById(e).innerText = 'error';
    //             }
    //         )
    // }

    return (
        <div>
            <header>
                <div className="teamInfos">
                    <h1>{teamDetails.simpleName}</h1>
                    <p>{teamDetails.location} <span className="round" /> {teamDetails.abbreviation}</p>
                </div>
                <img src={`http://stats.nba.com/media/img/teams/logos/${teamDetails.abbreviation}_logo.svg`} alt="" class="iconTeam"/>
                <svg onClick={() => setTeamDetails("")} width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 14.9998C0 14.4623 0.205225 13.9247 0.614745 13.5148L13.5144 0.615425C14.335 -0.205142 15.6654 -0.205142 16.4856 0.615425C17.3059 1.43566 17.3059 2.7658 16.4856 3.58644L5.07146 14.9998L16.4848 26.4135C17.3051 27.2338 17.3051 28.5641 16.4848 29.3843C15.6646 30.2052 14.3346 30.2052 13.514 29.3843L0.61428 16.4851C0.204826 16.075 0 15.5374 0 14.9998Z" fill="white"/>
                </svg>
            </header>

            <div className="topPlayers">
                {arrayTopPlayers.map(item => (
                    <div className="playerCard" key={item.playerId}>
                        <div className="playerImg">
                            <img src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${item.playerId}.png`} alt=""/>
                        </div>
                        <div className="playerName">
                            <span>{item.firstName}</span>
                            <span className="lastName">{item.lastName}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="allPlayers">
                {arrayPlayers.map(item => (
                    <div className="playerCard" key={item.playerId}>
                        <div className="playerImg">
                            <img src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${item.playerId}.png`} alt=""/>
                        </div>
                        <div className="playerName">
                            <span>{item.firstName}</span>
                            <span className="lastName">{item.lastName}</span>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={() => setRefresh(!refresh)}>ref</button>
        </div>
    );
}

export default Details;
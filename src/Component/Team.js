import React, {useState} from 'react';
import '../Style/Home.scss';
import ThemeSwitcher from 'react-css-vars';
import Tilt from 'react-parallax-tilt';

//METTRE VIDEO PLUTOT QU'UNE IMG

//BOX SHADOW CARD

function Team({teamData, setTeamDetails}) {
    const teamTheme = {
        // colorButton: '#F37178',
        // hoverButton: '#f3999d',
    }
    // let conference = "";
    // if(teamData.conference === "West") {
    //     conference = "Ouest";
    // }
    // else {
    //     conference = "Est";
    // }
    return (
        <div className="section" id={teamData.simpleName} data-anchor={teamData.simpleName}>
            <ThemeSwitcher theme={teamTheme}>
                <div className="teamHome">
                    <Tilt className="Tilt" trackOnWindow={true} tiltMaxAngleX="20" tiltMaxAngleY="20"
                          transitionSpeed="400" transitionEasing="cubic-bezier(0,.75,.77,.73)" tiltReverse={true}
                          reset={false}>
                        {/*// REVOIR LA TAILLE DE LA VIDEO*/}
                        <video autoPlay muted data-autoplay loop id="myVideo">
                            <source data-src={"/images/teams/"+teamData.simpleName+"/compilation.mp4"} type="video/mp4"/>
                        </video>
                        <div className="content">
                            <div className="Tilt-inner">
                                <h1>{teamData.location}<br/>
                                    <span>{teamData.simpleName}</span></h1>
                                <div className="smallInfos">
                                    <p>{teamData.abbreviation}</p>
                                    {/*<p>{teamData.abbreviation} <span></span> Conférence {conference}</p>*/}
                                </div>
                                <button onClick={() => setTeamDetails(teamData)}>
                                    Voir l'équipe
                                </button>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </ThemeSwitcher>
        </div>
    );
}

export default Team;
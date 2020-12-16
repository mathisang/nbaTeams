import React, {useState} from 'react';
import '../Style/Home.scss';
import ThemeSwitcher from 'react-css-vars';
import Tilt from 'react-parallax-tilt';

const themeTeamBox = {
    // colorButton: '#F37178',
    // hoverButton: '#f3999d',
    colorButton: '#E2A106',
    hoverButton: '#ecb01c',
    teamUrl: 'url("/images/teams/atlanta/background.jpg")'
}

//METTRE VIDEO PLUTOT QU'UNE IMG

function Team({team, city}) {
    return (
        <div className="section" id={team}>
            <ThemeSwitcher theme={themeTeamBox}>
                <div className="teamHome">
                    <Tilt className="Tilt" trackOnWindow={true} tiltMaxAngleX="8" tiltMaxAngleY="8"
                          transitionSpeed="400" transitionEasing="cubic-bezier(0,.75,.77,.73)" tiltReverse={true}
                          reset={false}>
                        {/*// REVOIR LA TAILLE DE LA VIDEO*/}
                        <video autoPlay muted loop id="myVideo">
                            <source data-src="/images/teams/atlanta/compilation.mp4" type="video/mp4"/>
                        </video>
                        <div className="content">
                            <div className="Tilt-inner">
                                <h1>{city}<br/>
                                    <span>{team}</span></h1>
                                <div className="smallInfos">
                                    <p>LAL <span></span> Conférence Ouest</p>
                                </div>
                                <button>
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
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

function Team() {
    const BoxTeam = () => {
        return (
            <ThemeSwitcher theme={themeTeamBox}>
                <div className="teamHome">
                    <Tilt className="Tilt" trackOnWindow={true} tiltMaxAngleX="8" tiltMaxAngleY="8" transitionSpeed="400" transitionEasing="cubic-bezier(0,.75,.77,.73)" tiltReverse={true} reset={false}>
                        <div className="content">
                            <div className="Tilt-inner">
                                <h1>Los Angeles<br/>
                                    <span>LAKERS</span></h1>

                                <button>
                                    Voir l'équipe
                                </button>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </ThemeSwitcher>
        );
    };

    return (
        <BoxTeam/>
    );
}

export default Team;
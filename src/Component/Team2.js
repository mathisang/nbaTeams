import React, {useState} from 'react';
import '../Style/Home2.scss';
import ThemeSwitcher from 'react-css-vars';
import Tilt from 'react-parallax-tilt';

const themeTeamBox = {
    colorButton: '#F37178',
    hoverButton: '#f3999d',
    teamUrl: 'url("/images/teams/atlanta/background.jpg")'
}

//METTRE VIDEO PLUTOT QU'UNE IMG

function Team2() {
    const BoxTeam = () => {
        return (
            <ThemeSwitcher theme={themeTeamBox}>
                <div className="teamHome">
                    <Tilt className="Tilt" trackOnWindow={true} tiltMaxAngleX="8" tiltMaxAngleY="8"
                          transitionSpeed="400" transitionEasing="cubic-bezier(0,.75,.77,.73)" tiltReverse={true}
                          reset={false}>
                    </Tilt>
                </div>
                <div className="content">
                    <Tilt className="Tilt" trackOnWindow={true} tiltMaxAngleX="14" tiltMaxAngleY="14"
                          transitionSpeed="400" transitionEasing="cubic-bezier(0,.75,.77,.73)" tiltReverse={true}
                          reset={false}>
                        <h1>Atlanta<br/>
                            <span>HAWKS</span></h1>

                        <button>
                            Voir l'équipe
                        </button>
                    </Tilt>
                </div>
            </ThemeSwitcher>
        );
    };

    return (
        <BoxTeam/>
    );
}

export default Team2;
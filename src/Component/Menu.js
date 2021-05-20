import React, {useEffect, useState} from 'react';
import '../Style/App.scss';

function Menu({teamData}) {
    const [arrayVille, setArrayVille] = useState([]);
    const [actualiser, setActualiser] = useState(false);

    useEffect(() => {
        let data = teamData.reduce((r, e) => {

            let letter = e.city[0];

            if (!r[letter]) r[letter] = { letter, cities: [[e.city, e.name]] }
            else r[letter].cities.push([e.city, e.name]);

            return r;
        }, {});

        setArrayVille(Object.values(data));
        console.log(arrayVille);
    }, [actualiser])

    // Sort by city OR sort by Name

    const jumpTo = (team) => {
        window.fullpage_api.moveTo(team);
        document.getElementById('iconMenu').classList.add('openMenu')
        window.fullpage_api.setAllowScrolling(true);
        document.getElementById('menu').style.display = "none";
        document.getElementsByClassName('navigation')[0].classList.remove('menuOpened');
    }

    return (
        <div id="menu">
            <div className="contentMenu">
                {arrayVille.map(item => (
                    <div key={item.cities} className="letterGroup">
                        <span>{item.letter}</span>
                        {item.cities.map((city, index) => (
                            // EN FAIRE UNE FONCTION POUR VIRER LE MENU EN MEME TEMPS
                            <p id={`jump${city[1]}`} onClick={() => jumpTo(city[1])}>{city[0] + " " + city[1]}</p>
                        ))}
                    </div>
                ))}
            </div>
            <button onClick={() => setActualiser(!actualiser)}>Actualiser</button>
        </div>
    );
}

export default Menu;
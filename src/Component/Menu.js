import React, {useEffect, useState} from 'react';
import '../Style/App.scss';

function Menu({teamData}) {
    const [arrayVille, setArrayVille] = useState([]);
    const [actualiser, setActualiser] = useState(false);

    useEffect(() => {
        let data = teamData.reduce((r, e) => {

            let letter = e.location[0];

            if (!r[letter]) r[letter] = { letter, cities: [[e.location, e.simpleName]] }
            else r[letter].cities.push([e.location, e.simpleName]);

            return r;
        }, {});

        setArrayVille(Object.values(data));
        console.log(arrayVille);
    }, [actualiser])

    // Sort by city OR sort by Name

    const jumpTo = (team) => {
        for (let n = 0; n < 16; n++) {
            document.getElementsByClassName('letterGroup')[n].classList.remove('animationBloc');
            document.getElementsByClassName('letterGroup')[n].classList.add('animationBlocReverse');
        }
        document.getElementById('menu').classList.remove('animationMenu');
        document.getElementById('menu').classList.add('animationMenuClose');
        setTimeout(function () {
            window.fullpage_api.moveTo(team);
            window.fullpage_api.setAllowScrolling(true);
            document.getElementsByClassName('navigation')[0].classList.remove('menuOpened');
            document.getElementById('iconMenu').classList.add('openMenu')
            document.getElementById('iconMenu').classList.remove('opened');
        }, 750)

    }

    let i = 1;

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
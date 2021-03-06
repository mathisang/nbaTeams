import React from 'react';

function Menu() {

    const openMenu = () => {
        if (document.getElementById('iconMenu').classList.contains('openMenu')) {
            document.getElementById('menu').style.display = "block";
            document.getElementById('menu').classList.remove('animationMenuClose');
            document.getElementById('menu').classList.add('animationMenu');
            for (let n = 0; n < 16; n++) {
                document.getElementsByClassName('letterGroup')[n].classList.remove('animationBlocReverse');
                document.getElementsByClassName('letterGroup')[n].classList.add('animationBloc');
            }
            document.getElementById('iconMenu').classList.remove('openMenu')
            window.fullpage_api.setAllowScrolling(false);
            document.getElementsByClassName('navigation')[0].classList.add('menuOpened');
            document.getElementById('iconMenu').classList.add('opened');
        } else {
            for (let n = 0; n < 16; n++) {
                document.getElementsByClassName('letterGroup')[n].classList.remove('animationBloc');
                document.getElementsByClassName('letterGroup')[n].classList.add('animationBlocReverse');
            }
            document.getElementById('menu').classList.remove('animationMenu');
            document.getElementById('menu').classList.add('animationMenuClose');
            setTimeout(function () {
                window.fullpage_api.setAllowScrolling(true);
                document.getElementsByClassName('navigation')[0].classList.remove('menuOpened');
                document.getElementById('iconMenu').classList.add('openMenu')
                document.getElementById('iconMenu').classList.remove('opened');
            }, 750)
        }
    }

    return (
        <svg onClick={() => openMenu()} className="iconMenu openMenu" id="iconMenu" width="36" height="36"
             viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" style={{display: "block"}}>
            <rect x="3" y="14" width="8" height="8" fill="white"/>
            <path d="M6 33C4.34315 33 3 31.6569 3 30L3 25L11 25L11 33L6 33Z" fill="white"/>
            <path d="M14 3H22V11H14V3Z" fill="white"/>
            <rect x="14" y="14" width="8" height="8" fill="white"/>
            <rect x="14" y="25" width="8" height="8" fill="white"/>
            <path d="M30 3C31.6569 3 33 4.34315 33 6L33 11L25 11L25 3L30 3Z" fill="white"/>
            <rect x="25" y="14" width="8" height="8" fill="white"/>
            <path d="M33 30C33 31.6569 31.6569 33 30 33L25 33L25 25L33 25L33 30Z" fill="white"/>
            <path d="M3 6C3 4.34315 4.34315 3 6 3H11V11H3V6Z" fill="white"/>
        </svg>
    );
}

export default Menu;

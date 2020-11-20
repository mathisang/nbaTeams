import React, {useEffect} from 'react';
import $ from 'jquery';

function Search() {

    // // const ele = document.querySelector('.search input');
    //
    // document.querySelector('.search').onclick = function(){
    //     // if(ele === document.activeElement)
    //     //     console.log('ccouocu');
    //     console.log("coucou")
    // };
    useEffect(() => {
        $(".search").click(function () {
            if($('.search input').is(":focus")) {
                //IF NOT VIDE ALORS ON MET LE BOUTON ENTREE ICON A DROITE
                $('.search svg').css('opacity', '1')
            }
        });
    }, []);


    return (
        <div className="search">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                    <path
                        d="M14.0244 2.40293C10.8208 -0.80065 5.60674 -0.80065 2.40316 2.40293C-0.79972 5.6072 -0.79972 10.8206 2.40316 14.0248C5.25603 16.877 9.69924 17.1826 12.9007 14.9554C12.9681 15.2742 13.1223 15.5784 13.3702 15.8263L18.0356 20.4917C18.7155 21.1702 19.8142 21.1702 20.4906 20.4917C21.1698 19.8125 21.1698 18.7139 20.4906 18.0368L15.8251 13.37C15.5786 13.1241 15.2737 12.9692 14.955 12.9019C17.1835 9.6997 16.8779 5.25719 14.0244 2.40293ZM12.5514 12.5519C10.1597 14.9436 6.26718 14.9436 3.87613 12.5519C1.48577 10.1601 1.48577 6.26833 3.87613 3.87659C6.26718 1.48554 10.1597 1.48554 12.5514 3.87659C14.9432 6.26833 14.9432 10.1601 12.5514 12.5519Z"
                        fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="21" height="21" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <input type="text" placeholder="Rechercher..."/>
        </div>
    );
}

export default Search;
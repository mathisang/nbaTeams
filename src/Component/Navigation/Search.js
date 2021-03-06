import React, {useEffect, useState} from 'react';
import $ from 'jquery';
import Autocomplete from "../../Autocomplete";

function Search({teamData}) {
    const [arrayVille, setArrayVille] = useState([]);

    const updating = () => {
        for (let i = 0; i < teamData.length; i++) {
            arrayVille.push(teamData[i]["full_name"])
        }

        console.log(arrayVille);
    }

    useEffect(() => {
        $(document).click(function () {
            if ($('.search input').is(":focus")) {
                $('.search .iconZoom').css('opacity', '1')
                $('.search input').css('color', '#ffffff')
                $('.search').css('border-color', 'rgba(255, 255, 255, 0.4)')
                if ($('.search input').val() !== "") {
                    $('.search input').css('width', '87%')
                    $('.search').css('width', '440px')
                    $('.search .iconEnter').css('opacity', '.35')
                }
            } else {
                $('.search .iconZoom').css('opacity', '.3')
                $('.search input').css({'width': '86%', 'color': 'rgba(255,255,255,0.7)'})
                $('.search').css('width', '400px')
                $('.search .iconEnter').css('opacity', '0')
                $('.search').css('border-color', 'rgba(255, 255, 255, 0.14)')
            }
        });

        //CHANGE COLOR IF NOT FOCUS

        $(".search input").keydown(function (e) {
            if (e.keyCode === 8) {
                if ($('.search input').val().length === 1) {
                    $(this).css('width', '86%')
                    $('.search').css('width', '400px')
                    $('.search .iconEnter').css('opacity', '0')
                }
            } else if (e.keyCode === 13) {
                if ($('.search input').val() !== "") {
                    $('.iconEnter')[0].classList.add('enterPress');
                    setTimeout(function () {
                        $('.iconEnter')[0].classList.remove('enterPress');
                    }, 550);
                }
            } else {
                if ($('.search input').val().length > 0) {
                    $(this).css('width', '87%')
                    $('.search').css('width', '440px')
                    $('.search .iconEnter').css('opacity', '.35')
                }
            }
        });
    }, []);

    return (
        <div className="search">
            <svg className="iconZoom" width="21" height="21" viewBox="0 0 21 21" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
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
            {/*<input type="text" placeholder="Rechercher..."/>*/}
            <Autocomplete suggestions={arrayVille}/>
            <svg className="iconEnter" width="24" height="23" viewBox="0 0 24 23" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.174 0H4.826C3.54724 0.00151907 2.32126 0.488748 1.41667 1.35493C0.512074 2.22111 0.00264545 3.39561 0 4.62108V18.3713C0.000528873 19.598 0.509023 20.7746 1.41384 21.6423C2.31867 22.5102 3.54586 22.9985 4.826 23H19.174C20.4541 22.9985 21.6813 22.5102 22.5862 21.6423C23.491 20.7746 23.9995 19.598 24 18.3713V4.62108C23.9974 3.39561 23.4879 2.22111 22.5833 1.35493C21.6787 0.488748 20.4528 0.00151907 19.174 0ZM22 18.3713C22 19.0899 21.7024 19.7791 21.1725 20.2876C20.6427 20.7961 19.9239 21.0823 19.174 21.0833H4.826C4.07605 21.0826 3.3571 20.7965 2.82718 20.2879C2.29726 19.7793 1.99973 19.09 2 18.3713V4.62108C2.00159 3.90363 2.29996 3.21605 2.82971 2.7091C3.35946 2.20214 4.07735 1.91717 4.826 1.91667H19.174C19.9226 1.91742 20.6403 2.20248 21.17 2.70938C21.6997 3.21628 21.9981 3.90371 22 4.62108V18.3713Z"
                    fill="white" fillOpacity="1"/>
                <path
                    d="M17.5 7.1875C17.2348 7.1875 16.9805 7.28847 16.7929 7.46819C16.6054 7.64791 16.5 7.89166 16.5 8.14583V10.7813C16.5 10.8448 16.4737 10.9057 16.4268 10.9507C16.3799 10.9956 16.3163 11.0208 16.25 11.0208H10.75C10.6837 11.0208 10.6201 10.9956 10.5733 10.9507C10.5264 10.9057 10.5 10.8448 10.5 10.7813V9.10417C10.5 8.91466 10.4413 8.72941 10.3314 8.57185C10.2215 8.41429 10.0654 8.29149 9.88268 8.21897C9.69998 8.14646 9.49895 8.12748 9.305 8.16444C9.11105 8.2014 8.93288 8.29264 8.79303 8.42663L5.79303 11.3016C5.60556 11.4813 5.50024 11.725 5.50024 11.9792C5.50024 12.2333 5.60556 12.477 5.79303 12.6567L8.79303 15.5317C8.93288 15.6657 9.11105 15.7569 9.305 15.7939C9.49895 15.8309 9.69998 15.8118 9.88268 15.7394C10.0654 15.6668 10.2215 15.5441 10.3314 15.3865C10.4413 15.2289 10.5 15.0437 10.5 14.8542V13.1771C10.5 13.1135 10.5264 13.0526 10.5733 13.0077C10.6201 12.9627 10.6837 12.9375 10.75 12.9375H16.5C17.0305 12.9375 17.5392 12.7356 17.9142 12.3761C18.2893 12.0166 18.5 11.5291 18.5 11.0208V8.14583C18.5 7.89166 18.3947 7.64791 18.2071 7.46819C18.0196 7.28847 17.7652 7.1875 17.5 7.1875Z"
                    fill="white" fillOpacity="1"/>
            </svg>

            <button onClick={() => updating()}>C</button>
        </div>
    );
}

export default Search;
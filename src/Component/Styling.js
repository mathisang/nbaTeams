import React from 'react';
import ThemeSwitcher from 'react-css-vars';

const myTheme = {
    myColor: 'red',
}

function Styling() {
    return (
        <ThemeSwitcher theme={myTheme}>
            <p>COUCOU</p>
        </ThemeSwitcher>
    );
}

export default Styling;
import React from 'react';
import '../Style/App.scss';
import Team from "./Team.js";
import ReactFullpage from '@fullpage/react-fullpage';

function Loader() {
    return (
        <ReactFullpage
            //fullpage options
            licenseKey={process.env.REACT_APP_FULLPAGE_KEY}
            scrollingSpeed={1000} /* Options here */
            // fixedElements: {'.navigation'}

            render={({state, fullpageApi}) => {
                return (
                    <ReactFullpage.Wrapper>
                        <Team/>
                        <Team/>
                        <Team/>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}

export default Loader;
import React from 'react';
import '../Style/App.scss';
import Team from "./Team.js";
import ReactFullpage from '@fullpage/react-fullpage';
import $ from 'jquery'

function Loader() {
    return (
        <ReactFullpage
            licenseKey={process.env.REACT_APP_FULLPAGE_KEY}
            scrollingSpeed={1200}
            // IF TOP SCROLL GO DOWN //
            // loopTop={true}
            // loopBottom={true}
            continuousVertical={true}
            // BG COLOR FOR EACH SECTION //
            sectionsColor={['#02061A', '#470505', '#cf2c2c']}


            render={({state, fullpageApi}) => {
                return (
                    <ReactFullpage.Wrapper>
                        <Team team="Lakers" city="Los Angeles"/>
                        <Team team="Hawks" city="Atlanta"/>
                        <Team team="Rockets" city="Houston"/>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}

export default Loader;
import React, {useEffect, useState} from 'react';
import '../Style/App.scss';
import Team from "./Team.js";
import ReactFullpage from '@fullpage/react-fullpage';
import $ from 'jquery';

function Home({teamData}) {

    console.log($('#removeSection'));
    $('#removeSection').remove();

    return (
        <ReactFullpage
            licenseKey={process.env.REACT_APP_FULLPAGE_KEY}
            scrollingSpeed={1200}
            continuousVertical={true}

            render={({state, fullpageApi}) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section" id="removeSection">t</div>
                        {teamData.map(item => (
                            <Team key={item.id} teamData={item} team={item.name} city={item.city} />
                        ))}
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}

export default Home;
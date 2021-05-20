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
            licenseKey={'D8136327-FE104BE5-89FA5E63-FD14D6BC'}
            scrollingSpeed={1200}
            continuousVertical={true}
            render={({state, fullpageApi}) => {
                return (

                    <ReactFullpage.Wrapper>
                        <div className="section" id="removeSection">
                        </div>
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
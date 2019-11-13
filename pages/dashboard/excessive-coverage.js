import React from 'react';
import DetailsCard from '../../src/components/card/details-card'
import DefaultPages from '../../src/components/default/index'
import fetch from "isomorphic-unfetch";
import { AUTHORIZATION, API_HISANA } from '../../src/constants'

const ExcessiveCoverage = props => {
    return (
        <DefaultPages area={props.area} page={<DetailsCard 
            number={props.excessive_coverage.length}  
            title="Excessive Coverage" 
            area={props.area}
            bgNum={'orange'} 
            data={props.excessive_coverage} />} />
    );
}

ExcessiveCoverage.getInitialProps = async function ( { query: { location } } ) {
    const area = location? location : 'Bekasi'
    console.log("AREAS CARD", area)

    const res = await fetch(API_HISANA+"overview/district/", {
        method: "POST",
        headers: {
        "Content-Type": "application/json", 
        Authorization: AUTHORIZATION
        },
        body: JSON.stringify({ 
            coverage: "EC" ,
            areas: area
        })
    });
    const message = await res.json();
    
    return {
        excessive_coverage: message.data,
        area: area
    };
};

export default ExcessiveCoverage
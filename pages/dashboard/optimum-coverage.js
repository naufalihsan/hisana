import React from 'react';
import DetailsCard from '../../src/components/card/details-card'
import DefaultPages from '../../src/components/default/index'
import fetch from "isomorphic-unfetch";
import { AUTHORIZATION, API_HISANA } from '../../src/constants'

const OptimumCoverage = props => {
    return (
        <DefaultPages area={props.area} page={<DetailsCard 
            number={props.optimum_coverage.length} 
            title="Optimum Coverage" 
            area={props.area}
            bgNum={'blue'} 
            data={props.optimum_coverage} />} />
    );
}

OptimumCoverage.getInitialProps = async function ( { query: { location } } ) {
    const area = location? location : 'Bekasi'
    console.log("AREAS CARD", area)

    const res = await fetch( API_HISANA + "overview/district/", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: AUTHORIZATION
        },
        body: JSON.stringify({ 
            coverage: "OC",
            areas: area
        })
    });
    const message = await res.json();
    
    return {
        optimum_coverage: message.data,
        area: area
    };
};

export default OptimumCoverage


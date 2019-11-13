import React from 'react';
import DetailsCard from '../../src/components/card/details-card'
import DefaultPages from '../../src/components/default/index'
import fetch from "isomorphic-unfetch"
import { connect } from 'react-redux'
import { show } from '../../src/actions/index'
import { AUTHORIZATION, API_HISANA } from '../../src/constants';

const ZeroCoverage = (props) => {
    return (
        <DefaultPages area={props.area} page={<DetailsCard
            number={props.zero_coverage.length}
            title="Zero Coverage"
            area={props.area}
            bgNum={'default'}
            data={props.zero_coverage}
        />} />
    )
}

ZeroCoverage.getInitialProps = async function ( { query: { location } } ) {
    const area = location? location : 'Bekasi'
    console.log("AREAS CARD", area)

    const res = await fetch(API_HISANA + "overview/district/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: AUTHORIZATION
        },
        body: JSON.stringify({ 
            coverage: "ZC",
            areas: area
         })
    });
    const message = await res.json();
    return {
        zero_coverage: message.data,
        area: area
    };
};

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(
    mapStateToProps,
    null
)(ZeroCoverage)






import React from 'react';
import DefaultPages from '../../src/components/default/index'
import Dashboard from '../../src/components/dashboard/index'
import fetch from "isomorphic-unfetch";
import { connect } from 'react-redux'
import { AUTHORIZATION, API_HISANA } from '../../src/constants'



const DashboardDesktop = props => {
    return (
        <DefaultPages area={props.area} page={<Dashboard
            area={props.area}
            fullname={'Admin'}
            role={'Admin'}
            zero={props.zero}
            under={props.under}
            optimum={props.optimum}
            excessive={props.excessive} />} />
    );
}

DashboardDesktop.getInitialProps = async function ( { query: { location } } ) {
    // var getState = store.getState();
    // console.log(getState, "STORE")
    const area = location? location : 'Bekasi'
    console.log("AREAS", area)

    const res = await fetch(API_HISANA+"overview/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: AUTHORIZATION
        },
        body: JSON.stringify({ areas: area })

    });
    const message = await res.json();

    return {
        zero: message.data.zero,
        under: message.data.under,
        optimum: message.data.optimum,
        excessive: message.data.excessive,
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
)(DashboardDesktop)



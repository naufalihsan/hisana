import fetch from "isomorphic-unfetch";
import { AUTHORIZATION, API_HISANA } from '../src/constants';
import { Doughnut } from 'react-chartjs-2';
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

const MarketShare = props => {

    var listLabel = [];
    var listData = [];
    var listColor = [];


    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    for (const [key, value] of Object.entries(props.data)) {
        listLabel.push(key);
        listData.push(value);
        listColor.push(getRandomColor())
    }

    const data = {
        labels: listLabel,
        datasets: [{
            label: "My Second dataset",
            backgroundColor: listColor,
            borderColor: listColor,
            data: listData
        }]
    }

    return (
        <div style={{ padding: 20 }}>
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <h2>Market Share {props.location}</h2>
                    <Doughnut data={data} />
                </Grid>
                <Grid item xs={3}>
                    <Link href={`${API_HISANA}download/market/MS/SD/${props.location}/`}>
                        <a target="_blank" rel="noopener noreferrer">
                            <Button variant="contained" color="primary">Export Data</Button>
                        </a>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}


MarketShare.getInitialProps = async function ({ query: { location } }) {
    const res = await fetch(API_HISANA + "overview/market/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: AUTHORIZATION
        },
        body: JSON.stringify({
            type: "MS",
            area: "SD",
            name: location
        })
    });
    const message = await res.json();

    return {
        data: message.data,
        location: location
    };
};

export default MarketShare
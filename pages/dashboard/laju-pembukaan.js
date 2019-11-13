import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MUIDataTable from "mui-datatables";
import Paper from '@material-ui/core/Paper';
import DefaultPages from '../../src/components/default/index'
import { API_HISANA, AUTHORIZATION } from '../../src/constants'
import { Bar } from 'react-chartjs-2';
import { greenColor, orangeColor, blueColor } from '../../src/constants'
import Grid from '@material-ui/core/Grid';


var listOS= []
var listLabel = []

const LajuPembukaan = (props) => {

  console.log("MARKET", props.market)

  function getMonth(val) {
    if (val === 11) {
      return "November"
    } else if (val === 10) {
      return "Oktober"
    } else if (val === 9) {
      return "September"
    }
  }

  var datas = props.market

  datas.forEach(function (item) {
    listOS.push(item.os);
    listLabel.push(getMonth(item.month));
  })


  const data = {
    labels: listLabel,
    datasets: [
      {
        label: "Gerai Dibuka",
        backgroundColor: blueColor,
        borderColor: blueColor,
        data: listOS
      },
    ]
  }

  const options = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          steps: 4,
          stepSize: 4,
        }
      }]
    }
  }


  return (
    <DefaultPages area={props.area} page={
      <Grid container>
        <Grid item xs={11}>
          <Bar data={data} options={options}/>
        </Grid>
      </Grid>
    } />
  );
}

LajuPembukaan.getInitialProps = async function ( { query: { location } }) {
  const area = location? location : 'Bekasi'
  console.log("AREAS CARD", area)

  const res = await fetch(API_HISANA + "aggregate/market/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTHORIZATION
    },
    body: JSON.stringify({ areas: area })
  });
  const message = await res.json();
  return {
    market: message.city,
    area: area
  };
};


export default LajuPembukaan
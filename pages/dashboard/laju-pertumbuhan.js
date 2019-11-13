import React from 'react';
import Grid from '@material-ui/core/Grid';
import DefaultPages from '../../src/components/default/index'
import { API_HISANA, AUTHORIZATION } from '../../src/constants'
import { Bar } from 'react-chartjs-2';
import { greenColor, orangeColor, blueColor } from '../../src/constants'


var listMS = [];
var listMP = [];
var listLabel = []

const LajuPertumbuhan = (props) => {

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
    listMS.push(item.ms);
    listMP.push(Math.floor(item.mp * 100));
    listLabel.push(getMonth(item.month));
  })


  const data = {
    labels: listLabel,
    datasets: [
      {
        label: "Market Share",
        backgroundColor: greenColor,
        borderColor: greenColor,
        data: listMS
      },
      {
        label: "Market Potential",
        backgroundColor: orangeColor,
        borderColor: orangeColor,
        data: listMP
      }
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

LajuPertumbuhan.getInitialProps = async function ({ query: { location } }) {
  const area = location ? location : 'Bekasi'
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


export default LajuPertumbuhan
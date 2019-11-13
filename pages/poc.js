import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import fetch from "isomorphic-unfetch";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  searchBar: {
    margin: "40px 0 0",
  }

}));

const Poc = props => {
  const classes = useStyles();
  console.log(props)

  return (
    <div>
      <Container>
        <Grid container alignItems='center' className={classes.searchBar}>
          <Grid item xs={2}>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-native-label-placeholder">
                Location
            </InputLabel>
              <NativeSelect
                value={10}
                inputProps={{
                  name: 'Location',
                  id: 'age-native-label-placeholder',
                }}
              >
                <option value="">None</option>
                <option value={10}>Pondok Bambu</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" className={classes.button}>
              Search
            </Button>
          </Grid>
          <Grid item xs={4}>
            <h2>Recommendation: {props.recommendation}</h2>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <h4>Competitor</h4>
            <Paper className={classes.paper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Outlet Name</TableCell>
                    <TableCell>Latitude</TableCell>
                    <TableCell>Longitude</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.competitor.map(c =>
                    c.map(outlet => (
                      <TableRow>
                        <TableCell>{outlet.name}</TableCell>
                        <TableCell>{outlet.location.lat}</TableCell>
                        <TableCell>{outlet.location.lng}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs>
            <h4>Public</h4>
            <Paper className={classes.paper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Latitude</TableCell>
                    <TableCell>Longitude</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.public.map(outlet =>
                    <TableRow>
                      <TableCell>{outlet.name}</TableCell>
                      <TableCell>{outlet.location.lat}</TableCell>
                      <TableCell>{outlet.location.lng}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs>
            <h4>Hisana</h4>
            <Paper className={classes.paper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Outlet Name</TableCell>
                    <TableCell>Latitude</TableCell>
                    <TableCell>Longitude</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.hisana.map(outlet =>
                    <TableRow>
                      <TableCell>{outlet.name}</TableCell>
                      <TableCell>{outlet.location.lat}</TableCell>
                      <TableCell>{outlet.location.lng}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
  {/* // return (
  //   <Fragment>
  //     <h4>Competitor</h4>
      // {props.competitor.map(c =>
      //   c.map(outlet => (
      //     <ul>
      //       <li>{outlet.name}</li>
      //       <li>
      //         Lat :{outlet.location.lat} Lng:{outlet.location.lng}
      //       </li>
      //     </ul>
      //   ))
      // )}
  //   </Fragment>
  // ); */}
};

Poc.getInitialProps = async function () {
  const res = await fetch("http://localhost:5000/places", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "U2_q?h[kKYZxB5Qn%D;ZytsXC3Z=cL"
    },
    body: JSON.stringify({ location: "Pondok Bambu 13430" })
  });
  const data = await res.json();

  return {
    competitor: data.message.competitor,
    hisana: data.message.hisana,
    public: data.message.public,
    recommendation: data.message.recommendation
  };
};

export default Poc;

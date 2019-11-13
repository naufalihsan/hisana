import React, { Component } from "react";
import { makeStyles } from "@material-ui/styles";
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/person';
import LockIcon from '@material-ui/icons/https';
import fetch from "isomorphic-unfetch";
import Router from 'next/router'
import { connect } from 'react-redux'
import { token } from '../src/actions'
import { API_AUTHENTICATION } from '../src/constants'


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  logo: {
    width: '100%'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    marginTop: '40px',

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: '0 80px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#4F7883',
    backgroundColor: 'white',
    borderRadius: '24px',
    padding: '16px 0',
    boxShadow: '0 0 8px 1px rgba(0, 0, 0, 0.2)',

  },
  forgetPass: {
    fontSize: '10px',
    lineHeight: '42px',
    color: 'black',
    textDecoration: 'underline',
    textDecorationColor: 'black',

  },

  rememberMe: {
    '& span': {
      fontSize: '10px',
    }

  },
}));





export class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }


  handleChange = (e) => {
    const form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({ form });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const email = this.state.form.email
    const password = this.state.form.password
    const user = {username: email, password: password}
    // console.log(user)

    try {
      const response = await fetch(API_AUTHENTICATION, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      })
      if (response.ok) {
        const message = await response.json()
        this.props.token(message.token)
        Router.push({
          pathname: '/dashboard',
        })
      } else {
        console.log('Login failed.')
      }
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )
      throw new Error(error)
    }
  }

  render() {
    const classes = { useStyles };
    return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <img className={classes.logo} src="/static/img/hisana.png"></img>
          <Typography component="h4" variant="h4">
            Hisana Scatter Map VIsualization
      </Typography>
          <Divider className={classes.divider}></Divider>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
              }}
            />
            <Grid container>
              <Grid item xs>
                <FormControlLabel
                  control={<Checkbox value="ingat" color="default" />}
                  label="Ingat saya"
                  className={classes.rememberMe}
                />
              </Grid>
              <Grid item>
                <Link href="#" className={classes.forgetPass}>
                  {"Lupa password?"}
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Masuk
        </Button>
        <Grid container justify="flex-end">
            <Grid item>
              <Link href="/sign-up" variant="body2">
                Belum punya akun? Daftar
              </Link>
            </Grid>
          </Grid>
          </form>
        </div>
      </Container>
    );

  }

};

const mapStateToProps = state => {
  return {
      fetch: state
  }
}

const mapDispatchToProps = dispatch => ({
  token: val => dispatch(token(val))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn)

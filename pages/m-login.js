import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/person';
import LockIcon from '@material-ui/icons/https';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& img': {
        width: '80%',
    },

    '& h5': {
        textAlign: 'center',
    }
  },
  divider: {
    width: '100%',
    marginTop: '20px',
    marginBottom: '20px',

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
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

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <img src="/static/img/hisana.png"></img>
        <Typography component="h5" variant="h5">
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
            InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon/></InputAdornment>,
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
            InputProps={{
                startAdornment: <InputAdornment position="start"><LockIcon/></InputAdornment>,
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
          >
            Masuk
          </Button>
        </form>
      </div>
    </Container>
  );
}
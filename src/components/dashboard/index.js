import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Profile from '../dashboard/profile'
import SmallCard from '..//card/small';
import MediumCard from '../card/medium';
import Grid from '@material-ui/core/Grid';

const titlePageHeight = 64;

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    main: {
        margin: '0 40px 0',
        height: titlePageHeight,
        width: '100%',
        position: 'relative',

    },

    cardGrid: {
        flexGrow: 1,
    },

    titlePage: {
        '& h5': {
            lineHeight: '4rem',
            fontWeight: '300',
        },

        '& svg': {
            position: 'absolute',
            top: '0',
            right: '0',
            height: titlePageHeight,
            fontSize: 'xx-large',
        }

    },

}));


export default function Dashboard(props)  {
    const classes = useStyles();

    const gridMedCard = (
        <div className={classes.cardGrid}>
            <Grid container>
                <Grid item xs={12}>
                    <MediumCard text={'Laju Pembukaan Gerai'} link={'/dashboard/laju-pembukaan'} src={'/static/img/laju-pembukaan.png'} area={props.area}/>
                </Grid>
                <Grid item xs={12}>
                    <MediumCard text={'Laju Pertumbuhan Gerai'} link={'/dashboard/laju-pertumbuhan'} src={'/static/img/laju-pertumbuhan.png'} area={props.area}/>
                </Grid>
            </Grid>
        </div>
    )

    const gridSmallCard = (
        <div className={classes.cardGrid}>
            <Grid container justify="space-evenly">
                <Grid item xs={5}>
                    <SmallCard number={props.zero} text={'Zero Coverage'} link={'/dashboard/zero-coverage'} bgNum={'default'} area={props.area}/>
                </Grid>
                <Grid item xs={5}>
                    <SmallCard number={props.optimum} text={'Optimum Coverage'} link={'/dashboard/optimum-coverage'} bgNum={'blue'} area={props.area} />
                </Grid>
                <Grid item xs={5}>
                    <SmallCard number={props.under} text={'Under Coverage'} link={'/dashboard/under-coverage'} bgNum={'green'} area={props.area}/>
                </Grid>
                <Grid item xs={5}>
                    <SmallCard number={props.excessive} text={'Excessive Coverage'} link={'/dashboard/excessive-coverage'} bgNum={'orange'} area={props.area}/>
                </Grid>
            </Grid>
        </div>
    )
    return (
        <div className={classes.main}>
            <div className={classes.titlePage}>
                <Typography variant="h5" component="h5">
                    Dashboard - {props.area}
                </Typography>
            </div>
            <Profile fullname={props.fullname} role={props.role}/>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    {gridMedCard}
                </Grid>
                <Grid item xs={8}>
                    {gridSmallCard}
                </Grid>
            </Grid>
        </div>
    )
}


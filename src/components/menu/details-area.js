import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import DetailsArea from '../details-area/index'
import SubMenuDetailsArea from '../details-area/menu'
import Router from 'next/router';

const titlePageHeight = 64;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: '25vw',
        flexShrink: 0,
    },
    drawerPaper: {
        width: '25vw',
        borderRight: 'none',
        boxShadow: '0 0 15px 1px rgba(0, 0, 0, 0.25)',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    logo: {
        width: '100%',
        padding: '0 8px',
        height: titlePageHeight,
    },
    logoName: {
        lineHeight: '64px',
        padding: '0 16px',
    },
    button: {
        margin: theme.spacing(1),
    },
    areaTitleMenu: {
        padding: '12px',
        display: 'flex',
        justifyContent: 'space-between',

        '& svg': {
            height: 'auto'
        },

        '& h6': {
            padding: '12px',
        }
    },
}));

export default function mainMenu(props) {
    const classes = useStyles();
    const area = props.area
    console.log("AREA DETAILS", area)

    const handleOnClick = (val) => {
        Router.push({
            pathname: '/dashboard',
            query: { location: val },
        })
    };

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar}>
                <Grid container>
                    <Grid item xs={4}>
                        <img src="/static/img/hisana.png" className={classes.logo} onClick={() => handleOnClick(area)} />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography component="h4" variant="h4" className={classes.logoName}>
                            HISANA
                         </Typography>
                    </Grid>
                </Grid>
            </div>
            <Divider />
            <div className={classes.areaTitleMenu}>
                <Typography variant="h6">
                    {props.title}
                </Typography>
                <IconButton className={classes.button}>
                    <CloseIcon onClick={() => handleOnClick(area)}/>
                </IconButton>
            </div>
            <Divider />
            <DetailsArea
                title={props.title}
                kecamatan={props.kecamatan}
                luas={props.luas}
                populasi={props.populasi}
                kpdtpenduduk={props.kpdtpenduduk}
                kcptnjalan={props.kcptnjalan}
                coverage={props.coverage}
                marketshare={props.marketshare}
                marketpotential={props.marketpotential} />
            <SubMenuDetailsArea />
        </Drawer>
    )
}

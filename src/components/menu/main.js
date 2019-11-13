import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import List from '@material-ui/core/List';
import SatelliteIcon from '@material-ui/icons/Satellite';
import ListMenu from '../menu/list-menu';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
    paddingListDrawer: {
        padding: '8px 20px',
        '&:hover, &:active': {
            '& a': {
                color: 'white',
                textDecoration: 'none',
            }
        },
    },
}));

export default function mainMenu(props) {
    const classes = useStyles();

    const area = props.area

    const handleOnClick = (val) => {
        Router.push({
            pathname: '/dashboard',
            query: { location: val},
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
                        <img src="/static/img/hisana.png" className={classes.logo} onClick={() => handleOnClick(area)}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography component="h4" variant="h4" className={classes.logoName}>
                            HISANA
            </Typography>
                    </Grid>
                </Grid>
            </div>
            <Divider />
            <List className={classes.paddingListDrawer}>
                <ListMenu text={'Dashboard'} link={'/dashboard'} icon={<DashboardIcon />} area={props.area} />
                <ListMenu text={'Maps'} link={'/maps'} icon={<SatelliteIcon />} area={props.area} />
            </List>
        </Drawer>
    )
}


import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import SmallCardMobile from '../src/components/card/m-small';


const testUrl = 'https://material-ui.com/components/links/';

const useStyles = makeStyles(theme => ({
    navBar: {
        width: '100%',
    },
    titleBar: {
        justifyContent: 'center',
        color: 'black',
        backgroundColor: 'white',
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
    },
    cardGrid: {
        flexGrow: 1,
        '& a': {
            '&:hover, &:active': {
                textDecoration: 'none',
            }
        }
    },
    bottomBar: {
        position: 'fixed',
        bottom: '0',
        backgroundColor: 'white',
        padding: '0',
    },
    card: {
        margin: '160px 0',
    },
    smallCard: {
        margin: '40px 0 0',
    },

    profileCard: {
        position: 'relative',
        margin: '60px 0 10px',
        textAlign: 'center',

    },

    profilePicture: {
        position: 'absolute',
        top: '-50%',
        left: '5%',
        textAlign: 'center',
        borderRadius: '8px',
        height: '100px',
    },
    imageProfile: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '8px',

    },

    sectionProfile: {
        width: '100%',
        position: 'relative',
        padding: '10px 20px',
        textAlign: 'right',
        borderRadius: '8px',
        boxShadow: '0 0 15px 1px rgba(0, 0, 0, 0.25)',

    },

    profileName: {
        fontWeight: '500',
    },

    profilePosition: {
        fontWeight: '400',
    },

    profileButton: {
        borderRadius: '16px',
        margin: theme.spacing(1),
        padding: '3px 25px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#11B5C9',

        '&:hover, &:active': {
            backgroundColor: '#0FADC1'
        }

    },

    iconMenu: {
        height: '104px',
    }

}));

export default function DashboardMobile() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const profileCard = (
        <div className={classes.profileCard}>
            <Paper className={classes.sectionProfile}>
                <Paper className={classes.profilePicture}>
                    <img className={classes.imageProfile} src="/static/img/1.jpg" alt="Profile Picture"></img>
                </Paper>
                <div>
                    <Typography variant="h5" component="h5" className={classes.profileName}>
                        User Name
                    </Typography>
                    <Typography variant="h6" component="h6" className={classes.profilePosition}>
                        User Role
                    </Typography>
                </div>
            </Paper>

        </div>
    )



    const gridSmallCard = (
        <div className={classes.cardGrid}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <SmallCardMobile number={10} text={'Zero Coverage'} link={testUrl} bgNum={'grey'} />
                </Grid>
                <Grid item xs={6}>
                    <SmallCardMobile number={40} text={'Under Coverage'} link={testUrl} bgNum={'yellow'} />

                </Grid>
                <Grid item xs={6}>
                    <SmallCardMobile number={99} text={'Optimum Coverage'} link={testUrl} bgNum={'bluegrey'} />
                </Grid>
                <Grid item xs={6}>
                    <SmallCardMobile number={20} text={'Excessive Coverage'} link={testUrl} bgNum={'default'} />
                </Grid>
            </Grid>
        </div>
    )

    const appBar = (
        <AppBar>
            <Toolbar className={classes.titleBar}>
                <Typography variant="h6">Bekasi - Analysis</Typography>
            </Toolbar>
        </AppBar>

    )

    const navBar = (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.navBar}
        >
            <BottomNavigationAction label="Competitor" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Heatmap" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Public Place" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Hisana Outlet" icon={<FolderIcon />} />
            <BottomNavigationAction label="Reco." icon={<FolderIcon />} />
        </BottomNavigation>
    )
    const leftBottom = (
        <div className={classes.cardGrid}>
            <Grid container>
                <Grid item xs={12}>
                    {navBar}
                </Grid>
                <Grid item xs={12}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <Select
                            value={10}
                            inputProps={{
                                name: 'Location',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Pondok Bambu</MenuItem>
                            <MenuItem value={20}>Bekasi</MenuItem>

                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )

    const bottomBar = (
        <div className={classes.cardGrid}>

            <Grid container className={classes.bottomBar}>
                <Grid item xs={10}>
                    {leftBottom}
                </Grid>
                <Grid item xs={2}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        className="iconMenu"
                    >
                        <MenuIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </div>

    )




    return (
        <div className={classes.root}>
            {appBar}
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <div className={classes.card}>
                        {profileCard}
                        <div className={classes.smallCard}>
                            {gridSmallCard}
                        </div>
                    </div>
                </Container>
            </div>
            {bottomBar}
        </div>
    );
}
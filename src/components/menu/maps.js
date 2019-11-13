import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import List from '@material-ui/core/List';
import SatelliteIcon from '@material-ui/icons/Satellite';
import ListMenu from './list-menu';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PlaceIcon from '@material-ui/icons/Place';
import WhereToVoteIcon from '@material-ui/icons/WhereToVote';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import FabDetails from '../details-area/fab'
import Router from 'next/router';
import { connect } from 'react-redux'
import { hisanaStatus, publicStatus, competitorStatus, nonCompetitorStatus, nonFactorPublicStatus, recommendStatus } from '../../actions'
import {
    ICON_HISANA, ICON_NONCOMPETITOR, ICON_COMPETITOR,
    ICON_PUBLIC, ICON_NONFACTORPUBLIC, ICON_RECOMMEND
} from '../../constants'

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
    categorySection: {
        position: 'relative',
        background: '#F5F5F5',
        margin: '300px 0 16px',
        height: '100%',
        borderRadius: '16px',
    },
    category: {
        position: 'absolute',
        textAlign: 'center',
        margin: '16px 0',
        '& a': {
            margin: theme.spacing(3),
            '& span': {
                display: 'block',
                textAlign: 'center',
            }
        },
    },
    areaTitle: {
        padding: '8px 20px',
        display: 'flex',
        justifyContent: 'space-between',

        '& svg': {
            height: 'auto'
        }
    }
}));

const MainMenu = (props) => {
    const {
        hisanaStatus,
        publicStatus,
        competitorStatus,
        nonCompetitorStatus,
        nonFactorPublicStatus,
        recommendStatus
    } = props

    const classes = useStyles();
    const link = props.link
    const area = props.title
    console.log("MAPS AREA", area)

    const handleOnClick = (status, val) => {
        return status
    }

    const handleOnClickMenu = (link, val) => {
        Router.push({
            pathname: link,
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
                        <img src="/static/img/hisana.png" className={classes.logo} onClick={() => handleOnClickMenu('/dashboard', area)} />
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
            <div className={classes.categorySection}>
                <div className={classes.areaTitle}>
                    <Typography variant="h6">
                        {props.title}
                    </Typography>
                    <FilterDramaIcon />
                </div>
                <div className={classes.category}>
                    <FabDetails bg={''} icon={ICON_COMPETITOR} title="Competitor" status={() => handleOnClick(competitorStatus(), 'competitor')} />
                    <FabDetails bg={''} icon={ICON_NONCOMPETITOR} title="Non-Competitor" status={() => handleOnClick(nonCompetitorStatus(), 'nonCompetitor')} />
                    {/* <FabDetails icon={<HomeIcon/>} title="Heatmap"/> */}
                    <FabDetails bg={''} icon={ICON_PUBLIC} title="Public Place Factor" status={() => handleOnClick(publicStatus(), 'public')} />
                    <FabDetails bg={''} icon={ICON_NONFACTORPUBLIC} title="Public Place Non-Factor" status={() => handleOnClick(nonFactorPublicStatus(), 'nonPublic')} />
                    <FabDetails bg={''} icon={ICON_HISANA} title="Hisana Outlet" status={() => handleOnClick(hisanaStatus(), 'hisana')} />
                    <FabDetails bg={''} icon={ICON_RECOMMEND} title="Reco." status={() => handleOnClick(recommendStatus(), 'recommend')} />
                </div>
            </div>
        </Drawer>
    )
}


const mapStateToProps = state => {
    return {
        fetch: state
    }
}

const mapDispatchToProps = dispatch => ({
    hisanaStatus: () => dispatch(hisanaStatus()),
    publicStatus: () => dispatch(publicStatus()),
    competitorStatus: () => dispatch(competitorStatus()),
    nonCompetitorStatus: () => dispatch(nonCompetitorStatus()),
    recommendStatus: () => dispatch(recommendStatus()),
    nonFactorPublicStatus: () => dispatch(nonFactorPublicStatus()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainMenu)


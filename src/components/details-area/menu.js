import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PlaceIcon from '@material-ui/icons/Place';
import WhereToVoteIcon from '@material-ui/icons/WhereToVote';
import FabDetails from '../details-area/fab'
import { connect } from 'react-redux'
import { hisanaStatus, publicStatus, competitorStatus, 
        nonCompetitorStatus, nonFactorPublicStatus, recommendStatus } from '../../actions'
import { ICON_HISANA, ICON_NONCOMPETITOR, ICON_COMPETITOR,
        ICON_PUBLIC, ICON_NONFACTORPUBLIC, ICON_RECOMMEND } from '../../constants'


const useStyles = makeStyles(theme => ({
    categorySection: {
        position: 'relative',
        background: '#F5F5F5',
        margin: '16px 0',
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

    const handleOnClick = (status, val) => {
        return status
    }

    
    return (

        <div className={classes.categorySection}>
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



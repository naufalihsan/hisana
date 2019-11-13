import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { bgIconCompetitor, bgIconNonCompetitor, bgIconHisana,
        bgIconPublic, bgIconNonPublic, bgIconRecommend } from '../../constants'

const useStyles = makeStyles(theme => ({
    buttonDetails: {
        fontSize: '6px',
        margin: '-4px 2px 0',
        textTransform: 'initial',
    },
    iconMaps: {
        width: '20px',
        height: '20px'
    }
}));

const styledBy = (property, mapping) => props => mapping[props[property]];

const StyledFab = withStyles({
    button: {
        background: styledBy('color', {
            hisana: bgIconHisana,
            competitor: bgIconCompetitor,
            nonCompetitor: bgIconNonCompetitor,
            public: bgIconNonPublic,
            nonPublic: bgIconNonPublic,
            recommend: bgIconRecommend,
        }),
        margin: '8px'
    },
})(({ classes, color, ...other }) => <Fab className={classes.button} {...other} />);

export default function mainMenu(props) {
    const classes = useStyles();

    return (
        <StyledFab color={props.bg} component="a" onClick={props.status}>
            <img className={classes.iconMaps} src={props.icon} alt="Icon"/>
            <Typography className={classes.buttonDetails} >
                {props.title}
            </Typography>
        </StyledFab>
    )
}

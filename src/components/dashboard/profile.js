import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Modal from '../modals/index'

const useStyles = makeStyles(theme => ({
    profileCard: {
        position: 'relative',
        margin: '60px 0 10px',
        textAlign: 'center',

    },

    profilePicture: {
        position: 'absolute',
        top: '-30%',
        left: '3%',
        textAlign: 'center',
        borderRadius: '8px',
        height: '160px',
    },

    imageProfile: {
        width: '160px',
        height: '160px',
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

}));

export default function mainMenu(props) {
    const classes = useStyles();

    return (
        <div className={classes.profileCard}>
            <Paper className={classes.sectionProfile}>
                <Paper className={classes.profilePicture}>
                    <img className={classes.imageProfile} src="/static/img/1.jpg" alt="Profile Picture"></img>
                </Paper>
                <div>
                    <Typography variant="h4" component="h4" className={classes.profileName}>
                        {props.fullname}
                    </Typography>
                    <Typography variant="h6" component="h6" className={classes.profilePosition}>
                        {props.role}
                    </Typography>
                    <Modal />
                </div>
            </Paper>
        </div>
    )
}


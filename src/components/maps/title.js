import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const titlePageHeight = 69;

const useStyles = makeStyles(theme => ({
    appBar: {
        width: `calc(100% - 25vw)`,
        marginLeft: '25vw',
        height: titlePageHeight,
        background: 'white',
        color:'black',

        '& h6': {
            fontWeight: '300'
        }
      },
}));

export default function mainMenu(props) {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Maps - {props.area}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}


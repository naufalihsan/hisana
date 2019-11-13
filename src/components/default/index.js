import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideMenu from '../menu/main';

const useStyles = makeStyles(theme => ({

    root: {
        display: 'flex',
        '& hr': {
            height: '2px',
        }
    },

}));

export default function defaultPage(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <SideMenu area={props.area}/>
            {props.page}
        </div>
    )
}
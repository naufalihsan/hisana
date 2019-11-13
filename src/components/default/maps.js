import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TitleMaps from '../maps/title'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& hr': {
            height: '2px',
        }
    },

}));

export default function mapsPage(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <TitleMaps area={props.area} />
                {props.menu}
            </div>
            {props.page}
        </div>
    )
}
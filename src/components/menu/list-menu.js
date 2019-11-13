import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Router from 'next/router';

const useStyles = makeStyles(theme => ({
    listDrawer: {
        '&:hover, &:active': {
            borderRadius: '4px',
            backgroundColor: '#F44336',

            '& svg': {
                fill: 'white',
            },

            '& span':{
                color: 'white',
            },

        },
        '& svg, & span': {
            fontSize: '28px',
            color: 'black',
        },
    },
}));

export default function mainMenu(props) {
    const classes = useStyles();
    const link = props.link
    const area = props.area

    const handleOnClick = (link, val) => {
        Router.push({
            pathname: link,
            query: { location: val},
        })
    };

    return (
        <ListItem button className={classes.listDrawer} onClick={() => handleOnClick(link, area)}>
            <ListItemIcon >{props.icon}</ListItemIcon>
            <ListItemText>{props.text}</ListItemText>
        </ListItem>
    )
}


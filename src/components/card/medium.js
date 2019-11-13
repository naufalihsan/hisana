import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Router from 'next/router';

const useStyles = makeStyles(theme => ({

    medCard: {
        position: 'relative',
        margin: '20px 0 0',
        padding: theme.spacing(2),
        textAlign: 'center',

        '& a': {
            '&:hover': {
                textDecoration: 'none',
            }
        }

    },

    titleMed: {
        height: 'auto',
        width: '100%',
        position: 'relative',
        padding: '150px 80px 10px',
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '0 0 15px 1px rgba(0, 0, 0, 0.25)',

        '& h5': {
            fontWeight: 'bold',
        },

    },

    numberMed: {
        position: 'absolute',
        top: '-10%',
        left: '5%',
        right: '5%',
        textAlign: 'center',
        borderRadius: '8px',
        height: '160px',
    },

    imageMedCard: {
        width: '100%',
        height: '160px',
        objectFit: 'cover',
        borderRadius: '8px',

    },

}));

export default function mediumCardDetail(props) {
    const classes = useStyles();

    const link = props.link
    const area = props.area

    const handleOnClick = (link, val) => {
        Router.push({
            pathname: link,
            query: { location: val},
        })
    };

    return(
        <div className={classes.medCard}>
            {/* <Link href={props.link}> */}
                <Paper className={classes.titleMed} onClick={() => handleOnClick(link, area)}>
                    <Paper className={classes.numberMed}>
                        <img className={classes.imageMedCard} src={props.src} alt={props.text}></img>
                    </Paper>
                    <Typography variant="h5" component="h5">
                        {props.text}
                </Typography>
                </Paper>
            {/* </Link> */}
        </div>
    )
}
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { redColor, blueColor, greenColor, orangeColor } from '../../constants'
import Table from '../table/index'
import Router from 'next/router'
import Link from 'next/link'


const titlePageHeight = 64;

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
    },
    main: {
        margin: '0 40px 0',
        height: titlePageHeight,
        width: '100%',
        position: 'relative',
    },
    button: {
        margin: theme.spacing(1),
        position: 'absolute',
        top: '0',
        right: '0',

        '& svg': {
            fontSize: 'xx-large',
        }
    },
    titlePage: {
        '& h5': {
            lineHeight: '4rem',
            fontWeight: '300',
        },
    },
    titleSection: {
        position: 'relative',
        margin: '20px 0 0',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    numberDetail: {
        position: 'absolute',
        top: '-20%',
        left: '5%',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '8px',

        '& h2': {
            fontWeight: 'bold',
            color: 'white',
        },
    },
    titleDetail: {
        height: 'auto',
        width: '50%',
        position: 'relative',
        padding: '30px 20px 30px 0',
        textAlign: 'right',
        borderRadius: '8px',
        boxShadow: '0 0 15px 1px rgba(0, 0, 0, 0.25)',

        '& h4': {
            fontWeight: 'bold',
        },
    },
}));

const styledBy = (property, mapping) => props => mapping[props[property]];

const StyledCardNumber = withStyles({
    numberDetail: {
        position: 'absolute',
        top: '-20%',
        left: '5%',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '8px',
        background: styledBy('color', {
            default: redColor,
            blue: blueColor,
            green: greenColor,
            orange: orangeColor,
        }),
        '& h2': {
            fontWeight: 'bold',
            color: 'white',
        },

    },
})(({ classes, color, ...other }) => <Paper className={classes.numberDetail} {...other} />);

export default function DetailsCard(props) {
    const classes = useStyles();

    const area = props.area

    const handleOnClick = (val) => {
        Router.push({
            pathname: '/dashboard',
            query: { location: val},
        })
    };

    const titleSection = (
        <div className={classes.titleSection}>
            <Paper className={classes.titleDetail}>
                <StyledCardNumber color={props.bgNum}>
                    <Typography variant="h2" component="h2">
                        {props.number}
                    </Typography>
                </StyledCardNumber>
                <Typography variant="h4" component="h4">
                    {props.title}
                </Typography>
            </Paper>
        </div>
    )

    const detailCard = (
        <div className={classes.main}>
            <div className={classes.titlePage}>
                <Typography variant="h5" component="h5">
                    {props.title} - {props.area}
                </Typography>
                    <IconButton className={classes.button} onClick={() => handleOnClick(area)}>
                        <CloseIcon />
                    </IconButton>
            </div>
            {titleSection}
            <Table data={props.data} area={props.area}/>
        </div>
    )

    return (
        <div className={classes.root}>
            {detailCard}
        </div>
    );
}
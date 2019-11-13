import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Router from 'next/router';
import { redColor, blueColor, greenColor, orangeColor } from '../../constants'


const useStyles = makeStyles(theme => ({

    smallCard: {
        position: 'relative',
        margin: '20px 0',
        padding: theme.spacing(3),
        textAlign: 'center',
        '& a': {
            '&:hover': {
                textDecoration: 'none',
            }
        }
    },

    title: {
        height: 'auto',
        width: 'auto',
        position: 'relative',
        padding: '120px 20px 20px 60px',
        textAlign: 'right',
        borderRadius: '8px',
        boxShadow: '0 0 15px 1px rgba(0, 0, 0, 0.25)',
        '& h4': {
            fontWeight: 'bold',
        },
    },

}));

const styledBy = (property, mapping) => props => mapping[props[property]];


const StyledButton = withStyles({
    number: {
        background: styledBy('color', {
            default: redColor,
            blue: blueColor,
            green: greenColor,
            orange: orangeColor,
        }),
        position: 'absolute',
        top: '-10%',
        left: '10%',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '8px',

        '& h2': {
            fontWeight: 'bold',
            color: 'white',
        },
    },
})(({ classes, color, ...other }) => <Paper className={classes.number} {...other} />);

export default function smallCardDetail(props) {
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
        <div className={classes.smallCard}>
            {/* <Link href={props.link}> */}
                <Paper className={classes.title} onClick={() => handleOnClick(link, area)}>
                    <StyledButton color={props.bgNum}>
                        <Typography variant="h2" component="h2">
                            {props.number}
                        </Typography>
                    </StyledButton>
                    <Typography variant="h4" component="h4">
                        {props.text}
                    </Typography>
                </Paper>
            {/* </Link> */}
        </div>
    );
}

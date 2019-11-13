import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { redColor, greyColor, yellowColor, blueGreyColor } from '../../constants'


const useStyles = makeStyles(theme => ({
    detailsCard: {
        padding: '10px 20px',
        textAlign: 'center',
        boxShadow: '0 0 15px 1px rgba(0, 0, 0, 0.25)',
        '& h2, & h6': {
            fontWeight: 'bold',
        },

        '& h2': {
            padding: '10px 0'
        },

        '& h6': {
            fontSize: '13px',
        }

    },

}));

const styledBy = (property, mapping) => props => mapping[props[property]];


const StyledButton = withStyles({
    detailsCard: {
        padding: '10px 20px',
        textAlign: 'center',
        boxShadow: '0 0 15px 1px rgba(0, 0, 0, 0.25)',
        background: styledBy('color', {
            default: redColor,
            grey: greyColor,
            yellow: yellowColor,
            bluegrey: blueGreyColor,
        }),

        '& h2, & h6': {
            fontWeight: 'bold',
        },

        '& h2': {
            padding: '10px 0'
        },

        '& h6': {
            fontSize: '13px',
        }

    },
})(({ classes, color, ...other }) => <Paper className={classes.detailsCard} {...other} />);

export default function smallCardDetail(props) {
    const classes = useStyles();

    return (
        <Link href={props.link}>
            <StyledButton color={props.bgNum}>
                <Typography variant="h6" component="h6">
                    {props.text}
                </Typography>
                <Typography variant="h2" component="h2">
                    {props.number}
                </Typography>
                <Typography variant="h6" component="h6">
                    Areas
                    </Typography>
            </StyledButton>
        </Link>

    );
}
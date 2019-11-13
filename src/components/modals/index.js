import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router'

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },

});

const useStyles = makeStyles(theme => ({
    profileButton: {
        borderRadius: '16px',
        margin: theme.spacing(1),
        padding: '3px 25px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#11B5C9',

        '&:hover, &:active': {
            backgroundColor: '#0FADC1'
        }
    },

    areasButton: {
        width: '80%',
        borderRadius: '16px',
        margin: theme.spacing(1),
        padding: '3px 25px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#11B5C9',

        '&:hover, &:active': {
            backgroundColor: '#0FADC1'
        }
    },
}));

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
            </IconButton>
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}))(MuiDialogContent);


const CustomizedDialogs = (props) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleCloseModal = () => {
        setOpen(false)
    };
    const handleClose = (val) => {
        setOpen(false)
        Router.push({
            pathname: '/dashboard',
            query: { location: val},
        })
    };

    return (
        <div>
            <Button variant="contained" size="medium" className={classes.profileButton} onClick={handleClickOpen}>
                Areas
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleCloseModal} >
                    List of Area
                 </DialogTitle>
                <DialogContent dividers>
                    <Button variant="contained" size="large" className={classes.areasButton} onClick={() => handleClose('Bekasi')}>
                        Bekasi
                    </Button>
                    <Button variant="contained" size="large" className={classes.areasButton} onClick={() => handleClose('Bogor')}>
                        Bogor
                    </Button>
                    <Button variant="contained" size="large" className={classes.areasButton} onClick={() => handleClose('Depok')}>
                        Depok
                    </Button>
                </DialogContent>
            </Dialog>
        </div>

    );
}

export default CustomizedDialogs
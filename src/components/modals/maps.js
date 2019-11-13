import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Doughnut } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import { greenColor } from '../../constants'
import { API_HISANA } from '../../constants'

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
    marketButton: {
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
    downloadButton: {
        borderRadius: '16px',
        margin: theme.spacing(2),
        padding: '3px 25px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: greenColor,
        display: 'block',
        position: 'absolute',
        right: '0',

        '&:hover, &:active': {
            backgroundColor: greenColor
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

    downloadArea: {
        width: '100%',
        position: 'relative',
        height: '64px',

        '& a': {
            textDecoration: 'none'
        }
    }
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


const MarketShareDialog = props => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    var doughnutOptions = {
        events: false,
        animation: {
            duration: 500,
            easing: "easeOutQuart",
            onComplete: function () {
                var ctx = this.chart.ctx;
                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';

                this.data.datasets.forEach(function (dataset) {

                    for (var i = 0; i < dataset.data.length; i++) {
                        var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                            total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                            mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
                            start_angle = model.startAngle,
                            end_angle = model.endAngle,
                            mid_angle = start_angle + (end_angle - start_angle) / 2;

                        var x = mid_radius * Math.cos(mid_angle);
                        var y = mid_radius * Math.sin(mid_angle);

                        ctx.fillStyle = '#fff';
                        if (i == 3) { // Darker text color for lighter background
                            ctx.fillStyle = '#444';
                        }
                        var percent = String(dataset.data[i].toFixed(2)) + "%";
                        // ctx.fillText(dataset.data[i], model.x + x, model.y + y);
                        ctx.fillText(percent, model.x + x, model.y + y + 15);
                    }
                });
            }
        }
    };

    const percentageOptions = {
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                    var total = meta.total;
                    var currentValue = dataset.data[tooltipItem.index];
                    var percentage = currentValue.toFixed(2);
                    // return currentValue + ' (' + percentage + '%)';
                    return percentage + '%';
                },
                title: function (tooltipItem, data) {
                    return data.labels[tooltipItem[0].index];
                }
            }
        }
    }

    return (
        <div>
            <Button variant="contained" size="medium" className={classes.marketButton} onClick={handleClickOpen}>
                Market
            </Button>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth={fullWidth}
                maxWidth="lg">
                <DialogTitle id="customized-dialog-title" onClose={handleClose} >
                    Market
                 </DialogTitle>
                <div className={classes.downloadArea}>
                    <Button variant="contained" size="medium" className={classes.downloadButton} component="a" href={`${API_HISANA}download/market/MS/SD/${props.location}/`}>
                        Download
                    </Button>
                </div>
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component="h6">
                                Market Share
                            </Typography>
                            <Doughnut data={props.dataMS} options={percentageOptions} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component="h6">
                                Market Potential
                            </Typography>
                            <Doughnut data={props.dataMP} options={percentageOptions} />
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>

    );
}


export default MarketShareDialog


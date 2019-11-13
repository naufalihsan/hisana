import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import DialogMarketShare from '../modals/maps'
import { AUTHORIZATION, API_HISANA } from '../../constants';

const useStyles = makeStyles(theme => ({
    detailsAreaMenu: {
        padding: '16px',
        '& h6': {
            padding: '8px',
        }
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const MapsMenu = props => {
    const classes = useStyles();

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function setList(val) {
        var listLabel = [];
        var listData = [];
        var listColor = [];

        for (const [key, value] of Object.entries(val)) {
            listLabel.push(key);
            listData.push(value);
            listColor.push(getRandomColor())
        }

        const data = {
            labels: listLabel,
            datasets: [{
                label: "My Second dataset",
                backgroundColor: listColor,
                borderColor: listColor,
                data: listData
            }]
        }

        return data
    }



    return (
        <div className={classes.detailsAreaMenu}>
            <Typography variant="h6">
                Kecamatan: {props.kecamatan}
            </Typography>
            <Typography variant="h6">
                Luas Wilayah: {props.luas} km
            </Typography>
            <Typography variant="h6">
                Populasi: {props.populasi} jiwa
            </Typography>
            <Typography variant="h6">
                Kepadatan Penduduk: {props.kpdtpenduduk} jiwa/km
            </Typography>
            <Typography variant="h6">
                Kecepatan Jalan: {props.kcptnjalan} km/jam
            </Typography>
            <Typography variant="h6">
                Coverage Status: {props.coverage}
            </Typography>
            <DialogMarketShare
                dataMS={setList(props.marketshare)}
                dataMP={setList(props.marketpotential)}
                location={props.title} />
        </div>
    )
}

export default MapsMenu
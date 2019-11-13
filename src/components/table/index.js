import React from 'react';
import Paper from '@material-ui/core/Paper';
import MUIDataTable from "mui-datatables";
import Router from 'next/router'


const columns = ["Kode Pos", "Nama Kelurahan", "Gerai Dibuka", "Gerai Rekomendasi", "Gerai Sesuai"];
var data = []

const TableDetails = (props) => {

    var datas = props.data;
    var area = props.area

    datas.forEach(function (item) {
        var temp = [item.postal_code, item.name, item.open_store, item.recommended_store, item.recommended_store];
        data.push(temp);
    })

    const options = {
        selectableRows: 'none',
        onRowClick: (rowData, rowState) => {
            Router.push({
                pathname: '/dashboard/details-area',
                query: { location: rowData[1], area: area },
            })
          },
    };

    return (
        <Paper>
            <MUIDataTable
                title={""}
                data={data}
                columns={columns}
                options={options} />
        </Paper>
    )
}


export default TableDetails
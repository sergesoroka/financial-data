import React from 'react';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
// import key from 'weak-key';


import './Table.css'

const Table = (props) => {

//   const ind = props.data.map((item, i) => {
//     item.id 
//     return i
//   })
// console.log(ind)
    const columns = [{
        dataField: 'volume',
        text: 'Volume',
        sort: true
      }, {
        dataField: 'symbol',
        text: 'Symbol',
        sort: true
      }, {
        dataField: 'sector',
        text: 'Sector',
        sort: true
      }, {
        dataField: 'lastSalePrice',
        text: 'Last Sale Price',
        sort: true
      }, {
        dataField: 'lastUpdated',
        text: 'Last Updated',
        sort: true
      }];



    return ( 
        <BootstrapTable keyField= 'id' 
                          data={ props.data } 
                          columns={ columns } 
                          pagination={ paginationFactory() } 
                          bordered={ false } 
                          tabIndexCell 
                          striped 
                          hover 
                          condensed />
                          
    )
}
export default Table;
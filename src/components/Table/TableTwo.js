import React from 'react';
import { Table } from 'react-bootstrap';

import './Table.css'

const TableTwo = (props) => {

const dataTable = props.data.map((item, i) => {

    return (
            <tbody key={i}>
                <tr>
                    <td>{i}</td>
                    <td>{item.symbol}</td>
                    <td>{item.sector}</td>
                    <td>{item.securityType}</td>
                    <td>{item.bidPrice}</td>
                    <td>{item.lastUpdated}</td>
                    <td>{item.lastSalePrice}</td>
                    <td>{item.lastSaleTime}</td>
                    <td>{item.volume}</td> 
                </tr>
            </tbody>
    )
})
const lastLimit = props.page * 10;
const initialLimit = lastLimit - 10;

const dataTableSort = dataTable.slice(initialLimit, lastLimit)
    return ( 
        <div>
            <Table striped hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Symbol</th>
                    <th>Sector</th>
                    <th>Security Type</th>
                    <th>Bid Price</th>
                    <th>Last Updated</th>
                    <th>Last SalePrice</th>
                    <th>Last SaleTime</th>
                    <th>Volume</th>
                    </tr>
                </thead>
                    {dataTableSort}
            </Table>
        </div>
    )
}
export default TableTwo;
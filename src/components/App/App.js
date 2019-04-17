import React, { Component } from 'react';
import Titles from '../../Titles';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';

import BootstrapTable from 'react-bootstrap-table-next';
import './App.css'

const API_KEY = process.env.REACT_APP_TABELES_API_KEY;

class App extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get(`https://cloud.iexapis.com/beta/tops?token=${API_KEY}`)
      .then(res => {
        this.setState({
          posts: res.data
        })
      
      })
  }
  render() {
    const DataList = this.state.posts
    console.log(DataList)
 
    const columns = [{
      dataField: 'volume',
      text: 'Volume'
    }, {
      dataField: 'symbol',
      text: 'Symbol'
    }, {
      dataField: 'sector',
      text: 'Sector'
    }, {
      dataField: 'lastSalePrice',
      text: 'Last Sale Price'
    }];
    
    // const rowStyle = { backgroundColor: '#c8e6c9' }; 
    

    return (
      <div className="container">
        <div className="main-panel">
          <Titles />
          
          <BootstrapTable keyField='id' data={ DataList } columns={ columns } pagination={ paginationFactory() } striped hover condensed />
    
        </div>
      </div>
    );
  }
}

export default App;

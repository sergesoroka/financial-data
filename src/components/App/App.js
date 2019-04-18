import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

import Titles from '../Title/Title';
// import Table from '../Table/Table';
import TableTwo from '../Table/TableTwo';

import './App.css'

const API_KEY = process.env.REACT_APP_TABELES_API_KEY;

class App extends Component {
  state = {
    posts: [],
    page: 1
  }
  
  componentDidMount() {
    axios.get(`https://cloud.iexapis.com/beta/tops?token=${API_KEY}`)
      .then(res => {
        this.setState({
          posts: res.data
        })
      
      })
  }
  nextPageHandler() {
    this.setState({
      page: this.state.page + 1
    })
  }
  previousPageHandler() {
    this.setState({
      page: this.state.page - 1
    })
  }

 
  render() { 
    const buttonStatus = this.state.page === 1 ? 'disabled-button' :'active-button'  
    return (
          <div className="container">
            <div className="main-panel">
              <Titles />
              <div className='pages-buttons float-right'>
                <Button variant="secondary" size="sm" className={buttonStatus} onClick={this.previousPageHandler.bind(this)}>Previous page</Button>
                <Button variant="secondary" size="sm" className='next-button' onClick={this.nextPageHandler.bind(this)}>Next page</Button>
              </div>
              <TableTwo data={this.state.posts} page={this.state.page}/>
              {/* <Table data={this.state.posts} /> */}
            </div>
          </div>
        );
  }
}

export default App;

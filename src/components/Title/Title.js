import React from 'react';
import './Title.css'
const Title = (props) =>{
  return (
    <div>
      <h1 className="main-title">Pick up your financial data</h1>
      <p>Powered by <span className="iex_logo"><a href="https://iexcloud.io/">IEX Cloud</a></span></p>
      
    </div>
  )
}
export default Title;
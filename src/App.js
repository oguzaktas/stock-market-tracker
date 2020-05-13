import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

import StockList from './components/StockList.js'
// import StockRow from './components/StockRow.js'


function App() {
  return (
    <div className="App">
      <div className="container">
        <StockList />
      </div>
    </div>
  );
}

export default App;

/*
<table className="table mt-5">
  <thead>
    <tr>
      <th>Name</th>
      <th>Ticker</th>
      <th>Price</th>
      <th>Date</th>
      <th>Time</th>
      <th>Number of Trades</th>
    </tr>
  </thead>
  <tbody>
    <StockRow name="Apple" ticker="aapl" />
    <StockRow ticker="goog" />
    <StockRow ticker="msft" />
    <StockRow ticker="tsla" />
    <StockRow ticker="ibm" />
  </tbody>
</table>
*/

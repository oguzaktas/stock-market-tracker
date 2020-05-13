import React, { Component } from 'react';
import { stock } from '../stock.js';
import StockRow from './StockRow.js';


class StockList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lastTradingDate: null
        }
    }

    componentDidMount() {
        stock.getLastTradingDate().then((data) => {
            this.setState({
                lastTradingDate: data[0].date
            })
        })
    }

    render() {
        const lastTradingDate = this.state.lastTradingDate;
        return (
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
                    <StockRow name="Apple" ticker="AAPL" lastTradingDate={lastTradingDate} />
                    <StockRow name="Google" ticker="GOOG" lastTradingDate={lastTradingDate} />
                    <StockRow name="Microsoft" ticker="MSFT" lastTradingDate={lastTradingDate} />
                    <StockRow name="GE" ticker="GE" lastTradingDate={lastTradingDate} />
                    <StockRow name="Facebook" ticker="FB" lastTradingDate={lastTradingDate} />
                    <StockRow name="Cisco" ticker="CSCO" lastTradingDate={lastTradingDate} />
                    <StockRow name="PayPal" ticker="PYPL" lastTradingDate={lastTradingDate} />
                    <StockRow name="Adobe" ticker="ADBE" lastTradingDate={lastTradingDate} />
                    <StockRow name="Oracle" ticker="ORCL" lastTradingDate={lastTradingDate} />
                    <StockRow name="Accenture" ticker="ACN" lastTradingDate={lastTradingDate} />
                    <StockRow name="Baidu" ticker="BIDU" lastTradingDate={lastTradingDate} />
                    <StockRow name="Spotify" ticker="SPOT" lastTradingDate={lastTradingDate} />
                    <StockRow name="Twitter" ticker="TWTR" lastTradingDate={lastTradingDate} />
                </tbody>
            </table>
            /*
            <ul className="list-group list-group-flush">
                <StockRow name="Apple" ticker="aapl" lastTradingDate={lastTradingDate} />
                <StockRow name="Google" ticker="goog" lastTradingDate={lastTradingDate} />
                <StockRow name="Microsoft" ticker="msft" lastTradingDate={lastTradingDate} />
                <StockRow name="GE" ticker="ge" lastTradingDate={lastTradingDate} />
            </ul>
            */
        )
    }

}

export default StockList;

import React, { Component } from 'react';
// import { iex } from '../iex.js';
import { stock } from '../stock.js'
import '../App.css';


class StockRow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            price: null,
            date: null,
            time: null,
            numberOfTrades: null,
            dollar_change: null,
            percent_change: null,
        }
    }

    changeStyle() {
        var color;
        if (this.state.dollar_change > 0) {
            color = '#4caf50'
        } else {
            color = '#e53935'
        }
        return {
            color: color, // if it is negative put the red (#e53935)
            fontSize: '0.9rem',
            marginLeft: 5
        }
    }

    applyData(data) {
        const formattedPrice = (data.price == undefined) ? null : data.price.toFixed(2)
        this.setState({
            price: formattedPrice,
            date: data.date,
            time: data.time,
            numberOfTrades: data.numberOfTrades,
        });
    }

    componentDidMount() {
        /*
        const url = `${iex.base_url}/${this.props.ticker}/intraday-prices?token=${iex.api_token}&chartLast=1`
        // https://cloud.iexapis.com/stable/stock/aapl/intraday-prices?token=pk_12ff756a55f3487285968715b4e7e7d1&chartLast=20

        fetch(url).then((response) => response.json())
        */
        stock.latestPrice(this.props.ticker, this.applyData.bind(this))
    }
    
    componentDidUpdate(prevProps) {
        this.setCanRetrieveClose(prevProps)
        if (this.state.canRetrieveClose && this.state.price != null) {
            stock.getYesterdaysClose(this.props.ticker, this.props.lastTradingDate, (yesterday) => {
                const dollar_change = (this.state.price - yesterday.price).toFixed(3);
                const percent_change = (100 * dollar_change / yesterday.price).toFixed(2)
                
                this.setState({
                    dollar_change: `${dollar_change}`,
                    percent_change: `(${percent_change}%)`,
                    canRetrieveClose: false
                })
            })
        }
    }

    setCanRetrieveClose(prevProps) {
        if (prevProps.lastTradingDate == null && this.props.lastTradingDate != null) {
            this.setState({
                canRetrieveClose: true
            })
        }
    }

    render() {
        return (
            /*
            <li className="list-group-item">
                <b>{this.props.name} - {this.props.ticker}</b> ${this.state.price}
                <span className="change" style={this.changeStyle()}>
                    {this.state.dollar_change}
                    &nbsp;
                    {this.state.percent_change}
                </span>
            </li>
            */
           <tr>
               <td>{this.props.name}</td>
               <td>{this.props.ticker}</td>
               <td>{this.state.price}
               <span className="change" style={this.changeStyle()}>
               &nbsp; {this.state.dollar_change} &nbsp; {this.state.percent_change}</span></td>
               <td>{this.state.date}</td>
               <td>{this.state.time}</td>
               <td>{this.state.numberOfTrades}</td>
           </tr>
        )
    }

}

export default StockRow;

/*
    <tr>
        <td>{this.props.name}</td>
        <td>{this.props.ticker}</td>
        <td>{this.state.data.price}</td>
        <td>{this.state.data.date}</td>
        <td>{this.state.data.time}</td>
        <td>{this.state.data.numberOfTrades}</td>
    </tr>
*/
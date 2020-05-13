import { iex } from './iex.js';

export const stock = {

    latestPrice: (ticker, callback) => {
        fetch(stock.latestPriceURL(ticker))
        .then((response) => response.json())
        .then((data) => callback(stock.formatPriceData(data)))
    },

    latestPriceURL: (ticker) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?token=${iex.api_token}&chartLast=1`
        // &exactDate=20200512
    },

    formatPriceData: (data) => {
        const stockData = data[data.length - 1]
        const formattedData = {}
        formattedData.price = stockData.close
        formattedData.date = stockData.date
        formattedData.time = stockData.label
        formattedData.numberOfTrades = stockData.numberOfTrades
        return formattedData
    },

    getYesterdaysClose: (ticker, lastTradingDate, callback) => {
        if (lastTradingDate !== "" && lastTradingDate !== undefined) {
            const url = stock.yesterdaysCloseURL(ticker, stock.formatDate(lastTradingDate))
            fetch(url)
            .then((response) => response.json())
            .then((data) => callback(stock.formatPriceData(data)))
        }
    },

    getLastTradingDate: () => {
        const today = new Date().toISOString().split('T')[0].replace(/-/g, '');
        const url = `${iex.base_url}/ref-data/us/dates/trade/last/1/${today}?token=${iex.api_token}`
        return fetch(url).then((response) => response.json());
    },

    yesterdaysCloseURL: (ticker, lastTradingDate) => {
        // var lastTradingDate = stock.formatDate(date);
        // https://cloud.iexapis.com/stable/ref-data/us/dates/trade/last/1/20200512?token=pk_12ff756a55f3487285968715b4e7e7d1
        return `${iex.base_url}/stock/${ticker}/intraday-prices?token=${iex.api_token}&chartLast=1&exactDate=${lastTradingDate}`
    },

    formatDate: (date) => {
        return new Date(date).toISOString().split('T')[0].replace(/-/g, '')
    }

}
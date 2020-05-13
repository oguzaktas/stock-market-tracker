(this["webpackJsonpstock-market-tracker"]=this["webpackJsonpstock-market-tracker"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),i=(a(12),a(13),a(14),a(1)),s=a(2),o=a(4),u=a(3),m="pk_5257610957ea48a78b4ad56e6f46b3fb",d="https://cloud.iexapis.com/stable",h={latestPrice:function(e,t){fetch(h.latestPriceURL(e)).then((function(e){return e.json()})).then((function(e){return t(h.formatPriceData(e))}))},latestPriceURL:function(e){return"".concat(d,"/stock/").concat(e,"/intraday-prices?token=").concat(m,"&chartLast=1")},formatPriceData:function(e){var t=e[e.length-1],a={};return a.price=t.close,a.date=t.date,a.time=t.label,a.numberOfTrades=t.numberOfTrades,a},getYesterdaysClose:function(e,t,a){if(""!==t&&void 0!==t){var n=h.yesterdaysCloseURL(e,h.formatDate(t));fetch(n).then((function(e){return e.json()})).then((function(e){return a(h.formatPriceData(e))}))}},getLastTradingDate:function(){var e=(new Date).toISOString().split("T")[0].replace(/-/g,""),t="".concat(d,"/ref-data/us/dates/trade/last/1/").concat(e,"?token=").concat(m);return fetch(t).then((function(e){return e.json()}))},yesterdaysCloseURL:function(e,t){return"".concat(d,"/stock/").concat(e,"/intraday-prices?token=").concat(m,"&chartLast=1&exactDate=").concat(t)},formatDate:function(e){return new Date(e).toISOString().split("T")[0].replace(/-/g,"")}},f=(a(15),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={price:null,date:null,time:null,numberOfTrades:null,dollar_change:null,percent_change:null},n}return Object(s.a)(a,[{key:"changeStyle",value:function(){return{color:this.state.dollar_change>0?"#4caf50":"#e53935",fontSize:"0.9rem",marginLeft:5}}},{key:"applyData",value:function(e){var t=void 0==e.price?null:e.price.toFixed(2);this.setState({price:t,date:e.date,time:e.time,numberOfTrades:e.numberOfTrades})}},{key:"componentDidMount",value:function(){h.latestPrice(this.props.ticker,this.applyData.bind(this))}},{key:"componentDidUpdate",value:function(e){var t=this;this.setCanRetrieveClose(e),this.state.canRetrieveClose&&null!=this.state.price&&h.getYesterdaysClose(this.props.ticker,this.props.lastTradingDate,(function(e){var a=(t.state.price-e.price).toFixed(3),n=(100*a/e.price).toFixed(2);t.setState({dollar_change:"".concat(a),percent_change:"(".concat(n,"%)"),canRetrieveClose:!1})}))}},{key:"setCanRetrieveClose",value:function(e){null==e.lastTradingDate&&null!=this.props.lastTradingDate&&this.setState({canRetrieveClose:!0})}},{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.name),r.a.createElement("td",null,this.props.ticker),r.a.createElement("td",null,this.state.price,r.a.createElement("span",{className:"change",style:this.changeStyle()},"\xa0 ",this.state.dollar_change," \xa0 ",this.state.percent_change)),r.a.createElement("td",null,this.state.date),r.a.createElement("td",null,this.state.time),r.a.createElement("td",null,this.state.numberOfTrades))}}]),a}(n.Component)),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={lastTradingDate:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.getLastTradingDate().then((function(t){e.setState({lastTradingDate:t[0].date})}))}},{key:"render",value:function(){var e=this.state.lastTradingDate;return r.a.createElement("table",{className:"table mt-5"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Ticker"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Time"),r.a.createElement("th",null,"Number of Trades"))),r.a.createElement("tbody",null,r.a.createElement(f,{name:"Apple",ticker:"AAPL",lastTradingDate:e}),r.a.createElement(f,{name:"Google",ticker:"GOOG",lastTradingDate:e}),r.a.createElement(f,{name:"Microsoft",ticker:"MSFT",lastTradingDate:e}),r.a.createElement(f,{name:"GE",ticker:"GE",lastTradingDate:e}),r.a.createElement(f,{name:"Facebook",ticker:"FB",lastTradingDate:e}),r.a.createElement(f,{name:"Cisco",ticker:"CSCO",lastTradingDate:e}),r.a.createElement(f,{name:"PayPal",ticker:"PYPL",lastTradingDate:e}),r.a.createElement(f,{name:"Adobe",ticker:"ADBE",lastTradingDate:e}),r.a.createElement(f,{name:"Oracle",ticker:"ORCL",lastTradingDate:e}),r.a.createElement(f,{name:"Accenture",ticker:"ACN",lastTradingDate:e}),r.a.createElement(f,{name:"Baidu",ticker:"BIDU",lastTradingDate:e}),r.a.createElement(f,{name:"Spotify",ticker:"SPOT",lastTradingDate:e}),r.a.createElement(f,{name:"Twitter",ticker:"TWTR",lastTradingDate:e})))}}]),a}(n.Component);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c8c8cc27.chunk.js.map
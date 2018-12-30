import React, { Fragment } from 'react';
import Filter from './Filter';

import DisplayRow from './DisplayRow';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import Navbar from './Navbar';
import Navheader from './Navheader';
import DropDown from './DropDown';
import Chart from './Chart';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.itemRenderer = this.itemRenderer.bind(this);
    this.handleRLDDChange = this.handleRLDDChange.bind(this);
    this.state = {
      data: [
        'Abucoins',
        'BTCAlpha',
        'BTCChina',
        'BTCE',
        'BitBay',
        'BitFlip',
        'BitSquare',
        'BitTrex',
        'BitexBook',
        'Bitfinex',
        'Bitlish',
        'Bitsane',
        'Bitstamp',
        'CCEDK',
        'CCEX',
        'Cexio',
        'CoinDeal',
        'CoinHub',
        'Coinbase',
        'Coincap',
        'Coinfloor',
        'Coinroom',
        'CoinsBank',
        'Coinsbit',
        'Coinsetter',
        'Cryptsy',
        'DSX',
        'Exenium',
        'Exmo',
        'ExtStock',
        'Gatecoin',
        'Gemini',
        'Graviex',
        'Huobi',
        'Incorex',
        'IndependentReserve',
        'Kraken',
        'LakeBTC',
        'Liquid',
        'LiveCoin',
        'LocalBitcoins',
        'Lykke',
        'MonetaGo',
        'Neraex',
        'OKCoin',
        'Ore',
        'P2PB2B',
        'Poloniex',
        'QuadrigaCX',
        'Quoine',
        'Remitano',
        'RightBTC',
        'Simex',
        'SingularityX',
        'StocksExchange',
        'StocksExchangeio',
        'TheRockTrading',
        'TrustDEX',
        'WEX',
        'WavesDEX',
        'Yobit',
        'bitFlyer',
        'itBit'
      ],
      search: '',
      myList: [],
      results: []
    };
  }

  workOnData = (item, type) => {
    if (item)
      fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&e=${item}`
      )
        .then(res => res.json())
        .then(res => {
          const { myList } = this.state;
          const newData = {
            id: myList.length,
            MARKET: item,
            CHANGEPCT24HOUR: res.DISPLAY.BTC.USD.CHANGEPCT24HOUR,
            PRICE: res.DISPLAY.BTC.USD.PRICE,
            FROMSYMBOL: res.DISPLAY.BTC.USD.FROMSYMBOL
          };
          if (type === 'ADD') {
            myList.push(newData);
          } else {
            const index = myList.findIndex(x => x.MARKET === item);
            if (index !== -1) {
              newData.id = myList[index].id;
              myList[index] = newData;
            }
          }
          this.setState({ myList });
        });
  };

  handleFilterChange = search => {
    const { data } = this.state;
    this.setState({ search }, () => {
      const results = data.filter(y =>
        y.toLowerCase().includes(search.toLowerCase())
      );
      this.setState({ results });
    });
  };

  handleAddItem = item => {
    const index = this.state.myList.findIndex(x => x.MARKET === item);
    if (index === -1) {
      this.workOnData(item, 'ADD');
    } else {
      alert('Item already in the list');
    }
    this.setState({ search: '' });
  };

  handleDeleteMarket = MARKET => {
    let { myList } = this.state;
    const index = myList.findIndex(x => x.MARKET === MARKET);
    myList.splice(index, 1);
    this.setState({ myList });
  };

  itemRenderer(item, index) {
    return <DisplayRow rowData={item} onDeleteItem={this.handleDeleteMarket} />;
  }

  handleRLDDChange(newList) {
    console.log(newList);
    this.setState({ myList: newList });
  }

  componentDidMount() {
    const { myList } = this.state;
    setInterval(() => {
      for (let x of myList) {
        this.workOnData(x.MARKET, 'FETCH');
      }
    }, 5000);
  }

  render() {
    const { results, search, myList } = this.state;

    return (
      <Fragment>
        <div className="wrapper">
          <div className="nav-header">
            <Navheader />
          </div>
          <div className="header">
            <Navbar />
          </div>
          <div className="left">
            <div>
              <Filter
                onFilterChange={this.handleFilterChange}
                search={search}
              />
              {search !== '' && (
                <DropDown results={results} onAddItem={this.handleAddItem} />
              )}
            </div>
            <RLDD
              items={myList}
              itemRenderer={this.itemRenderer}
              onChange={this.handleRLDDChange}
            />
          </div>
          <div className="main">
            <Chart />
          </div>
          <div className="footer" />
        </div>
      </Fragment>
    );
  }
}

export default Home;

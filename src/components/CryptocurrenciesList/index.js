// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyDetails()
  }

  getCryptocurrencyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachObject => ({
      id: eachObject.id,
      currencyLogo: eachObject.currency_logo,
      currencyName: eachObject.currency_name,
      euroValue: eachObject.euro_value,
      usdValue: eachObject.usd_value,
    }))

    this.setState({currencyList: updatedData, isLoading: false})
  }

  renderCurrencyPage = () => {
    const {currencyList, isLoading} = this.state
    return (
      <div className="crypto-currency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div className="table-container">
          <div className="header-container">
            <h1 className="coin-type-heading">Coin Type</h1>
            <div className="currencies">
              <h1 className="usd-heading">USD</h1>
              <h1 className="euro-heading">EURO</h1>
            </div>
          </div>
          <div className="currency-values-container">
            {currencyList.map(eachCurrency => (
              <CryptocurrencyItem
                cryptocurrencyDetails={eachCurrency}
                key={eachCurrency.id}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        ) : (
          this.renderCurrencyPage()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList

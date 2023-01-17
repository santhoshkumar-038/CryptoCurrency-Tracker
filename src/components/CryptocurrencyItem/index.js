// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyLogo,
    currencyName,
    euroValue,
    usdValue,
  } = cryptocurrencyDetails

  return (
    <li className="currency-list-item">
      <div className="currency">
        <img src={currencyLogo} alt={currencyName} className="currency-image" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-values">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

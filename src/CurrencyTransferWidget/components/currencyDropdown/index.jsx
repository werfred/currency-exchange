import {useEffect, useState} from 'react'

import * as Styles from './styles'

import searchIcon from '../../../images/magnifiying-glass.svg'
import DropDown from '../../../components/Dropdown'


const CurrencyDropdown = (props) => {
  const currenciesNames = props.currenciesNames
  const popularCurrenciesNames = currenciesNames.filter((currency) => (
    currency === 'USD' ||
    currency === 'EUR' ||
    currency === 'PLN' ||
    currency === 'UAH'
  ))
  const [isVisible, setIsVisible] = useState(false)
  const [itemToRemove, setItemToRemove] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const searchValueHandler = (e) => {
    setSearchValue(e.target.value)
  }

  const currencyHandler = (currency) => {
    props.setCurrencyName(currency)
    setIsVisible(false)
  }

  useEffect(() => {
    if (searchValue !== '') {
      setItemToRemove(true)
    } else {
      setItemToRemove(false)
    }

    const results = currenciesNames.filter(currency => currency.toLowerCase().includes(searchValue.toLowerCase()))
    setSearchResults(results)
  }, [searchValue, currenciesNames])

  return (
    <DropDown value={props.currencyName} isVisible={isVisible} setIsVisible={setIsVisible}>
      <Styles.SearchInputContainer>
          <span>
            <img src={searchIcon} alt="search icon"/>
          </span>
        <Styles.DropDownInput
          type="text"
          placeholder="Type a currency / country"
          value={searchValue}
          onChange={searchValueHandler}
        />
      </Styles.SearchInputContainer>

      <Styles.Currencies>
        <Styles.PopularCurrencies remove={itemToRemove}>
          <span>Popular currencies</span>

          {popularCurrenciesNames.map((currency, index) => (
            <Styles.Currency activeCurrency={currency === props.currencyName}
                             onClick={() => currencyHandler(currency)}
                             key={index}>{currency}
            </Styles.Currency>
          ))}

          <span>All currencies</span>
        </Styles.PopularCurrencies>

        {searchResults.map((currency, index) => (
          <Styles.Currency activeCurrency={currency === props.currencyName}
                           onClick={() => currencyHandler(currency)}
                           key={index}>{currency}
          </Styles.Currency>
        ))}
      </Styles.Currencies>
    </DropDown>
  )
}

export default CurrencyDropdown

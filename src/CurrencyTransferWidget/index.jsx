import {useEffect, useState} from 'react'

import * as Styles from './styles'

import CurrencyDropdown from './components/currencyDropdown'
import CommissionContainer from './components/commissionContainer'
import ErrorNotification from '../components/ErrorNotification'
import {normalizeValue} from '../utils/normalizeValue'


const CurrencyTransferWidget = () => {
  const [currencies, setCurrencies] = useState(null)
  const [currenciesNames, setCurrenciesNames] = useState([])

  const getCurrencies = async () => {
    const currenciesResponse = await fetch(`${process.env.REACT_APP_API_URL}`)
    if (currenciesResponse.status !== 200) {
      window.location.reload()
    } else {
      const data = await currenciesResponse.json()
      if (data.base) {
        setCurrencies(data)
        setCurrenciesNames(Object.keys(data.rates))
      } else {
        window.location.reload()
      }
    }
  }

  useEffect(() => {
    getCurrencies().then()
  }, [])

  const [sentCurrencyName, setSentCurrencyName] = useState('UAH')
  const [receivedCurrencyName, setReceivedCurrencyName] = useState('PLN')

  const [sentValue, setSentValue] = useState('1000')
  const [receivedValue, setReceivedValue] = useState('')
  const [exchangeRate, setExchangeRate] = useState('')
  const [isFromSentValue, setIsFromSentValue] = useState(true)

  const [isError, setIsError] = useState(false)

  // updates states with normalized values
  const normalizeStates = () => {
    setSentValue(normalizeValue(sentValue))
    setReceivedValue(normalizeValue(receivedValue))
  }

  // finds exchange rate based on Currency names
  useEffect(() => {
    if (currencies) {
      setExchangeRate((currencies.rates[receivedCurrencyName] / currencies.rates[sentCurrencyName]).toFixed(4))
    }
  }, [sentCurrencyName, receivedCurrencyName, currencies])

  // calculates values based on exchange rate, entered amounts and currently active input
  useEffect(() => {
    if (isFromSentValue) {
      let result = (normalizeValue(sentValue) * exchangeRate).toFixed(2)
      setReceivedValue(result)
    } else {
      let result = (normalizeValue(receivedValue) / exchangeRate).toFixed(2)
      setSentValue(result)
    }
  }, [isFromSentValue, sentValue, receivedValue, exchangeRate])

  // calls error message based on if sentValue bigger than 100000USD
  useEffect(() => {
    if (currencies) {
      if ((normalizeValue(sentValue)) * (currencies.rates.USD / currencies.rates[sentCurrencyName]).toFixed(3) >= 100000) {
        setIsError(true)
      } else {
        setIsError(false)
      }
    }
  }, [sentValue, sentCurrencyName, currencies])


  const sentValueInputHandler = (e) => {
    setSentValue(e.target.value)
    setIsFromSentValue(true)
  }

  const receivedValueInputHandler = (e) => {
    setReceivedValue(e.target.value)
    setIsFromSentValue(false)
  }

  return (
    <Styles.CurrencyTransferWidgetContainer>
      <Styles.Raw onClick={normalizeStates} isError={isError}>
        <Styles.InputContainer isError={isError}>
          <Styles.Label htmlFor="sentValue" isError={isError}>
            You send
          </Styles.Label>
          <Styles.Input
            id="sentValue"
            value={sentValue}
            onChange={e => sentValueInputHandler(e)}
            type="text"
          />
          <CurrencyDropdown currencyName={sentCurrencyName} setCurrencyName={setSentCurrencyName}
                            currenciesNames={currenciesNames} />
        </Styles.InputContainer>
        {isError && <ErrorNotification>The most you can send is 100 000 USD</ErrorNotification>}
      </Styles.Raw>

      <CommissionContainer exchangeRate={exchangeRate} currencyName={sentCurrencyName}
                           sentValue={normalizeValue(sentValue)} />

      <Styles.Raw onClick={normalizeStates} isError={isError}>
        <Styles.InputContainer isError={isError}>
          <Styles.Label htmlFor="getValue" isError={isError}>
            Recipient gets
          </Styles.Label>
          <Styles.Input
            id="getValue"
            value={receivedValue}
            onChange={e => receivedValueInputHandler(e)}
            type="text"
          />
          <CurrencyDropdown currencyName={receivedCurrencyName} setCurrencyName={setReceivedCurrencyName}
                            currenciesNames={currenciesNames} />
        </Styles.InputContainer>
      </Styles.Raw>

      <Styles.Button>Get started</Styles.Button>
    </Styles.CurrencyTransferWidgetContainer>
  )
}

export default CurrencyTransferWidget

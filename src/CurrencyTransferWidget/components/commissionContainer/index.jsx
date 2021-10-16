import {useEffect, useState} from 'react'

import * as Styled from './styles'
import CommissionDropdown from '../commissionDropdown'


const CommissionContainer = ({currencyName, exchangeRate, sentValue}) => {
  const [commissionPercent, setCommissionPercent] = useState(1)
  const [valueAfterCommission, setValueAfterCommission] = useState('0')
  const [commissionAmount, setCommissionAmount] = useState('0')

  const calculateCommissions = (commissionPercent) => {
    const commAmount = (sentValue * commissionPercent) / 100
    setCommissionAmount(commAmount.toFixed(2))
    setValueAfterCommission((sentValue - commAmount).toFixed(2))
  }

  useEffect(() => {
    calculateCommissions(commissionPercent)
  }, [commissionPercent, sentValue])


  return (
    <Styled.CommissionContainer>
      <Styled.CommissionRow content={'–'}>
        <Styled.CommissionAmount>{commissionAmount} {currencyName}</Styled.CommissionAmount>
        <span>
          <CommissionDropdown setCommissionPercent={setCommissionPercent}
                              sentValue={sentValue}
                              currencyName={currencyName}
          />
          <Styled.SecondarySpan>fee</Styled.SecondarySpan>
        </span>
      </Styled.CommissionRow>

      <Styled.CommissionRow content={'='}>
        <Styled.SentAmount>{valueAfterCommission} {currencyName}</Styled.SentAmount>
        <Styled.SecondarySpan>Amount we’ll convert</Styled.SecondarySpan>
      </Styled.CommissionRow>

      <Styled.CommissionRow content={'х'}>
        <Styled.ExchangeRate>{exchangeRate}</Styled.ExchangeRate>
        <Styled.SecondarySpan>Guaranteed rate (36 hrs)</Styled.SecondarySpan>
      </Styled.CommissionRow>
    </Styled.CommissionContainer>
  )
}

export default CommissionContainer

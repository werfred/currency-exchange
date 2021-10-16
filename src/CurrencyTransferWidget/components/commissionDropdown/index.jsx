import {useState} from 'react'

import * as Styles from './styles'

const FAST_COMMISSION = 1
const LOW_COST_COMMISSION = 0.5
const SIMPLE_COMMISSION = 0.75

const CommissionDropdown = ({setCommissionPercent, sentValue, currencyName}) => {
  const typesOfTransfers = [
    {
      title: 'Fast transfer',
      commissionType: `${(sentValue * FAST_COMMISSION) / 100} ${currencyName} fee`,
      description: 'Send money from your debit or credit card',
      percent: FAST_COMMISSION
    },
    {
      title: 'Low cost transfer',
      commissionType: `${(sentValue * LOW_COST_COMMISSION) / 100} ${currencyName} fee`,
      description: 'Send money from your bank account',
      percent: LOW_COST_COMMISSION
    },
    {
      title: 'Balance transfer',
      commissionType: `${(sentValue * SIMPLE_COMMISSION) / 100} ${currencyName} fee`,
      description: 'Pay online from your bank account',
      percent: SIMPLE_COMMISSION
    }
  ]

  const [isVisible, setIsVisible] = useState(false)
  const [dropdownTitle, setDropdownTitle] = useState(typesOfTransfers[0].title)

  const commissionTypeHandler = (percent, title) => {
    setCommissionPercent(percent)
    setDropdownTitle(title)
    setIsVisible(false)
  }

  return (
    <Styles.CommissionDropDown value={dropdownTitle} isVisible={isVisible} setIsVisible={setIsVisible}>
      <Styles.TitleSpan>Transfer types</Styles.TitleSpan>

      {typesOfTransfers.map((transferType, index) => (
        <Styles.CommissionType key={`index-${index}`}
                               onClick={() => commissionTypeHandler(transferType.percent, transferType.title)}
                               isActiveCommission={transferType.title === dropdownTitle}
        >
          {transferType.title} -
          <Styles.DescriptionSpan> {transferType.commissionType}</Styles.DescriptionSpan>
          <br/>
          <Styles.DescriptionSpan> {transferType.description}</Styles.DescriptionSpan>
        </Styles.CommissionType>
      ))}

    </Styles.CommissionDropDown>
  )
}

export default CommissionDropdown


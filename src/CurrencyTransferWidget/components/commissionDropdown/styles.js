import styled from 'styled-components'

import DropDown from '../../../components/Dropdown'
import {DropDownButton, DropDownContent} from '../../../components/Dropdown/styles'
import {MEDIA_QUERIES} from '../../../constants/mediaQueriesList'


export const CommissionDropDown = styled(DropDown)`
  ${DropDownButton} {
    padding: 8px 12px;
    font-size: 14px;
    width: unset;
    ${MEDIA_QUERIES.sm} {
      padding: 4px;
    }
  }

  ${DropDownContent} {
    width: 368px;
    left: -54px;
    top: 30px;
    padding: 12px 5px;
    ${MEDIA_QUERIES.lg} {
      left: 0;
      bottom: 0;
      top: unset;
      width: 100%;
    }
  }
`

export const DescriptionSpan = styled.span`
  font-size: 14px;
  color: #a8aaac;
`

export const TitleSpan = styled(DescriptionSpan)`
  display: block;
  margin-left: 16px;
  color: #5d7079;
  padding-bottom: 15px;
`

export const CommissionType = styled.a`
  background: ${props => props.isActiveCommission ? '#2e4369' : null};
  padding: 15px 10px;
  margin: 0 5px;
  border-radius: 3px;
  color: ${props => props.isActiveCommission ? '#fff' : '#000121'};
  cursor: pointer;
  display: block;

  :hover {
    text-decoration: none;
    color: ${props => props.isActiveCommission ? null : '#2e4369'};
    background-color: ${props => props.isActiveCommission ? null : '#f2f5f7'};
  }

  :active {
    color: #fff;
    background-color: #2e4369;
  }
`

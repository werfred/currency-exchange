import styled from 'styled-components'

import {MEDIA_QUERIES} from '../../../constants/mediaQueriesList'


export const SearchInputContainer = styled.div`
  img {
    width: 16px;
    opacity: 0.5;
  }

  span {
    padding: 12px 16px 10px;
  }

  display: flex;
  align-items: center;
  border-bottom: 1px solid #e7e7e7;
`

export const DropDownInput = styled.input`
  width: 100%;
  padding: 14px 10px;
  outline: none;
  border: none;
  line-height: 1.5;

  ::placeholder {
    color: #b8b8b8;
  }
  ${MEDIA_QUERIES.xs} {
    padding: 14px 0;
  }
`

export const Currencies = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: black;
    padding: 10px 10px;
    margin: 0 5px;
    font-size: 14px;
  }
`

export const Currency = styled.a`
  background-color: ${props => props.activeCurrency ? '#2e4369' : null};
  padding: 15px 10px;
  margin: 0 5px;
  border-radius: 3px;
  color: ${props => props.activeCurrency ? '#fff' : '#000121'};
  cursor: pointer;

  :hover {
    text-decoration: none;
    color: ${props => props.activeCurrency ? null : '#2e4369'};
    background-color: ${props => props.activeCurrency ? null : '#f2f5f7'};
  }

  :active {
    color: #fff;
    background-color: #2e4369;
  }
`

export const PopularCurrencies = styled(Currencies)`
  display: ${props => props.remove ? 'none' : null};
`

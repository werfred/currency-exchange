import styled from 'styled-components'

import {MEDIA_QUERIES} from '../../../constants/mediaQueriesList'


export const CommissionContainer = styled.div`
  padding: 20px 0;
  position: relative;

  ::before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 100%;
    background-color: #253655;
    position: absolute;
    left: 22px;
    top: 0;
  }
`

export const CommissionRow = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0 6px 54px;
  flex-wrap: wrap;
  gap: 24px;
  position: relative;
  ${MEDIA_QUERIES.sm} {
    gap: 12px;
  }

  ::before {
    content: '${props => props.content}';
    position: absolute;
    left: 11px;
    top: 8px;
    height: 24px;
    line-height: 24px;
    width: 24px;
    background-color: #253655;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
  }
`

export const CommissionAmount = styled.span`
  padding: 4px;
  font-weight: 500;
  max-width: 160px;
  white-space: nowrap;

  ${MEDIA_QUERIES.sm} {
    font-size: 14px;
  }
`

export const SecondarySpan = styled.span`
  color: #d3d5d8;
  padding: 4px;

  ${MEDIA_QUERIES.sm} {
    font-size: 14px;
  }
`

export const SentAmount = styled(CommissionAmount)`
  color: #d3d5d8;
  padding: 4px;
`

export const ExchangeRate = styled(CommissionAmount)`
  color: var(--color-blue);
  cursor: pointer;
  font-weight: 700;
  transition: color 0.1s;

  :hover {
    color: var(--color-hover-blue);
  }
`

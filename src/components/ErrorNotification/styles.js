import styled from 'styled-components'
import {MEDIA_QUERIES} from '../../constants/mediaQueriesList'


export const ErrorNotification = styled.div`
  > img {
    width: 24px;
  }
  > div {
    text-align: center;
  }
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #ffdfdf;
  color: #b62a18;
  border: 1px solid transparent;
  border-radius: 0 0 3px 3px;
  font-size: 14px;
  z-index: 9;
  font-weight: 500;
  padding: 6px 12px;
  transition: all 0.2s;
  ${MEDIA_QUERIES.sm} {
    font-size: 12px;
  }
`

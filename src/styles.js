import styled from 'styled-components'

import {MEDIA_QUERIES} from './constants/mediaQueriesList'


export const AppContainer = styled.div`
  background-color: var(--color-primary);
  padding: 180px 0;
  min-height: 120vh;
  ${MEDIA_QUERIES.lg} {
    padding: 80px 0;
  }
  > * {
    display: flex;
    gap: 80px;
    justify-content: center;
    ${MEDIA_QUERIES.lg} {
      flex-direction: column;
      align-items: center;
    }
  }
`

export const Content = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const Button = styled.button`
  align-self: flex-start;
  padding: 8px 24px;
  border: 1px solid var(--color-blue);
  background-color: transparent;
  color: var(--color-blue);
  display: flex;
  align-items: center;
  font-weight: 700;
  border-radius: 4px;
  transition: all .3s;
  cursor: pointer;
  ${MEDIA_QUERIES.sm} {
    font-size: 14px;
  }

  &:hover, :active {
    color: #fff;
    background-color: var(--color-blue);

    > img {
      filter: brightness(0) invert(1);
    }
  }

  img {
    transition: filter .3s;
    width: 30px;
    margin-right: 14px;
  }
`

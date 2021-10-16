import styled, {css} from 'styled-components'

import {MEDIA_QUERIES} from '../constants/mediaQueriesList'


export const CurrencyTransferWidgetContainer = styled.div`
  max-width: 460px;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${MEDIA_QUERIES.lg} {
    max-width: 80%;
  }
  ${MEDIA_QUERIES.sm} {
    max-width: 100%;
  }
`

export const Raw = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  transition: all .2s;
  ${props => props.isError ? css`
    border-radius: 4px;
    border-color: red;
  ` : null}
`

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;

  button {
    border-bottom-right-radius: ${props => props.isError ? '0' : null};
  }

  input {
    border-bottom-left-radius: ${props => props.isError ? '0' : null};
  }

  :hover {
    input, button {
      border-color: ${props => props.isError ? 'transparent' : '#EFE9E9CC'};
    }
  }

  :focus-within {
    button {
      background-color: #253655;
      border-color: ${props => props.isError ? 'transparent' : '#EFE9E9CC'};
    }

    input {
      border-color: ${props => props.isError ? 'transparent' : 'var(--color-blue)'}
    }

    label {
      color: ${props => props.isError ? 'red' : 'var(--color-blue)'}
    }
  }
`

export const Input = styled.input`
  padding: 28px 12px 4px;
  font-size: 22px;
  line-height: 1.7;
  outline: none;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border: 1px solid #ccc;
  transition: all .3s;
  border-right: 0;
  width: 100%;
  ${MEDIA_QUERIES.sm} {
    font-size: 18px;
  }
`

export const Label = styled.label`
  font-size: 14px;
  color: ${props => props.error ? 'red' : '#5d7079'};
  position: absolute;
  top: 10px;
  left: 14px;
  z-index: 1;
  transition: all .3s;
`

export const Button = styled.button`
  width: 100%;
  background: var(--color-green);
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  padding: 14px 0;
  color: #fff;
  font-weight: 700;
  margin-top: 20px;
  transition: background-color .2s;
  
  &:hover {
    background: var(--color-hover-green);
  }
`

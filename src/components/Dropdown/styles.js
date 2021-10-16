import styled, {css, keyframes} from 'styled-components'

import {MEDIA_QUERIES} from '../../constants/mediaQueriesList'
import arrow from '../../images/down-arrow.svg'


export const DropDown = styled.div`
  position: relative;
  display: inline-block;
`

export const DropDownButton = styled.button`
  padding: 14px 16px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  width: 120px;
  cursor: pointer;
  color: #fff;
  background-color: #2e4369;
  border: 1px solid #2e4369;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  transition: all .15s;

  ::after {
    content: '';
    background-image: url(${arrow});
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    margin-left: 16px;
    ${MEDIA_QUERIES.xs} {
      width: 12px;
      height: 12px;
    }
  }

  :hover, :focus {
    background-color: #253655;
    border-color: #253655;
  }

  ${MEDIA_QUERIES.xs} {
    width: 80px;
    padding: 0;
    font-size: 14px;
    letter-spacing: 0;
  }

`

export const fromDownToUp = keyframes`
  from {
    transform: translateY(400px);
  }

  to {
    transform: translateY(0);
  }
`

export const DropDownContent = styled.div`
  display: ${props => props.isShown ? 'block' : 'none'};
  opacity: ${props => props.isAnimated ? '1' : '0'};
  position: absolute;
  overflow: auto;
  z-index: 10;
  width: 420px;
  top: 0;
  right: 0;
  background: #fff;
  max-height: 592px;
  padding: 5px;
  border-radius: 4px;
  transition: all .2s;
  ${MEDIA_QUERIES.lg} {
    position: fixed;
    width: 100%;
    max-height: 360px;
    top: unset;
    left: 0;
    bottom: 0;
    ${props => props.isAnimated ? css`
      animation: ${fromDownToUp} .3s ease-in-out;
    ` : null}
  }
}
`

export const Backdrop = styled.div`
  opacity: 0;
  transition: all .2s;
  ${MEDIA_QUERIES.lg} {
    opacity: ${props => props.isAnimated ? '1' : '0'};
    pointer-events: ${props => props.isAnimated ? 'auto' : 'none'};
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(55, 81, 126, 0.6);
`

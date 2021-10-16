import {useRef, useState, useEffect} from 'react'

import useOutsideClick from '../../hooks/clickOutside'
import * as Styles from './styles'


const DropDown = (props) => {
  const [isAnimated, setIsAnimated] = useState(false)
  const [isShown, setIsShown] = useState(false)

  const closeDropdown = () => {
    setIsAnimated(false)
    setTimeout(() => {
      props.setIsVisible(false)
      setIsShown(false)
    }, 200)
  }

  const toggleDropdown = () => {
    props.setIsVisible(!props.isVisible)
    setIsShown(!isShown)
  }

  useEffect(() => {
    let timer
    if (props.isVisible) {
      timer = setTimeout(() => {
        setIsAnimated(true)
      }, 0)
    } else {
      closeDropdown()
    }
    return () => clearTimeout(timer)
  }, [props.isVisible])


  const dropDown = useRef('')
  useOutsideClick(dropDown, closeDropdown)

  return (
    <>
      <Styles.Backdrop className={props.className} isAnimated={isAnimated}/>
      <Styles.DropDown ref={dropDown} className={props.className}>
        <Styles.DropDownButton className={props.className} onClick={toggleDropdown}>
          {props.value}
        </Styles.DropDownButton>
        <Styles.DropDownContent className={props.className} isAnimated={isAnimated} isShown={isShown}>
          {props.children}
        </Styles.DropDownContent>
      </Styles.DropDown>
    </>
  )
}

export default DropDown

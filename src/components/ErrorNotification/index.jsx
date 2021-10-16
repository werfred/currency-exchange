import * as Styles from './styles'

import mark from '../../images/exclamation-point.svg'


const ErrorNotification = (props) => {
  return (
    <Styles.ErrorNotification {...props}>
      <img src={mark} alt=''/>
      <div>{props.children}</div>
    </Styles.ErrorNotification>
  )
}

export default ErrorNotification

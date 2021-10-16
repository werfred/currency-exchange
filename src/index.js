import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import {GlobalStyles} from './constants/globalStyles'


ReactDOM.render(
    <>
      <GlobalStyles />
      <App />
    </>,
  document.getElementById('root')
)

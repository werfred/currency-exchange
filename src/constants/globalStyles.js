import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'


export const GlobalStyles = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;

    --color-blue: #00B9FF;
    --color-hover-blue: #00B9FF;
    --color-green: #2ED06E;
    --color-hover-green: #28b862;
    --color-primary: #37517E;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  body {
    overflow-x: hidden;
    position: relative;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.2;

    -webkit-tap-highlight-color: transparent;
  }

  ::-moz-selection {
    background-color: var(--color-blue);
    color: #fff;
  }

  ::selection {
    background-color: var(--color-blue);
    color: #fff;
  }
`

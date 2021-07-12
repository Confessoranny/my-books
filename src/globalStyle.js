import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

export const theme = {
    Colors: {
        dark: '#25282d',
        star: '#c3800f',
        ligthGreen: '#4fd74f',
        darkGreen: '#427347',
        white: '#e9e9ea',
        grey: '#818287'
    }
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body, html {
    font-family: "Nunito", sans-serif;
    font-weight: 500;
    font-size: 14px !important;
    margin: 0;
  }
`

export default GlobalStyle

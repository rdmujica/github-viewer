import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import React from 'react'
import ConstextProvider from '@context/appContext'

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    background: #ebeff5;
    height: 100vh;
    margin: 0 auto;
    max-width: 70%;
    overscroll-behavior: none;
    width: 100%;
  }
 
`

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ConstextProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ConstextProvider>
    </>
  )
}

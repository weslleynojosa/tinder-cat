import store, { persistor } from '@/app/store'
import GlobalStyles from '@/components/styles/Global.styled'
import { theme } from '@/components/styles/Theme'
import { Quicksand } from '@next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

const quickSand = Quicksand({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>TinderCat</title>
    </Head>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyles/>
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider> 
  </>
  
}

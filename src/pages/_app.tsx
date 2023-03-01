import store, { persistor } from '@/app/store'
import { Quicksand } from '@next/font/google'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const quickSand = Quicksand({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
            <PersistGate persistor={persistor}>
            <style jsx global>{`
              html, input, button {
                font-family: ${quickSand.style.fontFamily};
              }
            `}</style>
              <Component {...pageProps} />
            </PersistGate>
  </Provider> 
}

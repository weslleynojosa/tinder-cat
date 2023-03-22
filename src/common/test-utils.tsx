import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/components/styles/Theme'
import { Provider } from 'react-redux'
import store from '@/app/store'

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}
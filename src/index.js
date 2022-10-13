import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StyledEngineProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import store from './Store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </React.StrictMode>
  </Provider>
)

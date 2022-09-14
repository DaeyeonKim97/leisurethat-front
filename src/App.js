import { GlobalTheme } from './GlobalTheme'
import MainRouter from './routes/MainRouter'
import { ThemeProvider } from '@mui/material/styles'
import { GlobalStyle } from './styled'

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyle />
      <div className="App">
        <MainRouter />
      </div>
    </ThemeProvider>
  )
}

export default App

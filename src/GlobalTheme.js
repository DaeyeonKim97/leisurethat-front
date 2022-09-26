import { createTheme } from '@mui/material'

export const GlobalTheme = createTheme({
  status: {
    danger: '#33d9b2',
  },
  palette: {
    primary: {
      main: '#00AEEF',
      darker: '#218c74',
      contrastText: '#fff',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgba(0,0,0,0)',
      darker: '#ecf0f1',
    },
    public: {
      main: '#FFFFFF',
    },
    invalid: {
      main: '#6297BA',
    },
    red: {
      main: '#FF0000',
    },
  },
})

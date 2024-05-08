import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@emotion/react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#7091e6',
    },
    secondary: {
      main: '#807fd9',
    },
  },
  typography: {
    fontFamily: [
      'Avenir', 'Montserrat', 'Corbel', 'URW Gothic', 'source-sans-pro', 'sans-serif' 
    ].join(','),

  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="root" style={{backgroundColor: "white"}}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    </div>
  </React.StrictMode>,
)

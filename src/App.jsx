import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { Global, css } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline';
import CocktailCard from './components/CocktailCard'
import SongCard from './components/SongCard'

const theme = createTheme({
  palette: {
    primary: {
      main: '#628174',
    },
    secondary: {
      main: '#00ff44',
    },
  },
});


function App() {
return (
  
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={css`body{
        background-color: ${theme.palette.primary.main};
      }`}/>
      <div>
          <h1>Let's Shake It Up!</h1>

         
      </div>
      </ThemeProvider>
     

  )
}

export default App

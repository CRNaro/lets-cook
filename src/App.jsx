import { useState } from 'react'
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { Global, css } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material'
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
        <Button variant='contained' color='primary' sx={{ padding: 2, fontSize: 20 }}>
          Let's Shake It Up!
          </Button>
         
      </div>
      </ThemeProvider>
     

  )
}

export default App

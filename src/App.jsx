import { useState, useEffect } from 'react'
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { Global, css } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material'
import CocktailCard from './components/CocktailCard'
import SongCard from './components/SongCard'
import FavoriteCocktails from './components/FavoriteCocktails'

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
  const [cocktail, setCocktail] = useState(null)

  const fetchCocktail = () => {
    
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        console.log(data.drinks[0]);
        setCocktail(data.drinks[0]);
      });
  }
  useEffect(fetchCocktail, []);

return (
  
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={css`body{
        background-color: ${theme.palette.primary.main};
      }`}/>
      <div>
    
      </div>
      </ThemeProvider>
     

  )
}

export default App

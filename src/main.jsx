import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CocktailCard from './components/CocktailCard.jsx'
import FavoriteCocktails from './components/FavoriteCocktails.jsx'
import { Box } from '@mui/system'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Box display={{ xs: 'block', md: 'flex' }}>
    <CocktailCard />
    <FavoriteCocktails />
    </Box>
  </StrictMode>,
)

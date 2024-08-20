import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { Global, css } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline';
import { usedState, useEffect } from 'react'  
import { Card, CardContent, Typography } from '@mui/material'

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

// export default function MainPage() {
//   return (
//     <div>
//       <h1>Let's Shake It Up!</h1>
//     </div>
//   )
// }

export default function CocktailCard() {
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        console.log(data.drinks[0]);
        setCocktail(data.drinks[0]);
      });
    }, []); 

    if (!cocktail) {
      return 'Loading...'
    }

    const thumbnailUrl = `${cocktail.strDrinkThumb}/preview`

    return (
        <Card sx={{ width: 300, height: 600, margin: 1 }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {cocktail.strDrink}
                </Typography>
                <Typography color="textSecondary">
                    {cocktail.strIngredient1}{' '}  
                    {cocktail.strIngredient2}{' '} 
                    {cocktail.strIngredient3}{' '} 
                    {cocktail.strIngredient4}{' '}  
                    {cocktail.strIngredient5}{' '}  
                    {cocktail.strIngredient6}{' '} 
                    {cocktail.strIngredient7}{' '} 
                    {cocktail.strIngredient8}{' '} 
                    {cocktail.strIngredient9}{' '} 
                    {cocktail.strIngredient10}{' '}  
                    {cocktail.strIngredient11}{' '}  
                    {cocktail.strIngredient12}
                </Typography>
                <Typography variant="body2" component="p">
                    {cocktail.strInstructions}
                </Typography>
                <img src={thumbnailUrl} alt={cocktail.strDrink} />
            </CardContent>
        </Card>
        
    )

}

// from django.db import models

// class FavoriteCocktail(models.Model):
//     name = models.CharField(max_length=200)
//     ingredients = models.TextField()
//     instructions = models.TextField()
//     image_url = models.URLField()
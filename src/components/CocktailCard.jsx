import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { Global, css } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'; 
import { Card, CardContent, Typography } from '@mui/material'
import { Button } from '@mui/material'

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

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
  }
  console.log(`Cookie from [${name}]:`, cookieValue);
return cookieValue;

}
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        console.log(data.drinks[0]);
        setCocktail(data.drinks[0]);
      });
    }, []); 


    async function handleSave(e) {
      e.preventDefault();
      try {
        const csrfToken = getCookie('csrftoken');
        console.log('CSRF token:', csrfToken);

      const response = await fetch('http://localhost:8000/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken'),
        },
        credentials: 'include',
        body: JSON.stringify(cocktail),
      });
      console.log('Cocktail data sent:', cocktail)
      console.log('Response status:', response.status)
      console.log('CSRF token:', getCookie('csrftoken'))
      if(response.ok) {
        alert('Cocktail saved!') 
      } else {
          alert('Failed to save cocktail');
      }
       } catch (error) {
          alert('Failed to save cocktail');
      }
    };

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
                <Button variant="contained" color="primary" onClick={handleSave}>
                    Save
                </Button>
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
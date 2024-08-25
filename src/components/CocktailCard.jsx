import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { Global, css } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'; 
import { Card, CardContent, Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Box, shadows } from '@mui/system' 


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
  // console.log(`Cookie from [${name}]:`, cookieValue);
return cookieValue;

}

const fetchCocktail = () => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {
      // console.log(data.drinks[0]);
      setCocktail(data.drinks[0]);
    });
}

  useEffect(fetchCocktail, []); 


   const handleSave = async (e) => {
      e.preventDefault();
      console.log('Save button clicked');
      try {
        const csrfToken = getCookie('csrftoken');
        // console.log('CSRF token:', csrfToken);

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
      <Box display={{ xs: 'block', md: 'flex' }}>
        <Card sx={{ width: 300, minHeight: 1000, margin: 1, boxShadow: 12, border: 'solid', borderColor: '#de7070' }}>
            <CardContent>
            <Button onClick={fetchCocktail} variant='contained' color='primary' sx={{ padding: 2, fontSize: 20, margin: '0 auto 20px', display: 'flex', justifyContent: 'center' }}>
          Let's Shake It Up!
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h5" component="h2" sx={{ fontSize: 25, textAlign: 'center' }} >
                    {cocktail.strDrink}
                </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient1}  {''}
    {cocktail.strMeasure1}
  </Typography>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient2}  {''}
    {cocktail.strMeasure2}
  </Typography>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient3} {''}
    {cocktail.strMeasure3}
  </Typography>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient4}  {''}
    {cocktail.strMeasure4}
  </Typography>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient5} {''}
    {cocktail.strMeasure5} 
  </Typography>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient6}  {''}
    {cocktail.strMeasure6}
  </Typography>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient7}  {''}
    {cocktail.strMeasure7}
  </Typography>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient8}  {''}
    {cocktail.strMeasure8}
  </Typography>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient9} {''}
  </Typography>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient10} {''}
  </Typography>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient11} {''}
  </Typography>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient12} {''}
  </Typography>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient13} {''}
  </Typography>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient14} {''}
  </Typography>
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient15} {''}
  </Typography> 
  <Typography color="textSecondary" sx={{ fontSize: 15 }}>
    {cocktail.strIngredient16} {''}
  </Typography>
</Box>
                <Typography variant="body2" component="p" sx={{ padding: 2, fontSize: 20, margin: '0 auto 20px', display: 'flex', justifyContent: 'center' }}>
                    {cocktail.strInstructions}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <img src={thumbnailUrl} alt={cocktail.strDrink} style={{border: 'solid', borderColor: '#204c39'}}/>
                </Box>
            </CardContent>
            <Button variant="contained" color="primary" onClick={(handleSave)} sx={{ padding: 2, fontSize: 18, margin: '0 auto 20px', display: 'flex', justifyContent: 'center' }}>
                    Save
                </Button>
        </Card>
        
        </Box>
    )
}


// from django.db import models

// class FavoriteCocktail(models.Model):
//     name = models.CharField(max_length=200)
//     ingredients = models.TextField()
//     instructions = models.TextField()
//     image_url = models.URLField()
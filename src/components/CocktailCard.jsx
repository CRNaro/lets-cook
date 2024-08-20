import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { Global, css } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline';
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
    return (
        <Card sx={{ width: 300, height: 300, margin: 1 }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Cocktail Name
                </Typography>
                <Typography color="textSecondary">
                    Ingredients
                </Typography>
                <Typography variant="body2" component="p">
                    Instructions
                </Typography>
            </CardContent>
        </Card>
        
    )

}
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { Global, css } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline';
import { usedState } from 'react'  
import { Card, CardContent, Typography } from '@mui/material'

function FavoriteCocktails() {
    const [favorites, setFavorites] = useState([]);
    const [selectedCocktail, setSelectedCocktail] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/favorites_list/')
            .then(response => response.json())
            .then(data => setFavorites(data.map(item => item.fields)));
    }, []);

    function handleClick(cocktail) { 
        setSelectedCocktail(cocktail);
    }

    return (
        <Card sx={{ width: 300, minHeight: 1000, margin: 1, boxShadow: 12, border: 'solid', borderColor: '#de7070' }}>
        <div style={{ textAlign: 'center', fontSize: 10}}>
            <h1>Favorite Cocktails</h1>
            {favorites.map((cocktail, index) => (
                <p key={index} onClick={() => handleClick(cocktail)}>
                    {cocktail.name}
                </p>
            ))}
            {selectedCocktail && (
                <div>
                    <h2>{selectedCocktail.name}</h2>
                    <p>{selectedCocktail.ingredients}</p>
                    <p>{selectedCocktail.instructions}</p>
                    <img src={selectedCocktail.image_url} alt={selectedCocktail.name} />
                </div>
            )}
        </div>
        </Card>

    );
}

export default FavoriteCocktails;

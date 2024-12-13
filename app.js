require('dotenv').config(); 

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;


app.get('/api/live-score', async (req, res) => {
    try {
        const response = await axios.get('https://api.cricapi.com/v1/currentMatches', {
            params: {
                apiKey: process.env.CRICKET_API_KEY, 
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching live score');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/fetch-meta', async (req, res) => {
    const { url } = req.query;
    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        const metaDescription = $('meta[name="description"]').attr('content');
        res.json({ metaDescription });
    } catch (error) {
        console.error('Error fetching meta description:', error);
        res.status(500).json({ error: 'Failed to fetch meta description' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

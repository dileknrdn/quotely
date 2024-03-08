const router = require('express').Router();
const { User, Quote } = require('../models');



router.get('/', async (req, res) => {
    try {
        // Fetch all quotes from the database
        const quoteData = await Quote.findAll({
            attributes: ['quote', 'author'], 
        });
          
        // Serialize data so the template can read it
        const quotes = quoteData.map((quote) => quote.get({ plain: true }));
          
        // Renders the homepage with the quotes data
        res.render('homepage', { quotes }); 
        } catch (error) {
        console.error('Error fetching quotes:', error);
        res.status(500).send('Error loading quotes');
    } 
});
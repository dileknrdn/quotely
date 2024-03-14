const { Quote } = require('../models');
const Sequelize = require('sequelize');
let dailyQuote = null;
let lastFetchDate = null;

async function getQuoteOfTheDay() {
  const today = new Date().toDateString();
  if (dailyQuote && lastFetchDate === today) {
    return dailyQuote;
  }

  // Adjusted to use Sequelize for fetching a random quote
  try {
    const quote = await Quote.findOne({
      where: {
        user_id: null,
      },
      order: Sequelize.literal('RAND()'), // For MySQL
      // If you're using PostgreSQL, replace 'RAND()' with 'RANDOM()'
    });

    dailyQuote = quote ? quote.get({ plain: true }) : null;
    lastFetchDate = today;

    return dailyQuote;
  } catch (error) {
    console.error('Error fetching Quote of the Day:', error);
    throw error;
  }
}

module.exports = getQuoteOfTheDay;
const { Quote } = require('../models');


const getQuoteById = async (quoteId) => {
    try {
      const quote = await Quote.findByPk(quoteId);
      return quote; // This will be `null` if no quote is found with the given ID
    } catch (err) {
      console.error('Error fetching quote:', err);
      throw err;
    }
  };
  
  module.exports = getQuoteById;
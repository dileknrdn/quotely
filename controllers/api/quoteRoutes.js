const router = require('express').Router();
const { Quote } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const quoteData = await Quote.findAll();
    res.status(200).json(quoteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
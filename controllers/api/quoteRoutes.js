const router = require('express').Router();
const { Quote } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
  try {
    const quote = await Quote.findByPk(req.params.id);
    if (quote) {
        res.json(quote);
    } else {
        res.status(404).json({ message: 'Quote not found' });
    }
} catch (err) {
    console.error('Error fetching quote:', err);
    res.status(500).json({ message: 'Server error' });
}
});

//I want to create a route to add a liked quote to the database
router.post('/', withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id;
    console.log(req.body)
    const newQuote = await Quote.create({
        ...req.body.quoteData, 
        user_id: userId 
    });

    res.json(newQuote);
} catch (err) {
    console.error('Error posting quote:', err);
    res.status(500).json({ message: 'Server error' });
}
});

// //I want to create a route to delete a liked quote from the database
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const quoteData = await Quote.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!quoteData) {
      res.status(404).json({ message: 'No quote found with this id!' });
      return;
    }

    return res.status(200).json({ message: 'Quote deleted successfully' });
  } catch (err) {
    return res.status(500).json(err);
  }
});


module.exports = router;
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

//I want to create a route to add a liked quote to the database
router.post('/', withAuth, async (req, res) => {
  try {
    const newQuote = await Quote.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newQuote);
    //change view to dashboard
    res.render('dashboard',{ 
    }); 
  } catch (err) {
    res.status(400).json(err);
  }
});

//I want to create a route to delete a liked quote from the database
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

    res.status(200).json(quoteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//I want to create a route to update a liked quote in the database
router.put('/:id', withAuth, async (req, res) => {
  try {
    const quoteData = await Quote.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!quoteData) {
      res.status(404).json({ message: 'No quote found with this id!' });
      return;
    }

    res.status(200).json(quoteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//I want to create a route to get a liked quote from the database
router.get('/:id', withAuth, async (req, res) => {
  try {
    const quoteData = await Quote.findByPk(req.params.id);

    if (!quoteData) {
      res.status(404).json({ message: 'No quote found with this id!' });
      return;
    }

    res.status(200).json(quoteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
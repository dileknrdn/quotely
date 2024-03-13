const router = require('express').Router();
const { User, Quote } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
    try {
        // Fetch all quotes from the database
        const quoteData = await Quote.findAll({
            attributes: ['quote', 'author'], 
        });
          
        // Serialize data so the template can read it
        const quotes = quoteData.map((quote) => quote.get({ plain: true }));
          
        // Renders the homepage with the quotes data
        res.render('homepage',{
            quotes,
            logged_in: req.session.logged_in,
        
        }); 
        } catch (error) {
        console.error('Error fetching quotes:', error);
        res.status(500).send('Error loading quotes');
    } 
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get("/dashboard", withAuth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ["password"] },
        include: [
          {
            model: Quote
          }
        ],
      });
  
      const user = userData.get({ plain: true });
      console.log(user)
  
      res.render("dashboard", {
        user: user,
        logged_in: true,
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  });

module.exports = router;
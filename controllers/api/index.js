const router = require('express').Router();
const userRoutes = require('./userRoutes');
const quoteRoutes = require('./quoteRoutes');

router.use('/users', userRoutes);
router.use('/quotes', quoteRoutes);

module.exports = router;

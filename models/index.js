const User = require('./User');
const Quote = require('./Quote');

User.hasMany(Quote, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Quote.belongsTo(User, {
    foreignKey: 'user_id',
  });


module.exports = { User, Quote };


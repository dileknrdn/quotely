const User = require('./User');
const Quote = require('./Quote');

User.hasMany(Quote, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  
  Quote.belongsTo(User, {
    foreignKey: 'userId',
  });


module.exports = { User, Quote };


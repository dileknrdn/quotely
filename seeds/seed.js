// seed.js file to execute seeding of databases
const sequelize = require('../config/connection');
const { User, Quote } = require('../models');

const userData = require('./userData.json');
const quoteData = require('./quoteData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    
    for (const quote of quoteData) {
        await Quote.create({
        ...quote,
        });
    }
    
    process.exit(0);
    }

seedDatabase();






// mini project seed.js file below

// const sequelize = require('../config/connection');
// const { User, Project } = require('../models');

// const userData = require('./userData.json');
// const projectData = require('./projectData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();
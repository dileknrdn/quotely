const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(("public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});


// // Set Handlebars as the view engine
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// // Sample user data (you might have a real authentication mechanism)
// const loggedInUser = {
//     username: 'exampleUser',
//     isLoggedIn: true // Set this to true if the user is logged in
// };

// // Route to render the dashboard
// app.get('/dashboard', (req, res) => {
//     res.render('dashboard', { user: loggedInUser });
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3001');
// });

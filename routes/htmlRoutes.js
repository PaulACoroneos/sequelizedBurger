const db = require('../models');
const burgerController = require('../controllers/burgerController.js');

module.exports = function(app) {
  // Load index page
  app.get('/', (req, res) => {
    res.render('index');
  });

  // temporary debug route for userpofile before integration to site
  app.get('/user', (req, res) => {
    res.render('dashboard');
  });

  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};

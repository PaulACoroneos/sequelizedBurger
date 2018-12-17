const bController = require('../controllers/burgerController.js');

module.exports = function(app) {
  // Load index page
  app.get('/', bController.get);

  // Render 404 page for any unmatched routes
  // app.get('*', bController.fourzerofour);
};

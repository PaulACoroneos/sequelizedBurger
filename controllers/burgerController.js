const db = require('../models');

// const exports = (module.exports = {});
// Create all our routes and set up logic within those routes where required.
module.exports.get = function(req, res) {
  res.render('index');
};

module.exports.post = function(req, res) {
  db.burger.create(['burger_name'], [req.body.name], result => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
};

module.exports.put = function(req, res) {
  const condition = `id = ${req.params.id}`;

  console.log('condition', condition);

  db.burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    result => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
};

module.exports.delete = function(req, res) {
  const condition = `id = ${req.params.id}`;

  db.burger.delete(condition, result => {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
};

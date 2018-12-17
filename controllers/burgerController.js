const db = require('../models');

const exports = (module.exports = {});

// Create all our routes and set up logic within those routes where required.
exports.get('/', (req, res) => {
  db.burger.all(data => {
    const hbsObject = {
      burger: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

exports.post('/api/burger', (req, res) => {
  db.burger.create(['burger_name'], [req.body.name], result => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

exports.put('/api/burger/:id', (req, res) => {
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
});

exports.delete('/api/burger/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  burger.delete(condition, result => {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Sometimes there just isn't time on a coding challenge to wire up a DB! I'm comfortable with SQL and NoSQL DBs, and
// I'm happy to talk about them with you. For now, I'm just maintaining dummy data here on the server for the sake
// of making the app look real.
const dummyData = require('../../db/dummyData.js');

const getAll = (req, res) => {
  res.send(dummyData);
};

const getOne = (req, res) => {
  // Read query from the request, query the data, and respond with the appropriate data
};

const newItem = (req, res) => {
  // Create a new piece of data based on the req.body
};

const update = (req, res) => {
  // Update a piece of data based on the req.body
};

const removeItem = (req, res) => {
  // Remove a piece of data based on the url query
};


exports.data = {
  getAll,
  getOne,
  newItem,
  update,
  removeItem,
};

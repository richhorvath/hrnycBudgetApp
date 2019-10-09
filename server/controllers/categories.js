const {
  getCategoires,
  addCategory,
  updateCategory,
  removeCategory
} = require("../models/categories.js");

module.exports = {
  add: (req, res) => {
    addCategory(req)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log("error in categories add controller: ", error);
        res.sendStatus(500);
      });
  },
  get: (req, res) => {
    getCategoires()
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        console.log("error in categories get controller: ", error);
        res.sendStatus(500);
      });
  },
  update: (req, res) => {
    updateCategory(req)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log("error in categories update controller: ", error);
        res.sendStatus(500);
      });
  },
  remove: (req, res) => {
    removeCategory(req)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log("error in categories remove controller: ", error);
        res.sendStatus(500);
      });
  }
};

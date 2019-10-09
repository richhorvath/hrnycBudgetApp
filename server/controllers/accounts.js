const {
  getCategories,
  addCategory,
  updateCategory,
  removCategory
} = require("../models/accounts.js");

module.exports = {
  add: (req, res) => {
    addCategory(req)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log("error in account add controller: ", error);
        res.sendStatus(500);
      });
  },
  get: (req, res) => {
    getCategories()
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        console.log("error in account get controller: ", error);
        res.sendStatus(500);
      });
  },
  update: (req, res) => {
    updateCategory(req)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log("error in account update controller: ", error);
        res.sendStatus(500);
      });
  },
  remove: (req, res) => {
    removCategory(req)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log("error in account remove controller: ", error);
        res.sendStatus(500);
      });
  }
};

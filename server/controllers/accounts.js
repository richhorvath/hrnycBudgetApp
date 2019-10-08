const {get, add, update, remove} = require("../models/accounts");

module.exports = {
  add: (req, res) => {
    add(req)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("error in account add controller: ", error);
      res.sendStatus(500);
    })
  },
  get: (req, res) => {
    console.log("getting accounts");
  },
  update: (req, res) => {
    console.log("updating account");
  },
  remove: (req, res) => {
    console.log("removing account");
  }
};

const {get, add, update, remove} = require("../models/accounts.js");

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
    get()
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      console.log('error in account get controller: ', error);
      res.sendStatus(500)
    })
  },
  update: (req, res) => {
    update(req)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.log('error in account update controller: ', error);
      res.sendStatus(500)
    })
  },
  remove: (req, res) => {
    remove(req)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.log('error in account remove controller: ', error);
      res.sendStatus(500)
    })
  }
};

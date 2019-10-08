const {get, add, update, remove} = require("../models/transactions.js");

module.exports = {
  add: (req, res) => {
    add(req)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("error in transactions add controller: ", error);
      res.sendStatus(500);
    })
  },
  get: (req, res) => {
    get()
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      console.log('error in transactions get controller: ', error);
      res.sendStatus(500)
    })
  },
  update: (req, res) => {
    update(req)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.log('error in transactions update controller: ', error);
      res.sendStatus(500)
    })
  },
  remove: (req, res) => {
    remove(req)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.log('error in transactions remove controller: ', error);
      res.sendStatus(500)
    })
  }
};

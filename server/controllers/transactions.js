const {
  getTransactions,
  addTransaction,
  updateTransaction,
  removeTransaction
} = require("../models/transactions.js");

module.exports = {
  add: (req, res) => {
    console.log("request body: ", req.body);
    addTransaction(req)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log("error in transactions add controller: ", error);
        res.sendStatus(500);
      });
  },
  get: (req, res) => {
    getTransactions()
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        console.log("error in transactions get controller: ", error);
        res.sendStatus(500);
      });
  },
  update: (req, res) => {
    updateTransaction(req)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log("error in transactions update controller: ", error);
        res.sendStatus(500);
      });
  },
  remove: (req, res) => {
    removeTransaction(req)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log("error in transactions remove controller: ", error);
        res.sendStatus(500);
      });
  }
};

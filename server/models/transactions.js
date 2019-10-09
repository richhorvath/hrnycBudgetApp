const { connection } = require("../../db/index");
const Promise = require("bluebird");
const SqlString = require("sqlstring");
const queryPromise = Promise.promisify(connection.query).bind(connection);

module.exports = {
  get: () => {
    let query = "SELECT * FROM transact";
    return queryPromise(query);
  },

  add: req => {
    let promises = [];
    let transactionQuery = SqlString.format(
      "INSERT INTO transact SET ?",
      req.body
    );
    let accountUpdate = SqlString.format(
      "UPDATE accounts SET accounts.total= accounts.total + ? WHERE accounts.id = ? ",
      [req.body.amount, req.body.account_id]
    );
    promises.push(queryPromise(transactionQuery));
    promises.push(queryPromise(accountUpdate));

    return Promise.all(promises);
  },

  update: req => {
    let updates = [req.body.updateName, req.body.updateValue, req.body.id];
    let query = SqlString.format(
      "UPDATE transact SET ??=? WHERE id=?",
      updates
    );
    return queryPromise(query);
  },

  remove: req => {
    let query = SqlString.format(
      "DELETE FROM transact WHERE id=?",
      req.body.id
    );
    return queryPromise(query);
  }
};

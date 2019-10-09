const { connection } = require("../../db/index");
const Promise = require("bluebird");
const SqlString = require("sqlstring");
const queryPromise = Promise.promisify(connection.query).bind(connection);

module.exports = {
  getCategories: () => {
    let query = "SELECT * FROM accounts";
    return queryPromise(query);
  },

  addCategory: req => {
    let query = SqlString.format("INSERT INTO accounts SET ?", req.body);
    return queryPromise(query);
  },

  updateCategory: req => {
    let updates = [req.body.updateName, req.body.updateValue, req.body.id];
    let query = SqlString.format(
      "UPDATE accounts SET ??=? WHERE id=?",
      updates
    );
    return queryPromise(query);
  },

  removCategorye: req => {
    let query = SqlString.format(
      "DELETE FROM accounts WHERE id=?",
      req.body.id
    );
    return queryPromise(query);
  }
};

const { connection } = require("../../db/index");
const Promise = require("bluebird");
const SqlString = require("sqlstring");
const queryPromise = Promise.promisify(connection.query).bind(connection);

module.exports = {
  getCategoires: () => {
    let query = "SELECT * FROM categories";
    return queryPromise(query);
  },

  addCategory: req => {
    let query = SqlString.format("INSERT INTO categories SET ?", req.body);
    return queryPromise(query);
  },

  updateCategory: req => {
    let updates = [req.body.updateName, req.body.updateValue, req.body.id];
    let query = SqlString.format(
      "UPDATE categories SET ??=? WHERE id=?",
      updates
    );
    return queryPromise(query);
  },

  removeCategory: req => {
    let query = SqlString.format(
      "DELETE FROM categories WHERE id=?",
      req.body.id
    );
    return queryPromise(query);
  }
};

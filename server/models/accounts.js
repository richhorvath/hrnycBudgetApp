const connection = require('../../db/index');
const Promise = require('bluebird');

const queryPromise = Promise.promisify(connection.query);

module.exports = {
    get: () => {
        let query = "SELECT * FROM accounts";
        return queryPromise(query);
    },

    add: (req) => {
        let query = "INSERT INTO accounts SETS ?";
        return queryPromise(query, req.body);
    },

    update: (req) => {
        let query = "UPDATE accounts SETS ?=? WHERE id=" + req.body.id + " VALUES (\'" + req.body.updateName + "\', \'" + req.body.updateValue + "\')";
        return queryPromise(query);
    },

    remove: (req) => {
        let query = "DELETE FROM accounts WHERE id=" + req.body.id;
        return queryPromise(query);
    }
}
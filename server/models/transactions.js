const {connection} = require('../../db/index');
const Promise = require('bluebird');
const SqlString = require('sqlstring');
const queryPromise = Promise.promisify(connection.query).bind(connection);

module.exports = {
    get: () => {
        let query = "SELECT * FROM transact";
        return queryPromise(query);
    },

    add: (req) => {
        let query = SqlString.format("INSERT INTO transact SET ?", req.body);
        return queryPromise(query);
    },

    update: (req) => {
        let updates = [req.body.updateName,  req.body.updateValue, req.body.id]
        let query = SqlString.format("UPDATE transact SET ??=? WHERE id=?", updates); 
        return queryPromise(query);
    },

    remove: (req) => {
        let query = SqlString.format("DELETE FROM transact WHERE id=?", req.body.id);
        return queryPromise(query);
    }
}
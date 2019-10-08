const {connection} = require('../../db/index');
const Promise = require('bluebird');

const queryPromise = Promise.promisify(connection.query);

module.exports = {
    get: () => {
        let query = "SELECT * FROM transact";
        return queryPromise(query);
    },

    add: (req) => {
        let query = "INSERT INTO transact SETS ?";
        return queryPromise(query, req.body);
    },

    update: (req) => {
        let query = "UPDATE transact SETS " + req.body.updateName + "=? WHERE id=? VALUES (\'" + req.body.updateValue + "\', \'" + req.body.id + "\')"; 
        return queryPromise(query);
    },

    remove: (req) => {
        let query = "DELETE FROM transact WHERE id=" + req.body.id;
        return queryPromise(query);
    }
}
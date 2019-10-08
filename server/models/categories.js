const connection = require('../../db/index');
const Promise = require('bluebird');

const queryPromise = Promise.promisify(connection.query);

module.exports = {
    get: () => {
        let query = "SELECT * FROM categories";
        return queryPromise(query);
    },

    add: (req) => {
        let query = "INSERT INTO categories SETS ?";
        return queryPromise(query, req.body);
    },

    update: (req) => {
        let query = "UPDATE categories SETS " + req.body.updateName + "=? WHERE id=? VALUES (\'" + req.body.updateValue + "\', \'" + req.body.id + "\')"; 
        return queryPromise(query);
    },

    remove: (req) => {
        let query = "DELETE FROM categories WHERE id=" + req.body.id;
        return queryPromise(query);
    }
}
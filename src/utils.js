const { promisify } = require('util');

const dbUtils = (db) => ({
    get: promisify(db.get.bind(db)),
    run: promisify(db.run.bind(db)),
    exec: promisify(db.exec.bind(db))
});

module.exports = { dbUtils };

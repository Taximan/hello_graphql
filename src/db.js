const Book = require('./repo/Book');
const Author = require('./repo/Author');
const sqlite3 = require('sqlite3');
const utils = require('./utils');

const db = new sqlite3.Database(':memory:');

const authorRepository = Author(utils.dbUtils(db));
const bookRepository = Book(utils.dbUtils(db));

authorRepository.initialize();
bookRepository.initialize();

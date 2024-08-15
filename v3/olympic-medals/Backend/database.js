const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('medals.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS medals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        country TEXT NOT NULL,
        gold INTEGER NOT NULL,
        silver INTEGER NOT NULL,
        bronze INTEGER NOT NULL
    )`);
});

module.exports = db;


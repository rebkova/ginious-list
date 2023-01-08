const sqlite = require("sqlite3").verbose();
let sql;

// connect to db
const db = new sqlite.Database(
  "./cocktail_database.db",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) console.log(err);
  }
);

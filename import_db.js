import sqlite3 from "sqlite3";

import { drinkList } from "./src/data/drink_list.js";

const sqlite = sqlite3.verbose();
let sql;

// connect to db
const db = new sqlite.Database(
  "./ginious-list.db",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) console.log(err);
  }
);

// I deal with the relational db
// many-to-many table relationships
//

// 4 main actions in SQL: select, insert, update, delete

// TODO:
// 1. populate 'category' table
// loop over the data
// assign strCategory value to name category in the new table
function assignCategory(data) {
  data.forEach((d) => {
    let category = {
      name: d.strCategory,
    };
    console.log("category:", category);
    sql = 'INSERT INTO category(name) VALUE (?)';
    db.run(sql, [category.name], (err) => {
      if (err) {
        console.log(err);
      } else {
        consolse.log('All good, no errors');
      }
    })
  });
}

assignCategory(drinkList);
// SELECT a table (category, glass, ingredient) _> check if the property already exists ? skip : insert
// SELECT a table ()
// assign every property to the one from db
// sql = "INSERT INTO recipe()"

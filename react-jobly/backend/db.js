"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    // host: "tmp" || "/var/run/postgresql",
    // database: getDatabaseUri(),
    connectionString: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  db = new Client({
    // host: "/tmp" || "/var/run/postgresql",
    // database: getDatabaseUri(),
    connectionString: getDatabaseUri(),
  });
}

db.connect();

module.exports = db;

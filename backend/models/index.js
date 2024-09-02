const sequlize = require("./db")
const Sequlize = require("sequelze")
const Financial = require("./financial.model");

const db = {};
db.Sequlize = Sequlize;
db.sequlize = sequlize;
db.Financial = Financial;

module.exports = db;
"use strict";
exports.__esModule = true;
var promise_1 = require("mysql2/promise");
exports["default"] = promise_1["default"].createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: password.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

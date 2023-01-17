"use strict";
exports.__esModule = true;
var express_1 = require("express");
require("express-async-errors");
var http_error_middleware_1 = require("./middlewares/http.error.middleware");
var userController_1 = require("./controllers/userController");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
// Criando as rotas
app.get('/users', userController_1["default"].getAll);
app.use(http_error_middleware_1["default"]);
exports["default"] = app;

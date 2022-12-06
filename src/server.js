"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// require('dotenv').config()
require("dotenv/config");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get("/", (request, response) => {
    response.json('Hola a todos');
});
app.listen(port, () => {
    console.log('server running at port ' + port);
});
exports.default = app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const supertest = require("supertest");
// require("./server");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("./server"));
// const application = require("./server");
const request = (0, supertest_1.default)(server_1.default);
test("GET /", async () => {
    const response = await request
        .get("/")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    expect(response.body).toEqual("Hola a todos");
});

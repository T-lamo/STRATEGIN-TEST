"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database")); // Assuming Database.ts is in the same directory
const app = (0, express_1.default)();
const port = 3000;
// Use the Database.getInstance() method to get an instance
database_1.default.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});

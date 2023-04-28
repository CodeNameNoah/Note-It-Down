// ? imports modules from Node.js and then defines two functions for later use
const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const readFile = async (path) => await fs.readFile(path, "utf8");
const writeFile = async (path, data) => await fs.writeFile(path, data);
// ? sets up a server using the Express framework in Node.js.
const PORT = process.env.PORT || 3001;
const app = express();

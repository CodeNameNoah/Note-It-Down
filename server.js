// ? imports modules from Node.js and then defines two functions for later use
const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const readFile = async (path) => await fs.readFile(path, "utf8");
const writeFile = async (path, data) => await fs.writeFile(path, data);
// ? sets up a server using the Express framework in Node.js.
const PORT = process.env.PORT || 3001;
const app = express();

// ? sets up an Express.js application to handle JSON and URL-encoded data in incoming requests, and to serve static files from a "public" directory.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ? this code serves the "index.html" file as the homepage of the web application when the user visits the root URL.
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

// ? this code serves the "notes.html" file when the user visits the "/notes" URL, which could be a page for displaying and managing notes or any other relevant information.
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

// ? this code serves as an API endpoint that returns the contents of the "db.json" file as a JSON object when the user makes a GET request to the "/api/notes" URL
app.get("/api/notes", (req, res) => {
  readFile(path.join(__dirname, "./db/db.json"))
    .then((data) => {
      return res.send(JSON.parse(data));
    })
    .catch((err) => console.error(err));
});

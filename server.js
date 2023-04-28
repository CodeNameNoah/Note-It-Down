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

// ? sets up a route handler using the Express.js framework that responds to any HTTP GET request to any URL path with a file send operation that sends the index.html file located in the './public' directory relative to the current working directory of the Node.js application.
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

// ? sets up a route handler using the Express.js framework that handles HTTP POST requests to the '/api/notes' URL path.
app.post("/api/notes", (req, res) => {
  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text,
    };
    readFile(path.join(__dirname, "./db/db.json"))
      .then((text) => {
        const notes = JSON.parse(text);
        notes.push(newNote);
        notes.forEach((obj, index) => {
          obj.id = index + 1;
        });
        return JSON.stringify(notes, null, 4);
      })
      .then((notes) => {
        writeFile(path.join(__dirname, "./db/db.json"), notes);
      })
      .then(() => {
        console.info("Note successfully saved.");
        res.send("Note successfully saved.");
      })
      .catch((err) => console.error(err));
  } else {
    res.status(500).json("Error occurred while saving the note.");
  }
});

// ? sets up a route handler using the Express.js framework that deletes a note with a specified ID from a JSON file. It then assigns new unique IDs to the remaining notes, writes the updated array of notes back to the JSON file, and responds with a success message. Finally, the code starts listening for incoming HTTP requests on a specified port and logs a message to the console indicating that the application is running.
app.delete("/api/notes/:id", (req, res) => {
  let deleteID = req.params.id;
  console.log(deleteID);

  readFile(path.join(__dirname, "./db/db.json"))
    .then((text) => {
      const notes = JSON.parse(text);
      const newNotes = notes.filter((obj) => obj.id != deleteID);
      newNotes.forEach((obj, index) => {
        obj.id = index + 1;
      });
      return JSON.stringify(newNotes, null, 4);
    })
    .then((notes) => {
      writeFile(path.join(__dirname, "./db/db.json"), notes);
    })
    .then(() => {
      console.info("Note successfully deleted.");
      res.send("Note successfully deleted.");
    })
    .catch((err) => console.error(err));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

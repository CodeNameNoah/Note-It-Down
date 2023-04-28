# Note-It-Down

Hi there! I am excited to show you a neat tool I designed which is a note taker application called Note-It-Down that allows users to easily create and manage notes to keep track of important information or tasks. With this application, users can create, save, and delete sticky notes as needed. To build this app, I primarily used Express.js with supplementary JavaScript and Node.js.

## Description

With Note-It-Down, users can quickly jot down important information without having to worry about forgetting it later. Whether it's a task that needs to be completed or a phone number that needs to be remembered, this app provides a convenient solution for keeping track of it all.

The app is easy to use, with a simple interface that allows users to create new notes and delete old ones with just a few clicks. It's also responsive, meaning it works well on both desktop and mobile devices, making it accessible to a wider audience.

Overall, I'm really proud of how Note-It-Down turned out. It's a great example of how powerful and flexible web applications can be, and I'm excited to see how users will benefit from its functionality.

---

## Languages and Technologies Used

[![Socials](https://skillicons.dev/icons?i=html,css,js,git,heroku,express)](https://skillicons.dev)

| Featured Technology Used |                      Link                      |
| :----------------------: | :--------------------------------------------: |
|        `Node.js`         |         [LINK](https://nodejs.dev/en/)         |
|      `NPM Inquirer`      | [LINK](https://www.npmjs.com/package/inquirer) |
|          `NPM`           |         [LINK](https://www.npmjs.com/)         |
|        `Express`         |         [LINK](https://expressjs.com/)         |

---

| Collaborators |                                                                                                                                  Socials                                                                                                                                   |
| :-----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `Noah Hoang`  | [![Socials](https://skillicons.dev/icons?i=git)](https://github.com/codenamenoah) [![Socials](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/codenamenoah/) [![Socials](https://skillicons.dev/icons?i=twitter)](https://twitter.com/CodeNameNoahH) |

## Take A Look At Our Application In Action!

- ![Note It Down!](https://user-images.githubusercontent.com/127361736/235059034-78b9ac82-5a9b-47e4-b952-3ffd79b3ca79.gif)

---

## Installation

**To Clone Our Repository Using CLI**

1. Click on the green code button and copy the link for the SSH key.
2. Once clip-boarded load up a command line interface and change directory to one of your preference
3. Enter in the command `git clone git@github.com:CodeNameNoah/Note-It-Down.git`
4. Enter your protected SSH password
5. Enjoy!

**To Download Our Repository as a ZIP File**

1. Click on the green code button
2. In the bottom of the drop-down menu, click Download Zip
3. Enjoy!

![github](https://user-images.githubusercontent.com/127361736/227422005-d28a9020-e331-4098-976b-df9c1e545bb4.png)

---

## Usage

Users would want to use Note-It-Down because it provides a simple and convenient way to keep track of important information or tasks. Whether it's a grocery list, meeting notes, or reminders for upcoming appointments, Note-It-Down makes it easy to jot down and organize these items. Plus, with the ability to delete notes once they're no longer needed, users can keep their workspace clutter-free.

To use Note-It-Down, follow these simple instructions:

1. Go to the Note-It-Down website.
2. Click on the "Get Started" button
3. There is an empty note template ready for you to use, just type in the Note Title and Note Text text fields.
4. To save, click the floppy disk interactive icon in the top right to save the note.
5. To make a new note, click the "+" interactive icon to create a new sticky note.
6. Type in the information or task you want to save.
7. To delete a note, click the trash can icon in the right corner of the note row.
8. That's it! With Note-It-Down, you can easily create and manage your notes with just a few clicks.

---

## Featured Code Snippet

```
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

```

- These lines of code ultiamtely sets up a route handler using the Express.js framework that deletes a note with a specified ID from a JSON file. It then assigns new unique IDs to the remaining notes, writes the updated array of notes back to the JSON file, and responds with a success message. Finally, the code starts listening for incoming HTTP requests on a specified port and logs a message to the console indicating that the application is running.

---

## Credits & Source Codes

- Guide for Gifs to use in README.md

  - https://www.youtube.com/watch?v=3RlpVrYt_qE&ab_channel=AskCloudArchitech

- Documentation for NPM

  - https://www.npmjs.com

- Documentation for NPM 'Inquirer'

  - https://www.npmjs.com/package/inquirer

- Documentation for Node.js

  - https://nodejs.org/en

- Guide on Express

  - https://expressjs.com/

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the MIT license.

---

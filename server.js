/** @format */
//load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

//import dependancies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const cors = require("cors");
const noteController = require("./controllers/noteController");
// create an express app
const app = express();

//configure express app
app.use(express.json());
app.use(cors());

//connect to database
connectToDb();

// Routing
app.get("/notes", noteController.fetchNotes);
app.post("/notes", noteController.createNote);
app.get("/notes/:id", noteController.fetchNote);
app.put("/notes/:id", noteController.updateNote);
app.delete("/notes/:id", noteController.deleteNote);

// start our server
// app.listen(3000);
app.listen(process.env.PORT);

/** @format */

const Note = require("../models/note");

const createNote = async (req, res) => {
  // Assuming you have request data to create a new note
  const { title, body } = req.body;

  //create a note with it
  const note = await Note.create({
    title,
    body,
  });

  //respond with the new note
  res.json({ note });
};

const fetchNotes = async (req, res) => {
  // find the notes (all the notes)
  const notes = await Note.find();

  //respond with them
  res.json({ notes });
};

const fetchNote = async (req, res) => {
  //get the sent data of requist body
  const { title, body } = req.body;

  //create a note with it
  const note = await Note.create({
    title,
    body,
  });

  //respond with the new notes
  res.json({ note });
};

const updateNote = async (req, res) => {
  // get the id of the url
  const noteID = req.params.id;

  //get the data of the req body
  const { title, body } = req.body;

  //find the update the record
  await Note.findByIdAndUpdate(noteID, {
    title,
    body,
  });
  //find updated note
  const note = await Note.findById(noteID);
  //respond with it
  res.json({ note });
};

const deleteNote = async (req, res) => {
  // Get the id from the URL parameters
  const noteID = req.params.id;

  try {
    // Delete the record by _id
    const result = await Note.deleteOne({ _id: noteID });

    if (result.deletedCount === 1) {
      // If a document was deleted, respond with success
      res.json({ success: "Record deleted" });
    } else {
      // If no document was deleted (e.g., ID not found), respond with a message indicating it wasn't found
      res.status(404).json({ error: "Record not found" });
    }
  } catch (error) {
    // Handle any errors that may occur during the deletion process
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  fetchNotes,
  fetchNote,
  createNote,
  updateNote,
  deleteNote,
};

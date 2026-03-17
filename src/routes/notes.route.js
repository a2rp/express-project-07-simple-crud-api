const express = require("express");
const router = express.Router();

const {
    getAllNotes,
    getSingleNote,
    createNote,
    updateNote,
    deleteNote,
} = require("../controllers/notes.controller");

router.get("/notes", getAllNotes);
router.get("/notes/:id", getSingleNote);
router.post("/notes", createNote);
router.put("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);

module.exports = router;

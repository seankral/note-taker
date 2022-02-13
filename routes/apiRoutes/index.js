const router = require('express').Router();
const notes = require('../../db/db');
const createNewNote = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes.notesArray);
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.notesArray.length.toString();

    const note = createNewNote(req.body, notes.notesArray);

    res.json(note);
})

module.exports = router;
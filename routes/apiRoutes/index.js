const router = require('express').Router();
const notes = require('../../db/db');
const createNewNote = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.notes.length.toString();

    const note = createNewNote(req.body, notes.notes);

    res.json(note);
})

module.exports = router;
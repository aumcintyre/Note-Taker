const path = require('path');
const fs = require('fs');

var uniqid = require('uniqid');

//Module to export GET and POST methods on API routes to the server.js

module.exports = (app) => {

    //Reads the db.json file to pull any saved notes down as objects

    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });


    //The Post method will receive a new note, which will be constructed as a JSON object given the body below
    app.post('/api/notes', (req, res) => {
        var db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);

        //Note body template in JSON format
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid(),
        }

        //Push the new note to the UserNote array (Set empty by default). Note will then be written to the DB.json file. This will add the new note and rewrite the file in order to avoid adding duplicate notes.

        db.push(newNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
    });

    //Function to delete notes will be added here.

    app.delete('/api/notes/:id', (req, res) => {
        //Reads the db.jsonfile and parses into JSON
        var db = JSON.parse(fs.readFileSync('db/db.json'))

        //Will remove the selected note once the ID is pulled from it
        var deletedNote = db.filter(item => item.id !== req.params.id);

        //Rewrites all notes minus the one just deleted to the db.json file
        fs.writeFileSync('db/db.json', JSON.stringify(deletedNote));

        res.JSON(deletedNote);
    })


};
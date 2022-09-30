const path = require('path');
const fs = require('fs');

var uniqid = require('uniqid');

//Module to export GET and POST methods on API routes to the server.js

module.exports = (app) => {

//Reads the db.json file to pull any saved notes down as objects

    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'))
    })
}
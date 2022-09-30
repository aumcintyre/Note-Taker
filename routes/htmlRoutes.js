const path = require('path');

//Export routes to use in server.js
module.exports = (app) => {
    // /notes should tell the server to use the notes.html file
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    })
}
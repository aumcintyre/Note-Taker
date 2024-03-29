const express = require('express');

const app = express();

const PORT = process.env.PORT || 80;


//Create static routes for each file in the "public" folder
app.use(express.static('public'));

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes to HTML and API requests will go here
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

//Run the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
const express = require('express');

// app is a javascript function
// design to be passed to Node's HTTP servers
// as a callback to handle requests
const app = express();
// Create path to join the current directory
const path = require('path');

// Tell my app to use EJS template
app.set('view engine', 'ejs');
// Setting the view directory to run outside
app.set('views', path.join(__dirname,'/views'));

// GET request to the specified path
// with the specified callback functions.
app.get('/', (req,res) => {
    // Render a view & send the rendered
    // HTML string to the client
    res.render('home');
})
app.get('/random', (req,res) => {
    const randNum = Math.floor(Math.random()*10)+1990;
    // randNum = variable that store value
    // tempNum = argument that use in the template
    res.render('random', { tempNum: randNum }); // [locals] = an object
})

// Listen for connections on the specified
// host and port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000")
})
const express = require('express');

// app is a javascript function
// design to be passed to Node's HTTP servers
// as a callback to handle requests
const app = express();

// Tell my app to use EJS template
app.set('view engine', 'ejs');

// GET request to the specified path
// with the specified callback functions.
app.get('/', (req,res) => {
    res.render('home');
    // res.send("Hello world!!")
})

// Listen for connections on the specified
// host and port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000")
})
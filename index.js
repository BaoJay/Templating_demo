// require('express') = looking for module 'express' to be used
const express = require('express');

// app is a javascript function
// design to be passed to Node's HTTP servers
// as a callback to handle requests
const app = express();

// Looking for module 'path'
// Create path to join the current directory
const path = require('path');

// Retrieve data from ./data.json file
const redditData = require('./data.json');

// Dùng middleware express.static để serve static file 
// trong public folder
// Dùng path.join để cố định đường dẫn đến public folder
// (absolute path)
app.use(express.static(path.join(__dirname,'public')));

// Tell my app to use EJS template
app.set('view engine', 'ejs');

// Setting the view directory to run outside app directory
// Dùng path.join để cố định đường dẫn đến views folder
app.set('views', path.join(__dirname,'/views'));

// =============== GET METHOD ======================
// GET request to the specified path
// with the specified callback functions.
// ============ HOME PAGE ====================
app.get('/', (req,res) => {
    // Render a view & send the rendered
    // HTML string to the client
    res.render('home');
})

// ============ RANDOM NUMBER PAGE ====================
app.get('/random', (req,res) => {
    // Create a random number
    const randNum = Math.floor(Math.random()*10)+1990;
    // randNum = variable that store value
    // tempNum = argument that use in the template
    res.render('random', { tempNum: randNum }); // [locals] = an object
})

// ============ SUBREDDIT PAGE ====================
app.get('/r/:subreddit', (req, res) => {
    // req.params = an object
    const { subreddit } = req.params;
    // Query the data from redditData by passing a parameter
    const data = redditData[subreddit];
    if (data) {
        // Nếu có data thì trả về page subreddit
        res.render('subreddit', {...data})
    } else {
        // Nếu ko có data thì trả về page notfound
        res.render('notfound', {subreddit})
    }
})

// ============ Loops in EJS PAGE ====================
app.get('/yads', (req,res) => {
    const yadMember = ['Bao', 'Thi', 'Dai', 'Truong', 'Phuoc', 'Thao', 'Hiep', 'Trang', 'Hieu', 'Hanh', 'Hoang'];
    res.render('yads',{ yadMember: yadMember});
})



// Listen for connections on the specified
// host and port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000")
})
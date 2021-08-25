const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');
app.use(bodyParser.json());

//Import routes
const postRoute = require('./routes/posts');

//middleware
app.use('/posts', postRoute);
app.use(cors());

//routes
app.get('/', (req, res) => {
    res.send('We are on home!');
});

//connection to the database
mongoose.connect(
    process.env.DB_CONNECTION, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, 
    () => {
    console.log('connection is successful!');    
});

app.listen(3000);
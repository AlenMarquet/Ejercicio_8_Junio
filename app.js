const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){console.log('running port:3000')});

app.use('/movies', moviesRouter);
var express= require('express');
var bodyParser = require('body-parser');
var app= express();


app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use(function(req,res,next) {
	console.log("Request recieved at: "+Date.now());
	next();
});
var router=require('./route.js');
app.use('/route',router);

app.get('/:name', function(req, res){
    res.send(' name: ' + req.params.name);
});

app.post('/', function (req,res) {
	res.send("Hello! POST!");
});

app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
});


app.listen(3000);
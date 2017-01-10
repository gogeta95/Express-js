var express= require('express');
var bodyParser = require('body-parser');
var multer= require('multer');
var upload= multer();
var app= express();


app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
app.use(upload.array());
app.use(function(req,res,next) {
	console.log("Request recieved at: "+Date.now());
	next();
});
var router=require('./route.js');
app.use('/route',router);
app.get('/submit',function(req,res) {
res.send(JSON.stringify(req.query)+'<br>GET');
});

app.get('/:name', function(request, response){
    response.send(' name: ' + request.params.name);
});

app.post('/submit',function(req,res) {
res.send(JSON.stringify(req.body)+"<br> Post");
});

app.post('/', function (req,res) {
	res.send("Hello! POST!");
});

app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
});


app.listen(3000);
var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var mongoUrl = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/electricOrNot';

var db;

mongoClient.connect(mongoUrl, function(error, database){
	db = database;
});

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {title: "Express"});
	// 1. Get all pics from MongoClient
	// 2. Get the current user from mongo
	// 3. find out which pics the user has voted on.
	// 4. load all docs into an array
	// 5. pick a random one
	// 6. send the random pic to the view.
	// var cars = db.collection('cars').insert({name: 'Buick'});
	// db.collection('cars').find({}).toArray(function(error, carResult){
	// 	console.log(carResult);
	// 	// for(i=0; i<carResult.length; i++){
	// 	// 	console.log(carResult[i].imageSrc);
	// 	// }
	// 	var getRandomImage = Math.floor(Math.random() * carResult.length);
	// 	//console.log(getRandomImage);
	// 	res.render('index', { carImage: carResult[getRandomImage] });
	// });
	//console.log(cars);
  // res.render('index', { title: 'Express' });
});

router.post('/electric', function(req, res, next){
	//res.send(req.body);
	res.send("The user chose " + req.body.photo + " as an electric vehicle.")
	// 1. We know they voted electric or they wouldn't be here.
	// 2. we know what they voted on bc we passed it in the req.body var
	// 3. we know who they are bc of their IP
	// 4.  update user table to include IP and pic they voted on.
	// 5. update the images/cars collection by one
});

router.post('/poser', function(req, res, next){
	//res.send(req.body);
	res.send("The user chose " + req.body.photo + " as a poser vehicle.")
	// 1. We know they voted electric or they wouldn't be here.
	// 2. we know what they voted on bc we passed it in the req.body var
	// 3. we know who they are bc of their IP
	// 4.  update user table to include IP and pic they voted on.
	// 5. update the images/cars collection by -1
});

module.exports = router;



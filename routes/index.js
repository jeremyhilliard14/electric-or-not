var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var mongoUrl = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/electricOrNot';

var db;
var allPhotos;

mongoClient.connect(mongoUrl, function(error, database){
	database.collection('cars').find().toArray(function(error, result){
		allPhotos = result;
		db = database;
		console.log(allPhotos);
	});
	
});

/* GET home page. */
router.get('/', function(req, res, next) {
	// res.render('index', {title: "Express"});
	// 1. Get all pics from MongoClient
	// this takes place when we connect
	// 2. Get the current user from mongo
	var currIP = req.ip;
	console.log("The current user's IP address is " + currIP);
	db.collection('users').find({ip: currIP}).toArray(function(error, userResult){
		//if the user result returns nothing, then the user hasn't voted on anything.
			// 4. load all docs into an array
		if(userResult.length == 0){
		photosToShow = allPhotos;
		}
		// 5. pick a random one
		var getRandomImage = Math.floor(Math.random() * photosToShow.length);
		res.render('index', { carImage: allPhotos[getRandomImage] });

	});
	// 3. find out which pics the user has voted on.
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

	db.collection('cars').updateOne(
		{imageSrc: req.body.photo},
		{
			$set: {"totalVotes": 1}
		}, function(error, results){
			console.log(results);
		}
	)
	



	res.send("The user chose " + req.body.photo + " as an electric vehicle.")

	// 1. We know they voted electric or they wouldn't be here.
	// 2. we know what they voted on bc we passed it in the req.body var
	// 3. we know who they are bc of their IP
	// 4.  update user table to include IP and pic they voted on.
	// 5. update the images/cars collection by one
	// 6. send them back to the main page so they can vote again
	// 6b. if the user has voted on every image in the database, notify them.
});

router.post('/notElectric', function(req, res, next){
	//res.send(req.body);
	res.send("The user chose " + req.body.photo + " as a not an electric vehicle.")
	// 1. We know they voted electric or they wouldn't be here.
	// 2. we know what they voted on bc we passed it in the req.body var
	// 3. we know who they are bc of their IP
	// 4.  update user table to include IP and pic they voted on.
	// 5. update the images/cars collection by -1
	// 6. send them back to the main page so they can vote again
});

module.exports = router;



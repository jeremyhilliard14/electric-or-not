votingApp.controller('votingController', function($scope, $http){

	var cars = [
		"BMW-i3.jpeg",
		"cobra.jpeg",
		"fisker-karma.jpeg",
		"hpa-golfr.jpeg",
		"leaf.jpeg",
		"lotus-elise.jpeg",
		"peel.jpg",
		"tesla-roadster.jpeg",
		"tesla.jpg",
		"teslax.jpg",
		"yellow.jpg",
		"z06.jpeg"
		];

	var randomNum = Math.floor(Math.random() * cars.length);
	
	$scope.cars = "public/images/" + cars[randomNum];

	console.log(randomNum);
});


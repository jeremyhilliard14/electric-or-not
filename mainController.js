var votingApp = angular.module('votingApp', ['ngRoutes']);


votingApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'votingController',
        templateUrl: function($routParams) {
        	console.log("Routing to front view");
        	return 'front.html';
        }
    });

    $routeProvider.when('/standings', {
    	controller: 'votingController',
    	templateUrl: 'standings.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
});


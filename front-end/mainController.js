var votingApp = angular.module('votingApp', []);

votingApp.controller('mainController', function($scope, $http){
    var apiUrl = "http://localhost:3000/standings"
    $http({method: 'GET', url: apiUrl}).then(
        function successCalback(response){
            var theStandings = response.data.theStandings;


            $scope.theStandings = theStandings;
            
            console.log(theStandings);
            var masterArray = [];

            for(var i =0; i <theStandings.length; i++){
                masterArray.push(theStandings[i]);
             }
            $scope.imagesArray= masterArray;


            console.log($scope.image);
        }, function errorCallback(response){
            console.log(response);
            $scope.image = response;
        }
    ); 
})

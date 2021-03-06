var votingApp = angular.module('votingApp', []);

votingApp.controller('mainController', function($scope, $http){
    
    var apiUrl = "http://localhost:3000/"
        $http({method: 'GET', url: apiUrl}).then(
            function successCallback(response){
                var imageSrc = response.data.carImage.imageSrc;
                $scope.imageSrc = imageSrc;
            }, function errorCallback(response){
               // console.log(response);
                $scope.image = response;
            }
        ); 


    $scope.standingsPage = function(){
        document.getElementById('voting-wrapper').style.display='none';
        document.getElementById('standings').style.display='block';
        var apiUrl = "http://localhost:3000/standings"
        $http({method: 'GET', url: apiUrl}).then(
            function successCallback(response){
                var theStandings = response.data.theStandings;
                $scope.theStandings = theStandings;
                console.log(theStandings);
                var masterArray = [];
                for(var i =0; i <theStandings.length; i++){
                    masterArray.push(theStandings[i]);
                 }
                $scope.imagesArray= masterArray;
                //console.log($scope.image);
            }, function errorCallback(response){
               // console.log(response);
                $scope.image = response;
            }
        ); 
    }

    $scope.vote = function(){
        //console.log("wow");
        document.getElementById('standings').style.display='none';
        document.getElementById('voting-wrapper').style.display='block';
        var apiUrl = "http://localhost:3000/"
            $http({method: 'GET', url: apiUrl}).then(
                function successCallback(response){
                    console.log(response);
                    var imageSrc = response.data.carImage.imageSrc;
                    $scope.imageSrc = imageSrc;
                }, function errorCallback(response){
                   // console.log(response);
                    $scope.image = response;
                }
            ); 
    }

    $scope.electric = function(){
        var  apiUrl = "http://localhost:3000/electric"
            $http({method: 'POST', url: apiUrl}).then(
                function successCallback(response){
                    console.log("Success");
                }, function errorCallback(response){
                    console.log("error");
                }
            );
    }
});

var feed=angular.module('feed',[]);

feed.service('dataService', function($http) {
delete $http.defaults.headers.common['X-Requested-With'];
this.getData = function(callbackFunc) {
    $http({
        method: 'GET',
        url: 'http://localhost:8080/api/posts',
        headers: {'Content-Type': 'application/json'}
     }).success(function(data){
        // With the data succesfully returned, call our callback
        callbackFunc(data);
    }).error(function(){
        alert("error");
    });
 }
});

var controllers={};

controllers.getdata=function($scope,$http,dataService)
{
	
	

	
	
	
	 $scope.data = null;
     dataService.getData(function(dataResponse) {
     $scope.data = dataResponse;
    });
};







feed.controller(controllers);
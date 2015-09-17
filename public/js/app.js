var feed=angular.module('feed',[]);

angular.module('feed')
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);

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

controllers.getdata=function($scope,$http,dataService,$sce)
{
	 $scope.data = null;
     dataService.getData(function(dataResponse) {
     
	 $scope.myHTML=dataResponse[0]['content'].replace(/,/g,"\n");
	 for (i=0;i<dataResponse.length;i++)
	 {
		dataResponse[i]['content']=dataResponse[i]['content'].replace(/,/g,"\n");
	 }
 
	 $scope.data=dataResponse;

    });



    $scope.IsVisible = false;
    $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
         $scope.IsVisible = $scope.IsVisible ? false : true;
        
    }
	
	 
	
	
};






feed.controller(controllers);
var feed=angular.module('feed',[]);


var controllers={};

controllers.getdata=function($scope)
{
	
	$scope.data=[
		{name:'Tharindu',last:'Ranathunga'},
		{name:'Kalpani',last:'Rasangika'}
	];

};


feed.controller(controllers);
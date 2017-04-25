angular.module('homeRest', [ 'ngResource' ])
.factory('homeRest', function($resource) {	

	var URL_API = "http://172.30.42.128:8008/";

	var serviceRest = $resource(URL_API, null, 
	{
		// "get" : {method: "GET", isArray: false, url: URL_API + "week?rand=0"}
	});

	return {
		// get: function() {
		// 	return serviceRest.get();
		// }
	};
})

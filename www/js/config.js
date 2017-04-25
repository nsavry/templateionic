mainModule.config(function($provide, $stateProvider, $urlRouterProvider, $httpProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider.state('home', {
		url: '/home',
		cache: false,
		templateUrl: 'view/home/home.html'
	});
});
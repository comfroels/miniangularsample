myApp.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: '/js/partials/customer.html'
		})
		.when('/orders',
		{
			templateUrl: '/js/partials/order.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
myApp.controller('order_controller',function($scope,OrderFactory,CustomerFactory){
	$scope.customers = CustomerFactory.getCustomers();
	$scope.orders = OrderFactory.getOrders();
	$scope.addOrder = function(){
		OrderFactory.addNewOrder($scope.new_order);
	}
});
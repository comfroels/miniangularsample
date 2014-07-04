myApp.controller('customer_controller',function($scope,CustomerFactory){
	$scope.customers = CustomerFactory.getCustomers();
	$scope.addCustomer = function () {
		var same = false;
		$scope.error = "";
		for (var i = 0; i < $scope.customers.length; i++) {
			if ($scope.new_customer.name == $scope.customers[i].name) {
				$scope.error = "That customer already exists! Choose a different name...";
				same = true;
			}
		}
		if (!same) {
			CustomerFactory.addNewCustomer($scope.new_customer);
		}
	}
	$scope.deleteCustomer = function(info) {
		CustomerFactory.deleteOldCustomer(info);
	}
});
myApp.factory('OrderFactory',function(){
	var factory = {};
	var orders = [];
	factory.getOrders = function() {
		return orders;
	}
	factory.addNewOrder = function(info) {
		var now = new Date();
		var str = now.toDateString();
		orders.push({
			customer: info.customer,
			quantity: info.quantity,
			product: info.product,
			date: str
		});
	}
	return factory;
});
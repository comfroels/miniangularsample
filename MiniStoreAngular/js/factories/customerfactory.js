myApp.factory('CustomerFactory', function(){
	var customers = [
		{name:'Michael Choi', created:'April 1st 2014'},
		{name:'Nathan White', created:'April 5th 2014'},
		{name:'Ted Whang', created:'May 12th 2014'}
	];
	var factory = {};
	factory.getCustomers = function() {
		return customers;
	}
	factory.addNewCustomer = function(info) {
		var now = new Date();
		var str = now.toDateString();
		customers.push({
			name: info.name,
			created: str
		});
	}
	factory.deleteOldCustomer = function(info) {
		for (var i = 0; i < customers.length; i++) {
			if (customers[i].name == info) {
				var num = i;
			}
		}
		customers.splice(num,1);
	}
	return factory;
});
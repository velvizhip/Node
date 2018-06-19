var db = require('../db_connect.js');

var customer = {
	getCustomers: function(callback){
		return db.query('Select * from customer', callback);
	},
	getCustomerById: function(id, callback){
		return db.query('Select * from customer where id=?',[id], callback);
	},
	addCustomer: function(customer, callback){
		return db.query('Insert into customer values(?,?,?,?)', [customer.name, customer.address, customer.email, customer.phone], callback);
	},
	deleteCustomer: function(id, callback){
		return db.query('delete from customer where id=?', [id], callback);
	},
	updateCustomer: function(customer, id, callback){
		return db.query('update customer set name=?,address=?,phone=? where id=?', [customer.name, customer.address, customer.phone], id, callback);
	}
};

module.exports = customer;
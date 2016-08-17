package com.atguigu.ajax.app.test;

import java.util.ArrayList;
import java.util.List;

import com.mysql.fabric.xmlrpc.base.Array;

public class CustomList
{
	public List<Customer> customers;
	public CustomList(){
		
		this.customers = new ArrayList<Customer>();
	}
	
	public void addArea(){
		Customer customer1 = new Customer("img/1.jpg", 1);
		customers.add(customer1);
		Customer customer2 = new Customer("img/2.jpg", 2);
		customers.add(customer2);
		Customer customer3 = new Customer("img/3.jpg", 3);
		customers.add(customer3);
		Customer customer4 = new Customer("img/4.jpg", 4);
		customers.add(customer4);
		Customer customer5 = new Customer("img/5.jpg", 5);
		customers.add(customer5);
		
	}

	
	
}

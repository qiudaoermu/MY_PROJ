package com.atguigu.ajax.app.test;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Customer
{
	private String srcImg;
	private int id;
	
	
	public Customer(String srcImg, int id)
	{
		super();
		this.srcImg = srcImg;
		this.id = id;
	}
	
	public String getsrcImg()
	{
		return srcImg;
	}
	public void setsrcImg(String srcImg)
	{
		this.srcImg = srcImg;
	}
	
	public Integer getId()
	{
		return id;
	}
	public void setId(int id)
	{
		this.id = id;
	}
	
	/*public String getCity(){
		
		return "Beijing";
	}
	public String getBirthday(){
		
		return "1990-09-1";
	}
	*/
/*	public static void main(String[] args) throws JsonProcessingException
	{
		
		ObjectMapper mapper = new ObjectMapper();
		Customer customer1 = new Customer("����", "01");
		Customer customer2 = new Customer("��ŷ", "02");
		Customer customer3 = new Customer("����", "03");
		Customer customer4 = new Customer("�Ϸ�", "04");
		Customer customer5 = new Customer("����", "05");
		//System.out.println(customer.city);
		String jsonStr = mapper.writeValueAsString(customer);
		System.out.println(jsonStr);
		
		
		
	}*/
}

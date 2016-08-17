package com.imooc;





public class GiccU {

	public String a;
	public String name;
	public String id;
	
	
	
	
	
	
	public GiccU( String name, String id)
	{
		super();
	
		this.name = name;
		this.id = id;
	}


	public String getCity(){
			
		 return "Beijing";
	}
	
	public String getBirthday(){
			
		 return "1990-09-1";
	}



	public String getName()
	{
		return name;
	}



	public void setName(String name)
	{
		this.name = name;
	}



	public String getId()
	{
		return id;
	}



	public void setId(String id)
	{
		this.id = id;
	}



	public  GiccU(String a) {
		this.a = a;
	};
	
	
	
	public static void main(String[] args)
	{
		GiccU gU = new GiccU("xiaoxi","3");
		System.out.println(gU);
	}
}

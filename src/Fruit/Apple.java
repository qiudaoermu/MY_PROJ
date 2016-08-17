package Fruit;

public class Apple extends WatFruit{
	
	
	
   static void app11(){
		
		System.err.println("1");
		
	};
	private String price = "10yuan";
	
	
	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}
	public String number;
	public String color;
	public String name;
	
	public Apple(String number,String color,String name){
		this.number = number;
		this.color = color;
		this.name = name;
		
	}
	
}

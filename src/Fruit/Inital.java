package Fruit;

import java.util.ArrayList;
import java.util.List;

public class Inital {
	
	static void gree(){
		
		System.out.println(1);
	}
	
	public static void main(String[] args) {
		//WatFruit wa = new WatFruit();
		//wa.testAdd();		

		
		
		
		
		Apple apple1 = new Apple("3", "red", "苹果");
		apple1.setPrice("20yuan");
		Apple apple2 = new Apple("4", "green", "西瓜");
		
		
		//System.out.println(apple2);
		
		apple1.app11();
		System.out.println(apple1.getPrice());
		System.out.println(apple1.weight);
		//gree();
	}
	
}



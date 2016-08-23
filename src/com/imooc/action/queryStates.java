package com.imooc.action;

import java.util.HashMap;
import java.util.Map;

import com.opensymphony.xwork2.Action;
import com.sun.org.apache.bcel.internal.generic.NEW;
import com.imooc.action.getWidth;
public class queryStates {

	
	
	public Map states;

	public Map getStates() {
		return states;
	}

	public void setStates(Map states) {
		this.states = states;
	} 
	
	
	
	
	public String getState() {
		
		getWidth getWidth1 = new getWidth();
		int number2 = getWidth1.getNumber();
		System.out.println("number"+getWidth1.getNumber());
		 Map<String, String> map = new HashMap<String, String>();  
		 if(number2==0){
			 map.put("states", "config");
			 
		 }else if(number2==10){
			 
			 map.put("states", "finish");
			 
		 }
		 
		
		 this.setStates(map);
		
		return Action.SUCCESS;
		
		
		
	}
	
}

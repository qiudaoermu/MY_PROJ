package com.imooc.action;

import java.util.HashMap;
import java.util.Map;

import com.opensymphony.xwork2.Action;

public class queryStates {

	
	
	public Map states;

	public Map getStates() {
		return states;
	}

	public void setStates(Map states) {
		this.states = states;
	} 
	
	
	
	public String getState() {
		
		
		 Map<String, String> map = new HashMap<String, String>();  
		 
		 map.put("states", "config");
		
		 this.setStates(map);
		
		return Action.SUCCESS;
		
		
		
	}
	
}

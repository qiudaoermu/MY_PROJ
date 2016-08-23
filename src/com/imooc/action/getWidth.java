package com.imooc.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

import com.opensymphony.xwork2.Action;

public class getWidth {

	
	
	public List responseWidth;
	public static int number;
	
	public static int getNumber() {
		return number;
	}

	public static void setNumber(int number) {
		getWidth.number = number;
	}

	
	public List getResponseWidth() {
		return responseWidth;
	}

	public void setResponseWidth(List responseWidth) {
		this.responseWidth = responseWidth;
	}  
	
	
	public static void timer1() {
		    final Timer timer = new Timer();
		    
		    timer.schedule(new TimerTask() {
		      public void run() {
		    	  number++;
		        System.out.println(number);
		        if (number >= 40) {
	               
		        	System.out.println("停止定时器");
	                timer.cancel();// 停止定时器
	                number=0;
	            }
		      }
		    }, 2000);// 设定指定的时间time,此处为2000毫秒
	}
	
	
	
	
	
	public String getWidth(){   
		 this.timer1();
        List list = new ArrayList();   
        
        for(int i=0;i<8;i++){   
           
        	list.add(i,15*(i+1)+number*2);
        	
        }   
      //  System.out.println(list);
       
        this.setResponseWidth(list);  
        System.out.println(responseWidth);
        return Action.SUCCESS;   
    }   
	 
	
	 
}

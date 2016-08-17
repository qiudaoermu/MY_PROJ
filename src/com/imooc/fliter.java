package com.imooc;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.Map;
import java.util.Set;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;



public class fliter  implements Filter {

	

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void doFilter(ServletRequest rq, ServletResponse rp, FilterChain chain)
			throws IOException, ServletException {
			
		// TODO Auto-generated method stub
		HttpServletRequest req = (HttpServletRequest)rq;
		HttpServletResponse rep = (HttpServletResponse)rp;
		
		HttpSession session = req.getSession(true);
		
		
		 String requestPath = req.getServletPath();
		 String userid = String.valueOf(session.getAttribute("userId"));
		  if (!requestPath.endsWith("/dologin.jsp")) {
		       
		        if (userid.equals("null")) {
		        		//rep.sendRedirect("https://www.baidu.com");
			            return;
		        } else {
			            chain.doFilter(req, rep);
		        }
	    } else {
	    
	    	 System.out.println(userid);
	    }
		  
		  
		  
		  
		 
		//BufferedReader reader =req.getReader();
		//reader.getParameter("userId");
		//System.out.println(reader);
		/*
		 Map<String, String[]> reqMap = req.getParameterMap();
		 System.out.println(reqMap);
         Set<String> keySet = reqMap.keySet();
         for(String key : keySet){
            
              System.out.println(key);
             //杩欓噷鎶婃敼瀹岀殑鏀惧洖鍘�
         }
         */
        // System.out.println(1);
		
		
		
		//String username = req.getParameter("userId");
		//reqTojsp(req);
		//req.setAttribute("key", "userId");
		//System.out.println(username);
		//return;
		//System.out.println(key);
		//rep.sendRedirect("https://baidu.com");
		// String uri = req.getRequestURI();
		//System.out.println(req.getRequestURL());
		//req.sendredirect("https://baidu.com");
		
	}

	/*private void reqTojsp(HttpServletRequest req) throws IOException {
		// TODO Auto-generated method stub
		//System.out.println(req.getServerName());
	
		
		
		((HttpServletResponse) req).sendRedirect("/a.jsp");
	}*/

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
	}
	
	
	
	
}

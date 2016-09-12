/*
package com.atguigu.ajax.app.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.imooc.*;
import com.atguigu.ajax.app.servlets.*;
import com.atguigu.ajax.app.test.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import db.*;

*/
/**
 * Servlet implementation class ValiateUserNameServlet
 *//*

@WebServlet("/valiateUserName")

public class ValiateUserNameServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	*/
/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 *//*

	public ValiateUserNameServlet() {
			super();
		}
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		ObjectMapper mapper = new ObjectMapper();
		CustomList customer = new CustomList();
		customer.addArea();
		//List<Customer> arrSheng = customer.getListArea();
		*/
/*if(arrSheng != null){
			request.setAttribute("arrSheng", arrSheng);
			request.getRequestDispatcher("/operator.jsp").forward(request, response);
		}*//*

		String jsonStr = mapper.writeValueAsString(customer);
		//List<String> userNames = Arrays.asList("AAA","BBB","CCC");
		//String userName = "{a:1,b:2}";
		//ListTest t1 = new ListTest();
		//t1.testAdd();

		//String result =userNames;
		*/
/*	if (userNames.contains(userName)) {
			result = "<font color='red'>baiddu</font>";
		}else{

			result = "<font color='green'>ali</font>";
		}*//*


		//response.setContentType("text/html");

		response.setCharacterEncoding("UTF-8");
		response.getWriter().print(jsonStr);
	}


}
*/

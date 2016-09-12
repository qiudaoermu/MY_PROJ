/*
package com.atguigu.ajax.app.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.imooc.*;
import com.atguigu.ajax.app.servlets.*;
import com.atguigu.ajax.app.test.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import db.*;

*/
/**
 * Servlet implementation class ValiateUserNameServlet
 *//*

@WebServlet("/valiateUserName2")

public class ValiateUserNameServlet2 extends HttpServlet {


	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub


		//String id = request.getParameter('oPval');
		String id = request.getParameter("userId");
		response.setContentType("text/xml; charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		*/
/*if (id=="误会")
		{
			response.getWriter().print(5);
		}else{

			response.getWriter().print(3);
		}
		*//*

		//System.out.println(id);
		//HttpSession session = request.getSession();

		//session.setAttribute("user", id);

		Cookie cookie = new Cookie("cookiename",id);
		cookie.setMaxAge(3600);
		cookie.setPath("/");
		response.addCookie(cookie);
		Cookie[] cookies = request.getCookies();//这样便可以获取一个cookie数组
		for(Cookie cookie2 : cookies){
		    System.out.println(cookie2.getName());// get the cookie name
		   // cookie2.getValue(); // get the cookie value
		    System.out.println(cookie2.getValue());
		}
		//System.out.println("user1");
		//response.getWriter().print(id);
	}



}
*/

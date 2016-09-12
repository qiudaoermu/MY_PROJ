/**
 *
 *//*

*/
/**
 * @author Administrator
 *
 *//*

package db;
import java.sql.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.atguigu.ajax.app.servlets.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class JDBCTest
{



	public static void main(String[] args)
	{
		ValiateUserNameServlet val = new ValiateUserNameServlet();
		//val.doPost(HttpServletRequest request, HttpServletResponse response);



		 String url="jdbc:mysql://localhost:3306/new_schema";
	     String user="root";
	     String password="root";
	     Connection conn=null;
         Statement stmt=null;
         ResultSet rs=null;
	     try
	     {
			Class.forName("com.mysql.jdbc.Driver");
	        conn=DriverManager.getConnection(url,user,password);
	        stmt=conn.createStatement();
	        String sql;
	        sql=" insert into new_table(name,password) values ('liwe',666)";

	        //stmt.execute(sql);
	        sql="select * from new_table";
	       // System.out.println(sql);
	        rs = stmt.executeQuery(sql);
	        System.out.println("ѧ��" + "\t\t\t" + " ����"+"\t\t\t"+"�Ա�");
	        String name = null;
	        System.out.println(rs);
	        while(rs.next())
	        {
	        	name = rs.getString("name");
	            System.out.println(rs.getString("id") + "\t\t\t" + name+"\t\t\t"+rs.getString("password"));
	        }
	     }
	     catch(ClassNotFoundException e1)
         {
             System.out.println("���ݿ����������ڣ�"+e1.toString());
         }
         catch(SQLException e2)
         {
             System.out.println("���ݿ�����쳣"+e2.toString());
         }
         finally
         {
             try
             {
                 if(rs!=null)
                     rs.close();
                 if(stmt!=null)
                     stmt.close();
                 if(conn!=null)
                     conn.close();
             }
             catch(SQLException e)
             {
                 System.out.println(e.toString());
             }
         }
      }
 }

*/

<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()	+ path + "/";
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <base href="<%=basePath%>">
  <title>Document</title>
<style>

</style>
	</head>
<body>
	<form method="post" name="form1">
		地区:<select style='width:200px;' id='area'>
		<option value='1'>
			选择
		</option>
		<c:forEach var="sheng" items="${arrSheng}">
				<option value="${sheng.id}">
					${sheng.name}
				</option>
		</c:forEach>
	</select>
	<br/>
	<br/>
	<br/>
		国家:<select style='width:200px;' id='country'>
		<option value='1'>
		</option>
	</select>
		<br/>
	<br/>
	<br/>
		运营商:<select style='width:200px;' id='operator'>
		<option value='1'>
		</option>
	</select>
	</form>
</body>

<script src='${pageContext.request.contextPath}/js/jquery-1.11.3.js'></script>
<script>
	$(function(){
		
		$.ajax({
			url:'${pageContext.request.contextPath}/valiateUserName',
			type:'POST',
			dataType:'json',
			
		}).done(function(data){
			//console.log(data)
			$.each(data,function(key,value){
				//console.log(data[key]);
				var oPtion = $("<option value="+data[key][name]+">"+data[key].name+"</option>");
				$("#area").append(oPtion);
			}) 
		})
		
			$.ajax({
				url:'${pageContext.request.contextPath}/valiateUserName2',
				//data: {oPval:val},
				type:'POST',
				dataType:'json',
				success :function(data){
					//console.log(val)
					console.log(1)
				}
			})

		
	/* 	$("#area").change(function(){
		
			var val = $(this).val()
			
		
			
		}) */
	})

	
</script>

</html>


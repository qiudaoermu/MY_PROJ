<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" contentType="text/html; charset=utf-8" %>
<%@ page import="java.util.*"%>
<%@ page import="java.text.*"%>
    
<%

	Date currentTime = new Date(); 
	SimpleDateFormat formatter = new SimpleDateFormat("HH-mm-ss");
	String dateString = formatter.format(currentTime);

	String version = dateString;
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

</body>

</html>
<script>
var version = <%=version%>;

</script>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>

	

<body>
	<div id="uesr">uese</div>
	<input type="button" id="button" value="anniu"/>
</body>
<script src="js/jquery.js"></script>
<script>


$(function(){
	
	var id = $("#uesr").html();

	console.log(id)
		$.ajax({
				
				data:{userId:id},
				url : "ValiateUserNameServlet2",
				type: "POST"
			})
})
	
			

	
</script>
</html>
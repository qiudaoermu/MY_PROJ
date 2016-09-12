<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" contentType="text/html; charset=utf-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ include file="inc.jsp" %>
<%@ taglib prefix="s" uri="/struts-tags" %> 
<html>
 <head>
  <meta charset="utf-8">
  <title>IPWAN</title>
  <link rel='stylesheet' href='css/index.css?<%=version%>'/>
  <link rel='stylesheet' href='css/jquery-ui.css?<%=version%>'/>
  <link rel='stylesheet' href='css/ui.jqgrid.css?<%=version%>'/>

 </head>
 <style>

 </style>
<body>
	<a href="Test_i18n.action?locale=en_US">English</a> 
<div class='tabList'>
	<ul>						
		<li class='uploader on'><s:text name="uploader"></s:text></li>
		<li class='toprecover'><s:text name="toprecover"/></li>
		<li class='asummerment'><s:text name="asummerment"/></li>
		<li class='report'><s:text name="report"/></li>
	</ul>
</div>
<div class='mainContent'>
 	<div class='content'></div>
</div>


</body>
</html>

<script src="js/echarts.js?<%=version%>"></script>
<script src='js/lib/jquery-3.0.0.js'></script>
<script src="js/lib/jquery-ui.js"></script>
<script src="js/i18n/grid.locale-cn.js"></script>
<script src="js/lib/jquery.jqGrid.src.js"></script>
<script src="js/topRecover/topRecover.js?<%=version%>"></script>
<script src="js/asummerment/asummerment.js?<%=version%>"></script>
<script src="js/capicable.js"></script>
<script src="js/report/report.js"></script>
<script src="js/uploader/uploader.js?<%=version%>"></script>
<script src="js/untis.js"></script>
<script src="js/macarons.js"></script>
<script src="js/main.js"></script>









<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>
  <link rel='stylesheet' href='css/index.css'/>
  <link rel='stylesheet' href='css/jquery-ui-1.8.2.custom.css'/>
  <link rel='stylesheet' href='css/ui.jqgrid.css'/>

 </head>
 <style>

 </style>
<body>

<div class='tabList'>
	<ul>
		<li class='uploader on'>数据上传</li>
		<li class='toprecover'>拓扑还原</li>
		<li class='asummerment'>评估分析</li>
		<li class='report'>报告处理</li>
	</ul>
</div>
<div class='mainContent'>
 	<div class='content'></div>

</div>


</body>
</html>


<script src='js/jquery-3.0.0.js'></script>
<script type="text/javascript" src='js/require.js'></script>



<script>
require.config({
	baseUrl :'js',
	paths :{
		jquery : 'jquery-3.0.0',
		jqueryUI : 'jquery-ui-1.8.2.custom.min',
		i18n:'i18n/grid.locale-cn',
		jqGrid:'jquery.jqGrid.min',
		uploader :'uploader/main',
		toprecover:'topRecover/main',
		asummerment:'asummerment/main',
		report:'report/main',
		main :'main'
	}
})



require(['main'],function(main){
	main.init();
	
})


</script>

define([],function(){
	
	
	var init = function(){
		
		$.get('report.jsp',function(html){
			$('.mainContent').html(html)
			
		})	
		console.log('report')
	}
	return {init:init}
})
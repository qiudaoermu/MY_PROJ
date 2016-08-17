define([],function(){
	
	
	var init = function(){
		
		$.get('asummerment.jsp',function(html){
			$('.mainContent').html(html)
			
		})	
		console.log('asummerment')
	}
	return {init:init}
})
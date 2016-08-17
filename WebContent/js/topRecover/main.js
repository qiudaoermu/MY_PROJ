define([],function(){
	
	

	
	var init = function(){
		$('.mainContent').html('');
		$.get('topRecover.jsp',function(html){
			$('.mainContent').html(html)
			
		})	
	
	}
	return {init:init}
})
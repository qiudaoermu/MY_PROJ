
	
	

$.topRecover = function(){
	
	this.init = function(){
		
		$('.mainContent').html('');
		$.get('topRecover.jsp',function(html){
			$('.mainContent').html(html)
			
		})	
	}
	
}
var topRecover1 = new $.topRecover();
	

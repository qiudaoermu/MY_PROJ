
$.report = function(){
	
	
	
	this.init = function(){
		
		$('.mainContent').html('');
		$.get('report.jsp',function(html){
			$('.mainContent').html(html)
			
		})	
		console.log('report')
		
	}
}



	
var report1 = new $.report();

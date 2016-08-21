
	
	
	
$.uploader = function(){
	this.init = function(){
		
		$('.mainContent').html('');
		$.get('uploader.jsp',function(html){
			console.log(html)
			$('.mainContent').html(html)
		})
		
	}
	
	
}	
var uploader1 = new $.uploader();
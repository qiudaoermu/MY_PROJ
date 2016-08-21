
$(function(){
	/**
	 * 
	 * 四个页面加载的主要方法
	 */
	 

	uploader1.init();
	$(".uploader").bind("click",function(){
		
		uploader1.init();
		$(this).addClass('on').siblings().removeClass('on');
		
		
	})
	
	$(".toprecover").bind("click",function(){
		
		topRecover1.init();
		$(this).addClass('on').siblings().removeClass('on');
	})
	
	$(".asummerment").bind("click",function(){
		
		assumnet1.init();
		$(this).addClass('on').siblings().removeClass('on');
		
	})
	
	
	
	$(".report").bind("click",function(){
		
		report1.init();
		$(this).addClass('on').siblings().removeClass('on');
		
	})
	
	
})	
	
	
	
	
	

	

define(['jquery','jqueryUI','i18n','jqGrid','uploader','toprecover','asummerment','report'],function(
		
		$,jqueryUI,i18n,jqGrid,uploader,toprecover,asummerment,report
){
	
	
	var model = {
			uploader:uploader,
			toprecover:toprecover,
			asummerment:asummerment,
			report:report
	}
	console.log(model.topRecover);
	model.uploader.init();
	var init = function(){
		$('.tabList ul li').on('click',function(){
			
			var name = $(this).attr('class');
			console.log(name);
			$(this).addClass('on').siblings().removeClass('on');
			
			if(name.indexOf('on')){
				console.log('on')
				name = $.trim(name.replace('on',''));
			}
			console.log(name)
			console.log(model[name])
			model[name].init();
		})
		console.log(1)
	}
	
	
	
	
	return {init:init}
	
})
	



$(function(){
		
		
		var time = null;
		var i=1;
		var j=0;
		var html='<li class="active"></li><li></li><li></li><li></li><li></li>';
		
		
		$('#dot').html(html)
		$.ajax({
			url : "valiateUserName",
			type:'POST',
			dataType:"json",
		}).done(function(data){
			//xconsole.log(data)
			$.each(data,function(key,value){
				
				$.each(value,function(index,i){
					
					var $img = $('<img/>');
					$img.attr('src',i.srcImg)
					$('#list').append($img);
				})
				$('#list img').eq(0).clone().appendTo($('#list'))
				
				$('#list').prepend($('#list img').eq(4).clone())
				
			})
		})
		
		
	
		autotimer()
		function autotimer(){
			time = setInterval(function(){
				j++
				i++
				$('#list').animate({left:-520*i},1000)
				if (i>=5) {
					i=0;
					$('#list').animate({left:0},0)
					//$('#list').css('left','-520px')
					//debugger;
				}
				//console.log(j)
				if (j>=5) {
					j=0;
				}
				$('#dot li').eq(j).addClass('active').siblings().removeClass();
				
				
				
			}, 2000)
		
		}
		
		
		$('#dot li').click(function(){
			
			var index = $(this).index();
			//console.log(index)
			$(this).addClass('active').siblings().removeClass();
			$('#list').animate({left:-520*(index+1)},1000)
		
			
		})
		$('.box').hover(function(){
			
			clearInterval(time)
		},function(){autotimer()})
		
		
		var btnHtml = '<div class="leftBtn"><</div><div class="rightBtn">></div>';
		
		
		$('.btn').html(btnHtml)
		$('.btn .rightBtn').click(function(){
			
			j++
			i++
			$('#list').stop().animate({left:-520*i},1000)
			if (i>=5) {
				i=0;
				$('#list').animate({left:0},0)
				//$('#list').css('left','-520px')
				//debugger;
			}
			//console.log(j)
			if (j>=5) {
				j=0;
			}
			$('#dot li').eq(j).addClass('active').siblings().removeClass();
		})
		
		
		$('.btn .leftBtn').click(function(){
			
			j--
			i--
			if(i<=-1){
				
				i=5;	
			}
			
			$('#list').stop().animate({left:-520*i},1000)
			if (i<=-1) {
				i=5;
				$('#list').animate({left:-2600},0)
				//$('#list').css('left','-520px')
				//debugger;
			}
			
			console.log(j)
			if (j<=-1) {
				j=4;
			}
			$('#dot li').eq(j).addClass('active').siblings().removeClass();
		})
	
		
		/*
		$("#jqgajax").jqGrid({
			ajaxGridOptions : {type:"POST"},
			serializeGridData : function(postdata) {
				postdata.page = 1;
				return postdata;
			},
		   	url:'valiateUserName',
			datatype: "json",
		   	colNames:['Inv No','Date', 'Client', 'Amount','Tax','Total','Notes'],
		   	colModel:[
		   		{name:'id',index:'id', width:55},
		   		{name:'invdate',index:'invdate', width:90},
		   		{name:'name',index:'name asc, invdate', width:100},
		   		{name:'amount',index:'amount', width:80, align:"right"},
		   		{name:'tax',index:'tax', width:80, align:"right"},
		   		{name:'total',index:'total', width:80,align:"right"},
		   		{name:'note',index:'note', width:150, sortable:false}
		   	],
		   	rowNum:10,
		    width:700,
		   	rowList:[10,20,30],
		   	pager: '#pjqgajax',
		   	sortname: 'invdate',
		    viewrecords: true,
		    sortorder: "desc",
		    caption:"New API Example"
		});*/
		
		
		
	
})
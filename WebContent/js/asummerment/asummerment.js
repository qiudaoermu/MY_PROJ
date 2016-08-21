
	
$.assumnet = function(){
	
	this.init =function(){
			$('.mainContent').html('');
			$.get('asummerment.jsp',function(html){
				
				var link = $("<link>");
				link.attr({rel:"stylesheet",href:"css/assument/assument.css"});
				$("head").append(link)
				
				
				
				$('.mainContent').html(html);
				
				var index = $(".config ul.content li").index();
				
				$(".config ul.title li").each(function(i){
					$(this).bind("click",function(){
						$(".config ul.title li").eq(i).addClass("on").siblings().removeClass("on")
						$(".config ul.content li").eq(i).addClass("show").siblings().removeClass("show")
						
					})
					
					
				})
				
				$(".startAssument").bind("click",function(){
					
					$(".config").fadeOut();
					$(".process").fadeIn("slow",function(){
						process();
						
					});
					$(".asummerment").bind("click",function(){
							console.log("assumnet")
							return false;
					})
					
				})	
				var process = function(){
					$.ajax({
						url:"getJson.action",
						
						type:"POST"
						
					}).done(function(data){
						
						var rows = data.rows;					
						initJq(rows)
					})
					
				}
					
					
					
					
					
					var initJq = function(rows){
						 var data = {price: "200.00",orderdate: "2013-10-01", vat: "10.00", customer: "customer" };
						
						 var data2 = {customer: "customer" }
						// console.log(data);
						// console.log(callback)
					     var gidData = rows;
					    theGrid = $("#theGrid")
					       
				
					    theGrid.jqGrid({
					        datatype: 'local',
					        data: gidData,
					       
					        colModel: [
					             {name: 'customer',  width: 55,align:'center'},
					             {name: 'orderdate',  width: 55, align: 'center'},
					             {name: 'price',  width: 55,align:'center'},
					             {name:'vat',width:55,align: 'center'}
					        ],

					        rowNum:10,
					        rowList: [5, 10, 15],
					        pager: '#gridPager',
					        caption: 'Preserving Selection on Client-side sorting',
							width:'1250',
					        height: '100%',
					        
					    });	
				}
			})	
			
	}

}
var assumnet1 = new $.assumnet();
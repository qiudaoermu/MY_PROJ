
	
$.assumnet = function(){
	
	this.init =function(){
			$('.mainContent').html('');
			$.get('asummerment.jsp',function(html){
				
				/*var link = $("<link>");
				link.attr({rel:"stylesheet",href:"css/assument/assument.css"});
				$("head").append(link)*/
				utilS.loadCss($("head"),"css/assument/assument.css")
				
				$.ajax({
					url:"queryStates.action",
					type:"POST"
					
				}).done(function(data){
						var state =data;
						console.log(data.states);
						var state = data.states;
						if(state=="finish"){
							
							console.log("完成状态")
							
							$(".reuslt").show();
							
						}else if(state="config"){
							
							$(".config").show();
							
						}
											
				})
				
				
				
				$('.mainContent').html(html);
				
				var index = $(".config ul.content li").index();
				
				$(".config ul.title li").each(function(i){
					$(this).bind("click",function(){
						$(".config ul.title li").eq(i).addClass("on").siblings().removeClass("on")
						$(".config ul.content>li").eq(i).addClass("show").siblings().removeClass("show")
						
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
						initJq(rows);
					    $(".ui-jqgrid tr.jqgrow td").each(function(){
							
							
							var attr = $(this).attr("title")
							if(attr.indexOf("img")!=-1){
								
								//console.log($(this).attr("class","process"))
								$(this).addClass("procss")
								$('.procss').html("");
								var div = $("<div></div>");
								//div.className = "toolProcess";
								div.attr("class","toolProcess")
								$('.procss').append(div)
								/*$(".process").each(function(){
									
									$(this).html("");
								})*/
							}
						})
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
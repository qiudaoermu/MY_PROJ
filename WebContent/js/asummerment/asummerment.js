
	
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
						changeWidth();
						
					});
					$(".asummerment").bind("click",function(){
							console.log("assumnet")
							return false;
					})
					
				})	
				var process = function(){
					$.ajax({
						url:"getJson.action",
						
						type:"POST",
						async: false
						
					}).done(function(data){
						
						var rows = data.rows;	
						console.log(rows[0].orderdate)
						initJq(rows);
						
					    $(".ui-jqgrid tr.jqgrow td").each(function(){
							
							
							var attr = $(this).attr("aria-describedby")
							if(attr.indexOf("theGrid_orderdate")!=-1){
								
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
								var index = $(".toolProcess").index();
								/*
								$(".toolProcess").each(function(i){
									var index = $(this).index();
									var width = rows[i].orderdate;
									console.log(width)
									$(".toolProcess").eq(i).css({width:width})
									
								})
								
								for(var i=0;i<$(".toolProcess").length;i++){
									var width = rows[i].orderdate;
									console.log(width)
									$(".toolProcess").eq(i).css({width:width})
								}
								*/
								
							}
							
						})
					})
					
				}
				function changeWidth(){
					
					
				
					var k=0;
						
					setTimeout(function(){
						
						
						var time = setInterval(function(){
							k++;
							if(k>40){
								
								clearInterval(time)
								k=0
							}
							$.ajax({
								url:"getWidth.action",
								
								type:"POST",
								async: false
								
							}).done(function(data){
								console.log(data)
								for(var i=0;i<$(".toolProcess").length;i++){
									$(".toolProcess").eq(i).css({width:data[i]})
								}
							})
							
						},1000)
						
					},2000)
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
					             {name: 'customer',  width: 55,align:'center' , sortable:false},
					             {name: 'orderdate',  width: 55, align: 'center',  sortable:false},
					             {name: 'price',  width: 55,align:'center',  sortable:false},
					             {name:'vat',width:55,align: 'center',  sortable:false}
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
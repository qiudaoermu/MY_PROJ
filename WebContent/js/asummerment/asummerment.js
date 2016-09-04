
	
$.assumnet = function(){
	
	this.init =function(){
			$('.mainContent').html('');
			$.get('asummerment.jsp',function(html){
				
				/*var link = $("<link>");
				link.attr({rel:"stylesheet",href:"css/assument/assument.css"});
				$("head").append(link)*/
			    $("head link").remove();
			  
				utilS.loadCss($("head"),"css/assument/assument.css?"+version)
				
				$.ajax({
					url:"queryStates.action",
					type:"POST"
					
				}).done(function(data){
						var state =data;
						console.log(data.states);
						var state = data.states;
						$(".reuslt").show();
						
						/*if(state=="finish"){
							
							console.log("完成状态")
							
							$(".reuslt").show();
							
						}else if(state="config"){
							
							$(".config").show();
							
						}*/
											
				})
				
				
				
				
				
				$('.mainContent').html(html);
				
				var index = $(".config ul.content li").index();
				
				
				$(".config ul.title li").bind("click",function(){
					var index = $(this).index();
					$(".config ul.title li").eq(index).addClass("on").siblings().removeClass("on")
					$(".config ul.content>li").eq(index).addClass("show").siblings().removeClass("show")
					
				})
					
				
				
				
				
			
				$(".config ul.content>li ul.content2 li").bind("click",function(){
					var index = $(this).index();
					$(".config ul.content>li ul.content2 li").eq(index).addClass("on").siblings().removeClass("on")
					$(".config ul.content>li ul.content2-right>li").eq(index).addClass("show").siblings().removeClass("show")
					
				})
				
				
				
				
				$("#slider").slider({
					
					min:0,
					max:500,
					animate:true,
					values:[75,300],
					range:"max",
					step:50
					
				});
				
				/**
				 * 配置审计初始化
				 */
				 $.get("jsp/content0.jsp",function(data){
							 $(".aslDataContent").html(data)
							 $(".config ul.content>li ul.wangluo li").each(function(i){
							//console.log("wangluo")
							$(this).bind("click",function(){
								$(".config ul.content>li ul.wangluo li").eq(i).addClass("on").siblings().removeClass("on")
								$(".wangluoCheck").eq(i).addClass("on").siblings().removeClass("on")
								
							})
						})
				 })
				 
				
				
				 //$(".config ul.content>li .askData>ul>li").eq(i).attr("x",thisX)
				 /*
				 $(".config ul.content>li .askData>ul>li").each(function(){
					 
					 $(".config ul.content>li .askData>ul>li").eq(index).attr("x",thisX )
				 })
				 */
				 var arr = [];
				
				 arr[0] = {arr2:[],a:[0,[],[],[],[],[]]};
				 arr[1] = {arr2:[],a:[0,[],[],[],[],[]]};
				 arr[2] = {arr2:[],a:[0,[],[],[],[],[]]};
				 arr[3] = {arr2:[],a:[0,[],[],[],[],[]]};
				 arr[4] = {arr2:[],a:[0,[],[],[],[],[]]};
				 
				 var index = 0;
				 $(".config ul.content>li .askData>ul>li").bind("click",function(){
					   
						 index = $(this).index();
					
						 $(".config ul.content>li .askData>ul>li").eq(index).addClass("on").siblings().removeClass("on")
						 $.get("jsp/content"+index+".jsp",function(data){
							 $(".aslDataContent").html(data)
					 		
							
							$(".config ul.content>li ul.wangluo>li").bind("click",function(){
								
								index2 = $(this).index();
								
								//debugger;
								//thisX = index2;
								//arr[index] = index2;
							
								arr[index].a[0] = index2
							
								
								//debugger;
								$(".config ul.content>li ul.wangluo>li").eq(index2).addClass("on").siblings().removeClass("on")
								$(".config ul.content>li ul.wangluo>li .wangluoCheck").removeClass("on")
								$(".config ul.content>li ul.wangluo>li").eq(index2).find(".wangluoCheck").addClass("on").siblings().removeClass("on")

							});
							// debugger;
							 $(".config ul.content>li ul.wangluo>li").eq(arr[index].a[0]).addClass("on").siblings().removeClass("on");

							
							//console.log(arr[index].a[1])
							//console.log(arr[index].a[arr[index].a[0]][1])
							//console.log($(".wangluo>li").eq(arr[index].a[0]).find(".wangluoCheck li").eq(2).find("input"))
							//debugger;
							 $(".wangluo>li").eq(1).find(".wangluoCheck li").eq(0).find("input").attr("checked","checked");
							console.log(arr[index].a[arr[index].a[0]])
							 function callback(){
								 $(".wangluo>li").eq(1).find(".wangluoCheck li").eq(1).find("input").attr("checked","checked");
								 //console.log(arr[index].a[arr[index].a[0]].length)
								var length = arr[index].a[arr[index].a[0]].length;
								 debugger;
								var leng2 = 2;
								 for(var i=0;i<2;i++){

									 		debugger;
									 		var n = arr[index].a[0]
									 		console.log(n+","+i)
									 		//console.log($(".wangluo>li").eq(1).find(".wangluoCheck li").eq(2).find("input"))
									 		//$(".wangluo>li").eq(n).find(".wangluoCheck li").eq(i).find("input").attr("checked","checked");
									 		$(".wangluo>li").eq(arr[index].a[0]).find(".wangluoCheck li").eq(i).find("input").attr("checked","checked");
									 		
									 		debugger;
									 	
								 }
								
							 }
							 callback();
							 
							 $(".wangluoCheck li input[type=checkbox]").click(function(){
									
									var i =  $(this).parent().index();
									arr[index].a[arr[index].a[0]][i] = $(this).attr("checkno")
										console.log(index+":"+arr[index].a[0]+":"+arr[index].a[arr[index].a[0]])
										//
									 //$(".wangluo>li").eq(2).find(".wangluoCheck li").eq(0).find("input").attr("checked","checked");
										
							 })
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
								var html = "<div class='toolProcess'><div class='tool'></div></div>"
								//div.className = "toolProcess";
								//div.attr("class","toolProcess")
								$('.procss').html(html)
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
								for(var i=0;i<$(".tool").length;i++){
									$(".tool").eq(i).css({width:data[i]})
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
					
					
					 var myChart = echarts.init(document.getElementById('anlyseCircle'),"macarons");
					 setTimeout(function(){
			            	var myChart = echarts.init(document.getElementById('anlyseCircle'),"macarons");
			            	myChart.setOption(option);
			            	$("#anlyseCircle").css({"position":"absolute"})
			            },500)
					 option = {
							    tooltip: {
							        trigger: 'item',
							        formatter: "{a} <br/>{b}: {c} ({d}%)"
							    },
							    grid: {
							        left: '3%',
							        right: '4%',
							        top: '0%',
							        containLabel: true
							    },
							    legend: {
							        orient: 'vertical',
							        x: 'left',
							        y:"middle",
							        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
							    },
							    series: [
							        {
							            name:'访问来源',
							            type:'pie',
							            radius: ['50%', '70%'],
							            avoidLabelOverlap: false,
							            label: {
							                normal: {
							                    show: false,
							                    position: 'center'
							                },
							                emphasis: {
							                    show: true,
							                    textStyle: {
							                        fontSize: '30',
							                        fontWeight: 'bold'
							                    }
							                }
							            },
							            labelLine: {
							                normal: {
							                    show: false
							                }
							            },
							            data:[
							                {value:335, name:'直接访问'},
							                {value:310, name:'邮件营销'},
							                {value:234, name:'联盟广告'},
							                {value:135, name:'视频广告'},
							                {value:1548, name:'搜索引擎'}
							            ]
							        }
							    ]
							};

					 myChart.setOption(option);
					 
					 
					 
					 var gidData = [
					                {id: "1", orderdate: "2013-10-01", customer: "customer",  price: "200.00", vat: "10.00", completed: true, shipment: "TN", total: "210.00"},
					                {id: "2", orderdate: "2013-10-02", customer: "customer2",  price: "300.00", vat: "20.00", completed: false, shipment: "FE", total: "320.00"},
					                {id: "3", orderdate: "2011-07-30", customer: "customer3",  price: "400.00", vat: "30.00", completed: false, shipment: "FE", total: "430.00"},
					                {id: "4", orderdate: "2013-10-04", customer: "customer4",  price: "200.00", vat: "10.00", completed: true, shipment: "TN", total: "210.00"},
					                {id: "5", orderdate: "2013-11-31", customer: "customer5",  price: "300.00", vat: "20.00", completed: false, shipment: "FE", total: "320.00"},
					              
					            ],
					            theGrid = $("#theGrid2"),
					            numberTemplate = {formatter: 'number', align: 'right', sorttype: 'number'},
					            horizontalScrollPosition = 0,
					            selectedRow = null,
					            saveSelectedRow = function () {
					                var $grid = $(this);
					                selectedRow = $grid.jqGrid('getGridParam', 'selrow');

					                horizontalScrollPosition = this.grid.bDiv.scrollLeft;
					            },
					            selectSavedRow = function () {
					                var $grid = $(this);

					                if (selectedRow) {
					                    $grid.jqGrid("setSelection", selectedRow, false);
					                    selectedRow = null;
					                }
					                this.grid.bDiv.scrollLeft = horizontalScrollPosition;
					            };
					            theGrid.jqGrid({
					            		        datatype: 'local',
					            		        data: gidData,

					            		        colModel: [
					            		            {name: 'customer', index: 'customer', width: 100, heihgt:'100%',dataheight:200, sortable:false},
					            		            {name: 'orderdate', index: 'orderdate', width: 100, align: 'center', sorttype: 'date',
					            		                formatter: 'date', formatoptions: {newformat: 'd-M-Y'}, datefmt: 'd-M-Y', sortable:false},
					            		            {name: 'price', index: 'price', width: 55, template: numberTemplate, sortable:false},
					            		            {name: 'vat', index: 'vat', width: 45, template: numberTemplate, sortable:false}
					            		           
					            		        ],
					            		        gridview: true,
					            		        rownumbers: true,
					            		        sortname: 'orderdate',
					            		        viewrecords: true,
					            		        sortorder: 'desc',
					            		      
					            				width:'500',
					            		        height:'auto',
					            		        onSortCol: function () {
					            		            saveSelectedRow.call(this);
					            		        },
					            		        loadComplete: function () {
					            		        	console.log("loadComplete");
					            		        	$("#theGrid2 tbody tr").not(":first").css({
					            		        		
					            		        		height:30
					            		        	})
					            		        }
					            		    });
					            
					           
					            
					            
					        
					            option2 = {
					                tooltip : {
					                    trigger: 'axis',
					                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					                    }
					                },
					                grid: {
					                    left: '1%',
					                    right: '2%',
					                    bottom: '13%',
					                    top:"5%",
					                    containLabel: true
					                },
					                legend: {
					                	   x:"center",
					                       y:"bottom",
					                    data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
					                },
					               
					                xAxis:  {
					                    type: 'value'
					                },
					                yAxis: {
					                    type: 'category',
					                    data: ['周一','周二','周三','周四','周五','周六','周日']
					                },
					                series: [
					                    {
					                        name: '直接访问',
					                        type: 'bar',
					                        stack: '总量',
					                        label: {
					                            normal: {
					                                show: true,
					                                position: 'insideRight'
					                            }
					                        },
					                        data: [320, 302, 301, 334, 390, 330, 320]
					                    },
					                    {
					                        name: '邮件营销',
					                        type: 'bar',
					                        stack: '总量',
					                        label: {
					                            normal: {
					                                show: true,
					                                position: 'insideRight'
					                            }
					                        },
					                        data: [120, 132, 101, 134, 90, 230, 210]
					                    },
					                    {
					                        name: '联盟广告',
					                        type: 'bar',
					                        stack: '总量',
					                        label: {
					                            normal: {
					                                show: true,
					                                position: 'insideRight'
					                            }
					                        },
					                        data: [220, 182, 191, 234, 290, 330, 310]
					                    },
					                    {
					                        name: '视频广告',
					                        type: 'bar',
					                        stack: '总量',
					                        label: {
					                            normal: {
					                                show: true,
					                                position: 'insideRight'
					                            }
					                        },
					                        data: [150, 212, 201, 154, 190, 330, 410]
					                    },
					                    {
					                        name: '搜索引擎',
					                        type: 'bar',
					                        stack: '总量',
					                        label: {
					                            normal: {
					                                show: true,
					                                position: 'insideRight'
					                            }
					                        },
					                        data: [820, 832, 901, 934, 1290, 1330, 1320]
					                    }
					                ]
					            };
					            
					            	
					            setTimeout(function(){
					            	var mytool = echarts.init(document.getElementById('anlysetool'),"macarons");
					             	 mytool.setOption(option2);
					                 console.log(mytool)
					            },500)
					              
					            
					           
					
			})	
			
	}

}
var assumnet1 = new $.assumnet();
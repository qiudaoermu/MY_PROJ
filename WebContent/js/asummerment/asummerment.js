
	
$.assumnet = function(){
	
	this.init =function(){
			$('.mainContent').html('');
			$.get('asummerment.jsp',function(html){
				
					
				$('.mainContent').html(html);
					$.ajax({
						url:"getJson.action",
						
						type:"POST"
						
					}).done(function(data){
						
						var rows = data.rows;
						
						var intijgrid = function(callback){
								 var data = {price: "200.00",orderdate: "2013-10-01", vat: "10.00", customer: "customer" };
								
								 var data2 = {customer: "customer" }
								// console.log(data);
								// console.log(callback)
							     var gidData = rows,
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
						intijgrid(rows)
					})
			})	
			
	}

}
var assumnet1 = new $.assumnet();

	
	
	
$.uploader = function(){
	this.init = function(){
		
		$('.mainContent').html('');
		$.get('uploader.jsp',function(html){
			//console.log(html)
			$('.mainContent').html(html)
			
			 theGrid = $("#theGrid")
		       
		var gidData = [
            { orderdate: "2013-10-01", customer: "宁夏",  price: "200.00"},
           
        ]  
			    theGrid.jqGrid({
			        datatype: 'local',
			        data: gidData,
			       
			        colModel: [
			             {name: 'customer',  align:'center' , sortable:false},
			             {name: 'orderdate',   align: 'center',  sortable:false},
			             {name: 'price',  align:'center',  sortable:false},
			            
			        ],

					width:'1200',
			        height: '100%',
			        hoverrows:false,
			        gridComplete : function(){
			        	
			        	console.log("gridComplete")
			        	
			        	$("#theGrid tbody tr").not(':first').css({
					            		        			height : 30
					            		        		
					            		        	})
			        }

			    });	
			
		})
		
	}
	
	
}	
var uploader1 = new $.uploader();
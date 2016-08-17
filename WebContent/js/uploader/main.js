define(['jquery','jqueryUI','i18n','jqGrid'],function($){
	
	console.log('**-uploader-**')
	console.log($('#theGrid'))
			
	console.log('**-ready-**')
			
	var intijgrid = function(){
		     var gidData = [
		            {id: "1", orderdate: "2013-10-01", customer: "customer",  price: "200.00", vat: "10.00", completed: true, shipment: "TN", total: "210.00"},
		            {id: "2", orderdate: "2013-10-02", customer: "customer2",  price: "300.00", vat: "20.00", completed: false, shipment: "FE", total: "320.00"},
		            {id: "3", orderdate: "2011-07-30", customer: "customer3",  price: "400.00", vat: "30.00", completed: false, shipment: "FE", total: "430.00"},
		            {id: "4", orderdate: "2013-10-04", customer: "customer4",  price: "200.00", vat: "10.00", completed: true, shipment: "TN", total: "210.00"},
		            {id: "5", orderdate: "2013-11-31", customer: "customer5",  price: "300.00", vat: "20.00", completed: false, shipment: "FE", total: "320.00"},
		            {id: "6", orderdate: "2013-09-06", customer: "customer6",  price: "400.00", vat: "30.00", completed: false, shipment: "FE", total: "430.00"},
		            {id: "7", orderdate: "2011-08-30", customer: "customer7",  price: "200.00", vat: "10.00", completed: true, shipment: "TN", total: "210.00"},
		            {id: "8", orderdate: "2013-10-03", customer: "customer8",  price: "300.00", vat: "20.00", completed: false, shipment: "FE", total: "320.00"},
		            {id: "9", orderdate: "2013-09-01", customer: "customer9",  price: "400.00", vat: "30.00", completed: false, shipment: "TN", total: "430.00"},
		            {id: "10", orderdate: "2013-09-08", customer: "customer10", price: "500.00", vat: "30.00", completed: true, shipment: "IN", total: "530.00"},
		            {id: "11", orderdate: "2013-09-08", customer: "customer11",  price: "500.00", vat: "30.00", completed: false, shipment: "FE", total: "530.00"},
		            {id: "12", orderdate: "2013-09-10", customer: "customer12",  price: "500.00", vat: "30.00", completed: false, shipment: "FE", total: "530.00"}
		        ],
		    theGrid = $("#theGrid")
		       
	
		    theGrid.jqGrid({
		        datatype: 'local',
		        data: gidData,
		        colNames: ['Customer', 'Date', 'Price','vat'],
		        colModel: [
		            {name: 'customer',  width: 55,align:'center'},
		            {name: 'orderdate',  width: 55, align: 'center'},
		            {name: 'price',  width: 55,align:'center'},
		            {name:'vat',width:55,align: 'center'}
		        ],

		        rowNum:5,
		        rowList: [5, 10, 15],
		        pager: '#gridPager',
		        caption: 'Preserving Selection on Client-side sorting',
				width:'1250',
		        height: '100%',
		     
		       
		    });
	}
	var init = function(){
		
		$.get('uploader.jsp',function(html){
			
			$('.mainContent').html(html);
				intijgrid()
				console.log('callbacll')
			
			
		})	

	}
	return {init:init}
})
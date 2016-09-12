








$.capable = function(){

	this.init = function(){
  var mark = true;
	var json = [
				{"CustomerID":"ALFKI","CompanyName":"Alfreds Futterkiste","ContactName":"Maria Anders","Phone":"030-0074321","City":"Berlin"},
				{"CustomerID":"ANATR","CompanyName":"Ana Trujillo Emparedados y helados","ContactName":"Ana Trujillo","Phone":"(5) 555-4729","City":"M\u00e9xico D.F."},
				{"CustomerID":"ANTON","CompanyName":"Antonio Moreno Taquer\u00eda","ContactName":"Antonio Moreno","Phone":"(5) 555-3932","City":"M\u00e9xico D.F."},
				{"CustomerID":"BLAUS","CompanyName":"Blauer See Delikatessen","ContactName":"Hanna Moos","Phone":"0621-08460","City":"Mannheim"},
				{"CustomerID":"BLONP","CompanyName":"Blondel p\u00e8re et fils","ContactName":"Fr\u00e9d\u00e9rique Citeaux","Phone":"88.60.15.31","City":"Strasbourg"},
				{"CustomerID":"BONAP","CompanyName":"Bon app'","ContactName":"Laurence Lebihan","Phone":"91.24.45.40","City":"Marseille"},
				{"CustomerID":"BOTTM","CompanyName":"Bottom-Dollar Markets","ContactName":"Elizabeth Lincoln","Phone":"(604) 555-4729","City":"Tsawassen"},
				{"CustomerID":"BSBEV","CompanyName":"B's Beverages","ContactName":"Victoria Ashworth","Phone":"(171) 555-1212","City":"London"},
				{"CustomerID":"CACTU","CompanyName":"Cactus Comidas para llevar","ContactName":"Patricio Simpson","Phone":"(1) 135-5555","City":"Buenos Aires"},
				{"CustomerID":"CHOPS","CompanyName":"Chop-suey Chinese","ContactName":"Yang Wang","Phone":"(5) 555-3392","City":"Bern"}

			]

	var json2 = [
				{"OrderID":"11011","RequiredDate":"1998-05-07 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"1.2100"},
				{"OrderID":"10952","RequiredDate":"1998-04-27 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"40.4200"},
				{"OrderID":"10835","RequiredDate":"1998-02-12 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"69.5300"},
				{"OrderID":"10702","RequiredDate":"1997-11-24 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"23.9400"},
				{"OrderID":"10692","RequiredDate":"1997-10-31 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"61.0200"},
				{"OrderID":"10643","RequiredDate":"1997-09-22 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"29.4600"},
				{"OrderID":"11011","RequiredDate":"1998-05-07 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"1.2100"},
				{"OrderID":"10952","RequiredDate":"1998-04-27 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"40.4200"},
				{"OrderID":"10835","RequiredDate":"1998-02-12 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"69.5300"},
        {"OrderID":"11011","RequiredDate":"1998-05-07 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"1.2100"},
        {"OrderID":"10952","RequiredDate":"1998-04-27 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"40.4200"},
        {"OrderID":"10835","RequiredDate":"1998-02-12 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"69.5300"},
        {"OrderID":"10702","RequiredDate":"1997-11-24 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"23.9400"},
        {"OrderID":"10692","RequiredDate":"1997-10-31 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"61.0200"},
        {"OrderID":"10643","RequiredDate":"1997-09-22 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"29.4600"},
        {"OrderID":"11011","RequiredDate":"1998-05-07 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"1.2100"},
        {"OrderID":"10952","RequiredDate":"1998-04-27 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"40.4200"},
        {"OrderID":"10835","RequiredDate":"1998-02-12 00:00:00","ShipName":"Alfreds Futterkiste","ShipCity":"Berlin","Freight":"69.5300"}

			]
	var json3 = [
         		{"OrderID":"10643","ProductID":"28","Quantity":"15","UnitPrice":"45.6000"},
         		{"OrderID":"10643","ProductID":"39","Quantity":"21","UnitPrice":"18.0000"},
         		{"OrderID":"10643","ProductID":"46","Quantity":"2","UnitPrice":"12.0000"},
         		{"OrderID":"10643","ProductID":"28","Quantity":"15","UnitPrice":"45.6000"},
         		{"OrderID":"10643","ProductID":"39","Quantity":"21","UnitPrice":"18.0000"},
         		{"OrderID":"10643","ProductID":"46","Quantity":"2","UnitPrice":"12.0000"},
         		{"OrderID":"10643","ProductID":"28","Quantity":"15","UnitPrice":"45.6000"},
         		{"OrderID":"10643","ProductID":"39","Quantity":"21","UnitPrice":"18.0000"},
         		{"OrderID":"10643","ProductID":"46","Quantity":"2","UnitPrice":"12.0000"},
            {"OrderID":"10643","ProductID":"28","Quantity":"15","UnitPrice":"45.6000"},
            {"OrderID":"10643","ProductID":"39","Quantity":"21","UnitPrice":"18.0000"},
            {"OrderID":"10643","ProductID":"46","Quantity":"2","UnitPrice":"12.0000"},
            {"OrderID":"10643","ProductID":"28","Quantity":"15","UnitPrice":"45.6000"},
            {"OrderID":"10643","ProductID":"39","Quantity":"21","UnitPrice":"18.0000"},
            {"OrderID":"10643","ProductID":"46","Quantity":"2","UnitPrice":"12.0000"},
            {"OrderID":"10643","ProductID":"28","Quantity":"15","UnitPrice":"45.6000"},
            {"OrderID":"10643","ProductID":"39","Quantity":"21","UnitPrice":"18.0000"},
            {"OrderID":"10643","ProductID":"46","Quantity":"2","UnitPrice":"12.0000"}
         	]

			$("#jqGrid3").jqGrid({
				data: json,

		        datatype: 'local',
		        page: 1,
		        colModel: [
		            { label: 'ID', name: 'CustomerID', key: true, width: 75,sortable:false},
		            { label: 'Company Name', name: 'CompanyName', width: 120 ,sortable:false},
		            { label: 'Contact Name', name: 'ContactName', width: 120 ,sortable:false},
		            { label: 'Phone', name: 'Phone', width: 120,sortable:false },
		            { label: 'City', name: 'City', width: 120,sortable:false }
		        ],
			    	loadonce: true,
		        width: 1200,
		        height: "auto",
		        rowNum: 20,
            viewrecords: true,
            rownumbers: true,
		        subGrid: true, // set the subGrid property to true to show expand buttons for each row
		        subGridRowExpanded: showChildGrid, // javascript function that will take care of showing the child grid


		        gridComplete : function(){
		        //	debugger;

		        	$(".wangluo .ui-jqgrid-labels").css({

		        		height:35
		        	})
              $(".ui-jqgrid-htable").width(1200)

		        	$("#jqGrid3 tbody tr").not(":first").css({
					           height:35
					     })
		        }
		    });


	  function showChildGrid(parentRowID, parentRowKey) {
          var childGridID = parentRowID + "_table";
          var childGridPagerID = parentRowID + "_pager";

          // send the parent row primary key to the server so that we know which grid to show
          var childGridURL = parentRowKey+".json";

          // add a table and pager HTML elements to the parent grid row - we will render the child grid here
          $('#' + parentRowID).append('<table id=' + childGridID + '></table><div id=' + childGridPagerID + ' class=scroll></div>');
          console.log(parentRowID)
          $("#" + childGridID).jqGrid({
              data: json2,
              mtype: "GET",
              datatype: 'local',
              page: 1,
              colModel: [
                  { label: 'Order ID', name: 'OrderID', key: true, width: 75 },
                  { label: 'Required Date', name: 'RequiredDate', width: 100 },
                  { label: 'Ship Name', name: 'ShipName', width: 100 },
                  { label: 'Ship City', name: 'ShipCity', width: 100 },
                  { label: 'Freight', name: 'Freight', width: 75 }
              ],
				      loadonce: true,
              width: 1200,
              rownumbers: true,
              rowNum: 15,
              height: '100%',
              subGrid: true, // set the subGrid property to true to show expand buttons for each row
              subGridRowExpanded: showThirdLevelChildGrid, // javascript function that will take care of showing the child grid
              pager: "#" + childGridPagerID,
              gridComplete : function(){
               // debugger;
                if(!mark){
                  $(".ui-subgrid").remove()

                }

                $(".wangluo .ui-jqgrid-labels").css({

                  height:35

                })



               $(".ui-jqgrid .ui-subgrid table tbody tr").not(":first").css({
                         height:35
               })
               // mark = false;
		        }

          });

      }

      // the event handler on expanding parent row receives two parameters
      // the ID of the grid tow  and the primary key of the row


      function showThirdLevelChildGrid(parentRowID, parentRowKey) {
          var childGridID = parentRowID + "_table";
          var childGridPagerID = parentRowID + "_pager";

          // send the parent row primary key to the server so that we know which grid to show
          var childGridURL = "child3.json";

          // add a table and pager HTML elements to the parent grid row - we will render the child grid here
          $('#' + parentRowID).append('<table id=' + childGridID + '></table><div id=' + childGridPagerID + ' class=scroll></div>');

          $("#" + childGridID).jqGrid({
              data:json3,
              mtype: "GET",
              datatype: "local",
              colModel: [
                  { label: 'Order ID', name: 'OrderID', key: true, width: 75, hidden: true },
                  { label: 'Product ID', name: 'ProductID', width: 100 },
				        	{ label: 'Quantity', name: 'Quantity', width: 100 },
                  { label: 'Unit Price', name: 'UnitPrice', width: 100 },
                  {
                    label: 'Total',
                    name: 'Total',
                    width: 100,
                    sortable:false,
                    formatter: function( cellValue, options, row) {   // custom calculations at client side
                      return parseFloat(row.Quantity)*parseFloat(row.UnitPrice);
                    }
                  }
              ],
              rownumbers: true,
			      	loadonce: true,
              width: 1200,
              rowNum: 15,
              height: '100%',
              pager: "#" + childGridPagerID,
              gridComplete : function(){
		        	debugger;

              $(".ui-jqgrid .ui-subgrid table tbody tr").not(":first").css({
                       height:35
               })

               $(".ui-jqgrid .ui-subgrid table tbody tr.jqgfirstrow").css({
                       height:0
               })
		        }
          });

      }

	}
}

	var capable1 = new $.capable();
	//capable1.init();
	debugger;
	console.log("capable")




$.util = function(){
	this.loadCss = function(root,src){
		var link = $("<link>");
		link.attr({rel:"stylesheet",href:src});
		root.append(link)
		
	}
	
}
var utilS = new $.util();
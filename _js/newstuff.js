// load document and put boxes around various elements
$("document").ready( function  () {
	
	var mylist = $("#mylist").html();
	alert(mylist);
	
	var newPar = $("<span><strong><em>This is new stuff</em></strong></span>");
	$("ul li:last-child").html(newPar.html());
	
	$("p").wrap("<div style = 'color:blue; font-size:150%; text-align:center' />");

});

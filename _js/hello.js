// load document and put boxes around various elements
$("document").ready( function  () {
	//$("ul li:first-child").css("border", "solid blue 3px");
	//$("ul li:nth-child(even)").css("border", "solid red 8px");
	//$("#mylist").css("border", "solid green 5px");
	//$("ul li:last-child").css("border", "solid maroon 20px");
	
	// declare variables
	var leftmargin = 0;
	var border = 3;
	var padding = 5;
	var fontsize = 100;
	var r = 25;
	var g = 100;
	var b = 175;
	var height = 100;
	
	// find each <p> tag and change its css properties using a function and an "each" selector
	$("p").each (function(){
	$(this).css("border", border + "px solid red");
	$(this).css("margin-left", leftmargin);
	$(this).css("padding-bottom", padding + "px");
	$(this).css("font-size", fontsize + "%");
	$(this).css("color", "rgb(" + r + "," + g + "," + b + ")");
	$(this).css("line-height", height + "%");
	
	//increment 
	border += 2;
	leftmargin += 10;
	padding += 10;
	fontsize += 15;
	r += 25;
	g += 60;
	b -= 55; 
	height += 50;
	});

});

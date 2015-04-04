var main = function() {

$(".grid").click(function(){
$(".container").empty();	
var col = prompt("How many rows");
var row = prompt("How many rows");
var colWidth= Math.floor(1000/col);
console.log(colWidth);
 for(i=0;i<row;i++){
    $('.container').append( '<tr></tr>' );
 }
 for(i=0;i<col;i++){
    $("tr").append("<td></td>");
 }
 $("td").width(colWidth).height(colWidth);
})
$(".container").on("mouseenter","td",function(){
$(this).css("background-color", getColor());
});
function getColor() {
	var red = Math.floor((Math.random()*255)+1);
	var green = Math.floor((Math.random()*255)+1);
	var blue = Math.floor((Math.random()*255)+1);
	return "rgb(" + red + "," + green + "," + blue + ")";

	}
}
$(document).ready(main);

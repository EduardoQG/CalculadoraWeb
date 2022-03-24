$(document).ready(function() {
	$(".button-number").click(function() {
		let valueToDisplay = $("#display").val() === "0" ? $(this).html() : $("#display").val() + $(this).html();
		$("#display").val(valueToDisplay);
	});
});

function clearDisplay(){
	$("#display").val("0");
}

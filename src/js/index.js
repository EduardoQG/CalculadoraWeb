$(document).ready(function() {
	$(".button-number").click(function() {
		let valueToDisplay = $("#display").val() === "0" ? $(this).html() : $("#display").val() + $(this).html();
		// Se usan operadores ternarios. Si el valor de display es 0, se almacena lo que se ha pulsado; si no es 0, se suma a lo anterior.
		$("#display").val(valueToDisplay);
	});
});

function clearDisplay(){
	$("#display").val("0");
	acumuado=0;
}

let acumulado;

function sum(){
   
	acumulado=parseInt($("#display").val())+parseInt(acumulado);
	$("#display").val(0);
	
}


function result(){

	$("#display").val(parseInt(acumulado)+parseInt($("#display").val()));
    
}
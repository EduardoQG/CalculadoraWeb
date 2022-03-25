let acumulado=0;

let sumCheck=false; let restCheck=false;

$(document).ready(function() {
	$(".button-number").click(function() {
		let valueToDisplay = $("#display").val() === "0" ? $(this).html() : $("#display").val() + $(this).html();
		// Se usan operadores ternarios. Si el valor de display es 0, se almacena lo que se ha pulsado; si no es 0, se suma a lo anterior.
		// 'this' hace referencia al botón pulsado, y .html hace referencia a lo que hay escrito dentro del botón
		$("#display").val(valueToDisplay);
	});
});

function reset(){
	
	$("#display").val("0");
	
	acumulado=0;

	sumCheck=false; restCheck=false;
}


function result(){

	if(sumCheck){$("#display").val(parseInt(acumulado)+parseInt($("#display").val()));}
    if(restCheck){$("#display").val(parseInt(acumulado)-parseInt($("#display").val()));}
}

function sum(){
   
	if(sumCheck){acumulado=parseInt($("#display").val())+parseInt(acumulado);}
	else if(restCheck){acumulado=parseInt(-1*(($("#display").val()))+parseInt(acumulado));}
	else {acumulado=parseInt($("#display").val())}

	$("#display").val(0);
	
	sumCheck=true; restCheck=false;
}

function rest(){
	
	if(sumCheck){acumulado=parseInt($("#display").val())+parseInt(acumulado);}
	else if(restCheck){acumulado=parseInt(-1*(($("#display").val()))+parseInt(acumulado));}
	else{acumulado=parseInt($("#display").val())}
	$("#display").val(0);

	sumCheck=false; restCheck=true;


}



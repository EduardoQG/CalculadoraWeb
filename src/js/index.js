let acumulado=0; let negativeNumberCheck=true;

let sumCheck=false; let restCheck=false; let multCheck=false; let divisionCheck=false;

$(document).ready(function() {
	$(".button-number").click(function() {
		
		negativeNumberCheck=false;
		let valueToDisplay = $("#display").val() === "0" ? $(this).html() : $("#display").val() + $(this).html();
		$("#display").val(valueToDisplay);
	});
});


function reset(){
	
	$("#display").val("0");
	
	acumulado=0;
	sumCheck=false; restCheck=false; multCheck=false; divisionCheck=false;
	negativeNumberCheck=true;
}


function result(){

	negativeNumberCheck=true;

	if(sumCheck){$("#display").val(parseFloat(acumulado)+parseFloat($("#display").val()));}
    if(restCheck){ $("#display").val(parseFloat(acumulado)-parseFloat($("#display").val()));
	}
	if(multCheck){$("#display").val(parseFloat(acumulado)*parseFloat($("#display").val()));}
    if(divisionCheck){$("#display").val(parseFloat(acumulado)/parseFloat($("#display").val()));}

	acumulado=$("#display").val();

	sumCheck=false; restCheck=false; multCheck=false; divisionCheck=false;
}

function sum(){
   
	if(sumCheck){acumulado=parseFloat($("#display").val())+parseFloat(acumulado);}
	else if(restCheck){acumulado=parseFloat(-1*(($("#display").val()))+parseFloat(acumulado));}
	else if(multCheck){acumulado=parseFloat($("#display").val())*parseFloat(acumulado);}
	else if(divisionCheck){acumulado=parseFloat(acumulado)/parseFloat($("#display").val());}
	else {acumulado=parseFloat($("#display").val())}

	$("#display").val(0);
	negativeNumberCheck=true;
	sumCheck=true; restCheck=false; multCheck=false; divisionCheck=false;
}


function rest(){
	
	if(negativeNumberCheck==true){
		$("#display").val("-");

	} else{

		if(sumCheck){acumulado=parseFloat($("#display").val())+parseFloat(acumulado);}
		else if(restCheck){acumulado=parseFloat(-1*(($("#display").val()))+parseFloat(acumulado));}
		else if(multCheck){acumulado=parseFloat($("#display").val())*parseFloat(acumulado);}
		else if(divisionCheck){acumulado=parseFloat(acumulado)/parseFloat($("#display").val());}
		else{acumulado=parseFloat($("#display").val())}

	}
	
	$("#display").val(0);
	negativeNumberCheck=true;
	sumCheck=false; restCheck=true; multCheck=false; divisionCheck=false;
}


function multiplication(){

	if(sumCheck){acumulado=parseFloat($("#display").val())+parseFloat(acumulado);}
	else if(restCheck){acumulado=parseFloat(-1*(($("#display").val()))+parseFloat(acumulado));}
	else if(multCheck){acumulado=parseFloat($("#display").val())*parseFloat(acumulado);}
	else if(divisionCheck){acumulado=parseFloat(acumulado)/parseFloat($("#display").val());}
	else{acumulado=parseFloat($("#display").val())}

	$("#display").val(0);
	negativeNumberCheck=true;
	sumCheck=false; restCheck=false; multCheck=true; divisionCheck=false;
}


function division(){

	if(sumCheck){acumulado=parseFloat($("#display").val())+parseFloat(acumulado);}
	else if(restCheck){acumulado=parseFloat(-1*(($("#display").val()))+parseFloat(acumulado));}
	else if(multCheck){acumulado=parseFloat($("#display").val())*parseFloat(acumulado);}
	else if(divisionCheck){acumulado=parseFloat(acumulado)/parseFloat($("#display").val());}
	else{acumulado=parseFloat($("#display").val())}

	$("#display").val(0);
	negativeNumberCheck=true;
	sumCheck=false; restCheck=false; multCheck=false; divisionCheck=true;
}



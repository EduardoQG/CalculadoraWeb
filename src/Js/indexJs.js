let storedDisplay="";

let displayValue=document.getElementById("display").value

function displayValues(value){

	document.getElementById("display").value=storedDisplay+value;
	storedDisplay=document.getElementById("display").value;
	alert(typeof displayValue);
	alert(typeof storedDisplay);
}



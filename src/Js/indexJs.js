let acumulado=0; var cifra="";
		
	let sumCheck=false; let restCheck=false; let multCheck=false;
	
	let firstOp=true; let divisionCheck=false;
		
	function displayNumbers(number){
		
		cifra=cifra.toString();
		
		document.getElementById("display").value=cifra+number;
		
		cifra=parseInt(document.getElementById("display").value);
		
	}
	
	function sum(){
		
		if(sumCheck || firstOp){
			acumulado=acumulado+parseInt(cifra);
		
			document.getElementById("display").value=acumulado;
		} else if(divisionCheck){
			acumulado=acumulado/parseInt(cifra);
		} else if(restCheck){
			acumulado=acumulado-parseInt(cifra);
		
			document.getElementById("display").value=acumulado;
		} else if(multCheck){
			
			acumulado=acumulado*parseInt(cifra);
		}
		
		cifra=0;
		
		sumCheck=true;
		restCheck=false;
		multCheck=false;
		firstOp=false; divisionCheck=false;
	}
		
	function rest(){
		
		if(sumCheck){
			
			acumulado=acumulado+parseInt(cifra);
			
			document.getElementById("display").value=acumulado;
		
			
		} else if(multCheck){
			
			acumulado=acumulado*parseInt(cifra);
		} else if(divisionCheck){
			acumulado=acumulado/parseInt(cifra);
		} else{
			
			if(firstOp){
				
				acumulado=parseInt(cifra);
			} else{
				acumulado=acumulado-parseInt(cifra);
			
			document.getElementById("display").value=acumulado;
			}	
		}
		cifra=0;
		restCheck=true;
		sumCheck=false;
		multCheck=false;
		firstOp=false; divisionCheck=false;
	}
		
	function multiplication(){
		
		if(firstOp){
			acumulado=1*parseInt(cifra);
		} else if(multCheck){
			acumulado=acumulado*parseInt(cifra);
		} else if(sumCheck){
			acumulado=acumulado+parseInt(cifra);
		} else if(restCheck){
			acumulado=acumulado-parseInt(cifra);
		} else if(divisionCheck){
			acumulado=acumulado/parseInt(cifra);
		}
		
		
		
		document.getElementById("display").value=acumulado;
		
		multCheck=true; divisionCheck=false;
		sumCheck=false; restCheck=false;
		cifra=0; firstOp=false;
	}
		
	function division(){
		
		if(multCheck){
			acumulado=acumulado*parseInt(cifra);
		} else if(sumCheck){
			acumulado=acumulado+parseInt(cifra);
		} else if(restCheck){
			acumulado=acumulado-parseInt(cifra);
		} else{
			if(firstOp){
				acumulado=parseInt(cifra);
			} else{
				acumulado=acumulado/parseInt(cifra);
			}
		} 
	
		
		divisionCheck=true;
		multCheck=false; sumCheck=false; restCheck=false;
		cifra=0; firstOp=false;
	}
	function solution(){
			
		if(sumCheck){
				
			document.getElementById("display").value=acumulado+parseInt(cifra);
				
		}
			
		if(restCheck){
				
			document.getElementById("display").value=acumulado-parseInt(cifra);
		}
		
		if(multCheck){
			
			document.getElementById("display").value=acumulado*parseInt(cifra);
		}
		
		if(divisionCheck){
			
			document.getElementById("display").value=acumulado/parseInt(cifra);
		}
	}
	
	
	function reset(){
			
		document.getElementById("display").value=0;
			
		acumulado=0; cifra=0; firstOp=true;
		sumCheck=false; restCheck=false; multCheck=false;
	}
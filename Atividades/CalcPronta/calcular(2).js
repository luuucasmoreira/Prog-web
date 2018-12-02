
function Calc1(calcular1){

	var num1 = parseInt(calcular1.elements[0].value);
	var operador = calcular1.elements[1].value;
	var num2 = parseInt(calcular1.elements[2].value);
	var result;

	if(num1 == ""){
		alert ("Digite o Primeiro Número");
	}

	else if(operador == ""){
		alert ("Digite o Operador");
	}

	else if(num2 == ""){
		alert ("Digite o Segundo Número");
	}
	else{
		if (operador == "+") {
			result = num1 + num2;
			document.calcular1.elements[3].value = result;
		}
		else if (operador == "-") {
			result = num1 - num2;
			document.calcular1.elements[3].value = result;
		}
		else if (operador == "*") {
			result = num1 * num2;
			document.calcular1.elements[3].value = result;
		}
		else if (operador == "/") {
			result = num1 / num2;
			document.calcular1.elements[3].value = result;
		}
		else{
			alert("operador invalido.");
		}					
	}

}

function limpar(calcular1){
	document.calcular1.elements[0].value = "";
	document.calcular1.elements[1].value = "";
	document.calcular1.elements[2].value = "";
	document.calcular1.elements[3].value = "";
}	

function Calc2(calcular2){

	var num1 = parseInt(calcular2.elements[0].value);
	var operador = calcular2.elements[1].value;
	var num2 = parseInt(calcular2.elements[2].value);
	var result;

	if(num1 == ""){
		alert ("Digite o Primeiro Número");
	}

	else if(operador == ""){
		alert ("Selecione o Operador");
	}

	else if(num2 == ""){
		alert ("Digite o Segundo Número");
	}
	else{
		if (operador == "soma") {
			result = num1 + num2;
			document.calcular2.elements[3].value = result;
		}
		else if (operador == "subtracao") {
			result = num1 - num2;
			document.calcular2.elements[3].value = result;
		}
		else if (operador == "multiplicacao") {
			result = num1 * num2;
			document.calcular2.elements[3].value = result;
		}
		else if (operador == "divisao") {
			result = num1 / num2;
			document.calcular2.elements[3].value = result;
		}
		else{
			alert("operador invalido.");
		}					
	}

}

function limpar(calcular2){
	document.calcular2.elements[0].value = "";
	document.calcular2.elements[1].value = "";
	document.calcular2.elements[2].value = "";
	document.calcular2.elements[3].value = "";
}	

function Calc3(calcular3){

	var num1 = parseInt(calcular3.elements[0].value);
	var operador = calcular3.elements[1].value;
	var num2 = parseInt(calcular3.elements[2].value);
	var result;

	if(num1 == ""){
		alert ("Digite o Primeiro Número");
	}

	else if(operador == ""){
		alert ("Selecione o Operador");
	}

	else if(num2 == ""){
		alert ("Digite o Segundo Número");
	}
	else{
		if (operador == "soma") {
			result = num1 + num2;
			document.calcular3.elements[3].value = result;
		}
		else if (operador == "subtracao") {
			result = num1 - num2;
			document.calcular3.elements[3].value = result;
		}
		else if (operador == "multiplicacao") {
			result = num1 * num2;
			document.calcular3.elements[3].value = result;
		}
		else if (operador == "divisao") {
			result = num1 / num2;
			document.calcular3.elements[3].value = result;
		}
		else if (operador == "porcentagem") {
			result = (num1 / 100) * num2;
			document.calcular3.elements[3].value = result;
		}	
		else{
			alert("operador invalido.");
		}					
	}

}

function limpar(calcular3){
	document.calcular3.elements[0].value = "";
	document.calcular3.elements[1].value = "";
	document.calcular3.elements[2].value = "";
	document.calcular3.elements[3].value = "";
}	

			function fazerreserva(formhotel){

				var dados = [];

				dados[0] = formhotel.elements[0].value;  
				dados[1] = formhotel.elements[1].value;
				dados[2] = formhotel.elements[2].value;
				dados[3] = formhotel.elements[3].value;
				dados[4] = formhotel.elements[4].value;
				dados[5] = formhotel.elements[5].value;

				if(dados[0] == ""){
					alert("Preencha o Campo Nome");
				}
				if(dados[1] == ""){
					alert("Preencha o Campo Email");
				}
				if(dados[2] == ""){
					alert("Preencha o Campo Telefone");
				}
				if(dados[3] == ""){
					alert("Preencha o Campo Quartos");
				}
				if(dados[4] == ""){
					alert("Preencha o Campo Dias");
				}
				if(dados[5] == ""){
					alert("Preencha o Campo Data");
				}
				else{
					document.getElementById("exibe").innerHTML =  dados[0];
				}
				
			}


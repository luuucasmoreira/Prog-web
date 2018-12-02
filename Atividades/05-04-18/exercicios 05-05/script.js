				function upVelo(form) {
					var valor = form.elements[1].value;
					if (valor == 300){
						document.form.aviso.value = "Velocidade máxima atingida";
					}
					else
					{
						valor = parseInt(valor) + 10;
						document.form.velo_atual.value = valor;
					}
				}

				function downVelo(form) {
					var valor = form.elements[1].value;
					if (valor <= 0){
						document.form.aviso.value = "Carro parado!";
					}
					else
					{
						valor = parseInt(valor) - 10;
						document.form.velo_atual.value = valor;
					}
				}
			
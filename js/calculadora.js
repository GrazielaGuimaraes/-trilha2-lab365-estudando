


function calculadora(tipo, valor) {


		//Pegando o input que receberá os números e operações
		let tela = document.getElementById('tela')


	if(tipo == 'numero' || valor == '+' || valor == '-' || valor == '*' || valor == '/') {

		tela.value = tela.value + valor
	}


	else {


		switch(valor){

			//limpar input
			case 'c':
			tela.value = ''
			break


			//remover ultimo caracter do input (string)
			case 'del':
			tela.value = tela.value.slice(0, -1)
			break

			//calcular todo conteúdo do input
			case '=': 
				if(tela.value = '' || tela.value == null || tela.value == undefined){
					tela.value = ''
					break
				}  else {
			tela.value = eval(tela.value)
			break
				}



		} //fim switch




} //fim else


} //fim function

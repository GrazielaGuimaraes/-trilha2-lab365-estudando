

function calculaMedia() {

	if(document.getElementById('n1').value != '' && document.getElementById('n2').value != '' && document.getElementById('n3').value != '' && document.getElementById('n4').value != ''){


		let nota1 = parseFloat(document.getElementById('n1').value)
		let nota2 = parseFloat(document.getElementById('n2').value)
		let nota3 = parseFloat(document.getElementById('n3').value)
		let nota4 = parseFloat(document.getElementById('n4').value)

		let media  =  (nota1 + nota2 + nota3 + nota4) / 4


		if(media < 6){

			document.getElementById('resultado-media').textContent = 'Média final: ' + media + ', aluno(a) reprovado(a)'
		
		} else if (media >= 6 && media < 7){

			document.getElementById('resultado-media').textContent = 'Média final: ' + media + ', aluno(a) em recuperação'
		
		} else{

			document.getElementById('resultado-media').textContent = 'Média final: ' + media + ', aluno(a) aprovado(a)'
		}




	} else {

		alert('Preencha todas as notas')
	}
}
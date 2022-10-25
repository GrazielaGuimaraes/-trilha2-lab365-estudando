


function calculaResto() {


if(document.getElementById('v1').value != '' && document.getElementById('v2').value != ''){


	let valor1 = parseFloat(document.getElementById('v1').value)
	let valor2 = parseFloat(document.getElementById('v2').value)
	let resto = valor1 / valor2
	

	if((resto % 2) == 0) {

		
		document.getElementById('resultado-resto').textContent = 'Número Par'

	} else {

		
		document.getElementById('resultado-resto').textContent = 'Número ímpar'
	}









} else{

	alert('Preencha todos os campos')
}





}
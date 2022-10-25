


function calculaImc(){

if(document.getElementById('altura').value != '' && document.getElementById('peso') != ''){

let altura = parseFloat(document.getElementById('altura').value)
let peso = parseFloat(document.getElementById('peso').value)

                                     //Duas casas depois da vírgula
let imc = (peso / (altura * altura)).toFixed(2) 


if (imc < 17) {

	document.getElementById('resultado-imc').textContent = 'Imc: ' + imc + ", muito abaixo do peso"
}

else if (imc >= 17 && imc < 18){

	document.getElementById('resultado-imc').textContent = 'Imc: ' + imc + ", abaixo do peso"
}

  else if (imc >= 18 && imc < 24.99){

  	 document.getElementById('resultado-imc').textContent = 'Imc: ' + imc + ", peso normal"
  }
    else if(imc >= 25 && imc < 30) {

    	document.getElementById('resultado-imc').textContent = 'Imc: ' + imc + ", sobrepeso"
    } 
      else if(imc >= 30 && imc < 35){

      	document.getElementById('resultado-imc').textContent = 'Imc: ' + imc + ", obesidade 1"
      } 
         else if(imc >= 35 && imc < 40) {

         	document.getElementById('resultado-imc').textContent = 'Imc: ' + imc + ", obesidade 2"
         } 
            else  {

         	document.getElementById('resultado-imc').textContent = 'Imc: ' + imc + ", obesidade 3"
         }



} else{

alert('Preencha todos os campos!')

}




}
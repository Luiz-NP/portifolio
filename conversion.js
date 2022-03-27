function conversion() {

  let F
  let C
  let option
  
  while(option != 1 && option != 2){
    
    option = Number(prompt('Qual tipo de temperatura dejesa converter?\n1-Celsius\n2-Fahrenheit'))
  }

  switch(option){
    case 1:

      C = Number(prompt('Digite a temperatura em Celsius'))

      if(isNaN(C)){
        alert('Temperatura inválida.')
      }

      F = C * 9/5 + 32

      alert(`${C}° graus Celsius convertidos em Fahrenheit são ${F.toFixed(2)}`)

    break;

    case 2:
      
      F = Number(prompt('Digite a temperatura em Fahrenheits'))

      if(isNaN(F)){
        alert('Temperatura inválida.')
      }
      
      C = (F - 32) * 5/9
      
      alert(`${F}° graus Fahrenheit convertidos em Celsius são ${C.toFixed
      (2)}`)
   
    break;

    default:
      alert('Opção inválida.')
  } 
}

conversion()
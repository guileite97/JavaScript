var nome = prompt("Informe um palíndromo:")
   var inverter = nome.split("")  
   result = inverter.reverse().join("")
 

   if(result == nome){
        document.write(`Palavra digitada: ${nome} <br>`)
        document.write(`Palavra invertida: ${result} <br>`)
        document.write("É um palíndromo")
   }else{
        document.write(`Palavra digitada: ${nome} <br>`)
        document.write(`Palavra invertida: ${result} <br>`)
        document.write("Não é um palíndromo")
   }
    

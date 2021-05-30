var lista = new Array()
    var parar = 0
    while(parar == 0){
      num = Number(prompt("Informe um numero:"))
      lista.push(num)
      
      var continuar = confirm("continua?")
      if(continuar == false){
        parar = 1
      }
      
    }
    function somar() {
    let soma = 0
    for(let i in lista) {
    soma += lista[i]
    }
    return soma
    }
document.write(lista)
document.write(`<br>A Média das notas é: ${somar()/lista.length}`)
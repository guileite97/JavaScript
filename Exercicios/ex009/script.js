parar = 0
    var idade = new Array()
    var altura = new Array()
    var sexo = new Array()
    var masc = 0
    var fem = 0
    amaior = 0
    msexo = 0
    maiorIdade = 0
    menorIdade = 0
    alert("Informe a idade / altura / sexo das pessoas") 

    while(parar == 0){
        idade.push(Number(prompt("informe uma idade:")))
        altura.push(Number(prompt("informe uma Altura:")))
        sexo.push(prompt("informe uma sexo (m/f):"))
        continuar = confirm("Outra pessoa?")
        if(continuar == false){
            parar = 1
        }
    }
    
    for(var f in altura){
        if(altura[f] > amaior){
            amaior = altura[f]
            msexo = f 
        }
        
    }
    for(var i in sexo){
            if(sexo[i] == "m"){
                masc ++
            }else{
                fem ++
            }
    }
    for( var j in idade){
        if(idade[j] < 18){
            menorIdade ++
        }else{
            maiorIdade ++
        }
    }
    document.write(`Possui ${masc} pessoas do sexo masculino <br>`)
    document.write(`Possui ${fem} pessoas do sexo feminino <br>`)
    document.write(`A maior altura é de ${amaior}m, é do sexo ${sexo[msexo]} <br>`)
    document.write(`Possui ${maiorIdade} pessoas maiores de 18 anos <br>`)
    document.write(`Possui ${menorIdade} pessoas menores de 18 anos <br>`)

// console.log apenas para consulta de dados digitados pelo usuário
console.log(idade)
console.log(altura)
console.log(sexo)
console.log(masc)
console.log(fem)
console.log(amaior,sexo[msexo])
    
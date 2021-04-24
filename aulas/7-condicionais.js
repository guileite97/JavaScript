console.log(`Trabalhando com condicionais`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`, 
    `Rio de Janeiro` 
)

const idadeComprador = 18
const estaAcompanhada = true
const temPassagemComprada = true

console.log("Destinos possíveis: ")
console.log(listaDeDestinos)

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1,1) // Apagar um elemento da lista
// }
// else{
//     if(estaAcompanhada){
//         console.log("Comprador está acompanhado")
//         listaDeDestinos.splice(1,1) // Apagar um elemento da lista
//     }
//     else{  
//         console.log("Menor de idade, não vender a passagem")
//     }
// }

if(idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Boa viagem")
    listaDeDestinos.splice(2,1) // Apagar um elemento da lista
}
else{
    console.log("Menor de idade, não vender a passagem")
}
console.log("Embarque \n\n")
if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa viagem")
} else{
    console.log("Não pode embarcar")
}




console.log(listaDeDestinos)


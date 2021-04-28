var pesoValido = true
var alturaValido = true

var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelector("#primeiro-paciente")
var tdPeso = paciente.querySelector(".info-peso")
var peso = tdPeso.textContent


var tdAltura = document.querySelector(".info-altura")
var altura = tdAltura.textContent

var titulo1 = document.querySelector("#primeiro-paciente")
var pImc = titulo1.querySelector(".info-imc")

if(peso <= 0 || peso >= 1000){
    console.log("Peso invalido")
    pesoValido = false
    pImc.textContent = "Peso invalido!"
}
if(altura <= 0 || altura >= 3.00){
    console.log("Altura invalido")
    alturaValido = false
    pImc.textContent = "Altura invalido!"
}
if(pesoValido && alturaValido){
    var imc = peso / (altura * altura)
    pImc.textContent = imc
}



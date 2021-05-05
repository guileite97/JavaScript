var num = Number(prompt("Informe um número: "))
document.write(`<h2>Operadores aritméticos</h2>`)
var soma = num + 2
var sub = num - 2
var mult = num * 2
var div = num / 2
var rest = num % 2
var pot = num ** 2
document.write(`Soma de ${num} + ${2} = ${soma}<br>`)
document.write(`Subtração de ${num} - ${2} = ${sub}<br>`)
document.write(`Multiplicação de ${num} x ${2} = ${mult}<br>`)
document.write(`Divisão de ${num} / ${2} = ${div}<br>`)
document.write(`Resto de ${num} % ${2} = ${rest}<br>`)
document.write(`Potencia de ${num} ** ${2} = ${pot}`)

document.write(`<h2>Operadores relacionais</h2>`)
var maior = num > 2
var menor = num < 2
var maIgual = num >= 2
var meIgual = num <= 2
var igual = num == 2
var dif = num != 2
document.write(`${num} > ${2} = ${maior}<br>`)
document.write(`${num} < ${2} = ${menor}<br>`)
document.write(`${num} >= ${2} = ${maIgual}<br>`)
document.write(`${num} <= ${2} = ${meIgual}<br>`)
document.write(`${num} == ${2} = ${igual}<br>`)
document.write(`${num} != ${2} = ${dif}<br>`)

document.write(`<h2>Operadores de Identidade</h2>`)
var eIgual = num === 2
document.write(`${num} === ${2} = ${eIgual}<br>`)
var eIgual = num === "2"
document.write(`${num} === "2" = ${eIgual}<br>`)

document.write(`<h2>Operadores Ternário</h2>`)
var media = num
document.write("media > 7 ? Aprovado : Reprovado <br>")
document.write(media > 7 ? "Aprovado" : "Reprovado")



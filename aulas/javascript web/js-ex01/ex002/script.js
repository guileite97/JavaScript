var n1 = parseInt(prompt("Digite o 1º Número"));
var n2 = parseInt(prompt("Digite o 2º Número"));


document.write(`<table border='1'> <tr><th>Operação</th><th>Valor</th></tr> `)
document.write(
    `<tr><td>${n1} + ${n2}</td> <td> ${n1+n2}</td>
    <tr><td>${n1} - ${n2}</td> <td> ${n1-n2}</td>
    <tr><td>${n1} x ${n2}</td> <td> ${n1*n2}</td>
    <tr><td>${n1} / ${n2}</td> <td> ${n1/n2}</td>   
    `)
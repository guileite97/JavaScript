function pressionar(form){
    var n1 = Number(document.querySelector("#n1").value)
    var n2 = Number(document.querySelector("#n2").value)
    var n3 = Number(document.querySelector("#n3").value)
    var media = (n1+n2+n3)/3
    document.write("<table border=1><tr><th>Números</th><th>Soma</th><th>Média</th><th>Produto</th><th>Maior</th><th>Menor</th></tr>")
    document.write(`<tr><td>${n1},${n2},${n3}</td><td>${n1+n2+n3}</td><td>${media}</td><td>${n1*n2*n3}</td><td>${Math.max(n1,n2,n3)}</td><td>${Math.min(n1,n2,n3)}</td>`)
}
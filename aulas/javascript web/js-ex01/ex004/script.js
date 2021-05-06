function pressionar(form){
    var n1 = Number(document.querySelector("#n1").value)
    var n2 = Number(document.querySelector("#n2").value)
    var n3 = Number(document.querySelector("#n3").value)
    var media = (n1+n2+n3)/3
    if(n1>n2 && n1>n3){
        maior = n1
    }
    else if(n2>n1 && n2>n3){
        maior = n2
    }
    else{
        maior =n3
    }
    if(n1<n2 && n1<n3){
        menor = n1
    }
    else if(n2<n1 && n2<n3){
        menor = n2
    }
    else if(n3<n1 && n3<n2){
        menor =n3
    }
    document.write("<table border=1><tr><th>Números</th><th>Soma</th><th>Média</th><th>Produto</th><th>Maior</th><th>Menor</th></tr>")
    document.write(`<tr><td>${n1},${n2},${n3}</td><td>${n1+n2+n3}</td><td>${media}</td><td>${n1*n2*n3}</td><td>${maior}</td><td>${menor}</td>`)
}

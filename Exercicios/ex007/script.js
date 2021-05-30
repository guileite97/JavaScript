function inverter(){
    var inver = new Array()
    palavra = document.querySelector("#nome1").value
    var inverter = palavra.split("")  
    result = inverter.reverse().join("")
    inver.push(result)

    palavra = document.querySelector("#nome2").value
    var inverter = palavra.split("")  
    result = inverter.reverse().join("")
    inver.push(result)

    palavra = document.querySelector("#nome3").value
    var inverter = palavra.split("")  
    result = inverter.reverse().join("")
    inver.push(result)

    palavra = document.querySelector("#nome4").value
    var inverter = palavra.split("")  
    result = inverter.reverse().join("")
    inver.push(result)

    palavra = document.querySelector("#nome5").value
    var inverter = palavra.split("")  
    result = inverter.reverse().join("")
    inver.push(result)
    
    for(var i = 0; i<5; i++ ){
        document.querySelector(`#nome${i + 1}`).value = inver[i]
    }  
}
/*function inverter(){
        var inver = new Array()
        inver.push(document.querySelector("#nome1").value)
        inver.unshift(document.querySelector("#nome2").value)
        inver.unshift(document.querySelector("#nome3").value)
        inver.unshift(document.querySelector("#nome4").value)
        inver.unshift(document.querySelector("#nome5").value)
        for(var i = 0; i<5; i++ ){
            document.querySelector(`#nome${i + 1}`).value = inver[i]
        }

        
    }*/
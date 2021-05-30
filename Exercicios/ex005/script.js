var senha = document.getElementById("senha")
    var confirmar = document.getElementById("confirmar")

    function confirmarSenha(){
        
        if(senha.value != confirmar.value) {
            confirmar.setCustomValidity("Senhas diferentes!")
        } else {
            confirmar.setCustomValidity('')
        }
}
senha.onchange = validatePassword
confirmar.onkeyup = validatePassword
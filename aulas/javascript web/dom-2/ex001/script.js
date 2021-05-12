var a = document.querySelector("#area")
a.addEventListener('click',clicar)
a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout',sair)

function clicar(){
    a.innerText = "Clicou"
    a.style.background="red"
}
function entrar(){
    a.innerText = "Entrar"
}
function sair(){
    a.innerText = "Saiu"
    a.style.background="green"
}
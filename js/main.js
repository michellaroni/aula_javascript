/*var nome = "Michel Laroni";
alert("Bem-vindo " + nome);*/

/*var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("http://beatles.com");
    //window.location.href = "http://beatles.com";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b><u>Obrigado por clicar</u></b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/sign-up?ref=GAXHQ6FBA7");
    //window.location.href = "https://digitalinnovation.one/sign-up?ref=GAXHQ6FBA7";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));

var validar = 0;

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
(validaIdade(idade));
console.log(validar);
*/

/*
var d = new Date();
alert(d);
alert(d.getDate());
alert(d.getMonth()+1);
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;

for (count=1; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;

while (count < 5){
    console.log(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade")

//var idade = 18;

if (idade >= 18){
    alert("maior de idade");
} else {
    alert("menor de idade")
};
*/


/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].cor)
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor)
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Rodrigo Maia";
//var idade = 44;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2)
//console.log(nome);
//console.log(idade);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
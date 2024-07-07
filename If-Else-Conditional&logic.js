// Comparadores 
//  === igual a
//  !== não é igual a
//  > maior que
//  < menor que
//  >= maior ou igual a 
//  <= menor ou igual a
// && e
// || retorna verdadeiro caso ambos os operandos sejam verdadeiro
// ! não é igual
// % pega o resto da divisão


 


// Ex de if else
var name1 = "joao";
var name2 = "gio";

var love = Math.random(love);
love = love * 100;
love = Math.floor(love) + 1;

if(love > 70){
    console.log(
        "O amor entre " +name1 +  "e " +name2 + "é igual á " +love + " é um amor verdadeiro" );
}if(love > 30 && love <= 70){
    console.log(
        "sua porcentagem de amor entre " + name1 +" e " +name2 +" é igual á " +love)
   }else{
    console.log("cuidado em ")
}

// Calculadora Imc com if else


var peso = 60;
var altura = 1.78;

var imc = peso / (altura * altura);

if(imc <= 18.4){
    console.log("Seu IMC é " +imc + ", então você esta abaixo do peso")
}
if(imc >= 18.5 && imc <=24.9){
    console.log("Seu IMC é " +imc+  ", então você tem um peso normal.")
}
else{
    console.log("Seu IMC é " +imc+  ", então você esta acima do peso.")
}


//Escreva um programa que determine se um determinado ano é bissexto.

let ano = 1981

if(ano % 4 == 0 || ano % 100 == 0 || ano % 400 == 0){
    console.log("ano bissexto")
}else{
    console.log("Não é um ano bissexto")
}
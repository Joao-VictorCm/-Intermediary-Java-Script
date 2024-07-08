// Vai retornar a quantidade de elementos no array 
// neste caso 6

var lista = ["fulano", "ciclano", "giovanna", "joao", "drogo", "simba"]
console.log(lista.length)

//Acessando algum array
// vai retornar ciclano

var lista = ["fulano", "ciclano", "giovanna", "joao", "drogo", "simba"]
console.log(lista[1])

//Para descobtir se tem determinado iten na lista
// neste caso vai retornar true se joao estiver na lista

var lista = ["fulano", "ciclano", "giovanna", "joao", "drogo", "simba"]
console.log(lista.includes("joao"))


//Add intes a lista
var lista = ["fulano", "ciclano", "giovanna", "joao", "drogo", "simba"]
var add = lista.push("exemplo")
console.log(add)



// Exercico 1
// Verificar se seu nome esta na lista de convidados


var nomeDigitado = "giovanna"
var lista = ["fulano", "ciclano", "giovanna", "joao", "drogo", "simba"]

if(lista.includes(nomeDigitado)){
    console.log("Bem vindo(a) " +nomeDigitado)
}else{
    console.log("Seu nome não esta na lista")
}



// Quem está comprando o almoço? Desafio de código
// Você escreverá uma função que selecionará um nome aleatório de uma lista de nomes. A pessoa selecionada terá que pagar a conta de alimentação de todos.

function pagarConta (nomes){

    nomes = [ "ciclano", "giovanna", "joao", "drogo", "simba"]

    let numeroPessoas = nomes.length //. length puxa quantos itens ha dentro do objeto
    let randomPessoasPosition = Math.floor(Math.random() * numeroPessoas) // vai gerar um numero aleatorio entre 0 e o numeros que o .length vai retornar
    let randomPessoas = nomes[randomPessoasPosition] // vai retornar o nome da pessoa ligada ao numero aleatorio retornado 

    return console.log(randomPessoas + " vai pagar a conta")
}
pagarConta()
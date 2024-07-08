var lista = []
var numeros = 15

function fizzBuzz (){

// lista.push(numeros)
// numeros++;

if (numeros % 3 === 0 && numeros % 5 ===0){
    console.log("FizzBuzz")

}

else if(numeros % 3 === 0){
    console.log("Fizz")
}
else if(numeros % 5 === 0){
    console.log("Buzz")
}

else{
    console.log("não faz parte do FizzBuzz")
}
}

fizzBuzz()



// Loop vai iniciar em "i=0", sera definido o final em "i<10" quando chegar em 9 para
// e por fim no "i++" vai realizar a função neste caso aumentar 1

for (i=0; i<10; i++){
    console.log(i)
}


function fizzBuzz (){

    for(var numeros = 1; numeros < 101; numeros++){
    if (numeros % 3 === 0 && numeros % 5 ===0){
        console.log(numeros + " FizzBuzz")
    
    }
    
    else if(numeros % 3 === 0){
        console.log(numeros + " Fizz")
    }
    else if(numeros % 5 === 0){
        console.log(numeros + " Buzz")
    }
    
    else{
        console.log(numeros + " não faz parte do FizzBuzz")
    }
    }
}
    
    fizzBuzz()
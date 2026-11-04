//Crie um programa que leia três números e determine qual é o maior.


var valor1 = 10
var valor2 = 85
var valor3 = 15
// and &&

if (valor1 > valor2 && valor1 > valor3) {
    console.log("O valor 1 é o maior: ",valor1)
}
if (valor2 > valor1 && valor2 > valor3) {
    console.log("O valor 2 é o maior: ",valor2)
}
if (valor3 > valor1 && valor3 > valor2) {
    console.log("O valor 3 é o maior: ",valor3)
}       


// Faça um programa que leia um número e verifique se ele está entre 1 e 100

var numero = 101

if (numero >= 1 && numero <= 100) {
    console.log("O número está entre 1 e 100")
} else {
    console.log("O número não está entre 1 e 100")
}

// crie um programa que leia uma letra e verifique se ela é uma vogal ou uma consoante.

var letra = "a"     

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    console.log("A letra é uma vogal")
} else {
    console.log("A letra é uma consoante")
}

// Faça um programa que leia um numero e verifique se ele está fora do range de  1 a 20

var numero = 18

if (numero < 1 || numero > 20) {
    console.log("O número está fora do range ")
} else {
    console.log("O número está dentro do range ")
}

//not !

var teste = false 

console.log(!teste) 
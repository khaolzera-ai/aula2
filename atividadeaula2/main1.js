// numero entre 1 e 100
var numero = 100

if(numero >=1 ){
    if(numero <=100){

    console.log("Esse numero está entre o 1 e 100")
}
else
{
    console.log("Esse numero não esta entre o 1 e 100")
}
}

//

//Qual é o Maior
var numero1 = 51
var numero2 = 81
var numero3 = 100


if (numero1 > numero2) {
    if (numero1 > numero3) {
        console.log("Esse é o maior " + numero1)
    }
}

if (numero2 > numero3) {
    if (numero2 > numero1) {
        console.log("Esse é o maior " + numero2)
    }
}

if (numero3 > numero1) {
    if (numero3 > numero2) {
        console.log("Esse é o maior " + numero3)
    }
}

//

//Salario

var salario =3000

if (salario<1000){
    salario= salario + (salario * 0.20)
    console.log(salario)
}

if(salario<=2000){
    salario=salario + (salario * 0.15)
    console.log(salario)
}

if(salario>2000){
    salario=salario + (salario * 0.10)
    console.log(salario)
}

//

//média maior ou igual a 7
var nota1=8
var nota2=5
var nota3=8

if((nota1 + nota2 +nota3) / 3 >=7){
    console.log("APROVADO")
}
else 
    console.log("REPROVADO")

//

// converter temperatura
var temperatura = 10
var tipoTemperatura = "F"
var temperaturaConvertida = 0

if(tipoTemperatura == "C"){
    console.log("Você escolheu Celsius")
      temperaturaConvertida = ((temperatura * 1.8) +32)
        console.log("O valor convertido é" + temperaturaConvertida)
}
    else
      {
        console.log("Você escolheu Fahrenheit")
         temperaturaConvertida = ((temperatura -32) * (9 / 5))
         console.log("O valor convertido é" + temperaturaConvertida)
      }


//

// Ler dois numeros e uma operação
var numero1 = 9
var operação = "-"
var numero2 = 2
var resultado 

if (operação == "+"){
    console.log(numero1 + numero2)
}

if (operação == "-"){
    console.log(numero1 - numero2)
}

if (operação == "*"){
    console.log(numero1 * numero2)
}

if (operação == "/"){
    console.log(numero1 / numero2)
}else{
    console.log("operação invalida")
}
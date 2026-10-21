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
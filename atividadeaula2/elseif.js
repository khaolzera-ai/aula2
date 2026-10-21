// verififcar se a letra digitada é vogal
// A E I O U


var letraDigitada = "U"

//
if (letraDigitada == "A") {
    console.log(" a letra digitada é uma vogal")

} else if (letraDigitada == "E") {
    console.log(" a letra digitada é uma vogal")


} else if (letraDigitada == "I") {
    console.log(" a letra digitada é uma vogal")

} else if (letraDigitada == "O") {
    console.log(" a letra digitada é uma vogal")

} else if (letraDigitada == "U") {
    console.log(" a letra digitada é uma vogal")
}

// criar menu de escolha, sendo 1- entrar, 2- cadastrar, 3-editar, 0-sair

var escolha = 3

if (escolha == 1) {
    console.log("entrar")

}

if (escolha == 2) {
    console.log("cadastrar")
}

if (escolha == 3) {
    console.log("editar")
}

if (escolha == 0) {
    console.log("sair")
}


// switch case= cadad um é um comando= usar quando tem algo muito bem definido

var letraDiditada = "A"

switch (letraDigitada) {
    case "A": //possibilidades de acerto
        console.log("é uma vogal")
        break// parar
    case "E":
        console.log("é uma vogal")
        break
    case "I":
        console.log("é uma vogal")
        break
    case "O":
        console.log("é uma consoante")
        break
    case "U":
        console.log("é uma vogal")
        break
default:
    console.log("é uma consoante")


}

/////////////////////////////////////////

// if condições
// switch case - condições

// while- laços (enquanto)


//laço infinito


var contador = 1

while(1 < 100){
    console.log("contador: ") + contador)
    contador = contador + 1

    if (contador == 3) {
 break
    }
   contador = contador + 1
}

// opção 2
contador = 1 
while (true){
    console.log("contador: " + contador)

    if (contador == 3) {
        break
    }

    contador = contador + 1
}

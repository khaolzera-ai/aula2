//funções identificador() {}

function ola() {
    console.log("sejam bem vindo a sala de aula")
}

ola()
//camelCase-> sempre que tiver palavra nova começa com MAIUSCULO
function fnValidarIdade() {
    var idade = document.getElementById("idadeUsuario").value

    console.log(idade)
    if (idade >= 18) {
        alert("Você pode dirigir!!!")
    } else {
        alert("Você não pode dirigir!!!")
    }
}

function fnValidarVogal() {
    var vogal = document.getElementById("vogalUsuario").value

    switch (vogal) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            alert("Você digitou uma vogal!");
            break;
        default:
            alert("Você digitou uma consoante!");
    }
}
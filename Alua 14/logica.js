// // variáveis

// let nome = "João";
// let idade = 22;
// let tamanho = 10;
// let aprovado = true;

// console.log("soma idade + tamanho=", idade + tamanho);
// console.log("subtração idade - tamanho=", idade - tamanho);
// console.log("multiplicando idade x tamanho=", idade * tamanho);
// console.log("divisão idade + tamanho=", idade / tamanho);
// console.log("resto idade + tamanho", idade % tamanho);

// console.log("5>3 =", 5 > 3);
// console.log("5<3 =", 5 < 3);
// console.log("5>=3 =", 5 >= 3);
// console.log("5!=3 =", 5 != 3);

// && e
// || ou 
// ! not

// let idade = 20;

// if (idade >=10) {
//     console.log("Joãozinho é uma criaça");
// }
// else if (idade>=10 && idade <15) {
//     console.log("Joãozinho é um pré-adolescente");

// }
// else if (idade>=15 && idade <18) {
//     console.log("João se tornou um adolecente");
// }
// else if (idade >=18 && idade <=60) {
//     console.log("João é um adulto");
// }
// else{
//     console.log("João é um velho");
// }

let tipoUsuario = "karol"

if (tipoUsuario == "admin") {
    console.log("Acesso total");
}
else if( tipoUsuario == "editor") {
    console.log("Acesso limitado");
}
else if(tipoUsuario == "visitante") {
    console.log("Acesso somente leitura");
}
else{
    console.log("Tipo de usuário inválido");
}



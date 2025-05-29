// let senhaCorreta = "ana2303";
// let senhaDigitada = "ana333";

// if (senhaCorreta == senhaDigitada ) {
//     console.log("acesso permitido");
// }
// else {
//     console.log( "acesso negado");
    
// }

// let nota1 = 9.5;
// let nota2 = 10;
// let media = (nota1+nota2)/2


// if (media >=7) {
//         console.log("Aprovado");
//     }
//     else if (media >=5 && media < 7) {
//         console.log("Recuperação");
//     }
//     else{
//         console.log("Reprovado");
//     }

    let chovendo = false;
    let temperatura = 31;
    let nublado = false;

    if (chovendo == false && temperatura >=20 && temperatura <30){
        console.log("Ótimo dia para um passeio");
        
    }
    else if(chovendo || temperatura <20){
        console.log("Melhor ficar em casa hoje");
        
    }
    else if( nublado && temperatura >=20){
        console.log("Pode sair, mas leve um casaco");
        
    }
else{
    console.log("partiu praia");
}
        
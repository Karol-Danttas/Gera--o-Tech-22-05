// 1. Função saudacao()
// Crie uma função sem parâmetros que retorne "Olá, seja bem-vindo!".
function saudacao(){
    return "Óla, seja bem-vindo!"
}
console.log(saudacao())

// 2. Funçao hello(nome)
// Recebe um nome como argumento e retorna "Olá, [nome]!".
function hello(nome){
    return "Óla, " + nome;
}
console.log(hello("Karol"));

//  3. função soma(numero1 + numero2)
soma(4, 5);

function soma(numero1, numero2) {
    console.log(numero1);
    console.log(numero2);
    let soma = numero1 + numero2
    
    console.log("resultado:" + soma);
}
// 4. função par(numero) 
// Receber  um numero e retornar true se for par, false se for ímpar.
function par(numero){
    if (numero % 2==0) {
        return "Esse numero é Par: "+ numero; 
    }

    else{
        return "Esse numero é Impar: "+ numero;
    }
}
console.log(par(7))

// 5. Função media(n1,n2,n3)
// Calcula a média de 3 notas. Retorna a média e diz se o aluno foi aprovado (média >7).
function media(n1,n2,n3){
    let media = (n1+n2+n3) /3;
    if (media >=7) {
        return "Aluno aprovado com media: "+ media;
    }
    else {return "Aluno reprovado com media: "+ media;}
}
console.log(media(7,7,7));

// 6.  Função dobro(numero)
// Recebe um número e retorna o dobro dele.
function dobre(numero) {
    return numero*2;
}
console.log(dobre(3));

// 7.   Função dobro(numero)
// Recebe um número e retorna o dobro dele.
function maior(numero1, numero2) {
if (numero1 > numero2) {
    return numero1 + " é maior que "+ numero2;
}
else if( numero2 > numero1){
    return numero2 + " é maior que "+ numero1;
}
else{
    return "Os números são iguais!"
}
}
console.log(maior(4,6));

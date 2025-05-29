const nome = "Karol";
const idade = 22;
const mensagem = `Me chamo ${nome}, e tenho ${idade} anos de idade!`

console.log(mensagem)

// Desafio 1: Saudação personalizada
// Crie uma função saudarUsuário(nome, hora) que retorna:

// "Bom dia, [NOME]!" se hora < 12
// "Boa tarde, [NOME]!" se hora entre 12 e 18
// "Boa noite, [NOME]!" se hora >= 18

function saudar(nome, hora) {
    if (hora<12) { 
        return `Bom dia, ${nome}!`;
    }
    else if(hora>= 12 && hora < 18){
        return `Boa tarde, ${nome}`;
    }
    else if (hora >= 18 && hora <= 24){
        return `Boa noite, ${nome}`;
    }
    else{
        return `O horário: ${hora} é invalido`
    }
}
console.log(saudar("Karol", 9));


// Desafio 2: Gerador de recibo
// Crie uma função gerar Recibo(nome, produto, valor) que retorna o seguinte texto formatado em várias linhas:

// Recibo de Compra
// Cliente: [NOME]
// Produto: [PRODUTO]
// Total: R$[VALOR]
// Obrigado pela preferência!


function recibo(nome,produto,valor){
    return `
    Cliente: ${nome}, 
    Produto: ${produto} 
    Total: ${valor}
    Obrigado pela preferência!`
}
console.log(recibo("Karol Danttas", "base de pele", "80.00"));


// Desafio 3: Template de e-mail
// Crie uma função emailBoasVindas(nome, curso) que retorna algo como:

// Olá, [nome]!
// Seja bem-vindo ao curso de [curso].
// Estamos felizes por tê-lo conosco!


function vindas(nome,curso){
    return`
    Óla ${nome},
    Seja bem-vido(a) ao ${curso}.
    Estamos felizes por tê-lo(a) conosco!`
}
console.log(vindas("Karol Danttas", "ADM"));


// Desafio 4: Função com cálculo interpolado
// Crie a função calcular desconto(nome, preço, desconto) que retorna:

// "Olá, [NOME]. O produto de R$[preço] com desconto de [desconto]% custa R$[valor Final]."

// 💡 Faça o cálculo de valor Final dentro da interpolação usando ${...}. 


function desconto(nome, preco, desconto){

    return `Olá, ${nome}. O produto de R$${preco} com desconto de ${desconto}% custa R$${preco - (preco * (desconto / 100))}`;
}
console.log(desconto("Karol", 130, 33));




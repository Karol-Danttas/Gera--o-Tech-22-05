// Etapa 1 – Desafios com Objetos
// Crie um objeto chamado pessoa com as seguintes propriedades:

// nome (string)

// idade (número)

// cidade (string)

// Desafio: Exiba no console a frase:
// Fulano tem X anos e mora em Cidade.

// Atualize a propriedade idade do objeto pessoa.
// Faça pessoa.idade = 30 e exiba novamente a frase.

let pessoa = {
    nome: "Dantte",
    idade: 27,
    cidade: "Fortaleza"
}


console.log("O nome dele é " + pessoa.nome + ", ele tem " + pessoa.idade + " e mora em " + pessoa.cidade);




const nome = "Dantte";
const idade = 22;
const cidade = "Fortaleza"
const mensagem = `O nome dele é ${nome}, tem ${idade} anos de idade e mora em ${cidade}!`

console.log(mensagem)


// tapa 2 – Array de Objetos
// Crie um array chamado produtos com 3 objetos. Cada objeto deve ter:

// nome (string)

// preco (número)

// categoria (strin Eg)
// Desafio: Percorra o array e exiba no console:
// Produto: Copo | Preço: R$15 | Categoria: Cozinha

let produtos = [
    {nome: "copo", preco: 27, categoria: "cozinha"},
    {nome: "lenço", preco:35, categoria: "quarto"},
    {nome: "sofa", preco: 1.400, categoria: "sala"}
]
for (let index = 0; index < produtos.length; index++) {
        console.log("Produto: "+produtos[index].nome + " | Preço: " +produtos[index].preco.toFixed(3) + " | categoria: " +produtos[index].categoria);
        
}

const produto = [
    {nome: "copo", preco: 27, categoria: "cozinha"},
    {nome: "lenço", preco:35, categoria: "quarto"},
    {nome: "sofa", preco: 1.400, categoria: "sala"}
]
for (let i =0; i < produto.length; i++){
    const produtos = produto [i];
    console.log(`produtos: ${produtos.nome} | Preço: ${produtos.preco.toFixed(3)} | Categoria: ${produtos.categoria}`)
}

// Etapa 3 –  (crase) com Objetos
// Utilize crase para exibir a seguinte mensagem a partir de um objeto usuario:
// `nome está cursando curso no semestre semestre.`



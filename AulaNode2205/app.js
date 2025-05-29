const calcularSalario = require('./salario')

const horasTrabalhadas = 2;
const valorHora = 1500;

console.log(calcularSalario(horasTrabalhadas, valorHora));

const carroDescricao = require('./carro');

const Carro = {
    nome: "Fusca",
    ano: 1999,
    cor: "verde",
    descricao: "carro velho"

}

carroDescricao(Carro)
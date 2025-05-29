// const fs = require('fs')
// let caminhoArquivo = './exercicio1.js'
// let conteudo = 'Olá, me chamo Karol'


// fs.writeFile( caminhoArquivo, conteudo, (err,) => {
// 	if(err) throw err
// 	console.log('O arquivo foi salvo com sucesso!')
// })

const fs = require('fs')
let caminhoArquivo = './AulaNode2305/exercicio1.js'
let codificacao = 'utf8'

fs.readFile( caminhoArquivo, codificacao, (err, dados) => {
	if (err) throw err
	console.log(dados)
})
const fs = require('fs')
let caminhoArquivo = './AulaNode2305/criadoArq.js'
let ccodificacao = 'utf8'

fs.readFile( caminhoArquivo, ccodificacao, (err, dados) => {
    if(err) throw err
    console.log(dados);
    
})

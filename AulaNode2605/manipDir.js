// para criar um diretorio
// const fs = require('fs')
// let caminhoNovoDiretorio = '/caminho/novoDiretorio'

// fs.mkdir( caminhoNovoDiretorio,(err) => {
// 		if(err)throw err
// 		console.log('O diretorio foi criado com sucesso!')
// })

// para percorre o arquivo
// const fs = require('fs')
// let caminhoDiretorio = './AulaNode2605/dirCriado'

// fs.readdir ( caminhoDiretorio,(err, arquivos) => {
// 	if(err) throw err
// 	arquivos.forEach((arquivo)=>{
// 	console.log(arquivo)
// })
// });

// para remover arquivo criado
const fs = require('fs')
let caminhoDiretorio = './AulaNode2605/dirCriado'

fs.rm( caminhoDiretorio, {recursive: true},
	(err) => {
        if (err) throw err;
	console.log('O diretório foi removido com sucesso')
});
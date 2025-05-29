// const http = require('http');
// const porta = 8080 

// http.createServer((req, res) => {
//     res.write('Hello World!');
//     res.end();  
// }).listen(porta);

// const http = require('http');
// const porta = 8082

// http.createServer((requisicao, resposta) => {
// 		resposta.writeHead(200, {'Content-Type': 'text/html'});
//     resposta.write('<h1>Hello World!</h1>');
//     resposta.end();  
// }).listen(porta);

const http = require('http');
const porta = 8085
let objeto = require('./objetoRota.js')

const servidor = http.createServer((req, res) => {
    res.setHeader('content-type', 'application/json; charset = utf-8')

    if(req.url == '/'){
        res.statusCode = 200
        res.write(JSON.stringify({pagina: 'Home', autor: 'Káthia'}))
    }else if(req.url == '/cleitinho'){
        res.statusCode = 200
        res.write(JSON.stringify({pagina: 'sobre', autor: 'Káthia', conteudo: objeto}))
    }else{
        res.statusCode = 404
        res.write(JSON.stringify({erro: 'Página não encontrada'}))
    }
    
    res.end()
})

servidor.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))
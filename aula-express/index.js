const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const produtos = [
    {id: 1, nome: "Tênis Nike", valor: 720},
    {id: 2, nome: "Tênis Adidas", valor: 820},
];

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/usuario", (req, res) => {
    res.send("Hello Karol");
});

app.get("/produtos", (req, res) => {
    res.send(produtos)
});

app.get("/produtos/:id", (req, res) =>{
    const id = req.params.id;
    const produto = produtos.filter((produto) => produto.id == id)
    res.send(produto);
    
});

app.post("/produtos", (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const valor = req.body.valor;

    const novoProduto = {id: id, nome: nome, valor: valor}
    produtos.push(novoProduto);
    res.send("Produto cadastrado com sucesso")
});

app.listen(port, () => {
    console.log("Servidor está rodando em http://localhost:" + port);
    
});
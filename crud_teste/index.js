const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'crud_teste',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.log("conexão falhou", err);
        return;
    }
    return console.log("conexeçao realizada com sucesso!");
})

const criarTabela = `
CREATE TABLE IF NOT EXISTS usuarios(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
senha VARCHAR(100) NOT NULL
)`;

db.query(criarTabela, (err) => {
    if (err) {
        console.log("Erro ao criar tabela", err);
        return;
    }
    return console.log("Tabela criada com sucesso!");
});

app.get('/usuarios', (req, res) => {
    const sql = `SELECT * FROM usuarios`;
    db.query(sql, (err, result) => {
        console.log(err);
        if (err) return res.status(500).json({ erro: 'Erro ao buscar usuários' });
        return res.json(result);
    })
});

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM usuarios WHERE id =?';
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({
            erro: 'Erro ao buscar usuários'
        });
        return res.json(result[0]);
    })
})

app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;
    const sql = `INSERT INTO usuarios (nome, email, senha)
    VALUES (?, ?, ?)`; // Correção aqui: "VELUES" -> "VALUES"
    
    db.query(sql, [nome, email, senha], (err, result) => {
        if (err) {
            return res.status(500).json({
                erro: 'Erro ao inserir usuário'
            });
        }

        return res.json({
            message: "Usuário cadastrado com sucesso"
        });
    });
});

app.patch("/usuarios/:id", (req, res) => {
    const {id} = req.params;
    const {nome, email, senha} = req.body;

    if (!nome && !email && !senha){
        return res.status(400).json
        ({mensagem: "Envie pelo menos um campo preenchido!"})
    }
    let sql = 'UPDATE usuarios SET'
    const campos = []
    const = valores = []

    if(nome){
        campos.push("nome = ?");
        valores.push(nome);
    }
    if(email){
        campos.push("email= ?");
        valores.push(email);
    }
    if(senha){
        campos.push("senha = ?");
        valores.push(senha);
    }

    sql += campos.join(', ') + 'WHERE id =?';
    valores.push(id)

    db.query(sql, valores, () =>{
        res.send('Usuario atualizado');
    })

  });

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3306');
});

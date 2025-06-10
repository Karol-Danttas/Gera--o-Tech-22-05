const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Criar produtos
router.post('/', async (req, res) => {
    const { name, preco, estoque, user_id } = req.body;

    try {
        // Verifica se o usuário existe
        const user = await prisma.user.findUnique({
            where: { id: user_id }
        });

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        const product = await prisma.product.create({
            data: {
                name,
                preco,
                estoque,
                user: { connect: { id: user_id } }
            }
        });

        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Listar usuários
router.get('/', async (req, res) => {
    const products = await prisma.product.findMany();
    res.json(products);
});
// Listar por ID
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
  res.json(product);
});


// Atualizar usuário
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, preco, estoque } = req.body;
    try {
        const user = await prisma.product.update({
            where: { id: parseInt(id) },
            data: { name, preco, estoque }
        });
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// atualizar com Patch
router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const updateProduct = await prisma.user.update({
    where: { id },
    data: req.body
  });
  res.json(updateProduct);
});


// Deletar usuário
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.product.delete({
            where: { id: parseInt(id) }
        });
        res.json({ message: 'Produto deletado' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

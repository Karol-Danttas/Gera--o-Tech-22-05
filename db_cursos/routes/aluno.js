const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Criar cursos
router.post('/', async (req, res) => {
    const { nome, email, cursoId } = req.body;
    try {
        const alunos = await prisma.aluno2.create({
            data: { nome, email, cursoId }
        });
        res.json(alunos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Listar cursos
router.get('/', async (req, res) => {
    const alunos = await prisma.aluno2.findMany();
    res.json(alunos);
});
// Listar por ID
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const alunos = await prisma.aluno2.findUnique({ where: { id } });
  if (!alunos) return res.status(404).json({ error: 'Aluno não encontrado' });
  res.json(alunos);
});


// Atualizar curso
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, curso } = req.body;
    try {
        const alunos = await prisma.aluno2.update({
            where: { id: parseInt(id) },
            data: { nome, email, curso }
        });
        res.json(alunos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// atualizar com Patch
router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const updatedUser = await prisma.aluno2.update({
    where: { id },
    data: req.body
  });
  res.json(updatedUser);
});


// Deletar aluno
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.aluno2.delete({
            where: { id: parseInt(id) }
        });
        res.json({ message: 'Aluno deletado' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

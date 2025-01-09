const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');

require('dotenv').config();

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'] 
}));

app.use(express.json());

const validarId = (id) => {
    return !isNaN(id) && id > 0; 
};

// Função para validar dados da doação
const validarDoacao = (doacao) => {
    const { nome, email, valor, id_campanha } = doacao;
    if (!nome || !email || !valor || !id_campanha) {
        return 'Todos os campos (nome, email, valor, id_campanha) são obrigatórios.';
    }
    if (isNaN(valor) || valor <= 0) {
        return 'Valor deve ser um número maior que zero.';
    }
    return null;  // Retorna null se estiver válido
};

// Endpoints para usuários
app.delete('/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    if (!validarId(id)) {
        return res.status(400).send('ID inválido');
    }

    await db.deleteUsuario(id);
    res.sendStatus(204);
});

app.patch('/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const user = req.body;

    if (!validarId(id)) {
        return res.status(400).send('ID inválido');
    }

    await db.updateUsuario(id, user);
    res.sendStatus(200);
});

app.post('/usuarios', async (req, res) => {
    const user = req.body;
    await db.insertUsuario(user);
    res.sendStatus(201);
});

app.get('/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    if (!validarId(id)) {
        return res.status(400).send('ID inválido');
    }

    const results = await db.selectUsuario(id);
    res.json(results);
});

app.get('/usuarios', async (req, res) => {
    const results = await db.selectUsuarios();
    res.json(results);
});

// Endpoints para campanhas
app.delete('/campanhas/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    if (!validarId(id)) {
        return res.status(400).send('ID inválido');
    }

    await db.deleteCampanha(id);
    res.sendStatus(204);
});

app.put('/campanhas/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const campanha = req.body;

    if (!validarId(id)) {
        return res.status(400).send('ID inválido');
    }

    await db.updateCampanha(id, campanha);
    res.sendStatus(200);
});

app.post('/campanhas', async (req, res) => {
    const campanha = req.body;

    try {
        const { id } = await db.insertCampanha(campanha); 
        res.status(201).json({ id }); 
    } catch (error) {
        console.error("Erro ao criar campanha:", error);
        res.status(500).send('Erro ao criar campanha');
    }
});

app.get('/campanhas/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    if (!validarId(id)) {
        return res.status(400).send('ID inválido');
    }

    const results = await db.selectCampanha(id);
    res.json(results);
});

app.get('/campanhas', async (req, res) => {
    const results = await db.selectCampanhas();
    res.json(results);
});


app.post('/doacoes', async (req, res) => {
    const doacao = req.body;

    const erro = validarDoacao(doacao);
    if (erro) {
        return res.status(400).send(erro);
    }

    try {
        await db.insertDoacao(doacao);
        res.status(201).send('Doação registrada com sucesso.');
    } catch (error) {
        console.error("Erro ao registrar doação:", error);
        res.status(500).send('Erro ao registrar doação.');
    }
});

app.get('/doacoes/:campanha_id', async (req, res) => {
    const campanha_id = parseInt(req.params.campanha_id);
    try {
        const doacoes = await db.selectDoacoesByCampanha(campanha_id);
        res.json(doacoes);
    } catch (error) {
        console.error("Erro ao obter doações:", error);
        res.status(500).send('Erro ao obter doações.');
    }
});

app.listen(process.env.PORT, () => {
    console.log("App está rodando ...");
});

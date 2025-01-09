const mysql = require('mysql2/promise');
require('dotenv').config();

const client = mysql.createPool({
    host: 'localhost',         
    user: 'root',               
    password: '',              
    database: 'oriximinasolidaria', 
    port: 3306               
});

async function selectUsuarios() {
    const results = await client.query("SELECT * FROM usuarios;");
    return results[0];
}

async function selectUsuario(id) {
    const results = await client.query("SELECT * FROM usuarios WHERE id=?;", [id]);
    return results[0];
}

async function insertUsuario(user) {
    const values = [user.nome, user.cpf, user.email, user.senha];
    await client.query("INSERT INTO usuarios (nome, cpf, email, senha) VALUES (?, ?, ?, ?)", values);
}

async function updateUsuario(id, user) {
    const values = [user.nome, user.cpf, user.email, user.senha, id];
    await client.query("UPDATE usuarios SET nome=?, cpf=?, email=?, senha=? WHERE id=?", values);
}

async function deleteUsuario(id) {
    const values = [id];
    await client.query("DELETE FROM usuarios WHERE id=?", values);
}

async function selectCampanhas() {
    const results = await client.query("SELECT * FROM campanha;");
    return results[0];
}

async function selectCampanha(id) {
    const results = await client.query("SELECT * FROM campanha WHERE id=?;", [id]);
    return results[0];
}

async function insertCampanha(campanha) {
    const values = [campanha.titulo, campanha.data, campanha.meta, campanha.descricao];
    const [result] = await client.query(
        "INSERT INTO campanha (titulo, data, meta, descricao) VALUES (?, ?, ?, ?);",
        values
    );
    return { id: result.insertId };
}

async function updateCampanha(id, campanha) {
    const values = [campanha.titulo, campanha.data, campanha.meta, campanha.descricao, id];
    await client.query(
        "UPDATE campanha SET titulo=?, data=?, meta=?, descricao=? WHERE id=?;",
        values
    );
}

async function deleteCampanha(id) {
    const values = [id];
    await client.query("DELETE FROM campanha WHERE id=?;", values);
}


async function insertDoacao(doacao) {
    const values = [doacao.nome, doacao.email, doacao.valor, doacao.id_campanha];
    const [result] = await client.query(
        "INSERT INTO doacoes (nome, email, valor, id_campanha) VALUES (?, ?, ?, ?);",
        values
    );
    return { id: result.insertId };
}

async function selectDoacoesByCampanha(campanha_id) {
    const results = await client.query(
        "SELECT * FROM doacoes WHERE id_campanha = ?;",
        [campanha_id]
    );
    return results[0];
}

module.exports = {
    selectUsuarios,
    selectUsuario,
    insertUsuario,
    updateUsuario,
    deleteUsuario,
    selectCampanhas,
    selectCampanha,
    insertCampanha,
    updateCampanha,
    deleteCampanha,
    insertDoacao,
    selectDoacoesByCampanha
};

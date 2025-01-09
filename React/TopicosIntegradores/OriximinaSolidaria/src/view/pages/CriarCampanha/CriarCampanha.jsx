import React, { useState } from 'react';
import './CriarCampanha.css';
import api from '../../../services/api';
import { useNavigate } from 'react-router-dom';

const CriarCampanha = () => {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [data, setData] = useState('');
  const [meta, setMeta] = useState('');
  const [descricao, setDescricao] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (!titulo || !data || !meta || !descricao) {
      alert("Preencha todos os campos!");
      return;
    }

    const campanha = { titulo, data, meta, descricao };

    try {
      const response = await api.post('/campanhas', campanha);

      console.log('Resposta do backend:', response.data);

      const campanhaId = response.data.id;

      if (campanhaId) {
        alert("Campanha criada com sucesso!");
        navigate(`/detalhes/${campanhaId}`); 
      } else {
        alert("Erro: ID da campanha não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao criar campanha:", error);
      alert("Erro ao criar campanha.");
    }
  }

  return (
    <div className="criar-campanha-container">
      <h1>Criar Campanha</h1>
      <div className="camp">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          /><br />
          <input
            type="date"
            placeholder="Data"
            value={data}
            onChange={(e) => setData(e.target.value)}
          /><br />
          <input
            type="number"
            placeholder="Meta (em reais)"
            value={meta}
            onChange={(e) => setMeta(e.target.value)}
          /><br />
          <textarea
            placeholder="Descreva sua campanha"
            rows={7}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea><br />
          <button type="submit">Criar</button><br />
          <button type="button" onClick={() => navigate('/')}>Sair</button>
        </form>
      </div>
    </div>
  );
};

export default CriarCampanha;

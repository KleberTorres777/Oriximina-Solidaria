import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import solidarizze from '../../../img/solidarizze.png';
import { campanhasFicticias } from '../../../services/ApiFicticia';

const Home = () => {
  const navigate = useNavigate();
  const [campanhas, setCampanhas] = useState([]);

  const handleCriarConta = () => {
    navigate('/cadastro');
  };

  const handleDoar = (id) => {
    navigate(`/detalhesFake/${id}`);
  };


  useEffect(() => {
    setCampanhas(campanhasFicticias);
  }, []);

  return (
    <div>
      <section className="container">
        <div className="banner">
          <img src={solidarizze} alt="Solidarizze" className="solidarizze" />
          <p className="descricao">Incentivando Caridade Através da Tecnologia</p>
          <button onClick={handleCriarConta}>Criar campanha</button>
        </div>
      </section>

      <section className="introducao">
        <h1 className="boas-vindas">Bem-vindo</h1>
        <p className="descrition">
          A solidariedade é essencial para um futuro melhor, e a tecnologia pode amplificar nossas ações.
          Com ela, podemos criar campanhas de arrecadação e unir pessoas para fazer a diferença na vida de quem precisa.
          Junte-se a nós para transformar vidas e construir um mundo mais justo.
        </p>
      </section>

      <section className="campanhas">
        <h1 className='titulo-campanhas'>Campanhas que comovem</h1>
        
        <div className="campanhas-lista">
          {campanhas.map((campanha) => (
            <div key={campanha.id} className="campanha">
              <h2>{campanha.titulo}</h2>
              <img src={campanha.imagem} alt={campanha.titulo} className="campanha-imagem" />
              <p><strong>Meta:</strong> {campanha.meta}</p>
              <p><strong>Arrecadado:</strong> {campanha.arrecadado}</p>
              <button onClick={() => handleDoar(campanha.id)} className='botao-doar'>Doar</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

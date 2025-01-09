import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { campanhasFicticias } from '../../../services/ApiFicticia';
import './detalhes.css'

const Detalhes = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [campanha, setCampanha] = useState(null);
    
const handleDoacao = () => {
    navigate(`/doacao/${id}`)
}

    useEffect(() => {
        const campanhaSelecionada = campanhasFicticias.find(campanha => campanha.id === parseInt(id));
        setCampanha(campanhaSelecionada);
    }, [id]);
    
    if (!campanha) {
        return <div>Carregando...</div>;
}

return (
    <div className="detalhes-campanha">
        <h1>{campanha.titulo}</h1>
        <img src={campanha.imagem} alt={campanha.titulo} height={250} width={360} className='img'/>
        <p className='descricao-campanha'><strong></strong> {campanha.descricao}</p>
        <p className='meta'><strong>Meta:</strong> {campanha.meta}</p>
        <p className='arrecadado'><strong>Arrecadado:</strong> {campanha.arrecadado}</p>
        <button onClick={handleDoacao} className='doar'>Doar</button>
    </div>
);
};

export default Detalhes;

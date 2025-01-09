import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';

const DetalhesCampanha = () => {
    const { id } = useParams(); 
    const [campanha, setCampanha] = useState(null);

    useEffect(() => {
        const fetchCampanha = async () => {
            try {
                const response = await api.get(`/campanhas/${id}`);
                console.log('Dados da campanha:', response.data); 
                setCampanha(response.data);
            } catch (error) {
                console.error("Erro ao carregar os detalhes da campanha:", error); 
                alert("Erro ao carregar os detalhes da campanha.");
            }
        };

        if (id) {  
            fetchCampanha();
        } else {
            console.error("ID da campanha não encontrado.");
        }
    }, [id]); 
    
    if (!campanha) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1 className="titulo-campanha">{campanha.titulo}</h1>
            <div className="imagem-campanha">
                <img
                    src={campanha.imagem_url || "URL_DA_IMAGEM"}
                    alt="Imagem da Campanha"
                />
                <div className="overlay-titulo">{campanha.titulo}</div>
            </div>

            <div>
                <h2>Campanha Concluída!</h2>
                <p>
                    R$ {campanha.arrecadado || 0} <span>Arrecadados</span>
                </p>
                <p>
                    Meta de <span>R$ {campanha.meta || 0}</span>
                </p>
                <p>{campanha.apoiadores || 0} Apoiadores</p>
                <div>
                    <div>
                        <span>{campanha.organizador || 'Organizador não informado'}</span>
                    </div>
                    <span>Organizador</span>
                </div>
            </div>

            <div>
                <button>Sobre</button>
                <button>Apoiadores</button>
            </div>

            <div>
                <p>{campanha.descricao}</p>
            </div>
        </div>
    );
};

export default DetalhesCampanha;

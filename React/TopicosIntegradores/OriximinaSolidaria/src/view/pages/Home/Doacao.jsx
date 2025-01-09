import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './doacao.css'

const Doacao = () => {
    const { id } = useParams(); 
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [valor, setValor] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [carregando, setCarregando] = useState(false); 

    const handleDoacao = async (e) => {
        e.preventDefault();

        if (!nome || !email || !valor) {
            setMensagem('Por favor, preencha todos os campos.');
            return;
        }

        setCarregando(true);
        setMensagem('');

        const doacao = {
            nome,
            email,
            valor,
            id_campanha: id,
        };

        try {
            const response = await fetch('http://localhost:3000/doacoes', {  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(doacao),
            });

            if (response.ok) {
                setMensagem(`Obrigado, ${nome}! Sua doação de R$${valor} para a campanha ${id} foi registrada.`);
                setNome('');
                setEmail('');
                setValor('');
            } else {
                setMensagem('Erro ao registrar a doação. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao registrar doação:', error);
            setMensagem('Erro ao registrar a doação. Tente novamente.');
        }

        setCarregando(false);
    };

    return (
        <div className="doacao">
            <h1>Fazer Doação</h1>
            <form onSubmit={handleDoacao}>
                <div className="form-group">
                    <label>Nome:</label><br />
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Seu nome"
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label><br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Seu email"
                    />
                </div>
                <div className="form-group">
                    <label>Valor:</label><br />
                    <input
                        type="number"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        placeholder="Valor da doação"
                    />
                </div>
                <button type="submit" disabled={carregando} className='botaoDoar'>
                    {carregando ? 'Registrando...' : 'Concluir Doação'}
                </button>
            </form>
            {mensagem && <p className="mensagem">{mensagem}</p>}
        </div>
    );
};

export default Doacao;

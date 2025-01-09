import { useState } from 'react';
import './Cadastro.css';
import api from '../../../services/api';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        if (!nome || !cpf || !email || !senha) {
            alert("Preencha todos os campos!");
            return;
        }

        const user = { nome, cpf, email, senha };

        try {
            await api.post('/usuarios', user);
            alert("Usuário criado com sucesso!");
            navigate('/campanha');
        } catch (error) {
            alert("Erro ao criar usuário.");
        }
    }

    return (
        <div className='cadastro-container'>
            <h1>Cadastro de usuário</h1>
            <form onSubmit={handleSubmit} className='form'>
                <input type="text" 
                    placeholder="Nome" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                /><br />
                <input 
                    type="text" 
                    placeholder="CPF" 
                    value={cpf} 
                    onChange={(e) => setCpf(e.target.value)} 
                /><br />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                /><br />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                /><br />
                <button type="submit">Criar conta</button>
            </form>
        </div>
    );
}

export default Cadastro;

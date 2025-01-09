import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../view/pages/Home/Home';
import Cadastro from '../view/pages/Cadastro/Cadastro';
import CriarCampanha from '../view/pages/CriarCampanha/CriarCampanha';
import DetalhesCampanha from '../view/pages/DetalhesCampanha/DetalhesCampanha';
import Detalhes from '../view/pages/Home/Detalhes';
import Navbar from '../view/layout/Navbar';
import Footer from '../view/layout/Footer';
import Doacao from '../view/pages/Home/Doacao'

const Rotas = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/campanha" element={<CriarCampanha />} />
                <Route path="/detalhes/:id" element={<DetalhesCampanha />} />
                <Route path="/detalhesFake/:id" element={<Detalhes />} />
                <Route path="/doacao/:id" element={<Doacao />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default Rotas;

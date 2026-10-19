import { Link, useNavigate } from 'react-router-dom';
import { useTema } from '../context/ThemeContext';
import Button from '../atoms/Button';
import './Header.css';

const Header = () => {
  const { tema, alternarTema } = useTema();
  const navigate = useNavigate();

  const sair = () => {
    localStorage.removeItem('token');
    navigate('/Login');
  };

  return (
    <header className="header">
      <Link to="/" className="logo">Projeto Step</Link>

      <nav className="header-menu">
        <Link to="/">Produtos</Link>
        <Link to="/CriarProduto">Cadastrar Produto</Link>
      </nav>

      <div className="header-acoes">
        <Button onClick={alternarTema}>{tema === 'claro' ? 'Tema Escuro' : 'Tema Claro'}</Button>
        <Button variante="perigo" onClick={sair}>Sair</Button>
      </div>
    </header>
  );
};

export default Header;

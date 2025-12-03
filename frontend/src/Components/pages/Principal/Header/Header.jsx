import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../autenticacao/auth.jsx';
import './header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { usuarioLogado, tipoUsuario } = useContext(AuthContext);

  const estaNaHome = location.pathname === '/';
  const estaNoCadastro = location.pathname === '/cadastroCliente';
  const estaNoSobreNos = location.pathname === '/sobreNos';

  const [selected, setSelected] = useState(0);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);

  const fecharPopups = () => {
    setMostrarCadastro(false);
    setMostrarLogin(false);
    setSelected(null);
  };

  const irParaHome = () => {
    if (!estaNaHome) {
      setSelected(0);
      fecharPopups();
      navigate('/');
    }
  };

  return (
    <div className="header-container">
      <h1>T-Chef</h1>
      <div className="botoes">
        {(!usuarioLogado || tipoUsuario === "cliente") && (
          <button
            className={`btn-nav ${estaNaHome ? 'ativo' : 'inativo'}`}
            onClick={irParaHome}
          >
            Página Principal
          </button>
        )}

        {!usuarioLogado && (
          <div className="botao-com-popup">
            <button
              className={`btn-nav ${estaNoCadastro || selected === 1 ? 'ativo' : 'inativo'}`}
              onClick={() => { setSelected(1); setMostrarCadastro(!mostrarCadastro); setMostrarLogin(false); }}
            >
              Cadastro
            </button>
            {mostrarCadastro && (
              <div className="caixa-modal">
                <h2>Cadastro</h2>
                <ul>
                  <li><button onClick={() => { fecharPopups(); navigate('/cadastroFuncionarios'); }}>Funcionário</button></li>
                  <li><button onClick={() => { fecharPopups(); navigate('/cadastroCliente'); }}>Cliente</button></li>
                  <li><button onClick={() => { fecharPopups(); navigate('/cadastroChef'); }}>Chef</button></li>
                </ul>
                <button className="botao-fechar" onClick={fecharPopups}>Fechar</button>
              </div>
            )}
          </div>
        )}

        {!usuarioLogado && (
          <div className="botao-com-popup">
            <button
              className={`btn-nav ${selected === 2 ? 'ativo' : 'inativo'}`}
              onClick={() => { setSelected(2); setMostrarLogin(!mostrarLogin); setMostrarCadastro(false); }}
            >
              Login
            </button>
            {mostrarLogin && (
              <div className="caixa-modal">
                <h2>Login</h2>
                <ul>
                  <li><button onClick={() => { fecharPopups(); navigate('/loginCliente'); }}>Entrar como Cliente</button></li>
                  <li><button onClick={() => { fecharPopups(); navigate('/loginFuncionario'); }}>Entrar como Funcionário</button></li>
                  <li><button onClick={() => { fecharPopups(); navigate('/loginChef'); }}>Entrar como Chef</button></li>
                </ul>
                <button className="botao-fechar" onClick={fecharPopups}>Fechar</button>
              </div>
            )}
          </div>
        )}

        {usuarioLogado && tipoUsuario === 'cliente' && (
          <button
            className={`btn-nav ${location.pathname === '/clientePerfil' ? 'ativo' : 'inativo'}`}
            onClick={() => { fecharPopups(); navigate('/clientePerfil'); }}
          >
            Perfil
          </button>
        )}

        {usuarioLogado && (tipoUsuario === 'chef' || tipoUsuario === 'funcionario') && (
          <>
            <button
              className={`btn-nav ${location.pathname === '/truck' ? 'ativo' : 'inativo'}`}
              onClick={() => navigate('/truck')}
            >
              Meu Truck
            </button>
            <button
              className={`btn-nav ${location.pathname === '/administracao' ? 'ativo' : 'inativo'}`}
              onClick={() => navigate('/administracao')}
            >
              Administração
            </button>
            <button
              className={`btn-nav ${location.pathname === '/funcionarios' ? 'ativo' : 'inativo'}`}
              onClick={() => navigate('/funcionarios')}
            >
              Funcionários
            </button>
          </>
        )}

        <button
          className={`btn-nav ${estaNoSobreNos || selected === 3 ? 'ativo' : 'inativo'}`}
          onClick={() => { fecharPopups(); navigate('/sobreNos'); }}
        >
          Sobre Nós
        </button>
      </div>
    </div>
  );
};

export default Header;
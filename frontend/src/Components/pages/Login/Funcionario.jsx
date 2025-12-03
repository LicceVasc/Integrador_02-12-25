import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../autenticacao/auth.jsx';

const LoginFuncionario = () => {
  const [email, setEmail] = useState('');
  const [nomeTruckTrabalho, setNomeTruckTrabalho] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [mostrarErro, setMostrarErro] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    if (!email || !senha || !nomeTruckTrabalho) {
      setMensagemErro('Preencha todos os campos!');
      setMostrarErro(true);
      return;
    }

    try {
      const response = await fetch('http://localhost:3333/api/funcionarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha, nome_truck_trabalho: nomeTruckTrabalho })
      });

      const data = await response.json();

      if (response.ok && data.funcionario) {
        login("funcionario");
        alert(data.mensagem || 'Login realizado com sucesso!');
        navigate('/funcionarios');
      } else {
        setMensagemErro(data.mensagem || 'Erro ao fazer login.');
        setMostrarErro(true);
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
      setMensagemErro('Erro ao conectar com o servidor.');
      setMostrarErro(true);
    }
  };

  return (
    <div className="containerCa">
      <nav>
        <h1 className="logoCa">T-Chef</h1>
        <h1 className="tituloCa">Login Funcionário</h1>
        <a href="/cadastroFuncionario">Ainda não tenho uma conta!</a>
      </nav>
      <div className="corpo">
        <p>Estamos muito felizes em ter você conosco!</p>
        <div className="inputs">
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Nome do Food Truck de Trabalho"
            value={nomeTruckTrabalho}
            onChange={(e) => setNomeTruckTrabalho(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button className="btn-cadastrar" onClick={handleLogin}>
          Concluir Login
        </button>
      </div>

      {mostrarErro && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Erro no Login</h3>
            <p>{mensagemErro}</p>
            <div className="popup-botoes">
              <button className="btn-ok" onClick={() => setMostrarErro(false)}>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginFuncionario;
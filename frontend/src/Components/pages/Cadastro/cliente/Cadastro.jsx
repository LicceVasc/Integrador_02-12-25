import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cadastro.css";

const CadastroCliente = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const navigate = useNavigate();

  const handleCadastro = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3333/api/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await response.json();

      if (response.status === 201 || response.status === 200) {
        localStorage.setItem("usuarioAutenticado", "true");
        navigate("/clientePerfil");
      } else {
        alert(data.mensagem || "Erro ao cadastrar.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="containerCa">
      <nav>
        <h1 className="logoCa">T-Chef</h1>
        <h1 className="tituloCa">Cadastro</h1>
        <a href="/loginCliente">Já tenho uma conta!</a>
      </nav>
      <div className="corpo">
        <p>Sua experiência começa aqui! Faça seu Cadastro</p>

        <div className="inputs">
          <input
            className="input"
            type="text"
            placeholder="Nome de Usuário"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
        </div>
        <button className="btn-cadastrar" onClick={handleCadastro}>
          Concluir Cadastro
        </button>
      </div>
    </div>
  );
};

export default CadastroCliente;
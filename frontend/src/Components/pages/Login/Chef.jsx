import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../autenticacao/auth.jsx";

const LoginChef = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3333/api/chefs/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();

      if (res.ok) {
        login("chef");
        alert(data.mensagem || "Login realizado com sucesso!");
        navigate("/chef");
      } else {
        alert(data.mensagem || "Erro ao logar.");
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
        <h1 className="tituloCa">Login Chef</h1>
        <a href="/cadastroChef">Ainda não tenho uma conta!</a>
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
    </div>
  );
};

export default LoginChef;
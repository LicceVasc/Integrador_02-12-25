import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Funcionario from "../../redirecionar/funcionario";

const CadastroFuncionarios = () => {
  const [nome, setNome] = useState("");
  const [nomeTruckTrabalho, setNomeTruckTrabalho] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [chefId, setChefId] = useState("");

  const navigate = useNavigate();

  const handleCadastro = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    if (!chefId) {
      alert("Por favor, informe o ID do chef responsável.");
      return;
    }

    if (!chefId || isNaN(parseInt(chefId))) {
  alert("Por favor, informe um ID de chef válido.");
  return;
}

    try {
      const res = await fetch("http://localhost:3333/api/funcionarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        nome,
        nome_truck_trabalho: nomeTruckTrabalho,
        email,
        senha,
        chef_id: parseInt(chefId),
      }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.mensagem);
        navigate("/Funcionario");
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
        <a href="/loginFuncionario">Já tenho uma conta!</a>
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
            type="text"
            placeholder="Nome do Food Truck de Trabalho"
            value={nomeTruckTrabalho}
            onChange={(e) => setNomeTruckTrabalho(e.target.value)}
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
          <input
            className="input"
            type="number"
            placeholder="ID do Chef"
            value={chefId}
            onChange={(e) => setChefId(e.target.value)}
          />
        </div>
        <button className="btn-cadastrar" onClick={handleCadastro}>
          Concluir Cadastro
        </button>
      </div>
    </div>
  );
};

export default CadastroFuncionarios;
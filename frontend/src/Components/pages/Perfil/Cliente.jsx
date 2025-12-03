import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css";
import perfil from "../../../../public/PersonCircle.png";

const ClientePerfil = () => {
  const navigate = useNavigate();
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  const desconectar = () => {
    localStorage.removeItem("usuarioAutenticado");
    navigate('/');
  };

  const abrirPopup = () => setMostrarConfirmacao(true);
  const fecharPopup = () => setMostrarConfirmacao(false);

  return (
    <div className="page-wrapper">
      <div className="container-Perfil">
        <div className="container-header">
          <h2 className="tituloCa">Usuário</h2>
        </div>

        <div className="barra-usuario">
          <img className="perfil" src={perfil} alt="Foto de perfil" />
          <div className="informacoes">
            <h3>Alana Medeiros</h3>
            <h5>@lana.m</h5>
            <button className="btn-pessoais">Informações Pessoais</button>
          </div>

          <div className="btn-funcionalidades">
            <button>Histórico de Pagamento</button>
            <button>Pedidos em Andamento</button>
            <button>Cupons</button>
            <button>Cartões</button>
            <button>Endereços</button>
          </div>
        </div>

        <div className="barra-func">
          <div className="btn-redondos">
            <button className="btn-icon">🛒</button>
            <button className="btn-icon">❤️</button>
            <button className="btn-icon">🎧</button>
            <button className="btn-icon">ℹ️</button>
          </div>
          <button className='btn-desconectar' onClick={abrirPopup}>Desconectar</button>
        </div>
      </div>

      {mostrarConfirmacao && (
        <div className="popup-confirmacao">
          <div className="popup-conteudo">
            <p>Deseja Desconectar a Conta?</p>
            <div className="popup-botoes">
              <button className="btn-sim" onClick={desconectar}>Sim</button>
              <button className="btn-nao" onClick={fecharPopup}>Não</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientePerfil;
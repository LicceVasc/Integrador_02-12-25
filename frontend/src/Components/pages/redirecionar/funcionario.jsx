
import perfil from "../../../../public//usuario.png";
import notificacoes from "../../../../public/BellFill.png";

import { useNavigate } from "react-router-dom";

import "./index.css" 

const Funcionario = () => {

    const navigate = useNavigate();

    const handleClick = () => {
  navigate("/truck");
};


    return(
        <>
        <div className="redirec"></div>
        <div className="redirecionamento-div">
            <div className="icons">
                <img className="icon-n" src={notificacoes} alt="" />
                <img className="icon-p" src={perfil} alt="" />
            </div>
        <h1 className="boasVindas">Olá, Anna!</h1>
        <h2 className="texto">Bem vinda a área de funcionários!</h2>
        <div className="buttons">
        <button className="btnInicio" onClick={handleClick}>Início</button>
        <button className="btnDesconectar">Desconectar</button>
        </div>
        
        </div>
        </>
    )
}

export default Funcionario;
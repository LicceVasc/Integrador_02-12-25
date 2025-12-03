 
 import pessoa from "../../../../public/personCircle.png"

 const AdmFuncionario = () => {
    return(
        <>
        <div className="cont">
            <h2 className="geren">Gerenciar Funcionários</h2>

            <div className="containerCa">
            <div className="funcionario">
            <h3>Balconista: Stephane Silva</h3>
            <div className="info">
                <img src={pessoa} alt="" />
                <h4>Status: Ativo</h4>
            </div>
            <p>Horário de trabalho</p>
            <p>18:00 - 02:00</p>
            <div className="info-btn">
                <button>Ver Detalhes</button>
                <button>Excluir</button>
            </div>
            </div>

            <div className="funcionario">
            <h3>Gerente: Maria do Carmo</h3>
            <div className="info">
                <img src={pessoa} alt="" />
                <h4>Status: Ativo</h4>
            </div>
            <p>Horário de trabalho</p>
            <p>18:00 - 02:00</p>
            <div className="info-btn">
                <button>Ver Detalhes</button>
                <button>Excluir</button>
            </div>
            </div>

            <div className="funcionario">
            <h3>Atendente: Laura Mendes</h3>
            <div className="info">
                <img src={pessoa} alt="" />
                <h4>Status: Ativo</h4>
            </div>
            <p>Horário de trabalho</p>
            <p>18:00 - 02:00</p>
            <div className="info-btn">
                <button>Ver Detalhes</button>
                <button>Excluir</button>
            </div>
            </div>

            <div className="funcionario">
            <h3>Caixa: Daniela Figueiredo</h3>
            <div className="info">
                <img src={pessoa} alt="" />
                <h4>Status: Ativo</h4>
            </div>
            <p>Horário de trabalho</p>
            <p>18:00 - 02:00</p>
            <div className="info-btn">
                <button>Ver Detalhes</button>
                <button>Excluir</button>
            </div>
            </div>

            <div className="funcionario">
            <h3>Confeiteira: Jacyra Correia</h3>
            <div className="info">
                <img src={pessoa} alt="" />
                <h4>Status: Ativo</h4>
            </div>
            <p>Horário de trabalho</p>
            <p>18:00 - 02:00</p>
            <div className="info-btn">
                <button>Ver Detalhes</button>
                <button>Excluir</button>
            </div>
            </div>


        </div>
            </div>

        </>
    )
 }

 export default AdmFuncionario;
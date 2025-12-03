import { useNavigate } from "react-router-dom";
import truck from "../../../../public/truck88.png";
import pessoa from "../../../../public/personCircle.png";
import iconTruck from "../../../../public/Truck.png";
import box from "../../../../public/BoxSeam.png";

const Truck = () => {
  const navigate = useNavigate();

  const irParaCardapio = () => {
    navigate("/admCardapio");
  };

  return (
    <>
      <div className="meuTruck">
        <div className="infTruck">
          <h1>Doce Mania</h1>
          <button onClick={irParaCardapio}>Cardápio</button>
        </div>
        <div className="truckImage">
          <img src={truck} alt="" />
        </div>
      </div>

      <div className="sla">
        <div className="btn-caixas">
          <h4>Funcionários</h4>
          <div className="btn-caixa">
            <div>
              <img src={pessoa} alt="" />
              <div className="btn-p">
                <p>Online: 3</p>
                <p>Contratados: 5</p>
              </div>
              <div>
                <button>Vizualizar Funcionários Onlines</button>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-caixas">
          <h4>Entregas</h4>
          <div className="btn-caixa">
            <div>
              <img className="iconTruck" src={iconTruck} alt="" />
              <div className="btn-p">
                <p>Em Andamento: 4</p>
                <p>Finalizadas: 8</p>
              </div>
              <div>
                <button className="sla-btn">Vizualizar Entregas</button>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-caixas">
          <h4>Estoque</h4>
          <div className="btn-caixa">
            <div>
              <img className="iconTruck" src={box} alt="" />
              <div className="btn-p">
                <p>Suficiente: 47</p>
                <p>Reposição: 3</p>
              </div>
              <div>
                <button className="sla-btn">Vizualizar Estoque</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Truck;
import "./index.css"
import venda from "../../../../public/CurrencyDollar.png"
import ticket from '../../../../public/CashStack.png'
import receita from '../../../../public/Safe2.png'
import pessoa from '../../../../public/personCircle.png'
import { useNavigate } from "react-router-dom"

const AdmChef = () => {
  const navigate = useNavigate()

  const irParaPerfilChef = () => {
    navigate("/perfilChef")   
  }

  return (
    <>
      <div className="perfil">
        <div className="foto">
          <img src={pessoa} alt="" />
        </div>

        <div className="inf">
          <h3>Alana Medeiros</h3>
          <p>@Lana.M</p>
          <button onClick={irParaPerfilChef}>Informações Pessoais</button>
        </div>
      </div>

      <div className="caixas">
        <div className="caixa">
          <img src={venda} alt="" />
          <p>Vendas No Mês</p>
          <h3>428</h3>
        </div>

        <div className="caixa">
          <img src={ticket} alt="" />
          <p>Ticket Médio</p>
          <h3>R$ 38,00</h3>
        </div>

        <div className="caixa">
          <img src={receita} alt="" />
          <p>Receita Bruta</p>
          <h3>R$ 24.700</h3>
        </div>
      </div>

      <div className="grafico">
        <div className="pedidos">
          <div className="d1">
            <p className="num">29</p>
            <div className="dia"></div>
            <p className="data">23 out</p>
          </div>

          <div className="d2">
            <p className="num">31</p>
            <div className="dia"></div>
            <p className="data">24 out</p>
          </div>

          <div className="d3">
            <p className="num">22</p>
            <div className="dia"></div>
            <p className="data">25 out</p>
          </div>

          <div className="d4">
            <p className="num">27</p>
            <div className="dia"></div>
            <p className="data">26 out</p>
          </div>

          <div className="d5">
            <p className="num">25</p>
            <div className="dia"></div>
            <p className="data">27 out</p>
          </div>

          <div className="d6">
            <p className="num">29</p>
            <div className="dia"></div>
            <p className="data">28 out</p>
          </div>

          <div className="d7">
            <p className="num">29</p>
            <div className="dia"></div>
            <p className="data">29 out</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdmChef
import delirio from "../../../../public/delirio.png"
import explosivo from "../../../../public/explosivo.png"
import cupcake from '../../../../public/doces.png'
import mania from '../../../../public/Waffles .png'
import limao from '../../../../public/Sobremesa .png'

const AdmCardapio = () => {
  const handleAdd = (item) => {
    console.log("Adicionado ao carrinho:", item)
    alert(`Adicionado: ${item.nome} — R$ ${item.preco.toFixed(2)}`)
  }

  return (
    <>
      <div className="cont">
        <h2 className="geren">Cardápio</h2>

        <div className="containerCa">
          <div className="vitrine">
            <img src={delirio} alt="Banner Delírio" />
          </div>
        </div>

        <div className="rec">
          <h3>Recomendações Da Casa</h3>

          <div className="boxs">
            <div className="box-rec">
              <img src={explosivo} alt="Explosivo" />
              <div className="rec-inf">
                <h3>Explosivo | R$10,00</h3>
                <button
                  className="btn-add"
                  onClick={() =>
                    handleAdd({ nome: "Explosivo", preco: 10.0 })
                  }
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>

            <div className="box-rec">
              <img src={cupcake} alt="Fluffy" />
              <div className="rec-inf">
                <h3>Fluffy | R$6,00</h3>
                <button
                  className="btn-add"
                  onClick={() =>
                    handleAdd({ nome: "Fluffy", preco: 6.0 })
                  }
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>

            <div className="box-rec">
              <img src={mania} alt="Trio Mania" />
              <div className="rec-inf">
                <h3>Trio Mania | R$14,00</h3>
                <button
                  className="btn-add"
                  onClick={() =>
                    handleAdd({ nome: "Trio Mania", preco: 14.0 })
                  }
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>

            <div className="box-rec">
              <img src={limao} alt="Dueto de Limão" />
              <div className="rec-inf">
                <h3>Dueto de Limão | R$12,00</h3>
                <button
                  className="btn-add"
                  onClick={() =>
                    handleAdd({ nome: "Dueto de Limão", preco: 12.0 })
                  }
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdmCardapio;
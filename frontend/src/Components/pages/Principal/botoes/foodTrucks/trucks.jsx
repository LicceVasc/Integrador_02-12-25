import { useState } from 'react'
import './trucks.css'
import truckImage from '../../../../../../public/truck01.jpg'
import truckImage2 from "../../../../../../public/truck02.jpg"
import truckImage3 from '../../../../../../public/truck03.jpg'
import truckImage4 from '../../../../../../public/truck04.jpg'
import truckImage5 from '../../../../../../public/truck05.jpg'
import truckImage6 from '../../../../../../public/truck06.jpg'
import truckImage7 from '../../../../../../public/truckImage7.jpg'
import truckImage8 from '../../../../../../public/truck08.jpg'

const listaTrucks = [
  "Happy Beginning",
  "Cream Truck",
  "Grellha's",
  "Tchopetyam",
  "The Dinner",
  "Beltane & Pop",
  "Truck Queen",
  "Chinelos Birria"
]

const Trucks = () => {
  const [pesquisa, setPesquisa] = useState("")
  const [sugestoes, setSugestoes] = useState([])

  const aoDigitar = (e) => {
    const valor = e.target.value
    setPesquisa(valor)
    if (valor.length > 0) {
      const filtrados = listaTrucks.filter(truck =>
        truck.toLowerCase().includes(valor.toLowerCase())
      )
      setSugestoes(filtrados)
    } else {
      setSugestoes([])
    }
  }

  const aoClicarSugestao = (sugestao) => {
    setPesquisa(sugestao)
    setSugestoes([])
  }

     return (
    <>
      <div className='container'>
        <button className='btn-trucks'>Truck's</button>
        <div className='barra-pesquisa'>
          <input
            type="text"
            placeholder='Pesquisar'
            className='campo-pesquisa'
            value={pesquisa}
            onChange={aoDigitar}
          />
          <button className='btn-pesquisa'>Buscar</button>
          {sugestoes.length > 0 && (
            <ul className='lista-sugestoes'>
              {sugestoes.map((item, index) => (
                <li key={index} onClick={() => aoClicarSugestao(item)}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

        <div className='trucks'>
            <div className='card-truck'>
            <img src={truckImage} alt="" />
            <h1>Happy Beginning</h1>
            <p>Sobremesas</p>
            <p>Macéio - Al</p>
            <p className='avaliacao'>⭐️⭐️⭐️</p>
        </div>

        <div className='card-truck'>
            <img src={truckImage2} alt="" />
            <h1>Cream Truck</h1>
            <p>Sorvetes</p>
            <p>Macéio - Al</p>
            <p className='avaliacao'>⭐️⭐️⭐️</p>
        </div>

        <div className='card-truck'>
            <img src={truckImage3} alt="" />
            <h1>Grellha's</h1>
            <p>Sanduíches Grelhados</p>
            <p>Macéio - Al</p>
            <p className='avaliacao'>⭐️⭐️⭐️</p>
        </div>

        <div className='card-truck'>
            <img src={truckImage7} alt="" />
            <h1>Chinelos Birria</h1>
            <p>Tacos</p>
            <p>Macéio - Al</p>
            <p className='avaliacao'>⭐️⭐️⭐️</p>
        </div> 

        </div>

        <div className='trucks'>
            <div className='card-truck'>
            <img src={truckImage4} alt="" />
            <h1>Tchopetyam</h1>
            <p>Sanduíches Naturais</p>
            <p>Macéio - Al</p>
            <p className='avaliacao'>⭐️⭐️⭐️</p>
        </div>

        <div className='card-truck'>
            <img src={truckImage5} alt="" />
            <h1>The Dinner</h1>
            <p>Cachorro Quente</p>
            <p>Macéio - Al</p>
            <p className='avaliacao'>⭐️⭐️⭐️</p>
        </div>

        <div className='card-truck'>
            <img src={truckImage6} alt="" />
            <h1>Beltane & Pop</h1>
            <p>Drinks e Bebidas</p>
            <p>Macéio - Al</p>
            <p className='avaliacao'>⭐️⭐️⭐️</p>
        </div>

        <div className='card-truck'>
            <img src={truckImage8} alt="" />
            <h1>Truck Queen</h1>
            <p>Doces, Waffles e sorvetes</p>
            <p>Macéio - Al</p>
            <p className='avaliacao'>⭐️⭐️⭐️</p>
        </div>
        </div>
        </>
    )
}
export default Trucks;
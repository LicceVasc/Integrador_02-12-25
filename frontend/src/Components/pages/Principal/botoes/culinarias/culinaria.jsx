import { useState } from 'react';
import './culinaria.css';
import doce from '../../../../../../public/doce.jpg'
import torta from '../../../../../../public/torta.jpg'
import macarrons from '../../../../../../public/macarrons.jpg'
import hamburguer1 from '../../../../../../public/hamburguer1.jpg'
import hamburguer2 from '../../../../../../public/hamburguer2.jpg'
import hamburguer3 from '../../../../../../public/hamburguer3.jpg'
import taco1 from '../../../../../../public/taco1.jpg'
import taco2 from '../../../../../../public/taco2.jpg'
import taco3 from '../../../../../..//public/taco3.jpg'
import pizza1 from '../../../../../../public/pizza1.jpg'
import pizza2 from '../../../../../../public/pizza2.jpg'
import pizza3 from '../../../../../../public/pizza3.jpg'
import salada1 from '../../../../../../public/salada1.jpg'
import salada2 from '../../../../../../public/salada2.jpg'
import salada3 from '../../../../../../public/salada3.jpg'



const listaCulinarias = [
  "Comida Brasileira",
  "Comida Mexicana",
  "Comida Italiana",
  "Comida Japonesa",
  "Comida Árabe",
  "Comida Chinesa",
  "Comida Indiana",
  "Comida Francesa"
];

const Culinaria = () => {
  const [pesquisa, setPesquisa] = useState('');
  const [sugestoes, setSugestoes] = useState([]);

  const aoDigitar = (e) => {
    const valor = e.target.value;
    setPesquisa(valor);

    if (valor.trim() !== '') {
      const filtrados = listaCulinarias.filter(item =>
        item.toLowerCase().includes(valor.toLowerCase())
      );
      setSugestoes(filtrados);
    } else {
      setSugestoes([]);
    }
  };

  const aoClicarSugestao = (sugestao) => {
    setPesquisa(sugestao);
    setSugestoes([]);
  };

  return (
    <>
    <button className='btn-culinaria'>Culinária</button>
    <div className='b-pesquisa'>
  <div className='campo-container'>
    <input
      type="text"
      placeholder='Pesquisar'
      className='campo-pesquisa'
      value={pesquisa}
      onChange={aoDigitar}
    />
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
  <button className='btn-pesquisa'>Buscar</button>
    </div>

    <div className='container-comida'>
  <h3 className='comida'>Sobremesas</h3>
  <div className='linha-sobremesas'>
    <div className='card-sobremesa'>
    <img src={doce} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>Torta de Chantilly</p>
      <p>Truck Queen</p>
      <p>R$ 16,00</p>
    </div>
  </div>

  <div className='card-sobremesa'>
    <img src={torta} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>Torta de Chocolate</p>
      <p> Truck & Trufa</p>
      <p>R$ 17,00</p>
    </div>
  </div>

  <div className='card-sobremesa'>
    <img src={macarrons} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>Macarrons</p>
      <p> Rota Açucarada</p>
      <p>R$ 23,50</p>
    </div>
  </div>
  </div>
    </div>


    <div className='container-comida'>
  <h3 className='comida'>Hamburgueres</h3>
  <div className='linha-sobremesas'>
    <div className='card-sobremesa'>
    <img src={hamburguer1} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>X-salada</p>
      <p> Chapa Quente </p>
      <p>R$ 15,00</p>
    </div>
  </div>

  <div className='card-sobremesa'>
    <img src={hamburguer2} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>Especial de Queijo</p>
      <p> Rei do Pão </p>
      <p>R$ 19,00</p>
    </div>
  </div>

  <div className='card-sobremesa'>
    <img src={hamburguer3} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>Tradicional</p>
      <p> Rock & Burger</p>
      <p>R$ 25,50</p>
    </div>
  </div>
  </div>
    </div>


    <div className='container-comida'>
  <h3 className='comida'>Tacos</h3>
  <div className='linha-sobremesas'>
    <div className='card-sobremesa'>
    <img src={taco1} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>Taco de Carnitas </p>
      <p>Tacolândia</p>
      <p>R$ 14,90</p>
    </div>
  </div>

  <div className='card-sobremesa'>
    <img src={taco2} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>Frango Chipotle</p>
      <p>La Ruta Picante</p>
      <p>R$ 9,70</p>
    </div>
  </div>

  <div className='card-sobremesa'>
    <img src={taco3} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>Vegano de Feijão</p>
      <p>Taco na Mão</p>
      <p>R$ 20,50</p>
    </div>
  </div>
  </div>
    </div>


    <div className='container-comida'>
  <h3 className='comida'>Pizzas</h3>
  <div className='linha-sobremesas'>
    <div className='card-sobremesa'>
    <img src={pizza1} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>Margherita Suprema</p>
      <p>Pizza na Estrada</p>
      <p>R$ 24,90</p>
    </div>
  </div>

  <div className='card-sobremesa'>
    <img src={pizza2} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>Calabresa do Asfalto</p>
      <p>Fatias Urbanas</p>
      <p>R$ 29,70</p>
    </div>
  </div>

  <div className='card-sobremesa'>
    <img src={pizza3} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>Quatro Estações</p>
      <p>Pizzetta Truck</p>
      <p>R$ 20,50</p>
    </div>
  </div>
  </div>
    </div>


    <div className='container-comida'>
  <h3 className='comida'>Saladas</h3>
  <div className='linha-sobremesas'>
    <div className='card-sobremesa'>
    <img src={salada1} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>Caprese Tropical</p>
      <p>Folha na Rua</p>
      <p>R$ 25,90</p>
    </div>
  </div>

  <div className='card-sobremesa'>
    <img src={salada2} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>Mix da Terra Fértil</p>
      <p>Mix Vital</p>
      <p>R$ 17,70</p>
    </div>
  </div>

  <div className='card-sobremesa'>
    <img src={salada3} alt="Imagem da sobremesa" />
    <div className='info-sobremesa'>
      <p>Brisa do Mar</p>
      <p>Rota do Frescor</p>
      <p>R$ 20,50</p>
    </div>
  </div>
  </div>
    </div>
    </>
  );
};

export default Culinaria;
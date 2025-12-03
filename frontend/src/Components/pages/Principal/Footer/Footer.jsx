import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
  const [selected, setSelected] = useState(null);

  const renderConteudo = () => {
    switch (selected) {
      case 0:
        return (
          <div className="pagina">
            <div>
            <h2>Hambúrguer Clássico</h2>
            <p>Pão brioche, carne 180g grelhada, queijo cheddar, alface, tomate e maionese da casa.</p>
            <p>Preço: R$ 22,00</p>
            <p>Food Truck do Zé – Praia de Ponta Verde, Maceió</p>
            <button className="btn-mais">Ver Mais</button>
            </div>

            <div>
            <h2>Hambúrguer Picante Mexicano</h2>
            <p>Pão de milho, carne temperada com pimenta jalapeño, queijo pepper jack, guacamole e molho chipotle.</p>
            <p>Preço: R$ 26,00</p>
            <p>El Fuego Truck – Av. Pontes Amarelas</p>
            <button className="btn-mais">Ver Mais</button>
            </div>

            <div>
            <h2>Hambúrguer 4 Queijos</h2>
            <p> Pão australiano, carne suculenta, blend de cheddar, gorgonzola, muçarela e parmesão, com cebola caramelizada.</p>
            <p>Preço: R$ 28,00</p>
            <p>Cheese & Grill – Praça da Marinha Epanhola</p>
            <button className="btn-mais">Ver Mais</button>
            </div>
          </div>

        );
      case 1:
        return (
          <div className="pagina">
            <div>
            <h2>Margherita</h2>
            <p>Massa fina, molho de tomate fresco, muçarela derretida e manjericão.</p>
            <p>Preço: R$ 32,00</p>
            <p>Bella Pizza Truck – Av. Fernandes Lima</p>
            <button className="btn-mais">Ver Mais</button>
            </div>

            <div>
            <h2>4 Queijos</h2>
            <p>Bordas recheadas, cheddar, gorgonzola, muçarela e parmesão com cebola.</p>
            <p>Preço: R$ 36,00</p>
            <p>Veggie Pizza – Feirinha do Jaraguá</p>
            <button className="btn-mais">Ver Mais</button>
            </div>

            <div>
            <h2>Vegetariana</h2>
            <p>Abobrinha grelhada, pimentões coloridos, tomate seco e queijo vegano.</p>
            <p>Preço: R$ 34,00</p>
            <p>Queijo & Forno – Rua Dr.Calheiros</p>
            <button className="btn-mais">Ver Mais</button>
            </div>
            
          </div>
        );
      case 2:
        return (
          <div className="pagina">
            <div>
            <h2>Carne Picante</h2>
            <p>Tortilla crocante, carne com pimenta, cheddar, alface e sour cream.</p>
            <p>Preço: R$ 20,00</p>
            <p>El Fuego Truck – Av. Álvaro Otacílio</p>
            <button className="btn-mais">Ver Mais</button>
            </div>

            <div>
            <h2>Frango com Guacamole</h2>
            <p>Frango grelhado, guacamole, cebola roxa, coentro e molho de limão.</p>
            <p>Preço: R$ 22,00</p>
            <p>Taco Truck – Praça Centenário</p>
            <button className="btn-mais">Ver Mais</button>
            </div>

            <div>
            <h2>Vegano de Feijão</h2>
            <p>DFeijão preto, milho, pimentão, creme de tofu e molho chipotle suave.</p>
            <p>Preço: R$ 21,00</p>
            <p>Verde Vida Truck – Feirinha do Jaraguá</p>
            <button className="btn-mais">Ver Mais</button>
            </div>
            
          </div>
        );
      case 3:
        return (
          <div className="pagina">
            <div>
            <h2>Brownie com Sorvete</h2>
            <p>Brownie de chocolate com ganache e sorvete de baunilha artesanal.</p>
            <p>Preço: R$ 18,00</p>
            <p>Sweet Truck – Shopping Parque Maceió</p>
            <button className="btn-mais">Ver Mais</button>
            </div>

            <div>
            <h2>Cheesecake Frutas</h2>
            <p>Cheesecake com calda de frutas vermelhas e toque de limão siciliano.</p>
            <p>Preço: R$ 20,00</p>
            <p>Delícia Truck – Av. Rotary</p>
            <button className="btn-mais">Ver Mais</button>
            </div>

            <div>
            <h2>Mousse de Maracujá</h2>
            <p>Mousse leve com chantilly, raspas de chocolate branco e hortelã fresca.</p>
            <p>Preço: R$ 17,00</p>
            <p>Tropical Sweets – Orla de Pajuçara</p>
            <button className="btn-mais">Ver Mais</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <h1 className="sugestoes">Procurar Por</h1>
      <div className="lanches">
        <button className={selected === 0 ? 'selected' : ''} onClick={() => setSelected(0)}>Hamburger</button>
        <button className={selected === 1 ? 'selected' : ''} onClick={() => setSelected(1)}>Pizza</button>
        <button className={selected === 2 ? 'selected' : ''} onClick={() => setSelected(2)}>Tacos</button>
        <button className={selected === 3 ? 'selected' : ''} onClick={() => setSelected(3)}>Sobremesas</button>
      </div>

      
      {renderConteudo()}
    </>
  );
};

export default Footer;
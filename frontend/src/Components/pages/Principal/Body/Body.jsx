
import Footer from '../Footer/Footer.jsx'

import './body.css'

const Body = () => {
    return(
        <>
        <h1 className='sugestoes'>Food Truck's Populares</h1>

        <div className='cards'>
            <div className='card'>
        <h3>Truck do Kronos</h3>
        <p>Tudo o que seu destino te oferece de melhor</p>
        <p>Comida Nórdica</p>
        <button className='btn-card'>Ver mais</button>
        </div>

        <div className='card'>
        <h3>Bolinho da Maria</h3>
        <p>Tem de banana e de Maracujá, perfeito para aproveitar</p>
        <p>Bolos e Bolinhos</p>
        <button className='btn-card'>Ver mais</button>
        </div>

        <div className='card'>
        <h3>Açaí do Juca</h3>
        <p>Uma açaíteria Movel que te encontra em todo lugar!</p>
        <p>Açaí doce e salgado</p>
        <button className='btn-card'>Ver mais</button>
        </div>
        </div>

        <Footer/>
        
        </>
    )
}

export default Body;

import notificacoes from '../../../../public/BellFill.png'
import perfil from '../../../../public/usuario.png'


 const inicio = () => {
    return(
        <>
        <div className="container-inicio">
            <div className="painel">
                <h1>Doce Mania</h1>

                <div className="box">
                    <div className="box-btn">
                    <h3>Pedidos</h3>
                    <div className="box-itens">
                        <p>Brownie com cobertura de...</p>
                        <hr />
                        <p>Mini Donots sortidos com...</p>
                        <hr />
                        <p>Milk shake de paçoca com...</p>
                        <hr />
                    </div>
                    <button className="btn-detalhes" >Ver Detalhes</button>
                </div>

                <div className="box-btn">
                    <h3>Tarefas</h3>
                    <div className="box-itens">
                        <p>Atualizar Estoque</p>
                        <hr />
                        <p>Gerenciar Promoções</p>
                        <hr />
                    </div>
                    <button className="btn-detalhes" >Ver Detalhes</button>

                </div>

                <div className="box-btn">
                    <h3>Comentários</h3>
                    <div className="box-itens">
                        <p>@user</p>
                        <p>Adorei!!!</p>
                        <hr />
                        <p>@user</p>
                        <p>Muito bomm!</p>
                        <hr />
                    </div>
                    <button className="btn-detalhes" >Ver Detalhes</button>

                </div>
                </div>


            </div>

             <div className="barra-lateral">
                <div className='icons-2'>
                    <img className="icon-n2" src={notificacoes} alt="" />
                    <img className="icon-p2" src={perfil} alt="" />
                </div>
                


        </div>

        <div className="barra-inferior">
            <h3>Status: Movomentado</h3>

            <button className='btn-barra'>Relatório Diário</button>
        </div>



        </div>

       
        </>
    )
 };

 export default inicio;
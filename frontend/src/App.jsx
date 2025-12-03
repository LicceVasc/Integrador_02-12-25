import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../src/Components/autenticacao/auth.jsx';

import Nav from './Components/pages/Principal/Nav/Nav.jsx';
import Trucks from './Components/pages/Principal/botoes/foodTrucks/trucks.jsx';
import Culinaria from './Components/pages/Principal/botoes/culinarias/culinaria.jsx';
import { SobreNos } from './Components/pages/SobreNos/SobreNos.jsx';
import CadastroCliente from './Components/pages/Cadastro/cliente/Cadastro.jsx';
import CadastroChef from './Components/pages/Cadastro/chef/Cadastro.jsx';
import CadastroFuncionarios from './Components/pages/Cadastro/Funcionarios/cadastro.jsx';
import Funcionario from './Components/pages/redirecionar/funcionario.jsx';
import Chef from './Components/pages/redirecionar/Chef.jsx';
import Cliente from './Components/pages/redirecionar/Cliente.jsx';
import Inicio from './Components/pages/redirecionar/inicio.jsx';
import ClientePerfil from './Components/pages/Perfil/Cliente.jsx';
import PerfilChef from './Components/pages/Perfil/chef.jsx';
import LoginCliente from './Components/pages/Login/Cliente.jsx'; 
import LoginFuncionario from './Components/pages/Login/Funcionario.jsx';
import LoginChef from './Components/pages/Login/Chef.jsx';

import AdmChef from './Components/pages/adm/chef.jsx';
import Truck from './Components/pages/adm/truck.jsx';
import AdmFuncionario from './Components/pages/adm/funcionarios.jsx';
import AdmCardapio from './Components/pages/adm/cardapio.jsx';

import Header from './Components/pages/Principal/Header/Header.jsx';
import Body from './Components/pages/Principal/Body/Body.jsx';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Nav />
              <Body />
            </>
          } />
          <Route path="/trucks" element={<Trucks />} />
          <Route path="/culinaria" element={<Culinaria />} />
          <Route path="/sobreNos" element={<SobreNos />} />
          <Route path="/cadastroCliente" element={<CadastroCliente />} />
          <Route path="/cadastroChef" element={<CadastroChef />} />
          <Route path="/cadastroFuncionarios" element={<CadastroFuncionarios />} />
          <Route path="/funcionario" element={<Funcionario />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/clientePerfil" element={<ClientePerfil />} />
          <Route path="/loginCliente" element={<LoginCliente />} /> 
          <Route path="/loginFuncionario" element={<LoginFuncionario />} /> 
          <Route path="/loginChef" element={<LoginChef />} /> 
          <Route path="/administracao" element={<AdmChef />} /> 
          <Route path="/truck" element={<Truck />} /> 
          <Route path="/funcionarios" element={<AdmFuncionario />} />
          <Route path="/admCardapio" element={<AdmCardapio />} />
          <Route path="/perfilChef" element={<PerfilChef />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
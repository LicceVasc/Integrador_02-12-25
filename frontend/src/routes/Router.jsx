import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Trucks from './pages/Trucks/Trucks.jsx';
import Culinaria from '../Components/botoes/culinarias/culinaria.jsx';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="/culinaria" element={<Culinaria />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
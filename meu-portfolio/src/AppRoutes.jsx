import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} /> {/* Home será renderizado no Outlet */}
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
     
      </Route>
    </Routes>
  );
}

export default AppRoutes;

import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} /> {/* Home será renderizado no Outlet */}
     
      </Route>
    </Routes>
  );
}

export default AppRoutes;

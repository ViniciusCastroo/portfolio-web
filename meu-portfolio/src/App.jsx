import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Outlet /> {/* Renderiza o conteúdo das rotas */}
    </>
  );
}

export default App;

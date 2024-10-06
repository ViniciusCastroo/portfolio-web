import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <NavBar />
      <br></br> {/* desculpe por isso :(*/}
      <br></br>
      <br></br>
      <br></br>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
